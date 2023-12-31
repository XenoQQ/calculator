import "./styles/key.css";

const Key = ({ className, value, onClick }) => {
    return (
    <button className={`${className} + button`} onClick={onClick}>{value}</button>
    );
};

export default Key;