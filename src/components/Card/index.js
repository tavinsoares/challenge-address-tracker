const Card = ({ item }) => {
    const items = normalizedItems(item);
    
    return (
        <div className="absolute w-full top-[-120px] z-[99999]">
            <ul className=" bg-white w-4/5 mx-auto rounded-xl pt-5 pb-3">
                {items.map((item, index) => {
                    return (
                        <li key={index}>
                            <span className="font-bold text-center block m-0 p-0 text-xs text-gray-dark">{item.title}</span>
                            <span className="mt-2 mb-2 font-bold text-center block m-0 p-0 text-lg text-gray-very-dark">{item.content}</span>
                        </li>
                    )
                })}   
            </ul>
        </div>
    )
}

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