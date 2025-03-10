import styles from "./styles.module.scss";
const Input = (props) => {
    const { value, name, label, onChange } = props;
    return (
        <>
            <label for={name}>{label}</label>
            <input className={styles.input} value={value} name={name} onChange={onChange} />
        </>
    )
}

export default Input;