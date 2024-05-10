import Navbar from "../../Components/Navbar/Navbar"
import Home from "../Home/Home"
import Card from "../../Components/Card/Card"
import Faq from "../FAQ/Faq"
import MakeDifference from "../MakeDifference/MakeDifference"
import Footer from "../../Components/Footer/Footer"
import AboutUs from "../AboutUsPage/AboutUs"
import OurPricingPage from "../OurPricingPage/OurPricingPage"
import { useRef } from "react"

const LandingPage = () => {
  const aboutSectionRef = useRef(null)
  const pricingSection = useRef(null)

  function scrollToAboutSection (){
    if (aboutSectionRef.current) {
      window.scrollTo({
        top: aboutSectionRef.current.offsetTop,
        behavior: 'smooth'
      });
    }
  }
  function scrollToPricingPage(){
    if (pricingSection.current) {
      window.scrollTo({
        top: pricingSection.current.offsetTop,
        behavior: 'smooth'
      });
    }
  }
  return (
    <main>
     <Navbar scrollToAboutSection = {scrollToAboutSection} scrollToPricingPage={scrollToPricingPage}/>
      <Home/>
      <Card/>
      <AboutUs aboutSectionRef = {aboutSectionRef}/>
      <OurPricingPage pricingSection = {pricingSection}/>
      <Faq/>
      <MakeDifference/>
      <Footer/>
    </main>
  )
}
export default LandingPage
