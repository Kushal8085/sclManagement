import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { UserDataContext } from './context/UserContext.jsx'
import Login from './components/auth/Login'
import AdminDashboard from './components/admin/AdminDashboard'
import TeacherDashboard from './components/teacher/TeacherDashboard'
import StudentDashboard from './components/student/StudentDashboard'
import StudentsList from './components/student/StudentsList'
import StudentAdd from './components/student/StudentAdd.jsx'
import StudentInvoice from './components/admin/StudentInvoice'
import TeacherSalary from './components/admin/TeacherSalary'
import StudentViewInvoice from './components/admin/StudentViewInvoice'
import Hostel from './components/Hostel'
import AddRoom from './components/AddRoom'
import Library from './components/Library'
import AddBooks from './components/AddBooks'
import Fees from './components/Fees'
import AddFees from './components/addFees'
import Exam from './components/Exam'
import AddExam from './components/AddExam'
import NotFound from './components/NotFound'
import RequestForgotPass from './components/auth/RequestForgotPass.jsx'
import ResetPassword from './components/auth/ResetPassword.jsx'
import LoginByPassword from './components/auth/LoginByPassword.jsx'
import LoginWithOtp from './components/auth/LoginWithOtp.jsx'
import CreatePassword from './components/auth/CreatePassword.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import TeacherList from './components/teacher/TeacherList.jsx'
import TeacherAdd from './components/teacher/TeacherAdd.jsx'


const App = () => {
  const { user, setUser } = useContext(UserDataContext)
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login-with-otp" element={<LoginWithOtp />} />
      <Route path="/create-password" element={<CreatePassword />} />
      <Route path="/login-with-password" element={<LoginByPassword />} />
      <Route path="/request-forgot-password" element={<RequestForgotPass />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/director/dashboard" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
      <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
      <Route path="/student/dashboard" element={<StudentDashboard />} />
      <Route path="/director/students" element={<StudentsList />} />
      <Route path="/director/student/add" element={<StudentAdd />} />
      <Route path="/director/teacher/invoice" element={<TeacherSalary />} />
      <Route path="/director/student/invoice" element={<StudentInvoice />} />
      <Route path="/director/student/invoice/view" element={<StudentViewInvoice />} />
      <Route path="/director/teachers" element={<TeacherList />} />
      <Route path="/director/teachers/add" element={<TeacherAdd />} />
      <Route path="/hostel" element={<Hostel />} />
      <Route path="/library" element={<Library />} />
      <Route path="/hostel/addRoom" element={<AddRoom />} />
      <Route path="/library/addBooks" element={<AddBooks />} />
      <Route path="/fees" element={<Fees />} />
      <Route path="/addFees" element={<AddFees />} />
      <Route path="/exam" element={<Exam />} />
      <Route path="/addExam" element={<AddExam />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
