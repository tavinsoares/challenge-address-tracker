import imgHeader from '../../images/pattern-bg.png';

const Header = ({ children }) => {

    return (
        <section className="relative h-72">
            <img className="object-cover h-full sm:w-full lg:w-min" src={imgHeader} alt='' />
            <h1 className="w-full text-center mt-9 font-semibold absolute top-0 left-0 text-white text-2xl"> IP Address Tracker </h1>
            <div className="flex justify-center w-full absolute left-0 mt-9 pt-9 top-0">
                {children}
            </div>
        </section>
    )
}

export default Header;