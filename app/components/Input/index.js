import styles from "./styles.module.scss";
const Input = (props) => {
    const { value, name, onChange } = props;
    return (
        <input className={styles.input} value={value} name={name} onChange={onChange} />
    )
}

export default Input;