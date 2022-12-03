import { icons } from './component';

const Icon = ({ name, ...props }) => {

    const Component =  icons[name] || null

    return (
        <Component {...props} />
    )
}

export default Icon;