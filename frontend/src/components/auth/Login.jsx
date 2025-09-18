import { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserDataContext } from '../../context/UserContext.jsx'
import axios from 'axios';

const Login = () => {
  const { serverUrl, userEmail, setUserEmail } = useContext(UserDataContext)
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()

  const validateEmail = (email) => {
    // simple regex for email validation
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please enter a valid email");
      return;
    }

    setError("");
    const result = await axios.post(`${serverUrl}/api/auth/v1/verify-email`, { email })
    console.log(result)
    if (result.data.success) {
      setUserEmail(email)
      if (!result.data.data.hasPassword) {
        setLoading(true);
        const Result = await axios.post(`${serverUrl}/api/auth/v1/login/request-otp`, { email: email })
        setLoading(false);
        if (Result.status == 200) {
          console.log("OTP sent to your email")
          navigate('/login-with-otp')
        }
      }
      else {
        navigate('/login-with-password')
      }
    } else {
      console.log(result.response.data.message)
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
                  <h1>Welcome to Preskool</h1>
                  <p className="account-subtitle">Learning starts here</p>
                  <h2>Sign in</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label>Email <span className="login-danger">*</span></label>
                      <input name="email" value={email} className="form-control" type="text" onChange={(e) => { setEmail(e.target.value), setError("") }} />
                      <span className="profile-views"><i className="fas fa-envelope" /></span>
                    </div>
                    <div className="form-group">
                      {
                        loading ? <button className="btn btn-primary btn-block" type="button" disabled>
                          <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                          &nbsp;Loading...
                        </button> : <button className="btn btn-primary btn-block" type="submit">Submit</button>
                      }
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

export default Login
