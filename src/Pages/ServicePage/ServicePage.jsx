import Button from "../../Components/Button/Button"
import Footer from "../../Components/Footer/Footer"
import Navbar from "../../Components/Navbar/Navbar"
import styles from './ServicePage.module.css'

const service_recycle = [
  {
    img: "/Service_image/Frame 523.png",
    heading: "10 Tons of Paper recycled",
    body: "Thats the equivalent of 10,000 40-page notebooks!",
  },
  {
    img: "/Service_image/Frame 524.png",
    heading: "3 Tons of Glass recycled",
    body: "Thats 8,000 fresh bottles of wine.",
  },
  {
    img: "/Service_image/Frame 525.png",
    heading: "8 Tons of Plastic recycled",
    body: "Thats 6,000 water cooler and 4 acres of coaster area reclaimed in the Victoria Island area.",
  }
]
const Our_Partners = [
  "/Service_image/6.png", "/Service_image/9.png", "/Service_image/8.png", "/Service_image/3.png", "/Service_image/2.png"
]

const ServicePage = () => {
  return (
    <div className={styles.service_main}>
        <div className={styles.service_section}>
            <Navbar/>
            <div className={styles.service_container1}>
              <div className={styles.container_style1}>
                <h5>Our Services</h5>
                <h1>Let us handle the heavy lifting</h1>
                <p>Discover the power of waste management and recycling right at your fingertips.</p>
                <Button>Get started today</Button>
              </div>
              <div className={styles.container_style2}>
                <img src="/Service_image/Social media, delivery _ trash, man, media, message, heavy, drag.png" alt="image" />
              </div>
            </div>
            <div className={styles.service_container2}>
              <div className={styles.container2_style1}>
                <div className={styles.service_recycle}>
                  <h3>RECYCLING</h3>
                  <p>Recycle easily and effectively with our hassle-free pickup service. We take great effort to sort the recyclables from the waste we collect from you, helping you reduce environmental impact and contribute to a greener future.</p>
                </div>
                <img src="/Service_image/Ellipse 4.png" alt="ellipse" className={styles.mobile_service_image}/>
              </div>
              <div className={styles.container2_style2}>
                {
                  service_recycle.map((item, index)=> (
                    <div key={index} className={styles.service_items}>
                      <img src={item.img} alt="image" className={styles.mobile_service_image2} />
                      <div className={`${styles.serviceBody} ${index === 2 ? styles.mobilePosition : ""}`}>
                        <h2>{item.heading}</h2>
                        <p>{item.body}</p>
                      </div>
                    </div>
                  ))
                }
              </div>
              <div className={styles.data_service}>
                *Data accurate as at December 2023
              </div>
            </div>
            <div className={styles.service_container3}>
              <img src="/Service_image/Group 11.png" alt="image" />
              <div className={styles.service_wasteCollections}>
                <h3>WASTE COLLECTION</h3>
                <p>We take the hassle out of waste disposal, offering reliable and convenient collection services for homes and businesses.</p>
              </div>
            </div>
            <div className={styles.service_container4}>
              <h1>OUR PARTNERS</h1>
              <div className={styles.our_partners}>
                {
                  Our_Partners.map((item, index)=>(
                    <div key={index}>
                      <img src={item} alt="" className={styles.partners_img}/>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className={styles.service_container5}>
              <div className={styles.service_community}>
                <h1>
                  <span>A COMMUNITY</span>
                  <span>FOR CHANGE</span>
                </h1>
                <h3>JOIN THE CLEAN CITY SOLUTION FAMILY TO LEARN HOW YOU CAN MAKE A CHANGE</h3>
                <div className={styles.service_subscribe}>
                  <p>Subscribe to our weekly newsletter</p>
                  <button>Subscribe</button>
                </div>
              </div>
            </div>
            <Footer/>
        </div>
    </div>
  )
}

export default ServicePage