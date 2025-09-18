import React, { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext.jsx'

const ProtectedRoute = ({ children }) => {
  const { user, setUser, userDetail, setUserDetail } = useContext(UserDataContext)

  const navigate = useNavigate()

  useEffect(() => {
    console.log(userDetail)
    console.log(user == null)
    console.log(user)
    if (user == null) {
      navigate('/login')
    }
    else if (userDetail !== null || user.role == 'director') {
      navigate('/director/dashboard')
    } else if (userDetail !== null || user.role == 'teacher') {
      navigate('/teacher/dashboard')
    } else if (userDetail !== null || user.role == 'student') {
      navigate('/student/dashboard')
    }

  }, [])
  return (
    <>
      {children}
    </>
  )
}

export default ProtectedRoute
