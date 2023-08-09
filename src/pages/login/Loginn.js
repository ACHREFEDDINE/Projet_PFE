import React from "react";
import "./login.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Link } from "react-router-dom";

const defaultState = {
  name: null,
  email: null,
  password: null,
  nameError: null,
  emailError: null,
  passwordError: null,
};
class Loginn extends React.Component {
  constructor() {
    super();
    this.state = defaultState;
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    var value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }
  validate() {
    let nameError = "";
    let emailError = "";
    let passwordError = "";
    if (!this.state.name) {
      nameError = "Name field is required";
    }
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!this.state.email || reg.test(this.state.email) === false) {
      emailError = "Email Field is Invalid ";
    }
    if (!this.state.password) {
      passwordError = "Password field is required";
    }
    if (emailError || nameError || passwordError) {
      this.setState({ nameError, emailError, passwordError });
      return false;
    }
    return true;
  }

  submit() {
    if (this.validate()) {
      console.warn(this.state);
      this.setState(defaultState);
    } else {
      alert(this.validate());
    }
  }
  render() {
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

                      <form>
                        <div className="form-floating mb-3">
                          <input
                            type="email"
                            classNameName={
                              "form-control " +
                              (this.state.emailError ? "invalid" : "")
                            }
                            id="floatingInput"
                            name="email"
                            placeholder="name@example.com"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                          />
                          <label for="floatingInput">Email address</label>
                          <span classNameName="text-danger">
                            {this.state.emailError}
                          </span>
                        </div>
                        <div className="form-floating mb-3">
                          <input
                            type="password"
                            classNameName={
                              "form-control " +
                              (this.state.passwordError ? "invalid" : "")
                            }
                            id="floatingPassword"
                            name="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                          />
                          <label for="floatingPassword">Password</label>
                          <span classNameName="text-danger">
                            {this.state.passwordError}
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
                            type="button"
                            onClick={() => this.submit()}
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
  }
}
export default Loginn;
