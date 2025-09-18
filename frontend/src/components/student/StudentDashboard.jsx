import React from 'react'

const StudentDashboard = () => {
  return (
    <div>
        <div className="main-wrapper">
          <div className="header">
            <div className="header-left">
              <a href="index.html" className="logo">
                <img src="/assets/img/logo.png" alt="Logo" />
              </a>
              <a href="index.html" className="logo logo-small">
                <img src="/assets/img/logo-small.png" alt="Logo" width={30} height={30} />
              </a>
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
                  <img src="/assets/img/icons/header-icon-01.svg" alt="" />
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="javascript:;"><i className="flag flag-lr me-2" />English</a>
                  <a className="dropdown-item" href="javascript:;"><i className="flag flag-bl me-2" />Francais</a>
                  <a className="dropdown-item" href="javascript:;"><i className="flag flag-cn me-2" />Turkce</a>
                </div>
              </li>
              <li className="nav-item dropdown noti-dropdown me-2">
                <a href="#" className="dropdown-toggle nav-link header-nav-list" data-bs-toggle="dropdown">
                  <img src="/assets/img/icons/header-icon-05.svg" alt="" />
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
                              <img className="avatar-img rounded-circle" alt="User Image" src="/assets/img/profiles/avatar-02.jpg" />
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
                              <img className="avatar-img rounded-circle" alt="User Image" src="/assets/img/profiles/avatar-11.jpg" />
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
                              <img className="avatar-img rounded-circle" alt="User Image" src="/assets/img/profiles/avatar-17.jpg" />
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
                              <img className="avatar-img rounded-circle" alt="User Image" src="/assets/img/profiles/avatar-13.jpg" />
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
                  <img src="/assets/img/icons/header-icon-04.svg" alt="" />
                </a>
              </li>
              <li className="nav-item dropdown has-arrow new-user-menus">
                <a href="#" className="dropdown-toggle nav-link" data-bs-toggle="dropdown">
                  <span className="user-img">
                    <img className="rounded-circle" src="/assets/img/profiles/avatar-01.jpg" width={31} alt="Ryan Taylor" />
                    <div className="user-text">
                      <h6>Ryan Taylor</h6>
                      <p className="text-muted mb-0">Administrator</p>
                    </div>
                  </span>
                </a>
                <div className="dropdown-menu">
                  <div className="user-header">
                    <div className="avatar avatar-sm">
                      <img src="/assets/img/profiles/avatar-01.jpg" alt="User Image" className="avatar-img rounded-circle" />
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
          <div className="sidebar" id="sidebar">
            <div className="sidebar-inner slimscroll">
              <div id="sidebar-menu" className="sidebar-menu">
                <ul>
                  <li className="menu-title">
                    <span>Main Menu</span>
                  </li>
                  <li className="submenu active">
                    <a href="#"><i className="feather-grid" /> <span> Dashboard</span> <span className="menu-arrow" /></a>
                    <ul>
                      <li><a href="index.html">Admin Dashboard</a></li>
                      <li><a href="teacher-dashboard.html">Teacher Dashboard</a></li>
                      <li><a href="student-dashboard.html" className="active">Student Dashboard</a></li>
                    </ul>
                  </li>
                  <li className="submenu">
                    <a href="#"><i className="fas fa-graduation-cap" /> <span> Students</span> <span className="menu-arrow" /></a>
                    <ul>
                      <li><a href="students.html">Student List</a></li>
                      <li><a href="student-details.html">Student View</a></li>
                      <li><a href="add-student.html">Student Add</a></li>
                      <li><a href="edit-student.html">Student Edit</a></li>
                    </ul>
                  </li>
                  <li className="submenu">
                    <a href="#"><i className="fas fa-chalkboard-teacher" /> <span> Teachers</span> <span className="menu-arrow" /></a>
                    <ul>
                      <li><a href="teachers.html">Teacher List</a></li>
                      <li><a href="teacher-details.html">Teacher View</a></li>
                      <li><a href="add-teacher.html">Teacher Add</a></li>
                      <li><a href="edit-teacher.html">Teacher Edit</a></li>
                    </ul>
                  </li>
                  <li className="submenu">
                    <a href="#"><i className="fas fa-building" /> <span> Departments</span> <span className="menu-arrow" /></a>
                    <ul>
                      <li><a href="departments.html">Department List</a></li>
                      <li><a href="add-department.html">Department Add</a></li>
                      <li><a href="edit-department.html">Department Edit</a></li>
                    </ul>
                  </li>
                  <li className="submenu">
                    <a href="#"><i className="fas fa-book-reader" /> <span> Subjects</span> <span className="menu-arrow" /></a>
                    <ul>
                      <li><a href="subjects.html">Subject List</a></li>
                      <li><a href="add-subject.html">Subject Add</a></li>
                      <li><a href="edit-subject.html">Subject Edit</a></li>
                    </ul>
                  </li>
                  <li className="submenu">
                    <a href="#"><i className="fas fa-clipboard" /> <span> Invoices</span> <span className="menu-arrow" /></a>
                    <ul>
                      <li><a href="invoices.html">Invoices List</a></li>
                      <li><a href="invoice-grid.html">Invoices Grid</a></li>
                      <li><a href="add-invoice.html">Add Invoices</a></li>
                      <li><a href="edit-invoice.html">Edit Invoices</a></li>
                      <li><a href="view-invoice.html">Invoices Details</a></li>
                      <li><a href="invoices-settings.html">Invoices Settings</a></li>
                    </ul>
                  </li>
                  <li className="menu-title">
                    <span>Management</span>
                  </li>
                  <li className="submenu">
                    <a href="#"><i className="fas fa-file-invoice-dollar" /> <span> Accounts</span> <span className="menu-arrow" /></a>
                    <ul>
                      <li><a href="fees-collections.html">Fees Collection</a></li>
                      <li><a href="expenses.html">Expenses</a></li>
                      <li><a href="salary.html">Salary</a></li>
                      <li><a href="add-fees-collection.html">Add Fees</a></li>
                      <li><a href="add-expenses.html">Add Expenses</a></li>
                      <li><a href="add-salary.html">Add Salary</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="holiday.html"><i className="fas fa-holly-berry" /> <span>Holiday</span></a>
                  </li>
                  <li>
                    <a href="fees.html"><i className="fas fa-comment-dollar" /> <span>Fees</span></a>
                  </li>
                  <li>
                    <a href="exam.html"><i className="fas fa-clipboard-list" /> <span>Exam list</span></a>
                  </li>
                  <li>
                    <a href="event.html"><i className="fas fa-calendar-day" /> <span>Events</span></a>
                  </li>
                  <li>
                    <a href="time-table.html"><i className="fas fa-table" /> <span>Time Table</span></a>
                  </li>
                  <li>
                    <a href="library.html"><i className="fas fa-book" /> <span>Library</span></a>
                  </li>
                  <li className="submenu">
                    <a href="#"><i className="fa fa-newspaper" /> <span> Blogs</span>
                      <span className="menu-arrow" />
                    </a>
                    <ul>
                      <li><a href="blog.html">All Blogs</a></li>
                      <li><a href="add-blog.html">Add Blog</a></li>
                      <li><a href="edit-blog.html">Edit Blog</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="settings.html"><i className="fas fa-cog" /> <span>Settings</span></a>
                  </li>
                  <li className="menu-title">
                    <span>Pages</span>
                  </li>
                  <li className="submenu">
                    <a href="#"><i className="fas fa-shield-alt" /> <span> Authentication </span> <span className="menu-arrow" /></a>
                    <ul>
                      <li><a href="login.html">Login</a></li>
                      <li><a href="register.html">Register</a></li>
                      <li><a href="forgot-password.html">Forgot Password</a></li>
                      <li><a href="error-404.html">Error Page</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="blank-page.html"><i className="fas fa-file" /> <span>Blank Page</span></a>
                  </li>
                  <li className="menu-title">
                    <span>Others</span>
                  </li>
                  <li>
                    <a href="sports.html"><i className="fas fa-baseball-ball" /> <span>Sports</span></a>
                  </li>
                  <li>
                    <a href="hostel.html"><i className="fas fa-hotel" /> <span>Hostel</span></a>
                  </li>
                  <li>
                    <a href="transport.html"><i className="fas fa-bus" /> <span>Transport</span></a>
                  </li>
                  <li className="menu-title">
                    <span>UI Interface</span>
                  </li>
                  <li className="submenu">
                    <a href="#"><i className="fab fa-get-pocket" /> <span>Base UI </span> <span className="menu-arrow" /></a>
                    <ul>
                      <li><a href="alerts.html">Alerts</a></li>
                      <li><a href="accordions.html">Accordions</a></li>
                      <li><a href="avatar.html">Avatar</a></li>
                      <li><a href="badges.html">Badges</a></li>
                      <li><a href="buttons.html">Buttons</a></li>
                      <li><a href="buttongroup.html">Button Group</a></li>
                      <li><a href="breadcrumbs.html">Breadcrumb</a></li>
                      <li><a href="cards.html">Cards</a></li>
                      <li><a href="carousel.html">Carousel</a></li>
                      <li><a href="dropdowns.html">Dropdowns</a></li>
                      <li><a href="grid.html">Grid</a></li>
                      <li><a href="images.html">Images</a></li>
                      <li><a href="lightbox.html">Lightbox</a></li>
                      <li><a href="media.html">Media</a></li>
                      <li><a href="modal.html">Modals</a></li>
                      <li><a href="offcanvas.html">Offcanvas</a></li>
                      <li><a href="pagination.html">Pagination</a></li>
                      <li><a href="popover.html">Popover</a></li>
                      <li><a href="progress.html">Progress Bars</a></li>
                      <li><a href="placeholders.html">Placeholders</a></li>
                      <li><a href="rangeslider.html">Range Slider</a></li>
                      <li><a href="spinners.html">Spinner</a></li>
                      <li><a href="sweetalerts.html">Sweet Alerts</a></li>
                      <li><a href="tab.html">Tabs</a></li>
                      <li><a href="toastr.html">Toasts</a></li>
                      <li><a href="tooltip.html">Tooltip</a></li>
                      <li><a href="typography.html">Typography</a></li>
                      <li><a href="video.html">Video</a></li>
                    </ul>
                  </li>
                  <li className="submenu">
                    <a href="#"><i data-feather="box" /> <span>Elements </span> <span className="menu-arrow" /></a>
                    <ul>
                      <li><a href="ribbon.html">Ribbon</a></li>
                      <li><a href="clipboard.html">Clipboard</a></li>
                      <li><a href="drag-drop.html">Drag &amp; Drop</a></li>
                      <li><a href="rating.html">Rating</a></li>
                      <li><a href="text-editor.html">Text Editor</a></li>
                      <li><a href="counter.html">Counter</a></li>
                      <li><a href="scrollbar.html">Scrollbar</a></li>
                      <li><a href="notification.html">Notification</a></li>
                      <li><a href="stickynote.html">Sticky Note</a></li>
                      <li><a href="timeline.html">Timeline</a></li>
                      <li><a href="horizontal-timeline.html">Horizontal Timeline</a></li>
                      <li><a href="form-wizard.html">Form Wizard</a></li>
                    </ul>
                  </li>
                  <li className="submenu">
                    <a href="#"><i data-feather="bar-chart-2" /> <span> Charts </span> <span className="menu-arrow" /></a>
                    <ul>
                      <li><a href="chart-apex.html">Apex Charts</a></li>
                      <li><a href="chart-js.html">Chart Js</a></li>
                      <li><a href="chart-morris.html">Morris Charts</a></li>
                      <li><a href="chart-flot.html">Flot Charts</a></li>
                      <li><a href="chart-peity.html">Peity Charts</a></li>
                      <li><a href="chart-c3.html">C3 Charts</a></li>
                    </ul>
                  </li>
                  <li className="submenu">
                    <a href="#"><i data-feather="award" /> <span> Icons </span> <span className="menu-arrow" /></a>
                    <ul>
                      <li><a href="icon-fontawesome.html">Fontawesome Icons</a></li>
                      <li><a href="icon-feather.html">Feather Icons</a></li>
                      <li><a href="icon-ionic.html">Ionic Icons</a></li>
                      <li><a href="icon-material.html">Material Icons</a></li>
                      <li><a href="icon-pe7.html">Pe7 Icons</a></li>
                      <li><a href="icon-simpleline.html">Simpleline Icons</a></li>
                      <li><a href="icon-themify.html">Themify Icons</a></li>
                      <li><a href="icon-weather.html">Weather Icons</a></li>
                      <li><a href="icon-typicon.html">Typicon Icons</a></li>
                      <li><a href="icon-flag.html">Flag Icons</a></li>
                    </ul>
                  </li>
                  <li className="submenu">
                    <a href="#"><i className="fas fa-columns" /> <span> Forms </span> <span className="menu-arrow" /></a>
                    <ul>
                      <li><a href="form-basic-inputs.html">Basic Inputs </a></li>
                      <li><a href="form-input-groups.html">Input Groups </a></li>
                      <li><a href="form-horizontal.html">Horizontal Form </a></li>
                      <li><a href="form-vertical.html"> Vertical Form </a></li>
                      <li><a href="form-mask.html"> Form Mask </a></li>
                      <li><a href="form-validation.html"> Form Validation </a></li>
                    </ul>
                  </li>
                  <li className="submenu">
                    <a href="#"><i className="fas fa-table" /> <span> Tables </span> <span className="menu-arrow" /></a>
                    <ul>
                      <li><a href="tables-basic.html">Basic Tables </a></li>
                      <li><a href="data-tables.html">Data Table </a></li>
                    </ul>
                  </li>
                  <li className="submenu">
                    <a href="javascript:void(0);"><i className="fas fa-code" /> <span>Multi Level</span> <span className="menu-arrow" /></a>
                    <ul>
                      <li className="submenu">
                        <a href="javascript:void(0);"> <span>Level 1</span> <span className="menu-arrow" /></a>
                        <ul>
                          <li><a href="javascript:void(0);"><span>Level 2</span></a></li>
                          <li className="submenu">
                            <a href="javascript:void(0);"> <span> Level 2</span> <span className="menu-arrow" /></a>
                            <ul>
                              <li><a href="javascript:void(0);">Level 3</a></li>
                              <li><a href="javascript:void(0);">Level 3</a></li>
                            </ul>
                          </li>
                          <li><a href="javascript:void(0);"> <span>Level 2</span></a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="javascript:void(0);"> <span>Level 1</span></a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="page-wrapper">
            <div className="content container-fluid">
              <div className="page-header">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="page-sub-header">
                      <h3 className="page-title">Welcome Bruklin!</h3>
                      <ul className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item active">Student</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-3 col-sm-6 col-12 d-flex">
                  <div className="card bg-comman w-100">
                    <div className="card-body">
                      <div className="db-widgets d-flex justify-content-between align-items-center">
                        <div className="db-info">
                          <h6>All Courses</h6>
                          <h3>04/06</h3>
                        </div>
                        <div className="db-icon">
                          <img src="/assets/img/icons/teacher-icon-01.svg" alt="Dashboard Icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6 col-12 d-flex">
                  <div className="card bg-comman w-100">
                    <div className="card-body">
                      <div className="db-widgets d-flex justify-content-between align-items-center">
                        <div className="db-info">
                          <h6>All Projects</h6>
                          <h3>40/60</h3>
                        </div>
                        <div className="db-icon">
                          <img src="/assets/img/icons/teacher-icon-02.svg" alt="Dashboard Icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6 col-12 d-flex">
                  <div className="card bg-comman w-100">
                    <div className="card-body">
                      <div className="db-widgets d-flex justify-content-between align-items-center">
                        <div className="db-info">
                          <h6>Test Attended</h6>
                          <h3>30/50</h3>
                        </div>
                        <div className="db-icon">
                          <img src="/assets/img/icons/student-icon-01.svg" alt="Dashboard Icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6 col-12 d-flex">
                  <div className="card bg-comman w-100">
                    <div className="card-body">
                      <div className="db-widgets d-flex justify-content-between align-items-center">
                        <div className="db-info">
                          <h6>Test Passed</h6>
                          <h3>15/20</h3>
                        </div>
                        <div className="db-icon">
                          <img src="/assets/img/icons/student-icon-02.svg" alt="Dashboard Icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-lg-12 col-xl-8">
                  <div className="card flex-fill comman-shadow">
                    <div className="card-header">
                      <div className="row align-items-center">
                        <div className="col-6">
                          <h5 className="card-title">Today’s Lesson</h5>
                        </div>
                        <div className="col-6">
                          <ul className="chart-list-out">
                            <li><span className="circle-blue" /><span className="circle-gray" /><span className="circle-gray" /></li>
                            <li className="lesson-view-all"><a href="#">View All</a></li>
                            <li className="star-menus"><a href="javascript:;"><i className="fas fa-ellipsis-v" /></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="dash-circle">
                      <div className="row">
                        <div className="col-lg-3 col-md-3 dash-widget1">
                          <div className="circle-bar circle-bar2">
                            <div className="circle-graph2" data-percent={80}>
                              <b>80%</b>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-3">
                          <div className="dash-details">
                            <div className="lesson-activity">
                              <div className="lesson-imgs">
                                <img src="/assets/img/icons/lesson-icon-01.svg" alt="" />
                              </div>
                              <div className="views-lesson">
                                <h5>Class</h5>
                                <h4>Electrical Engg</h4>
                              </div>
                            </div>
                            <div className="lesson-activity">
                              <div className="lesson-imgs">
                                <img src="/assets/img/icons/lesson-icon-02.svg" alt="" />
                              </div>
                              <div className="views-lesson">
                                <h5>Lessons</h5>
                                <h4>5 Lessons</h4>
                              </div>
                            </div>
                            <div className="lesson-activity">
                              <div className="lesson-imgs">
                                <img src="/assets/img/icons/lesson-icon-03.svg" alt="" />
                              </div>
                              <div className="views-lesson">
                                <h5>Time</h5>
                                <h4>Lessons</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-3">
                          <div className="dash-details">
                            <div className="lesson-activity">
                              <div className="lesson-imgs">
                                <img src="/assets/img/icons/lesson-icon-04.svg" alt="" />
                              </div>
                              <div className="views-lesson">
                                <h5>Asignment</h5>
                                <h4>5 Asignment</h4>
                              </div>
                            </div>
                            <div className="lesson-activity">
                              <div className="lesson-imgs">
                                <img src="/assets/img/icons/lesson-icon-05.svg" alt="" />
                              </div>
                              <div className="views-lesson">
                                <h5>Staff</h5>
                                <h4>John Doe</h4>
                              </div>
                            </div>
                            <div className="lesson-activity">
                              <div className="lesson-imgs">
                                <img src="/assets/img/icons/lesson-icon-06.svg" alt="" />
                              </div>
                              <div className="views-lesson">
                                <h5>Lesson Learned</h5>
                                <h4>10/50</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-3 d-flex align-items-center justify-content-center">
                          <div className="skip-group">
                            <button type="submit" className="btn btn-info skip-btn">skip</button>
                            <button type="submit" className="btn btn-info continue-btn">Continue</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-lg-12 col-xl-12 d-flex">
                      <div className="card flex-fill comman-shadow">
                        <div className="card-header">
                          <div className="row align-items-center">
                            <div className="col-6">
                              <h5 className="card-title">Learning Activity</h5>
                            </div>
                            <div className="col-6">
                              <ul className="chart-list-out">
                                <li><span className="circle-blue" />Teacher</li>
                                <li><span className="circle-green" />Student</li>
                                <li className="star-menus"><a href="javascript:;"><i className="fas fa-ellipsis-v" /></a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="card-body">
                          <div id="apexcharts-area" />
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-12 col-xl-12 d-flex">
                      <div className="card flex-fill comman-shadow">
                        <div className="card-header d-flex align-items-center">
                          <h5 className="card-title">Teaching History</h5>
                          <ul className="chart-list-out student-ellips">
                            <li className="star-menus"><a href="javascript:;"><i className="fas fa-ellipsis-v" /></a></li>
                          </ul>
                        </div>
                        <div className="card-body">
                          <div className="teaching-card">
                            <ul className="steps-history">
                              <li>Sep22</li>
                              <li>Sep23</li>
                              <li>Sep24</li>
                            </ul>
                            <ul className="activity-feed">
                              <li className="feed-item d-flex align-items-center">
                                <div className="dolor-activity">
                                  <span className="feed-text1"><a>Mathematics</a></span>
                                  <ul className="teacher-date-list">
                                    <li><i className="fas fa-calendar-alt me-2" />September 5, 2022</li>
                                    <li>|</li>
                                    <li><i className="fas fa-clock me-2" />09:00 am - 10:00 am (60 Minutes)</li>
                                  </ul>
                                </div>
                                <div className="activity-btns ms-auto">
                                  <button type="submit" className="btn btn-info">In Progress</button>
                                </div>
                              </li>
                              <li className="feed-item d-flex align-items-center">
                                <div className="dolor-activity">
                                  <span className="feed-text1"><a>Geography </a></span>
                                  <ul className="teacher-date-list">
                                    <li><i className="fas fa-calendar-alt me-2" />September 5, 2022</li>
                                    <li>|</li>
                                    <li><i className="fas fa-clock me-2" />09:00 am - 10:00 am (60 Minutes)</li>
                                  </ul>
                                </div>
                                <div className="activity-btns complete ms-auto">
                                  <button type="submit" className="btn btn-info">Completed</button>
                                </div>
                              </li>
                              <li className="feed-item d-flex align-items-center">
                                <div className="dolor-activity">
                                  <span className="feed-text1"><a>Botony</a></span>
                                  <ul className="teacher-date-list">
                                    <li><i className="fas fa-calendar-alt me-2" />September 5, 2022</li>
                                    <li>|</li>
                                    <li><i className="fas fa-clock me-2" />09:00 am - 10:00 am (60 Minutes)</li>
                                  </ul>
                                </div>
                                <div className="activity-btns ms-auto">
                                  <button type="submit" className="btn btn-info">In Progress</button>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-12 col-xl-4 d-flex">
                  <div className="card flex-fill comman-shadow">
                    <div className="card-body">
                      <div id="calendar-doctor" className="calendar-container" />
                      <div className="calendar-info calendar-info1">
                        <div className="up-come-header">
                          <h2>Upcoming Events</h2>
                          <span><a href="javascript:;"><i className="feather-plus" /></a></span>
                        </div>
                        <div className="upcome-event-date">
                          <h3>10 Jan</h3>
                          <span><i className="fas fa-ellipsis-h" /></span>
                        </div>
                        <div className="calendar-details">
                          <p>08:00 am</p>
                          <div className="calendar-box normal-bg">
                            <div className="calandar-event-name">
                              <h4>Botony</h4>
                              <h5>Lorem ipsum sit amet</h5>
                            </div>
                            <span>08:00 - 09:00 am</span>
                          </div>
                        </div>
                        <div className="calendar-details">
                          <p>09:00 am</p>
                          <div className="calendar-box normal-bg">
                            <div className="calandar-event-name">
                              <h4>Botony</h4>
                              <h5>Lorem ipsum sit amet</h5>
                            </div>
                            <span>09:00 - 10:00 am</span>
                          </div>
                        </div>
                        <div className="calendar-details">
                          <p>10:00 am</p>
                          <div className="calendar-box normal-bg">
                            <div className="calandar-event-name">
                              <h4>Botony</h4>
                              <h5>Lorem ipsum sit amet</h5>
                            </div>
                            <span>10:00 - 11:00 am</span>
                          </div>
                        </div>
                        <div className="upcome-event-date">
                          <h3>10 Jan</h3>
                          <span><i className="fas fa-ellipsis-h" /></span>
                        </div>
                        <div className="calendar-details">
                          <p>08:00 am</p>
                          <div className="calendar-box normal-bg">
                            <div className="calandar-event-name">
                              <h4>English</h4>
                              <h5>Lorem ipsum sit amet</h5>
                            </div>
                            <span>08:00 - 09:00 am</span>
                          </div>
                        </div>
                        <div className="calendar-details">
                          <p>09:00 am</p>
                          <div className="calendar-box normal-bg">
                            <div className="calandar-event-name">
                              <h4>Mathematics </h4>
                              <h5>Lorem ipsum sit amet</h5>
                            </div>
                            <span>09:00 - 10:00 am</span>
                          </div>
                        </div>
                        <div className="calendar-details">
                          <p>10:00 am</p>
                          <div className="calendar-box normal-bg">
                            <div className="calandar-event-name">
                              <h4>History</h4>
                              <h5>Lorem ipsum sit amet</h5>
                            </div>
                            <span>10:00 - 11:00 am</span>
                          </div>
                        </div>
                        <div className="calendar-details">
                          <p>11:00 am</p>
                          <div className="calendar-box break-bg">
                            <div className="calandar-event-name">
                              <h4>Break</h4>
                              <h5>Lorem ipsum sit amet</h5>
                            </div>
                            <span>11:00 - 12:00 am</span>
                          </div>
                        </div>
                        <div className="calendar-details">
                          <p>11:30 am</p>
                          <div className="calendar-box normal-bg">
                            <div className="calandar-event-name">
                              <h4>History</h4>
                              <h5>Lorem ipsum sit amet</h5>
                            </div>
                            <span>11:30 - 12:00 am</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <footer>
              <p>Copyright © 2025 Dreamguys.</p>
            </footer>
          </div>
        </div>
      </div>
  )
}

export default StudentDashboard
