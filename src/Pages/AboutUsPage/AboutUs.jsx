/* eslint-disable react/prop-types */
import Button from '../../Components/Button/Button'
import styles from './AboutUs.module.css'
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";


const aboutData = [
  {
    id: 1,
    image: "/BackgroundImages/unsplash_Rfflri94rs8.png",
    heading: "Making an impact on your beautiful planet",
    paragraph: "At clean Solutions our plans is to make a lasting impact on the wat we treat our environment as a society by providing top class recycling and waste management services to individuals and businesses",
  },
  {
    id: 2,
    image: "/BackgroundImages/unsplash_community.png",
    heading: "Creating a community for change",
    paragraph: "We at Clean City Solutions believe that to make a lasting change we need to empower each other to make small changes in our lives. That is why we have created several blogs and workshops to inform our members on what they can do to make the world a better place",
  },
  {
    id: 3,
    image: "/BackgroundImages/unsplash_vision.png",
    heading: "Committed to seeing the vision through",
    paragraph: "Clean City Solutions goes the extra mile by going into problem areas where there is nobody to take control of the situation such as rivers and lakes where refuse dumping is causing harm to the environment",
  },
]
const AboutUs = ({aboutSectionRef}) => {
  // console.log(aboutSectionRef)
  return (
    <main ref={aboutSectionRef}>
        <section className={styles.aboutUs_container} >
          <h1 style={{fontSize: 60}}>About Us</h1>
          <div className={styles.mobile_aboutUs}>
            {
              aboutData.map((item, index)=> (
                <div key={index} className={`${styles.aboutUs} ${index === 1 ? styles.aboutUs_reverse : ""}`}>
                  <img src={item.image} alt="image" />
                  <div className={styles.heading_paragraph}>
                    <h1>{item.heading}</h1>
                    <p>{item.paragraph}</p>
                    {
                      index === 1 && <div className={styles.aboutUs_index1}>
                        <Button className = {styles.aboutSignIn} >Sign up</Button>
                        <p>Subscribe to our weekly newsletter</p>
                      </div>
                    }
                    {
                      index === 2 && <div className={styles.aboutUs_index2}>
                        <div  className={styles.socialIcon_container}>
                          <p className={styles.aboutUs_socialIcons}><FaTwitter className={styles.socialIcons}/></p>
                          <p className={styles.aboutUs_socialIcons}><FaFacebookF className={styles.socialIcons}/></p>
                          <p className={styles.aboutUs_socialIcons}><FaLinkedinIn className={styles.socialIcons}/></p>
                        </div>
                        <p>Follow us on all socials to find out where we are going next</p>
                      </div>
                      
                    }
                  </div>
                </div>
              ))
            }
          </div>
            
        </section>
    </main>
  )
}
export default AboutUs
