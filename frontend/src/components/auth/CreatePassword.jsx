import { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserDataContext } from '../../context/UserContext.jsx'
import axios from 'axios';

const CreatePassword = () => {
  const { user, setUser, serverUrl, userEmail, setUserEmail } = useContext(UserDataContext)
  console.log(serverUrl)
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");

    const data = {
      email: userEmail,
      password,
      confirmPassword
    }

    try {
      const result = await axios.post(`${serverUrl}/api/auth/v1/create-password`, data);
    console.log(result)
    if (result.data.success) {
      navigate(`/${result.data.role}/dashboard`)
    }
  } catch (error) {
    console.error("Error resetting password:", error);
    setError("Failed to reset password");
  }}
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
                  <h5 className="mb-4 text-dark fw-bold" style={{ letterSpacing: "0.4px" }}>
                    Create Password
                  </h5>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label>New Password <span className="login-danger">*</span></label>
                      <input className="form-control pass-input" type={showPassword ? "text" : "password"} name='password' value={password} onChange={(e) => { setPassword(e.target.value), setError("") }} />
                      <span className={`profile-views ${showPassword ? "feather-eye-off" : "feather-eye"} toggle-password`} style={{ cursor: "pointer" }} onClick={() => setShowPassword(!showPassword)} />
                    </div>
                    <div className="form-group">
                      <label>Confirm password <span className="login-danger">*</span></label>
                      <input className="form-control pass-confirm" type={showConfirmPassword ? "text" : "password"} name='showConfirmPassword' value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value), setError("") }} />
                      <span className={`profile-views ${showConfirmPassword ? "feather-eye-off" : "feather-eye"} reg-toggle-password`} style={{ cursor: "pointer" }} onClick={() => setShowConfirmPassword(!showConfirmPassword)} />
                    </div>
                    <div className="forgotpass">
                      <div className="remember-me">
                        <label className="custom_check mr-2 mb-0 d-inline-flex remember-me"> Remember me
                          <input type="checkbox" name="remember" checked={isChecked} onChange={(e) => { setIsChecked(e.target.checked), setError("") }} />
                          <span className="checkmark" />
                        </label>
                      </div>
                    </div>
                    <div className="form-group">
                      <button className="btn btn-primary btn-block" type="submit">Create</button>
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

export default CreatePassword

