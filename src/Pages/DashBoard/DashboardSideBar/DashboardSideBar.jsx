import styles from './DashboardSideBar.module.css'
// import OverviewLogo from '../../assets/overview.svg'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { MdRecycling } from "react-icons/md";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { MdOutlineDashboard } from "react-icons/md";
import { MdOutlinePayments } from "react-icons/md";
import { MdOutlinePersonOutline } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { MdDashboard } from "react-icons/md";



const DashboardSideBar = () => {

  const location = useLocation()
  function isActive(routes){
    return location.pathname === routes
  }


  return (
    <main>
        <section className={styles.DashBoard_section}>
            <div className={styles.DashBoard_sidebar}>
                    <h2><span style={{color: "#0486A8"}}>Clean</span><span style={{color: "#00CA5B"}}>City</span></h2>
                    <div className={styles.DashBoard_ul}>
                      <ul>
                          <Link to="/overview" 
                            style={{
                            textDecoration: "none",
                            color:isActive("/overview") ? "#0486A8" : "black",
                                }}>
                            <li style={{backgroundColor: isActive("/overview") ? "rgba(235, 242, 243, 0.52)" : ""}}>
                              <MdDashboard/>Overview
                            </li>
                          </Link>

                          <Link to="/scheduling"
                            style={{
                            textDecoration: "none",
                            color:isActive("/scheduling") ? "#0486A8" : "black"
                                }}>
                          <li style={{backgroundColor: isActive("/scheduling") ? "rgba(235, 242, 243, 0.52)" : ""}}>
                            <MdOutlineCalendarMonth/>Schedule
                          </li>
                          </Link> 
                          <Link to="/tracking"
                            style={{
                              textDecoration: "none",
                              color:isActive("/tracking") ? "#0486A8" : "black",
                                  }}>
                            <li style={{backgroundColor: isActive("/tracking") ? "rgba(235, 242, 243, 0.52)" : ""}}>
                              <GoLocation/>Tracking
                              </li>      
                          </Link>

                          <Link to="/recycling"
                            style={{
                              textDecoration: "none",
                              color:isActive("/recycling") ? "#0486A8" : "black"
                                }}>
                            <li style={{backgroundColor: isActive("/recycling") ? "rgba(235, 242, 243, 0.52)" : ""}}>
                              <MdRecycling/>Recycling
                              </li>
                            </Link>

                          <li><MdOutlinePayments/>Payments</li>
                          <li ><MdOutlineDashboard/>Community</li>
                          <li><MdOutlinePersonOutline/>Account</li>
                      </ul>
                    </div>
                </div>
        </section>
    </main>
  )
}

export default DashboardSideBar