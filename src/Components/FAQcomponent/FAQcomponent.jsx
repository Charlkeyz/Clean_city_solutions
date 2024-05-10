/* eslint-disable react/prop-types */
import styles from './FAQcomponent.module.css'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const FAQcomponent = (props) => {

    const {FaqList, toggleArrowFunc, toggleArrow} = props
   



    return(
        <>
            
                {
                    FaqList.map((faq, index)=> (
                        <div key={index} className={`${styles.faq_component} ${toggleArrow[index] && styles.increaseHeight}`} onClick={()=>toggleArrowFunc(index)} >
                            <p>{faq.question}</p>
                            <p className={`${styles.noAnswer}   ${toggleArrow[index] && styles.increaseHeight}`}>{faq.answer}</p>

                            <MdOutlineKeyboardArrowDown className={`${styles.arrowDown} ${index === 2 ? styles.mobileArrow : ""} ${ toggleArrow[index] && styles.arrowUp}`}/>
                        </div>
                    ))
                }
            
            
        </>
    )
}
export default FAQcomponent