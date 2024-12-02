interface IButton {
    label?: string;
    handleClick: () => void;
    className?: string;
}

function Button({label = "Submit", handleClick, className}: IButton) {
    return (
        <button className={className} onClick={handleClick}>{label}</button>

    );
}

export default Button;