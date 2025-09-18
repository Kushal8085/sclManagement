import React from 'react'

const TeacherSalary = () => {
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
                <li className="submenu">
                  <a href="#"><i className="feather-grid" /> <span> Dashboard</span> <span className="menu-arrow" /></a>
                  <ul>
                    <li><a href="index.html">Admin Dashboard</a></li>
                    <li><a href="teacher-dashboard.html">Teacher Dashboard</a></li>
                    <li><a href="student-dashboard.html">Student Dashboard</a></li>
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
                <li className="submenu active">
                  <a href="#"><i className="fas fa-clipboard" /> <span> Invoices</span> <span className="menu-arrow" /></a>
                  <ul>
                    <li><a href="invoices.html">Invoices List</a></li>
                    <li><a href="invoice-grid.html" className="active">Invoices Grid</a></li>
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
                <li className="active">
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
              <div className="row align-items-center">
                <div className="col">
                  <h3 className="page-title">Invoice Grid</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                    <li className="breadcrumb-item active">Invoice Grid</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="page-header">
              <div className="row align-items-center">
                <div className="col" />
                <div className="col-auto">
                  <a href="invoices.html" className="invoices-links">
                    <i className="feather feather-list" />
                  </a>
                  <a href="invoice-grid.html" className="invoices-links active">
                    <i className="feather feather-grid" />
                  </a>
                </div>
              </div>
            </div>
            <div className="card report-card">
              <div className="card-body pb-0">
                <div className="row">
                  <div className="col-md-12">
                    <ul className="app-listing">
                      <li>
                        <div className="multipleSelection">
                          <div className="selectBox">
                            <p className="mb-0"><i className="fas fa-user-plus me-1 select-icon" /> Select User</p>
                            <span className="down-icon"><i className="fas fa-chevron-down" /></span>
                          </div>
                          <div id="checkBoxes">
                            <form action="#">
                              <p className="checkbox-title">Customer Search</p>
                              <div className="form-custom">
                                <input type="text" className="form-control bg-grey" placeholder="Enter Customer Name" />
                              </div>
                              <div className="selectBox-cont">
                                <label className="custom_check w-100">
                                  <input type="checkbox" name="username" />
                                  <span className="checkmark" /> Brian Johnson
                                </label>
                                <label className="custom_check w-100">
                                  <input type="checkbox" name="username" />
                                  <span className="checkmark" /> Russell Copeland
                                </label>
                                <label className="custom_check w-100">
                                  <input type="checkbox" name="username" />
                                  <span className="checkmark" /> Greg Lynch
                                </label>
                                <label className="custom_check w-100">
                                  <input type="checkbox" name="username" />
                                  <span className="checkmark" /> John Blair
                                </label>
                                <label className="custom_check w-100">
                                  <input type="checkbox" name="username" />
                                  <span className="checkmark" /> Barbara Moore
                                </label>
                                <label className="custom_check w-100">
                                  <input type="checkbox" name="username" />
                                  <span className="checkmark" /> Hendry Evan
                                </label>
                                <label className="custom_check w-100">
                                  <input type="checkbox" name="username" />
                                  <span className="checkmark" /> Richard Miles
                                </label>
                              </div>
                              <button type="submit" className="btn w-100 btn-primary">Apply</button>
                              <button type="reset" className="btn w-100 btn-grey">Reset</button>
                            </form>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="multipleSelection">
                          <div className="selectBox">
                            <p className="mb-0"><i className="fas fa-calendar me-1 select-icon" /> Select Date</p>
                            <span className="down-icon"><i className="fas fa-chevron-down" /></span>
                          </div>
                          <div id="checkBoxes">
                            <form action="#">
                              <p className="checkbox-title">Date Filter</p>
                              <div className="selectBox-cont selectBox-cont-one h-auto">
                                <div className="date-picker">
                                  <div className="form-custom cal-icon">
                                    <input className="form-control datetimepicker" type="text" placeholder="Form" />
                                  </div>
                                </div>
                                <div className="date-picker pe-0">
                                  <div className="form-custom cal-icon">
                                    <input className="form-control datetimepicker" type="text" placeholder="To" />
                                  </div>
                                </div>
                                <div className="date-list">
                                  <ul>
                                    <li><a href="#" className="btn date-btn">Today</a></li>
                                    <li><a href="#" className="btn date-btn">Yesterday</a></li>
                                    <li><a href="#" className="btn date-btn">Last 7 days</a></li>
                                    <li><a href="#" className="btn date-btn">This month</a></li>
                                    <li><a href="#" className="btn date-btn">Last month</a></li>
                                  </ul>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="multipleSelection">
                          <div className="selectBox">
                            <p className="mb-0"><i className="fas fa-book-open me-1 select-icon" /> Select Status</p>
                            <span className="down-icon"><i className="fas fa-chevron-down" /></span>
                          </div>
                          <div id="checkBoxes">
                            <form action="#">
                              <p className="checkbox-title">By Status</p>
                              <div className="selectBox-cont">
                                <label className="custom_check w-100">
                                  <input type="checkbox" name="name" defaultChecked />
                                  <span className="checkmark" /> All Invoices
                                </label>
                                <label className="custom_check w-100">
                                  <input type="checkbox" name="name" />
                                  <span className="checkmark" /> Paid
                                </label>
                                <label className="custom_check w-100">
                                  <input type="checkbox" name="name" />
                                  <span className="checkmark" /> Overdue
                                </label>
                                <label className="custom_check w-100">
                                  <input type="checkbox" name="name" />
                                  <span className="checkmark" /> Draft
                                </label>
                                <label className="custom_check w-100">
                                  <input type="checkbox" name="name" />
                                  <span className="checkmark" /> Recurring
                                </label>
                                <label className="custom_check w-100">
                                  <input type="checkbox" name="name" />
                                  <span className="checkmark" /> Cancelled
                                </label>
                              </div>
                              <button type="submit" className="btn w-100 btn-primary">Apply</button>
                              <button type="reset" className="btn w-100 btn-grey">Reset</button>
                            </form>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="multipleSelection">
                          <div className="selectBox">
                            <p className="mb-0"><i className="fas fa-bookmark me-1 select-icon" /> By Category</p>
                            <span className="down-icon"><i className="fas fa-chevron-down" /></span>
                          </div>
                          <div id="checkBoxes">
                            <form action="#">
                              <p className="checkbox-title">Category</p>
                              <div className="form-custom">
                                <input type="text" className="form-control bg-grey" placeholder="Enter Category Name" />
                              </div>
                              <div className="selectBox-cont">
                                <label className="custom_check w-100">
                                  <input type="checkbox" name="category" />
                                  <span className="checkmark" /> Advertising
                                </label>
                                <label className="custom_check w-100">
                                  <input type="checkbox" name="category" />
                                  <span className="checkmark" /> Food
                                </label>
                                <label className="custom_check w-100">
                                  <input type="checkbox" name="category" />
                                  <span className="checkmark" /> Marketing
                                </label>
                                <label className="custom_check w-100">
                                  <input type="checkbox" name="category" />
                                  <span className="checkmark" /> Repairs
                                </label>
                                <label className="custom_check w-100">
                                  <input type="checkbox" name="category" />
                                  <span className="checkmark" /> Software
                                </label>
                                <label className="custom_check w-100">
                                  <input type="checkbox" name="category" />
                                  <span className="checkmark" /> Stationary
                                </label>
                                <label className="custom_check w-100">
                                  <input type="checkbox" name="category" />
                                  <span className="checkmark" /> Travel
                                </label>
                              </div>
                              <button type="submit" className="btn w-100 btn-primary">Apply</button>
                              <button type="reset" className="btn w-100 btn-grey">Reset</button>
                            </form>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="report-btn">
                          <a href="#" className="btn">
                            <img src="/assets/img/icons/invoices-icon5.png" alt="" className="me-2" /> Generate report
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="card invoices-tabs-card border-0">
              <div className="card-body card-body pt-0 pb-0">
                <div className="invoices-main-tabs border-0 pb-0">
                  <div className="row align-items-center">
                    <div className="col-lg-12 col-md-12">
                      <div className="invoices-settings-btn invoices-settings-btn-one">
                        <a href="invoices-settings.html" className="invoices-settings-icon">
                          <i className="feather feather-settings" />
                        </a>
                        <a href="add-invoice.html" className="btn">
                          <i className="feather feather-plus-circle" /> New Invoice
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-lg-4 col-xl-3 d-flex">
                <div className="card invoices-grid-card w-100">
                  <div className="card-header d-flex justify-content-between align-items-center">
                    <a href="view-invoice.html" className="invoice-grid-link">IN093439#@09</a>
                    <div className="dropdown dropdown-action">
                      <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v" /></a>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a className="dropdown-item" href="edit-invoice.html"><i className="far fa-edit me-2" />Edit</a>
                        <a className="dropdown-item" href="view-invoice.html"><i className="far fa-eye me-2" />View</a>
                        <a className="dropdown-item" href="javascript:void(0);"><i className="far fa-trash-alt me-2" />Delete</a>
                      </div>
                    </div>
                  </div>
                  <div className="card-middle">
                    <h2 className="card-middle-avatar">
                      <a href="profile.html"><img className="avatar avatar-sm me-2 avatar-img rounded-circle" src="/assets/img/profiles/avatar-04.jpg" alt="User Image" /> Barbara Moore</a>
                    </h2>
                  </div>
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col">
                        <span><i className="far fa-money-bill-alt" /> Amount</span>
                        <h6 className="mb-0">$1,54,220</h6>
                      </div>
                      <div className="col-auto">
                        <span><i className="far fa-calendar-alt" /> Due Date</span>
                        <h6 className="mb-0">23 Mar, 2022</h6>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="row align-items-center">
                      <div className="col-auto">
                        <span className="badge bg-success-dark">Paid</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 col-xl-3 d-flex">
                <div className="card invoices-grid-card w-100">
                  <div className="card-header d-flex justify-content-between align-items-center">
                    <a href="view-invoice.html" className="invoice-grid-link">IN093439#@10</a>
                    <div className="dropdown dropdown-action">
                      <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v" /></a>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a className="dropdown-item" href="edit-invoice.html"><i className="far fa-edit me-2" />Edit</a>
                        <a className="dropdown-item" href="view-invoice.html"><i className="far fa-eye me-2" />View</a>
                        <a className="dropdown-item" href="javascript:void(0);"><i className="far fa-trash-alt me-2" />Delete</a>
                      </div>
                    </div>
                  </div>
                  <div className="card-middle">
                    <h2 className="card-middle-avatar">
                      <a href="profile.html"><img className="avatar avatar-sm me-2 avatar-img rounded-circle" src="/assets/img/profiles/avatar-06.jpg" alt="User Image" /> Karlene Chaidez</a>
                    </h2>
                  </div>
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col">
                        <span><i className="far fa-money-bill-alt" /> Amount</span>
                        <h6 className="mb-0">$1,222</h6>
                      </div>
                      <div className="col-auto">
                        <span><i className="far fa-calendar-alt" /> Due Date</span>
                        <h6 className="mb-0">18 Mar 2022</h6>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="row align-items-center">
                      <div className="col-auto">
                        <span className="badge bg-danger-dark">Overdue</span>
                      </div>
                      <div className="col text-end">
                        <span className="text-danger text-sm">Overdue 14 days</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 col-xl-3 d-flex">
                <div className="card invoices-grid-card w-100">
                  <div className="card-header d-flex justify-content-between align-items-center">
                    <a href="view-invoice.html" className="invoice-grid-link">IN093439#@11</a>
                    <div className="dropdown dropdown-action">
                      <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v" /></a>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a className="dropdown-item" href="edit-invoice.html"><i className="far fa-edit me-2" />Edit</a>
                        <a className="dropdown-item" href="view-invoice.html"><i className="far fa-eye me-2" />View</a>
                        <a className="dropdown-item" href="javascript:void(0);"><i className="far fa-trash-alt me-2" />Delete</a>
                      </div>
                    </div>
                  </div>
                  <div className="card-middle">
                    <h2 className="card-middle-avatar">
                      <a href="profile.html"><img className="avatar avatar-sm me-2 avatar-img rounded-circle" src="/assets/img/profiles/avatar-08.jpg" alt="User Image" /> Russell Copeland</a>
                    </h2>
                  </div>
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col">
                        <span><i className="far fa-money-bill-alt" /> Amount</span>
                        <h6 className="mb-0">$3,470</h6>
                      </div>
                      <div className="col-auto">
                        <span><i className="far fa-calendar-alt" /> Due Date</span>
                        <h6 className="mb-0">10 Mar 2022</h6>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="row align-items-center">
                      <div className="col-auto">
                        <span className="badge bg-secondary-dark">Cancelled</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 col-xl-3 d-flex">
                <div className="card invoices-grid-card w-100">
                  <div className="card-header d-flex justify-content-between align-items-center">
                    <a href="view-invoice.html" className="invoice-grid-link">IN093439#@12</a>
                    <div className="dropdown dropdown-action">
                      <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v" /></a>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a className="dropdown-item" href="edit-invoice.html"><i className="far fa-edit me-2" />Edit</a>
                        <a className="dropdown-item" href="view-invoice.html"><i className="far fa-eye me-2" />View</a>
                        <a className="dropdown-item" href="javascript:void(0);"><i className="far fa-trash-alt me-2" />Delete</a>
                      </div>
                    </div>
                  </div>
                  <div className="card-middle">
                    <h2 className="card-middle-avatar">
                      <a href="profile.html"><img className="avatar avatar-sm me-2 avatar-img rounded-circle" src="/assets/img/profiles/avatar-10.jpg" alt="User Image" /> Joseph Collins</a>
                    </h2>
                  </div>
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col">
                        <span><i className="far fa-money-bill-alt" /> Amount</span>
                        <h6 className="mb-0">$8,265</h6>
                      </div>
                      <div className="col-auto">
                        <span><i className="far fa-calendar-alt" /> Due Date</span>
                        <h6 className="mb-0">30 Mar 2022</h6>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="row align-items-center">
                      <div className="col-auto">
                        <span className="badge bg-primary-dark">Sent</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 col-xl-3 d-flex">
                <div className="card invoices-grid-card w-100">
                  <div className="card-header d-flex justify-content-between align-items-center">
                    <a href="view-invoice.html" className="invoice-grid-link">IN093439#@13</a>
                    <div className="dropdown dropdown-action">
                      <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v" /></a>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a className="dropdown-item" href="edit-invoice.html"><i className="far fa-edit me-2" />Edit</a>
                        <a className="dropdown-item" href="view-invoice.html"><i className="far fa-eye me-2" />View</a>
                        <a className="dropdown-item" href="javascript:void(0);"><i className="far fa-trash-alt me-2" />Delete</a>
                      </div>
                    </div>
                  </div>
                  <div className="card-middle">
                    <h2 className="card-middle-avatar">
                      <a href="profile.html"><img className="avatar avatar-sm me-2 avatar-img rounded-circle" src="/assets/img/profiles/avatar-11.jpg" alt="User Image" /> Jennifer Floyd</a>
                    </h2>
                  </div>
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col">
                        <span><i className="far fa-money-bill-alt" /> Amount</span>
                        <h6 className="mb-0">$5,200</h6>
                      </div>
                      <div className="col-auto">
                        <span><i className="far fa-calendar-alt" /> Due Date</span>
                        <h6 className="mb-0">20 Mar 2022</h6>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="row align-items-center">
                      <div className="col-auto">
                        <span className="badge bg-secondary-dark">Cancelled</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 col-xl-3 d-flex">
                <div className="card invoices-grid-card w-100">
                  <div className="card-header d-flex justify-content-between align-items-center">
                    <a href="view-invoice.html" className="invoice-grid-link">IN093439#@14</a>
                    <div className="dropdown dropdown-action">
                      <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v" /></a>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a className="dropdown-item" href="edit-invoice.html"><i className="far fa-edit me-2" />Edit</a>
                        <a className="dropdown-item" href="view-invoice.html"><i className="far fa-eye me-2" />View</a>
                        <a className="dropdown-item" href="javascript:void(0);"><i className="far fa-trash-alt me-2" />Delete</a>
                      </div>
                    </div>
                  </div>
                  <div className="card-middle">
                    <h2 className="card-middle-avatar">
                      <a href="profile.html"><img className="avatar avatar-sm me-2 avatar-img rounded-circle" src="/assets/img/profiles/avatar-09.jpg" alt="User Image" /> Leatha Bailey</a>
                    </h2>
                  </div>
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col">
                        <span><i className="far fa-money-bill-alt" /> Amount</span>
                        <h6 className="mb-0">$480</h6>
                      </div>
                      <div className="col-auto">
                        <span><i className="far fa-calendar-alt" /> Due Date</span>
                        <h6 className="mb-0">15 Mar 2022</h6>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="row align-items-center">
                      <div className="col-auto">
                        <span className="badge bg-primary-dark">Sent</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 col-xl-3 d-flex">
                <div className="card invoices-grid-card w-100">
                  <div className="card-header d-flex justify-content-between align-items-center">
                    <a href="view-invoice.html" className="invoice-grid-link">IN093439#@15</a>
                    <div className="dropdown dropdown-action">
                      <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v" /></a>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a className="dropdown-item" href="edit-invoice.html"><i className="far fa-edit me-2" />Edit</a>
                        <a className="dropdown-item" href="view-invoice.html"><i className="far fa-eye me-2" />View</a>
                        <a className="dropdown-item" href="javascript:void(0);"><i className="far fa-trash-alt me-2" />Delete</a>
                      </div>
                    </div>
                  </div>
                  <div className="card-middle">
                    <h2 className="card-middle-avatar">
                      <a href="profile.html"><img className="avatar avatar-sm me-2 avatar-img rounded-circle" src="/assets/img/profiles/avatar-12.jpg" alt="User Image" /> Alex Campbell</a>
                    </h2>
                  </div>
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col">
                        <span><i className="far fa-money-bill-alt" /> Amount</span>
                        <h6 className="mb-0">$1,999</h6>
                      </div>
                      <div className="col-auto">
                        <span><i className="far fa-calendar-alt" /> Due Date</span>
                        <h6 className="mb-0">08 Mar 2022</h6>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="row align-items-center">
                      <div className="col-auto">
                        <span className="badge bg-danger-dark">Overdue</span>
                      </div>
                      <div className="col text-end">
                        <span className="text-danger text-sm">Overdue 10 days</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 col-xl-3 d-flex">
                <div className="card invoices-grid-card w-100">
                  <div className="card-header d-flex justify-content-between align-items-center">
                    <a href="view-invoice.html" className="invoice-grid-link">IN093439#@016</a>
                    <div className="dropdown dropdown-action">
                      <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v" /></a>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a className="dropdown-item" href="edit-invoice.html"><i className="far fa-edit me-2" />Edit</a>
                        <a className="dropdown-item" href="view-invoice.html"><i className="far fa-eye me-2" />View</a>
                        <a className="dropdown-item" href="javascript:void(0);"><i className="far fa-trash-alt me-2" />Delete</a>
                      </div>
                    </div>
                  </div>
                  <div className="card-middle">
                    <h2 className="card-middle-avatar">
                      <a href="profile.html"><img className="avatar avatar-sm me-2 avatar-img rounded-circle" src="/assets/img/profiles/avatar-03.jpg" alt="User Image" /> Marie Canales</a>
                    </h2>
                  </div>
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col">
                        <span><i className="far fa-money-bill-alt" /> Amount</span>
                        <h6 className="mb-0">$2,700</h6>
                      </div>
                      <div className="col-auto">
                        <span><i className="far fa-calendar-alt" /> Due Date</span>
                        <h6 className="mb-0">18 Mar, 2022</h6>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="row align-items-center">
                      <div className="col-auto">
                        <span className="badge bg-success-dark">Paid</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="invoice-load-btn">
                  <a href="#" className="btn">
                    <span className="spinner-border text-primary" /> Load more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeacherSalary
