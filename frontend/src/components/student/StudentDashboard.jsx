import React from 'react'
import Header from '../Header'
import Navbar from '../Navbar'

const StudentDashboard = () => {
  return (
    <div>
        <div className="main-wrapper">
          <Header/>
          <Navbar/>
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
