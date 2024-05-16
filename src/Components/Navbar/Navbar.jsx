/* eslint-disable react/prop-types */
import Logo from '/Dashboard_icons/logo.svg'
import Button from '../Button/Button'
// import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom';
import { VscThreeBars } from "react-icons/vsc";
import { useState } from 'react';
import { IoMdClose } from "react-icons/io";


const Navbar = ({scrollToAboutSection, scrollToPricingPage}) => {
    
    const [toggleNavbar, setToggleNavbar] = useState(false)

    function toggleIcon(){
      setToggleNavbar(!toggleNavbar)
    }
  

   
    return(
       <>
            <div className={styles.navbar}>
                <div className={styles.navbar1}>
                        <div className={styles.logo_container}>
                            <img src={Logo}/>
                            <Link to='/' style={{textDecoration: "none"}}> 
                                <p className={styles.cleanCity}>Clean<span className={styles.city}>City</span></p>
                            </Link>
                        </div>
                        <div className={`${styles.list} ${toggleNavbar ? styles.mobile_list : ""}`}>
                            <Link to='' style={{textDecoration: "none"}} onClick={() => {scrollToAboutSection(); setToggleNavbar(false)}} >
                                <ul className={styles.dropdown}>About Us </ul>
                            </Link>
                                {/* { toggle.resourcesState && <Resources/> } */}

                            <Link to='/services' style={{textDecoration: "none"}}>
                                <ul className={styles.dropdown}>Service </ul>
                            </Link>
                            <Link to='' style={{textDecoration: "none"}} onClick={() => {scrollToPricingPage(); setToggleNavbar(false)}}>
                                <ul className={styles.dropdown}>Pricing Plans </ul>
                            </Link>
                        </div>
                        <button className={styles.mobile_navbar} onClick={toggleIcon}>
                            {
                                toggleNavbar ? <IoMdClose style={{fontSize: "30px", color: "#0486A8"}}/> : <VscThreeBars style={{fontSize: "30px", color: "#0486A8"}}/>
                            
                            }
                        </button>
                </div>
                <div className={styles.navbar2}>
                <Link to='/log_in' style={{textDecoration: "none"}}><ul className={styles.log_in}>Log in</ul></Link>
                        <Link to="sign_up" style={{textDecoration: "none"}}><Button className={styles.create_account}>Create Account</Button></Link>
                </div>

                


            </div>
       
       </>
    )
}
export default Navbar   