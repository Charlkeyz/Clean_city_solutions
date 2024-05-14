import styles from './Footer.module.css'
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import LogoFooter from '../../../public/Dashboard_icons/logo1.svg'
// import { PiCopyrightBold } from "react-icons/pi";
import { MdOutlineCopyright } from "react-icons/md";

const footerData = [
    {
        header: "Our Service",
        list: ["Residential Waste Collection", "Recycling", "One-time Collections", "Request a Quote"],
    },
    {
        header: "Our Partners",
        list: ["LAGESC", "FMWRS"],
    },
    {
        header: "Learn More",
        list: ["About Us", "FAQ", "Contact Us"],
    },
    {
        header: "Resources",
        list: ["Article", "Site Guides", "Video Tutorials"],
    },
]  

const Footer = () => {
    return(
        <>
            <main className={styles.footer_main}>
                <section className={styles.footer_section}>
                    <div className={styles.footerList}>
                        {
                            footerData.map((item, index)=> (
                                <div key={index} className={styles.footer}>
                                    <h3>{item.header}</h3>
                                    <ul>
                                        {
                                            item.list.map((lists, listIndex)=> (
                                                <li key={listIndex}>{lists}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            ))
                        }
                    </div>
                    
                    <div className={styles.socialMediaLogo}>
                        <FaTwitter className={styles.socialMedia_logo}/>
                        <FaFacebook className={styles.socialMedia_logo}/>
                        <FaYoutube className={styles.socialMedia_logo}/>
                        <FaInstagram className={styles.socialMedia_logo}/>
                        <FaTiktok className={styles.socialMedia_logo}/>
                    </div> 

                </section>
                <div className={styles.footer_section1}>
                    <div className={styles.line}></div>
                    <div className={styles.footer_section2}>
                        <div className={styles.logo_footer}>
                            <img src={LogoFooter} alt="logoFooter" className={styles.logo} />
                            <p className={styles.cleanCity}>Clean<span className={styles.city}>City</span></p>
                        </div>
                        <div className={styles.copyright_container}>
                            <p><MdOutlineCopyright style={{position: "relative", top: "2px"}}/>2024 Clean City Solutions Ltd. <span>Terms of Use</span><span>Privacy policy</span></p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
export default Footer