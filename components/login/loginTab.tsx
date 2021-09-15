import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { useFormik } from "formik";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
// import { login } from "../../redux/login/actions";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "grey",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "grey",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "grey",
      },
    },
  },
})(TextField);

function LoginTab() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      isPersistent: true,
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="pt-5 w-50">
      <form
        onSubmit={formik.handleSubmit}
        className="d-flex flex-column justify-content-center align-items-center w-100"
      >
        <CssTextField
          className="mb-5 w-100"
          type="text"
          name="email"
          label="Account"
          size="small"
          variant="outlined"
          helperText={
            formik.touched.email && formik.errors.email
              ? formik.errors.email
              : null
          }
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <CssTextField
          className="mb-5 w-100"
          type="password"
          name="password"
          label="Password"
          size="small"
          helperText={
            formik.touched.password && formik.errors.password
              ? formik.errors.password
              : null
          }
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <Button
          type="submit"
          variant="contained"
          className="w-100 mx-auto normal-case"
          aria-label="LOG IN"
          style={{
            backgroundColor: "#2FAAFC",
            color: "#FFF",
            borderColor: "#2FAAFC",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          Sign In
        </Button>
        <div
          className="d-flex align-items-center justify-content-between w-100 pt-3"
          style={{ fontSize: 16 }}
        >
          <Link href="/forgot-password">Forgot Password</Link>
          <Link href="/register">Register</Link>
        </div>
      </form>
    </div>
  );
}

export default LoginTab;
