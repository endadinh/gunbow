import { useState, useEffect } from "react";
import "./signup.css";

const initData = {
  pre_heading: "Signup",
  heading: "Create an Account",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.",
};

const socialData = [
  {
    id: "1",
    link: "facebook",
    icon: "fab fa-facebook-f",
  },
  {
    id: "2",
    link: "twitter",
    icon: "fab fa-twitter",
  },
  {
    id: "3",
    link: "google-plus",
    icon: "fab fa-google-plus-g",
  },
];

const onValidUsername = (val) => {
  const usernameRegex = /^[a-z0-9_.]+$/;
  return !usernameRegex.test(val);
};

const onValidPassword = (val) => {
  var strongRegex = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );
  return strongRegex.test(val);
};

function Signup() {
  const [initData1, setInitData1] = useState({});
  const [data1, setData1] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [fullname, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [rules, setRules] = useState("0");
  const [errorObj, setErrorObj] = useState({
    username: "",
    email: "",
    fullname: "",
    password: "",
    confirmPassword: "",
    rules: "",
  });

  useEffect(() => {
    setInitData1(initData);
    setData1(socialData);
  }, []);

  const handleValidatedValues = () => {
    if (!username) {
      setErrorObj((prev) => ({
        ...prev,
        username: "Username can not empty",
      }));
      return false;
    }

    if (username.length <= 5) {
      setErrorObj((prev) => ({
        ...prev,
        username: "Username can not less than 5 character!",
      }));
      return false;
    }

    if (onValidUsername(username)) {
      setErrorObj((prev) => ({
        ...prev,
        username: "Username is not valid",
      }));
      return false;
    }

    if (!fullname) {
      setErrorObj((prev) => ({
        ...prev,
        fullname: "Fullname can not empty!",
      }));
      return false;
    }

    if (fullname.length <= 5) {
      setErrorObj((prev) => ({
        ...prev,
        fullname: "Fullname Username can not less than 5 character!",
      }));
      return false;
    }

    if (onValidPassword(password)) {
      setErrorObj((prev) => ({
        ...prev,
        password:
          "Password must be at least 8 characters. There must be 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character!",
      }));
      return false;
    }

    if (password != confirmPassword) {
      setErrorObj((prev) => ({
        ...prev,
        confirmPassword:
          "Password authentication is incorrect",
      }));
      return false;
    }
    if (rules == "0") {
      setErrorObj((prev) => ({
        ...prev,
        rules:
          "Please agree to the terms before logging in",
      }));
      return false;
    }

    return true;
  };

  const handlSignUp = (e) => {
    e.preventDefault();
    const isValid = handleValidatedValues();
    if (!isValid) return;

    const data = {
      username,
      fullname,
      email,
      password,
      rules
    }

    console.log(data);
  };

  return (
    <section className="author-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-7">
            {/* Intro */}
            <div className="intro text-center">
              <span>{initData1?.pre_heading}</span>
              <h3 className="mt-3 mb-0">{initData1?.heading}</h3>
              <p>{initData1?.content}</p>
            </div>
            {/* Item Form */}
            <form className="card no-hover form-item">
              <div className="row">
                <div className="col-12">
                  <div className="mt-3">
                    <input
                      type="text"
                      className="input__main"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Enter your username"
                      onFocus={() =>
                        setErrorObj((prev) => ({
                          ...prev,
                          username: "",
                        }))
                      }
                      onBlur={(e) => {
                        if (!e.target.value) {
                          setErrorObj((prev) => ({
                            ...prev,
                            username: "Bạn phải nhập trường username",
                          }));
                        }
                      }}
                    />
                    {errorObj.username && (
                      <p className="text-red font-bold m-1 text-sm">
                        <i className="fa-solid fa-circle-exclamation"></i>
                        <span className="ml-1">{errorObj.username}</span>
                      </p>
                    )}
                  </div>
                  <div className="mt-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="input__main"
                      placeholder="Enter your email"
                      required="required"
                    />
                    {errorObj.email && (
                      <p className="text-red font-bold m-1 text-sm">
                        <i className="fa-solid fa-circle-exclamation"></i>
                        <span className="ml-1">{errorObj.email}</span>
                      </p>
                    )}
                  </div>
                  <div className="mt-3">
                    <input
                      type="text"
                      className="input__main"
                      value={fullname}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Enter your fullname"
                      onFocus={() =>
                        setErrorObj((prev) => ({
                          ...prev,
                          fullname: "",
                        }))
                      }
                      onBlur={(e) => {
                        if (!e.target.value) {
                          setErrorObj((prev) => ({
                            ...prev,
                            fullname: "Bạn phải nhập trường fullname",
                          }));
                        }
                      }}
                    />
                    {errorObj.fullname && (
                      <p className="text-red font-bold m-1 text-sm">
                        <i className="fa-solid fa-circle-exclamation"></i>
                        <span className="ml-1">{errorObj.fullname}</span>
                      </p>
                    )}
                  </div>
                  <div className="mt-3">
                    <input
                      type="password"
                      className="input__main"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      onFocus={() =>
                        setErrorObj((prev) => ({
                          ...prev,
                          password: "",
                        }))
                      }
                      onBlur={(e) => {
                        if (!e.target.value) {
                          setErrorObj((prev) => ({
                            ...prev,
                            password: "Bạn phải nhập trường password",
                          }));
                        }
                      }}
                    />
                    {errorObj.password && (
                      <p className="text-red font-bold m-1 text-sm">
                        <i className="fa-solid fa-circle-exclamation"></i>
                        <span className="ml-1">{errorObj.password}</span>
                      </p>
                    )}
                  </div>
                  <div className="mt-3">
                    <input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="input__main"
                      placeholder="Enter your confirm password"
                      onFocus={() =>
                        setErrorObj((prev) => ({
                          ...prev,
                          confirmPassword: "",
                        }))
                      }
                      onBlur={(e) => {
                        if (!e.target.value) {
                          setErrorObj((prev) => ({
                            ...prev,
                            confirmPassword:
                              "Bạn phải nhập trường confirmPassword",
                          }));
                        }
                      }}
                    />
                    {errorObj.confirmPassword && (
                      <p className="text-red font-bold m-1 text-sm">
                        <i className="fa-solid fa-circle-exclamation"></i>
                        <span className="ml-1">{errorObj.confirmPassword}</span>
                      </p>
                    )}
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-flex align-items-center px-2 mt-3">
                    <input
                      type="checkbox"
                      value={rules}
                      checked={rules != "0"}
                      onChange={(e) =>
                        setRules(e.target.value == "0" ? "1" : "0")
                      }
                      id="inlineRadio1"
                    />
                    <label
                      className="form-check-label ml-1"
                      htmlFor="inlineRadio1"
                    >
                      I agree to{" "}
                      <a href="#" className="ml-3">
                        Privacy Policy
                      </a>
                    </label>
                    {errorObj.rules && (
                      <p className="text-red font-bold m-1 text-sm">
                        <i className="fa-solid fa-circle-exclamation"></i>
                        <span className="ml-1">{errorObj.rules}</span>
                      </p>
                    )}
                  </div>
                </div>
                <div className="col-12">
                  <button
                    type="submit"
                    onClick={handlSignUp}
                    className="btn btn-bordered-white my-3"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;