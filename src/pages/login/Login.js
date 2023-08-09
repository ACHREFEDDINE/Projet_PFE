import { Stack, Switch, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { adminsAction } from "../../Actions/Admin/adminActions";
import { styled } from "@mui/material/styles";

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: "flex",

  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,.35)"
        : "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
}));

const Login = () => {
  const { getAllAdmins } = adminsAction;

  const [email, setemail] = useState("");
  const [emailError, setemailError] = useState("");
  const [password, setpassword] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [isRealData, setisRealData] = useState(false);

  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    getAllAdmins(dispatch, state);
  }, []);

  useEffect(() => {
    getAllAdmins(dispatch, state);
  }, [isRealData]);

  const submit = (event) => {
    event.preventDefault();
    var admin = state.admins.find((admin) => admin.email == email);
    if (admin === undefined) {
      setemailError("not Exist");
    } else {
      setemailError("");
      if (admin.password != password) {
        setpasswordError("Password doesn't match");
      } else {
        setpasswordError("");
        localStorage.setItem("user", JSON.stringify(admin)); //pour convertir un objet vers string
        window.location.assign("/");
      }
    }
  };

  return (
    <div className="App">
      <div className="container-fluid ps-md-0">
        <div className="row g-0">
          <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
          <div className="col-md-8 col-lg-6">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-9 col-lg-8 mx-auto">
                    <h1 className="login-heading mb-4">Welcome to MISRA</h1>
                    <form onSubmit={submit}>
                      <Stack direction="row" spacing={5} alignItems="center">
                        <Typography>Fake Data</Typography>
                        <AntSwitch
                          onChange={(event, checked) => {
                            setisRealData(checked);
                            dispatch({
                              type: "dataSource",
                              isRealData: checked,
                            });
                          }}
                          defaultChecked={isRealData}
                          inputProps={{ "aria-label": "ant design" }}
                        />
                        <Typography>Real Data</Typography>
                      </Stack>
                      <div className="form-floating mb-3">
                        <input
                          type="email"
                          classNameName={`form-control ${
                            emailError !== "" && "invalid"
                          }`}
                          id="floatingInput"
                          name="email"
                          placeholder="name@example.com"
                          required
                          value={email}
                          onChange={(e) => {
                            console.log(e.target.value);
                            setemail(e.target.value);
                          }}
                        />
                        <label htmlFor="floatingInput">Email address</label>
                        <span classNameName="text-danger">
                          {"  " + emailError}
                        </span>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="password"
                          classNameName={`form-control ${
                            passwordError !== "" && "invalid"
                          }`}
                          id="floatingPassword"
                          name="password"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => {
                            setpassword(e.target.value);
                          }}
                        />
                        <label htmlFor="floatingPassword">Password</label>
                        <span classNameName="text-danger">
                          {" " + passwordError}
                        </span>
                      </div>

                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="rememberPasswordCheck"
                        />
                        <label
                          className="form-check-label"
                          for="rememberPasswordCheck"
                        >
                          Remember password
                        </label>
                      </div>

                      <div className="d-grid">
                        <button
                          className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
                          type="submit"
                        >
                          Sign in
                        </button>
                        <div className="text-center">
                          <Link to="/forgot-password">Forgot password?</Link>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
