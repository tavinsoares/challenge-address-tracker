
import Icon from '../../components/Icon';

const Button = ({ onClick, ...props }) => {

    return (
        <button autoFocus  className="rounded-r-lg bg-black h-full px-5" onClick={onClick} {...props}>
            <Icon name="Arrow" />
        </button>
    )
}

export default Button;