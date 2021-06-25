import { useFormik } from "formik";

function Using() {
  const validate = (values) => {
    const errors = {};

    if (!values.email) errors.email = "Required";
    else if (values.email.lenght < 4)
      errors.email = "Must Have more than 4 characteres";

    if (!values.password) errors.password = "Required";
    else if (values.password.length < 8)
      errors.password = "Must Have more than 8 characteres";
    else if (values.password === "12345678")
      errors.password = "Write another password.!";

    if (!values.repassword) errors.repassword = "Required";
    else if (values.repassword !== values.password)
      errors.repassword = "Passoword doesn't Doesn't Match";

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      repassword: "",
    },

    validate,

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      console.log(values);
    },
  });

  return (
    <>
      <form id="Formik-Form" onSubmit={formik.handleSubmit}>
        <h1 className="Header"> Register Form </h1>
        <div>
          <label htmlFor="email"> Email Adress </label>
          <input
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            name="email"
            id="email"
          />
          {formik.touched.email && formik.errors.email && (
            <div className="error-container"> {formik.errors.email} </div>
          )}
          <label htmlFor="passowrd"> Password </label>
          <input
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            name="password"
            id="password"
          />
          {formik.touched.password && formik.errors.password && (
            <div className="error-container"> {formik.errors.password} </div>
          )}
          <label htmlFor="repassowrd"> Confirm Password </label>
          <input
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.repassword}
            name="repassword"
            id="repassword"
          />
          {formik.touched.repassword && formik.errors.repassword && (
            <div className="error-container"> {formik.errors.repassword} </div>
          )}
          .
        </div>

        <button type="submit" id="submit-button">
          Send
        </button>
      </form>
    </>
  );
}

export default Using;
