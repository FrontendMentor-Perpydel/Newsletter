import styles from "../styles/FormComponent.module.css";

const FormComponent = () => {
  return (
    <form className={styles.form}>
      <label>
        Email address
        <input type="text" placeholder="email@company.com" id={styles.formInput} />
      </label>
      <button className={styles.submitBtn} type="submit">
        Subscribe to monthly newsletter
      </button>
    </form>
  );
};

export default FormComponent;
