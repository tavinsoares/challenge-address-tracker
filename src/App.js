import { useState, useEffect } from 'react';
import _get from 'lodash/get';

import Layout from './components/Layout';
import Header from './components/Header';
import Input from './components/Input';
import Button from './components/Button';
import Card from './components/Card';
import Map from './components/Map';

import useData from './utils/useData';

import IpGeoLocation from './services/ipGeolocation';

const IP_LENGTH = 15

function App() {
  const [value, setValue] = useState(() => {
    const valueStorage = JSON.parse(window.localStorage.getItem('dataStorage'))

    return _get(valueStorage, 'data.ip', '');
  });
  const [{ status, data }, run] = useData({
    status: 'idle',
    data: {
      ip: '',
      isp: '',
      location: {
        lat: '',
        lng: ''
      }
    }
  }, 'dataStorage');

  useEffect(() => {
    const valueStorage = JSON.parse(window.localStorage.getItem('dataStorage'))
    if(valueStorage && valueStorage.data.ip === ''){
      const promisse = IpGeoLocation.getIpLocation();
      run(promisse);
    }
  }, [run]);

  const item = {
    ..._get(data, 'location', {}),
    ip: _get(data, 'ip', ''),
    isp: _get(data, 'isp', ''),
  }
  const position = getPosition(data)

  const onChange = (event) => {
      const value = event.target.value
      const valueWithoutDot = value.replace(/\./g, "")

      if(!Number(valueWithoutDot) && valueWithoutDot !== '') return;

      const normalizedValue = valueWithoutDot.substr(0, 12).match(/.{1,3}/g)?.join(".") || ""

      setValue(normalizedValue);
  }

  const onClick = () => {
    if(value.length < IP_LENGTH) return;
    const promisse = IpGeoLocation.getIpLocation({ ipAddress: value });
    run(promisse)
  }

  return (
    <Layout>
      <Header>
        <div className="lg:w-2/5 flex items-center mt-6">
          <Input name="ip-search" placeholder="Search for any IP address or domain" value={value} onChange={onChange} />
          <Button type="button" onClick={onClick} />
        </div>
      </Header>
      <div className="relative">
        {status === 'pending' && <p>loading...</p>}
        {status === 'finish' && <Card item={{...item}} />} 
        <Map position={position}/>
      </div>
    </Layout>
  );
}

const getPosition = (data) => {
  if(!_get(data, 'location', null)) return; 
  
  let lat = _get(data, 'location.lat', '');
  let lng = _get(data, 'location.lng', '');

  return [lat, lng]
}


export default App;
