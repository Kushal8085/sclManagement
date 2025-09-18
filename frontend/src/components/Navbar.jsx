import React,{useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext.jsx'
import './Navbar.css'


const Navbar = () => {
  const { user, setUser, serverUrl, collapsed, setCollapsed } = useContext(UserDataContext)
  const [active,setActive]=useState('dashboard')
  console.log(user)
  console.log(collapsed)
  return (
    <div  className={`sidebar bg-white vh-100 border-end transition ${collapsed ? "sidebar-collapsed" : "sidebar-expanded"}`} id="sidebar">
          <div className="sidebar-inner slimscroll">
            <div id="sidebar-menu" className="sidebar-menu">
              <ul>
                <li className="menu-title">
                  <span className={collapsed ? "d-none" : "d-inline"}>Main Menu</span>
                </li>
                <li className={`submenu ${active === 'dashboard' ? 'active' : ''}`} onClick={() => setActive('dashboard')}>
                  <Link to={`/${user.role}/dashboard`}><i className="feather-grid" /> <span className={collapsed ? "d-none" : "d-inline"}> Dashboard</span> <span className={collapsed ? "" : "menu-arrow"} /></Link>
                </li>
                <li className={`submenu ${active === 'students' ? 'active' : ''}`} onClick={() => setActive('students')}>
                  <Link to={`/${user.role}/students`}><i className="fas fa-graduation-cap" /> <span className={collapsed ? "d-none" : "d-inline"}> Students</span> <span className={collapsed ? "" : "menu-arrow"} /></Link>
                </li>
                <li className="submenu">
                  <Link to={`/${user.role}/teachers`}><i className="fas fa-chalkboard-teacher" /> <span className={collapsed ? "d-none" : "d-inline"}> Teachers</span> <span className={collapsed ? "" : "menu-arrow"} /></Link>
                  <ul>
                    <li><Link to="teachers.html">Teacher List</Link></li>
                    <li><Link to="teacher-details.html">Teacher View</Link></li>
                    <li><Link to="add-teacher.html">Teacher Add</Link></li>
                    <li><Link to="edit-teacher.html">Teacher Edit</Link></li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link to="#"><i className="fas fa-building" /> <span className={collapsed ? "d-none" : "d-inline"}> Departments</span> <span className={collapsed ? "" : "menu-arrow"} /></Link>
                  <ul>
                    <li><Link to="departments.html">Department List</Link></li>
                    <li><Link to="add-department.html">Department Add</Link></li>
                    <li><Link to="edit-department.html">Department Edit</Link></li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link to="#"><i className="fas fa-book-reader" /> <span className={collapsed ? "d-none" : "d-inline"}> Subjects</span> <span className={collapsed ? "" : "menu-arrow"} /></Link>
                  <ul>
                    <li><Link to="subjects.html">Subject List</Link></li>
                    <li><Link to="add-subject.html">Subject Add</Link></li>
                    <li><Link to="edit-subject.html">Subject Edit</Link></li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link to="#"><i className="fas fa-clipboard" /> <span className={collapsed ? "d-none" : "d-inline"}> Invoices</span> <span className={collapsed ? "" : "menu-arrow"} /></Link>
                  <ul>
                    <li><Link to="invoices.html">Invoices List</Link></li>
                    <li><Link to="invoice-grid.html">Invoices Grid</Link></li>
                    <li><Link to="add-invoice.html">Add Invoices</Link></li>
                    <li><Link to="edit-invoice.html">Edit Invoices</Link></li>
                    <li><Link to="view-invoice.html">Invoices Details</Link></li>
                    <li><Link to="invoices-settings.html">Invoices Settings</Link></li>
                  </ul>
                </li>
                <li className="menu-title">
                  <span className={collapsed ? "d-none" : "d-inline"}>Management</span>
                </li>
                <li className="submenu">
                  <a href="#"><i className="fas fa-file-invoice-dollar" /> <span className={collapsed ? "d-none" : "d-inline"}> Accounts</span> <span className={collapsed ? "" : "menu-arrow"} /></a>
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
                  <a href="holiday.html"><i className="fas fa-holly-berry" /> <span className={collapsed ? "d-none" : "d-inline"}>Holiday</span></a>
                </li>
                <li>
                  <a href="fees.html"><i className="fas fa-comment-dollar" /> <span className={collapsed ? "d-none" : "d-inline"}>Fees</span></a>
                </li>
                <li>
                  <a href="exam.html"><i className="fas fa-clipboard-list" /> <span className={collapsed ? "d-none" : "d-inline"}>Exam list</span></a>
                </li>
                <li>
                  <a href="event.html"><i className="fas fa-calendar-day" /> <span className={collapsed ? "d-none" : "d-inline"}>Events</span></a>
                </li>
                <li>
                  <a href="time-table.html"><i className="fas fa-table" /> <span className={collapsed ? "d-none" : "d-inline"}>Time Table</span></a>
                </li>
                <li>
                  <a href="library.html"><i className="fas fa-book" /> <span className={collapsed ? "d-none" : "d-inline"}>Library</span></a>
                </li>
                <li className="submenu">
                  <a href="#"><i className="fa fa-newspaper" /> <span className={collapsed ? "d-none" : "d-inline"}> Blogs</span>
                    <span className="menu-arrow" />
                  </a>
                  <ul>
                    <li><a href="blog.html">All Blogs</a></li>
                    <li><a href="add-blog.html">Add Blog</a></li>
                    <li><a href="edit-blog.html">Edit Blog</a></li>
                  </ul>
                </li>
                <li>
                  <a href="settings.html"><i className="fas fa-cog" /> <span className={collapsed ? "d-none" : "d-inline"}>Settings</span></a>
                </li>
                <li className="menu-title">
                  <span className={collapsed ? "d-none" : "d-inline"}>Pages</span>
                </li>
                <li className="submenu">
                  <a href="#"><i className="fas fa-shield-alt" /> <span className={collapsed ? "d-none" : "d-inline"}> Authentication </span> <span className={collapsed ? "" : "menu-arrow"} /></a>
                  <ul>
                    <li><a href="login.html">Login</a></li>
                    <li><a href="register.html">Register</a></li>
                    <li><a href="forgot-password.html">Forgot Password</a></li>
                    <li><a href="error-404.html">Error Page</a></li>
                  </ul>
                </li>
                <li>
                  <a href="blank-page.html"><i className="fas fa-file" /> <span className={collapsed ? "d-none" : "d-inline"}>Blank Page</span></a>
                </li>
                <li className="menu-title">
                  <span className={collapsed ? "d-none" : "d-inline"}>Others</span>
                </li>
                <li>
                  <a href="sports.html"><i className="fas fa-baseball-ball" /> <span className={collapsed ? "d-none" : "d-inline"}>Sports</span></a>
                </li>
                <li>
                  <a href="hostel.html"><i className="fas fa-hotel" /> <span className={collapsed ? "d-none" : "d-inline"}>Hostel</span></a>
                </li>
                <li>
                  <a href="transport.html"><i className="fas fa-bus" /> <span className={collapsed ? "d-none" : "d-inline"}>Transport</span></a>
                </li>
                <li className="menu-title">
                  <span className={collapsed ? "d-none" : "d-inline"}>UI Interface</span>
                </li>
                <li className="submenu">
                  <a href="#"><i className="fab fa-get-pocket" /> <span className={collapsed ? "d-none" : "d-inline"}>Base UI </span> <span className={collapsed ? "" : "menu-arrow"} /></a>
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
                  <a href="#"><i data-feather="box" /> <span className={collapsed ? "d-none" : "d-inline"}>Elements </span> <span className={collapsed ? "" : "menu-arrow"} /></a>
                  <ul>
                    <li><Link to="ribbon.html">Ribbon</Link></li>
                    <li><Link to="clipboard.html">Clipboard</Link></li>
                    <li><Link to="drag-drop.html">Drag &amp; Drop</Link></li>
                    <li><Link to="rating.html">Rating</Link></li>
                    <li><Link to="text-editor.html">Text Editor</Link></li>
                    <li><Link to="counter.html">Counter</Link></li>
                    <li><Link to="scrollbar.html">Scrollbar</Link></li>
                    <li><Link to="notification.html">Notification</Link></li>
                    <li><Link to="stickynote.html">Sticky Note</Link></li>
                    <li><Link to="timeline.html">Timeline</Link></li>
                    <li><Link to="horizontal-timeline.html">Horizontal Timeline</Link></li>
                    <li><Link to="form-wizard.html">Form Wizard</Link></li>
                  </ul>
                </li>
                <li className="submenu">
                  <a href="#"><i data-feather="bar-chart-2" /> <span className={collapsed ? "d-none" : "d-inline"}> Charts </span> <span className={collapsed ? "" : "menu-arrow"} /></a>
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
                  <a href="#"><i data-feather="award" /> <span className={collapsed ? "d-none" : "d-inline"}> Icons </span> <span className={collapsed ? "" : "menu-arrow"} /></a>
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
                  <a href="#"><i className="fas fa-columns" /> <span className={collapsed ? "d-none" : "d-inline"}> Forms </span> <span className={collapsed ? "" : "menu-arrow"} /></a>
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
                  <a href="#"><i className="fas fa-table" /> <span className={collapsed ? "d-none" : "d-inline"}> Tables </span> <span className={collapsed ? "" : "menu-arrow"} /></a>
                  <ul>
                    <li><a href="tables-basic.html">Basic Tables </a></li>
                    <li><a href="data-tables.html">Data Table </a></li>
                  </ul>
                </li>
                <li className="submenu">
                  <a href="javascript:void(0);"><i className="fas fa-code" /> <span className={collapsed ? "d-none" : "d-inline"}>Multi Level</span> <span className={collapsed ? "" : "menu-arrow"} /></a>
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
  )
}

export default Navbar
