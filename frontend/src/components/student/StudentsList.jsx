import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar'

const StudentsList = () => {
  return (
    <div>
      <div className="main-wrapper">
        <div className="header">
          <div className="header-left">
            <Link to="/student/dashboard" className="logo">
              <img src="assets/img/logo.png" alt="Logo" />
            </Link>
            <Link to="/student/dashboard" className="logo logo-small">
              <img src="assets/img/logo-small.png" alt="Logo" width={30} height={30} />
            </Link>
          </div>
          <div className="menu-toggle">
            <a href="javascript:void(0);" id="toggle_btn">
              <i className="fas fa-bars" />
            </a>
          </div>
          <div className="top-nav-search">
            <form>
              <input type="text" className="form-control" placeholder="Search here" />
              <button className="btn" type="submit"><i className="fas fa-search" /></button>
            </form>
          </div>
          <a className="mobile_btn" id="mobile_btn">
            <i className="fas fa-bars" />
          </a>
          <ul className="nav user-menu">
            <li className="nav-item dropdown language-drop me-2">
              <a href="#" className="dropdown-toggle nav-link header-nav-list" data-bs-toggle="dropdown">
                <img src="assets/img/icons/header-icon-01.svg" alt="" />
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="javascript:;"><i className="flag flag-lr me-2" />English</a>
                <a className="dropdown-item" href="javascript:;"><i className="flag flag-bl me-2" />Francais</a>
                <a className="dropdown-item" href="javascript:;"><i className="flag flag-cn me-2" />Turkce</a>
              </div>
            </li>
            <li className="nav-item dropdown noti-dropdown me-2">
              <a href="#" className="dropdown-toggle nav-link header-nav-list" data-bs-toggle="dropdown">
                <img src="assets/img/icons/header-icon-05.svg" alt="" />
              </a>
              <div className="dropdown-menu notifications">
                <div className="topnav-dropdown-header">
                  <span className="notification-title">Notifications</span>
                  <a href="javascript:void(0)" className="clear-noti"> Clear All </a>
                </div>
                <div className="noti-content">
                  <ul className="notification-list">
                    <li className="notification-message">
                      <a href="#">
                        <div className="media d-flex">
                          <span className="avatar avatar-sm flex-shrink-0">
                            <img className="avatar-img rounded-circle" alt="User Image" src="assets/img/profiles/avatar-02.jpg" />
                          </span>
                          <div className="media-body flex-grow-1">
                            <p className="noti-details"><span className="noti-title">Carlson Tech</span> has approved <span className="noti-title">your estimate</span></p>
                            <p className="noti-time"><span className="notification-time">4 mins ago</span></p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="notification-message">
                      <a href="#">
                        <div className="media d-flex">
                          <span className="avatar avatar-sm flex-shrink-0">
                            <img className="avatar-img rounded-circle" alt="User Image" src="assets/img/profiles/avatar-11.jpg" />
                          </span>
                          <div className="media-body flex-grow-1">
                            <p className="noti-details"><span className="noti-title">International Software Inc</span> has sent you a invoice in the amount of <span className="noti-title">$218</span></p>
                            <p className="noti-time"><span className="notification-time">6 mins ago</span></p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="notification-message">
                      <a href="#">
                        <div className="media d-flex">
                          <span className="avatar avatar-sm flex-shrink-0">
                            <img className="avatar-img rounded-circle" alt="User Image" src="assets/img/profiles/avatar-17.jpg" />
                          </span>
                          <div className="media-body flex-grow-1">
                            <p className="noti-details"><span className="noti-title">John Hendry</span> sent a cancellation request <span className="noti-title">Apple iPhone XR</span></p>
                            <p className="noti-time"><span className="notification-time">8 mins ago</span></p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="notification-message">
                      <a href="#">
                        <div className="media d-flex">
                          <span className="avatar avatar-sm flex-shrink-0">
                            <img className="avatar-img rounded-circle" alt="User Image" src="assets/img/profiles/avatar-13.jpg" />
                          </span>
                          <div className="media-body flex-grow-1">
                            <p className="noti-details"><span className="noti-title">Mercury Software Inc</span> added a new product <span className="noti-title">Apple MacBook Pro</span></p>
                            <p className="noti-time"><span className="notification-time">12 mins ago</span></p>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="topnav-dropdown-footer">
                  <a href="#">View all Notifications</a>
                </div>
              </div>
            </li>
            <li className="nav-item zoom-screen me-2">
              <a href="#" className="nav-link header-nav-list">
                <img src="assets/img/icons/header-icon-04.svg" alt="" />
              </a>
            </li>
            <li className="nav-item dropdown has-arrow new-user-menus">
              <a href="#" className="dropdown-toggle nav-link" data-bs-toggle="dropdown">
                <span className="user-img">
                  <img className="rounded-circle" src="assets/img/profiles/avatar-01.jpg" width={31} alt="Ryan Taylor" />
                  <div className="user-text">
                    <h6>Ryan Taylor</h6>
                    <p className="text-muted mb-0">Administrator</p>
                  </div>
                </span>
              </a>
              <div className="dropdown-menu">
                <div className="user-header">
                  <div className="avatar avatar-sm">
                    <img src="assets/img/profiles/avatar-01.jpg" alt="User Image" className="avatar-img rounded-circle" />
                  </div>
                  <div className="user-text">
                    <h6>Ryan Taylor</h6>
                    <p className="text-muted mb-0">Administrator</p>
                  </div>
                </div>
                <a className="dropdown-item" href="profile.html">My Profile</a>
                <a className="dropdown-item" href="inbox.html">Inbox</a>
                <a className="dropdown-item" href="login.html">Logout</a>
              </div>
            </li>
          </ul>
        </div>
        <Navbar/>
        <div className="page-wrapper">
          <div className="content container-fluid">
            <div className="page-header">
              <div className="row">
                <div className="col-sm-12">
                  <div className="page-sub-header">
                    <h3 className="page-title">Students</h3>
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item"><a href="students.html">Student</a></li>
                      <li className="breadcrumb-item active">All Students</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="student-group-form">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Search by ID ..." />
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Search by Name ..." />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Search by Phone ..." />
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="search-student-btn">
                    <button type="btn" className="btn btn-primary">Search</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="card card-table comman-shadow">
                  <div className="card-body">
                    <div className="page-header">
                      <div className="row align-items-center">
                        <div className="col">
                          <h3 className="page-title">Students</h3>
                        </div>
                        <div className="col-auto text-end float-end ms-auto download-grp">
                          <a href="students.html" className="btn btn-outline-gray me-2 active"><i className="feather-list" /></a>
                          <a href="students-grid.html" className="btn btn-outline-gray me-2"><i className="feather-grid" /></a>
                          <a href="#" className="btn btn-outline-primary me-2"><i className="fas fa-download" /> Download</a>
                          <a href="add-student.html" className="btn btn-primary"><i className="fas fa-plus" /></a>
                        </div>
                      </div>
                    </div>
                    <div className="table-responsive">
                      <table className="table border-0 star-student table-hover table-center mb-0 datatable table-striped">
                        <thead className="student-thread">
                          <tr>
                            <th>
                              <div className="form-check check-tables">
                                <input className="form-check-input" type="checkbox" defaultValue="something" />
                              </div>
                            </th>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Class</th>
                            <th>DOB</th>
                            <th>Parent Name</th>
                            <th>Mobile Number</th>
                            <th>Address</th>
                            <th className="text-end">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="form-check check-tables">
                                <input className="form-check-input" type="checkbox" defaultValue="something" />
                              </div>
                            </td>
                            <td>PRE2209</td>
                            <td>
                              <h2 className="table-avatar">
                                <a href="student-details.html" className="avatar avatar-sm me-2"><img className="avatar-img rounded-circle" src="assets/img/profiles/avatar-01.jpg" alt="User Image" /></a>
                                <a href="student-details.html">Aaliyah</a>
                              </h2>
                            </td>
                            <td>10 A</td>
                            <td>2 Feb 2002</td>
                            <td>Jeffrey Wong</td>
                            <td>097 3584 5870</td>
                            <td>911 Deer Ridge Drive,USA</td>
                            <td className="text-end">
                              <div className="actions ">
                                <a href="javascript:;" className="btn btn-sm bg-success-light me-2 ">
                                  <i className="feather-eye" />
                                </a>
                                <a href="edit-student.html" className="btn btn-sm bg-danger-light">
                                  <i className="feather-edit" />
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check check-tables">
                                <input className="form-check-input" type="checkbox" defaultValue="something" />
                              </div>
                            </td>
                            <td>PRE2213</td>
                            <td>
                              <h2 className="table-avatar">
                                <a href="student-details.html" className="avatar avatar-sm me-2"><img className="avatar-img rounded-circle" src="assets/img/profiles/avatar-03.jpg" alt="User Image" /></a>
                                <a href="student-details.html">Malynne</a>
                              </h2>
                            </td>
                            <td>8 A</td>
                            <td>3 June 2010</td>
                            <td>Fields Malynne</td>
                            <td>242 362 3100</td>
                            <td>Bacardi Rd P.O. Box N-4880, New Providence</td>
                            <td className="text-end">
                              <div className="actions ">
                                <a href="javascript:;" className="btn btn-sm bg-success-light me-2 ">
                                  <i className="feather-eye" />
                                </a>
                                <a href="edit-student.html" className="btn btn-sm bg-danger-light">
                                  <i className="feather-edit" />
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check check-tables">
                                <input className="form-check-input" type="checkbox" defaultValue="something" />
                              </div>
                            </td>
                            <td>PRE2143</td>
                            <td>
                              <h2 className="table-avatar">
                                <a href="student-details.html" className="avatar avatar-sm me-2"><img className="avatar-img rounded-circle" src="assets/img/profiles/avatar-02.jpg" alt="User Image" /></a>
                                <a href="student-details.html">Levell&nbsp;Scott</a>
                              </h2>
                            </td>
                            <td>10 A</td>
                            <td>12 Apr 2002</td>
                            <td>Jeffrey Scott</td>
                            <td>026 7318 4366</td>
                            <td>P.O. Box: 41, Gaborone</td>
                            <td className="text-end">
                              <div className="actions ">
                                <a href="javascript:;" className="btn btn-sm bg-success-light me-2 ">
                                  <i className="feather-eye" />
                                </a>
                                <a href="edit-student.html" className="btn btn-sm bg-danger-light">
                                  <i className="feather-edit" />
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check check-tables">
                                <input className="form-check-input" type="checkbox" defaultValue="something" />
                              </div>
                            </td>
                            <td>PRE2431</td>
                            <td>
                              <h2 className="table-avatar">
                                <a href="student-details.html" className="avatar avatar-sm me-2"><img className="avatar-img rounded-circle" src="assets/img/profiles/avatar-03.jpg" alt="User Image" /></a>
                                <a href="student-details.html">Minnie</a>
                              </h2>
                            </td>
                            <td>11 C</td>
                            <td>24 Feb 2000</td>
                            <td>J&nbsp;Shaffer</td>
                            <td>952 512 4909</td>
                            <td>4771 Oral Lake Road, Golden Valley</td>
                            <td className="text-end">
                              <div className="actions ">
                                <a href="javascript:;" className="btn btn-sm bg-success-light me-2 ">
                                  <i className="feather-eye" />
                                </a>
                                <a href="edit-student.html" className="btn btn-sm bg-danger-light">
                                  <i className="feather-edit" />
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check check-tables">
                                <input className="form-check-input" type="checkbox" defaultValue="something" />
                              </div>
                            </td>
                            <td>PRE1534</td>
                            <td>
                              <h2 className="table-avatar">
                                <a href="student-details.html" className="avatar avatar-sm me-2"><img className="avatar-img rounded-circle" src="assets/img/profiles/avatar-04.jpg" alt="User Image" /></a>
                                <a href="student-details.html">Lois&nbsp;A</a>
                              </h2>
                            </td>
                            <td>10 A</td>
                            <td>22 Jul 2006</td>
                            <td>Cleary Wong</td>
                            <td>413 289 1314</td>
                            <td>2844 Leverton Cove Road, Palmer</td>
                            <td className="text-end">
                              <div className="actions ">
                                <a href="javascript:;" className="btn btn-sm bg-success-light me-2 ">
                                  <i className="feather-eye" />
                                </a>
                                <a href="edit-student.html" className="btn btn-sm bg-danger-light">
                                  <i className="feather-edit" />
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check check-tables">
                                <input className="form-check-input" type="checkbox" defaultValue="something" />
                              </div>
                            </td>
                            <td>PRE2153</td>
                            <td>
                              <h2 className="table-avatar">
                                <a href="student-details.html" className="avatar avatar-sm me-2"><img className="avatar-img rounded-circle" src="assets/img/profiles/avatar-05.jpg" alt="User Image" /></a>
                                <a href="student-details.html">Calvin</a>
                              </h2>
                            </td>
                            <td>9 B</td>
                            <td>8 Dec 2003</td>
                            <td>Minnie&nbsp;J&nbsp;Shaffer</td>
                            <td>701 753 3810</td>
                            <td>1900 Hidden Meadow Drive, Crete</td>
                            <td className="text-end">
                              <div className="actions ">
                                <a href="javascript:;" className="btn btn-sm bg-success-light me-2 ">
                                  <i className="feather-eye" />
                                </a>
                                <a href="edit-student.html" className="btn btn-sm bg-danger-light">
                                  <i className="feather-edit" />
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check check-tables">
                                <input className="form-check-input" type="checkbox" defaultValue="something" />
                              </div>
                            </td>
                            <td>PRE1252</td>
                            <td>
                              <h2 className="table-avatar">
                                <a href="student-details.html" className="avatar avatar-sm me-2"><img className="avatar-img rounded-circle" src="assets/img/profiles/avatar-06.jpg" alt="User Image" /></a>
                                <a href="student-details.html">Joe Kelley</a>
                              </h2>
                            </td>
                            <td>11 C</td>
                            <td>7 Oct 2000</td>
                            <td>Vincent Howard</td>
                            <td>402 221 7523</td>
                            <td>3979 Ashwood Drive, Omaha</td>
                            <td className="text-end">
                              <div className="actions ">
                                <a href="javascript:;" className="btn btn-sm bg-success-light me-2 ">
                                  <i className="feather-eye" />
                                </a>
                                <a href="edit-student.html" className="btn btn-sm bg-danger-light">
                                  <i className="feather-edit" />
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check check-tables">
                                <input className="form-check-input" type="checkbox" defaultValue="something" />
                              </div>
                            </td>
                            <td>PRE1434</td>
                            <td>
                              <h2 className="table-avatar">
                                <a href="student-details.html" className="avatar avatar-sm me-2"><img className="avatar-img rounded-circle" src="assets/img/profiles/avatar-07.jpg" alt="User Image" /></a>
                                <a href="student-details.html">Vincent</a>
                              </h2>
                            </td>
                            <td>10 A</td>
                            <td>4 Jan 2002</td>
                            <td>Kelley Joe</td>
                            <td>402 221 7523</td>
                            <td>3979 Ashwood Drive, Omaha</td>
                            <td className="text-end">
                              <div className="actions ">
                                <a href="javascript:;" className="btn btn-sm bg-success-light me-2 ">
                                  <i className="feather-eye" />
                                </a>
                                <a href="edit-student.html" className="btn btn-sm bg-danger-light">
                                  <i className="feather-edit" />
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check check-tables">
                                <input className="form-check-input" type="checkbox" defaultValue="something" />
                              </div>
                            </td>
                            <td>PRE2345</td>
                            <td>
                              <h2 className="table-avatar">
                                <a href="student-details.html" className="avatar avatar-sm me-2"><img className="avatar-img rounded-circle" src="assets/img/profiles/avatar-08.jpg" alt="User Image" /></a>
                                <a href="student-details.html">Kozma&nbsp;&nbsp;Tatari</a>
                              </h2>
                            </td>
                            <td>9 A</td>
                            <td>1 Feb 2006</td>
                            <td>Lombardi</td>
                            <td>04 2239 968</td>
                            <td>Rruga E Kavajes, Condor Center, Tirana</td>
                            <td className="text-end">
                              <div className="actions ">
                                <a href="javascript:;" className="btn btn-sm bg-success-light me-2 ">
                                  <i className="feather-eye" />
                                </a>
                                <a href="edit-student.html" className="btn btn-sm bg-danger-light">
                                  <i className="feather-edit" />
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check check-tables">
                                <input className="form-check-input" type="checkbox" defaultValue="something" />
                              </div>
                            </td>
                            <td>PRE2365</td>
                            <td>
                              <h2 className="table-avatar">
                                <a href="student-details.html" className="avatar avatar-sm me-2"><img className="avatar-img rounded-circle" src="assets/img/profiles/avatar-09.jpg" alt="User Image" /></a>
                                <a href="student-details.html">John Chambers</a>
                              </h2>
                            </td>
                            <td>11 B</td>
                            <td>13 Sept 2003</td>
                            <td>Wong Jeffrey</td>
                            <td>870 663 2334</td>
                            <td>4667 Sunset Drive, Pine Bluff</td>
                            <td className="text-end">
                              <div className="actions ">
                                <a href="javascript:;" className="btn btn-sm bg-success-light me-2 ">
                                  <i className="feather-eye" />
                                </a>
                                <a href="edit-student.html" className="btn btn-sm bg-danger-light">
                                  <i className="feather-edit" />
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check check-tables">
                                <input className="form-check-input" type="checkbox" defaultValue="something" />
                              </div>
                            </td>
                            <td>PRE1234</td>
                            <td>
                              <h2 className="table-avatar">
                                <a href="student-details.html" className="avatar avatar-sm me-2"><img className="avatar-img rounded-circle" src="assets/img/profiles/avatar-10.jpg" alt="User Image" /></a>
                                <a href="student-details.html">Nathan Humphries</a>
                              </h2>
                            </td>
                            <td>10 B</td>
                            <td>26 Apr 1994</td>
                            <td>Stephen Marley</td>
                            <td>077 3499 9959</td>
                            <td>86 Lamphey Road, Thelnetham</td>
                            <td className="text-end">
                              <div className="actions ">
                                <a href="javascript:;" className="btn btn-sm bg-success-light me-2 ">
                                  <i className="feather-eye" />
                                </a>
                                <a href="edit-student.html" className="btn btn-sm bg-danger-light">
                                  <i className="feather-edit" />
                                </a>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer>
            <p>Copyright © 2022 Dreamguys.</p>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default StudentsList
