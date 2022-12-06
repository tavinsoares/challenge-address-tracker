import _size from 'lodash/size';

const Card = ({ item, hasError }) => {
    const items = hasError ? itemError : normalizedItems(item);
    
    return (
        <div className="absolute w-full lg:top-[-60px] top-[-120px] z-[99999]">
            <ul className="lg:flex lg:items-center lg:justify-center bg-white lg:w-4/6 w-4/5 mx-auto rounded-xl pt-5 lg:pt-9 pb-3 lg:pb-7">
                {items.map((item, index) => {
                    const isLast = index === _size(items) - 1;
                    const classesDefault = 'lg:pr-4 lg:pl-4';
                    const classesBorderItem = 'lg:border-r lg:border-gray-dark'

                    const classesItem = `${classesDefault} ${isLast ? '' : classesBorderItem}`

                    return (
                        <li className={classesItem} key={index}>
                            <span className="font-bold lg:text-left text-center block m-0 p-0 text-xs text-gray-dark">{item.title}</span>
                            <span className="mt-2 mb-2 font-bold lg:text-left text-center block m-0 p-0 text-lg text-gray-very-dark">{item.content}</span>
                        </li>
                    )
                })}   
            </ul>
        </div>
    )
}

const itemError = [
    {
        title: 'Ops!',
        content: 'Houve algum problema, tente novamente mais tarde !'
    }
]

const normalizedItems = item => {
    const location = item.city ? `${item.city},${item.country} ${item.geonameId}` : 'DEFAULT'
    const timezone = item.region ? `${item.region}${item.timezone}` : 'DEFAULT'

    return [
        {
            title: 'IP ADDRESS',
            content: item.ip || 'DEFAULT'
        },
        {
            title: 'LOCATION',
            content: location
        },
        {
            title: 'TIMEZONE',
            content: timezone
        },
        {
            title: 'ISP',
            content: item.isp || 'DEFAULT'
        }
    ]
}

export default Card;