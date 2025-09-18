import { useState, useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserDataContext } from '../../context/UserContext.jsx'
import axios from 'axios';

const LoginWithOtp = () => {
  const { user, setUser, serverUrl,userEmail } = useContext(UserDataContext)
  const [otp, setOtp] = useState(Array(6).fill(""));
  const navigate = useNavigate();

  // Handle OTP input change
  const handleChange = (value, index) => {
    if (/^[0-9]?$/.test(value)) { // only allow digits
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // auto focus next input
      if (value && index < 5) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Entered OTP: " + otp.join(""));
    const data = {
      email:userEmail,
      otp: otp.join("")
    }
    console.log(data)
    const result = await axios.post(`${serverUrl}/api/auth/v1/login/verify-otp`, data)
    console.log(result.data)
    if(result.data.success){
      navigate("/create-password")
    }
  };

  return (
    <div className="main-wrapper login-body">
      <div className="login-wrapper">
        <div className="container">
          <div className="loginbox">
            <div className="login-left">
              <img className="img-fluid" src="assets/img/login.png" alt="Logo" />
            </div>
            <div className="login-right">
              <div className="login-right-wrap">
                <p className="mb-4 text-dark fw-bold" style={{ letterSpacing: "0.4px" }}>
                  Enter the OTP sent to your email
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="d-flex justify-content-between mb-3">
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        id={`otp-${index}`}
                        type="text"
                        className="form-control text-center fw-bold"
                        maxLength="1"
                        value={digit}
                        onChange={(e) => handleChange(e.target.value, index)}
                        style={{ width: "50px", height: "50px", fontSize: "20px" }}
                      />
                    ))}
                  </div>

                  <div className="form-group">
                    <button className="btn btn-primary btn-block" type="submit">
                      Verify OTP
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginWithOtp
