/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from 'react-redux'
// import Button from '../../Components/Button/Button'
import styles from './OurPricingPage.module.css'
import { setPricing } from '../../Redux/slice/cleanCitySlice'
import { TbCurrencyNaira } from "react-icons/tb";
import { FaCircleCheck } from "react-icons/fa6";
import { useState, useEffect } from 'react';

// import { Pricing } from '../../Redux/pricing';

const OurPricingPage = ({pricingSection}) => {

    const PricingData = useSelector((state)=> state.Clean_City)
    const dispatch = useDispatch()
    const [changeAmount, setChangeAmount] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)

    function goToNextSlide(index){
        setCurrentIndex(index)
    }
    function nextSlide(){
        setCurrentIndex((prev)=> 
        prev === PricingData.Pricing.length - 1 ? 0 : prev + 1)
    }

    function handleClick(){
        dispatch(setPricing(PricingData.Pricing))
        setChangeAmount(true)
    }
    
    useEffect(() => {
        const intervalId = setInterval(nextSlide, 5000); // Auto slide every 5 seconds
        return () => clearInterval(intervalId); // Clean up on unmount
      }, [currentIndex]);
      

    
  return (
    <>
        <div className={styles.pricing_main} ref={pricingSection}>
            <section className={styles.pricing_section}>
                <div className={styles.pricing_container}>
                    <h1>Our Pricing Plans</h1>
                    <div className={styles.pricing_buttons}>
                        <button onClick={()=> {setChangeAmount(false)}} className = {`${styles.btn_residential} ${changeAmount && styles.pricingBtn1}`}>Residential</button>
                        <button onClick={handleClick} className = {`${styles.btn_commercial} ${changeAmount && styles.pricingBtn2}`}>Commercial</button>
                    </div>
                    <div className={`${styles.pricing_container_menu} ${styles.mobile_container_menu}`}>
                        {
                            PricingData.Pricing.map((item, index)=> {
                                const {periods, amount, kg, body1, body2, subscribe, newAmount} = item
                                return(
                                    <div key={index} className={`${styles.pricing_menu} ${index === currentIndex ? styles.active : styles.inactive} ${index === 1 ? styles.pricing_menu1: ""}`}>
                                        <h2>{periods}</h2>
                                        <div className={styles.pricing_amount}>
                                            <TbCurrencyNaira style={{fontSize: "46px", fontWeight: 700, }}/><h1>{changeAmount ? newAmount : amount}<span>{kg}</span></h1>
                                        </div>
                                        <div className={styles.pricing_body}>
                                            <FaCircleCheck style={{fontSize: index !== 0 ? "25px" : "30px"}}/><p>{body1}</p>
                                        </div>
                                        <div className={styles.pricing_body}>
                                            <FaCircleCheck style={{fontSize: "30px"}}/><p>{body2}</p>
                                        </div>
                                        <div className={styles.pricing_subscribe} style={{ top: index === 1 ? "225px" : ""}}>
                                            <span style={{color: index === 0 ? "#9B9B9B" : "white"}}>{subscribe}</span>
                                        </div>

                                    </div>
                                )
                            })
                        }
                        <div className={styles.slide_dots}>
                                {PricingData.Pricing.map((_, index)=> (
                                <div 
                                key={index} 
                                className={index === currentIndex ? `${styles.sliderbar} ${styles.activeBar}`: styles.sliderbar}
                                onClick={()=> goToNextSlide(index)}></div>
                            ))}
                        </div> 
                    </div>
                    <div className={styles.pricing_menuBackground}></div>

                </div>

            </section>
        </div>
    </>
  )
}

export default OurPricingPage