
const Input = ({ value, onChange,placeholder }) => {

    return <input 
    placeholder={placeholder} 
    type="tel" 
    className="lg:w-full lg:py-4 py-1.5 pl-5 text-lg rounded-l-xl"
    value={value} onChange={onChange} />
}

export default Input;