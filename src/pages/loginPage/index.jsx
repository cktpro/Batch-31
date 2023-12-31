import React, { memo, useCallback, useMemo,useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';

import { LOCATIONS } from "constants/index";
import "./loginPage.css";
import { axiosAdmin } from 'helper/axiosClient';
import NotFoundPage from "pages/404";
function  LoginPage(props) {
const navigate=useNavigate()
const token=window.localStorage.getItem("TOKEN")
  const checkLogin = async (data) => {  // Promise
    try {
      const url = 'https://batch-293-0-nodejs.onrender.com/admin/employees/login';
      const res = await axiosAdmin.post(url,data);
      const{token,refreshToken}=res.data
      window.localStorage.setItem("TOKEN",token)
      window.localStorage.setItem("REFRESH_TOKEN",refreshToken)
      window.localStorage.setItem("DATA",data.email)
      axiosAdmin.defaults.headers.Authorization = `Bearer ${token}`;

      if (token) {
        navigate(LOCATIONS.PRODUCTS_PAGE);
      }
    } catch (error) {
      document.getElementById('invalid-feedback').innerHTML='Login thất bại'
      console.log("Login thất bại",error)
    }
  };

  const validationLogin = useFormik({
    initialValues: {
      email:"",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .required("Email is Required!"),
      password: Yup.string()
        .min(6, "Minimum 6 characters")
        .required("Password is Required!"),
    }),

    onSubmit: (values) => {
      const { email,password } = values;
      const data = {
        email: email,
        password: password,
      };
      checkLogin(data);
      // step 1: call Api and verify email
      // step 2: nếu thành công thì  chuyển sang step tiếp theo
      // step 2: nếu thất bại => hiển thị lỗi
      // setCurrentStep(REGISTER_STEP.INFO_STEP);
    },
  });

  const onClickButton = useCallback(
    (e) => {
      e.preventDefault();
        validationLogin.handleSubmit();
    },
    [ validationLogin]
  );


  const isErrorLogin = useMemo(() => {
    if (validationLogin.errors?.password && validationLogin.touched?.password) {
      return true;
    }
  
    return false;
  }, [validationLogin.errors?.password, validationLogin.touched?.password]);
  const isErrorEmail = useMemo(() => {
    if (validationLogin.errors?.email && validationLogin.touched?.email) {
      return true;
    }
  
    return false;
  }, [validationLogin.errors?.email, validationLogin.touched?.email]);
  useEffect(() => {
    if (token) {
      navigate(LOCATIONS.PRODUCTS_PAGE);
      
    }
  }, []);
  // return begin
  return !token?(
    <div className="boxForm">
      <div className="child">
        <div className=" form-signin w-100">
        <h1 className="h3 text-white mb-3 fw-normal">Login</h1>
            {/* <div className="term text-start my-3">
                {info.name}
                <br />
                  <span className="fw-bold">{info.email}</span>
              </div> */}
              <div className="input-group d-block has-validation mb-3">
                <div
                  className={`form-floating ${isErrorEmail && "is-invalid"}`}
                >
                  <input
                    type="text"
                    className={`form-control ${isErrorEmail && "is-invalid"}`}
                    id="email"
                    placeholder="Email"
                    name="email"
                    value={validationLogin.values.email}
                    onChange={validationLogin.handleChange}
                    onBlur={validationLogin.handleBlur}
                  />

                  <label htmlFor="email">Email</label>
                </div>
                {isErrorEmail && (
                  <div  className="fs-6 invalid-feedback mt-3">
                    {validationLogin.errors?.email}
                  </div>
                )}
                {
                  !validationLogin.errors.email &&(
                    <div className="fs-6 text-danger mt-3"></div>
                  )
                }
                
              </div>
              


              <div className="input-group d-block has-validation mb-3">
                <div
                  className={`form-floating ${isErrorLogin && "is-invalid"}`}
                >
                  <input
                    type="password"
                    className={`form-control ${isErrorLogin && "is-invalid"}`}
                    id="password"
                    placeholder="password"
                    name="password"
                    value={validationLogin.values.password}
                    onChange={validationLogin.handleChange}
                    onBlur={validationLogin.handleBlur}
                  />

                  <label htmlFor="password">Password</label>
                </div>
                {isErrorLogin && (
                  <div  className="fs-6 invalid-feedback mt-3">
                    {validationLogin.errors?.password}
                  </div>
                )}
                {
                  !validationLogin.errors.password &&(
                    <div id="invalid-feedback" className="fs-6 text-danger mt-3"></div>
                  )
                }
                
              </div>

            <button
              className="btn btn-green w-100 py-3"
              type="submit"
              onClick={onClickButton}
            >
              {/* {
          currentStep === REGISTER_STEP.EMAIL_STEP ? 'Continue' : '| Agree and continue'
        } */}
              Login
            </button>
            <div className="term text-start my-3">
              <a className="link" href="">
                Forgot your password?
              </a>
            </div>
        </div>
      </div>
    </div>
  ):<NotFoundPage/>;
}

export default memo(LoginPage);
