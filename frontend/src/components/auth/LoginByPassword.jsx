import { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserDataContext } from '../../context/UserContext.jsx'
import axios from 'axios';

const LoginByPassword = () => {
  const { user, setUser, serverUrl, userEmail, setUserEmail } = useContext(UserDataContext)
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate()

  const validateEmail = (email) => {
    // simple regex for email validation
    return /\S+@\S+\.\S+/.test(email);
  };

  const forgotPass = async () => {
    if (!validateEmail(userEmail)) {
      setError("Please enter a valid email");
      return;
    }
    console.log(userEmail)
    const result = await axios.post(`${serverUrl}/api/auth/v1/forgot-password/request`, { email: userEmail })
    if (result.status == 200) {
      navigate('/request-forgot-password')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(userEmail)) {
      setError("Please enter a valid email");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    setError("");

    const loginData = {
      email: userEmail,
      password
    }

    const result = await axios.post(`${serverUrl}/api/auth/v1/login-with-password`, loginData)
    console.log(result)
    if (result.data.success) {
      setUser(result.data)
      navigate(`/${result.data.role}/dashboard`)
    } else {
      setError(result.response.data.message)
    }
  }
  return (
    <div>
      <div className="main-wrapper login-body">
        <div className="login-wrapper">
          <div className="container">
            <div className="loginbox">
              <div className="login-left">
                <img className="img-fluid" src="assets/img/login.png" alt="Logo" />
              </div>
              <div className="login-right">
                <div className="login-right-wrap">
                  <h5 className="mb-4 text-dark fw-bold" style={{ letterSpacing: "0.4px" }}>Enter your password</h5>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label>Password <span className="login-danger">*</span></label>
                      <input name='password' value={password} className="form-control pass-input" type={showPassword ? "text" : "password"} onChange={(e) => { setPassword(e.target.value), setError("") }} />
                      <span className={`profile-views ${showPassword ? "feather-eye-off" : "feather-eye"} toggle-password`} style={{ cursor: "pointer" }} onClick={() => setShowPassword(!showPassword)} />
                    </div>
                    <div className="forgotpass">
                      <div className="remember-me">
                        <label className="custom_check mr-2 mb-0 d-inline-flex remember-me"> Remember me
                          <input type="checkbox" name="remember" checked={isChecked} onChange={(e) => { setIsChecked(e.target.checked), setError("") }} />
                          <span className="checkmark" />
                        </label>
                      </div>
                      <span onClick={forgotPass} style={{ cursor: "pointer", color: "#18AEFA", marginLeft: "77px" }}>Forgot Password?</span>
                    </div>
                    <div className="form-group">
                      <button className="btn btn-primary btn-block" type="submit">Login</button>
                    </div>
                    {error && <p className="text-danger mt-2">{error}</p>}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginByPassword