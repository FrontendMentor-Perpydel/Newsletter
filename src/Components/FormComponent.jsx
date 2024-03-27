const FormComponent = () => {
  return (
    <form className="form">
      <label>
        Email address
        <input type="text" placeholder="email@company.com" id="form-input" />
      </label>
      <button className="submit-btn" type="submit">
        Subscribe to monthly newsletter
      </button>
    </form>
  );
};

export default FormComponent;
