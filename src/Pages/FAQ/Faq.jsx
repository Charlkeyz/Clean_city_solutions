import FAQcomponent from '../../Components/FAQcomponent/FAQcomponent'
import styles from './Faq.module.css'
import { setIsOpenFaq } from '../../Redux/slice/cleanCitySlice';
import { useDispatch, useSelector } from 'react-redux';

const FaqList = [
    {
        id: Math.floor(Math.random() * 1000),
        question: 'How do i schedule a one-time pickup for bulky items?',
        answer: 'You can schedule a one-time pickup by choosing the pickup date and leaving the "recurring" option unchecked'
    },
    {
        id: Math.floor(Math.random() * 1000),
        question: "Do i need to separate my recyclables from regular trash?",
        answer: "You don't need to but it would be appreciated."
    },
    {
        id: Math.floor(Math.random() * 1000),
        question: "What goes in the trash vs recycling",
        answer: "Recyclables can be broadly categorized into paper, plastic and glass. If you are not still sure, please consult the packaging of your goods for more information"
    },
    {
        id: Math.floor(Math.random() * 1000),
        question: "How should i dispose the hazardous waste (batteries, paint, etc.)?",
        answer: "Please separate the hazardous waste in a different bag when preparing for disposal"
    },
]
const Faq = () => {
    
    const toggleArrow = useSelector((state)=> state.Clean_City)
    const dispatch = useDispatch()
    
    function toggleArrowFunc(index){
        dispatch(setIsOpenFaq({index, isOpen: !toggleArrow.isOpenFaq[index]}))
    }
    // toggleArrowFunc()
    
    return(
        <>
            <div className={styles.container}>
                <div className={styles.faq_container}>
                    <h1>Frequently Asked Questions</h1>
                    <FAQcomponent FaqList = {FaqList} toggleArrowFunc = {toggleArrowFunc} toggleArrow ={toggleArrow.isOpenFaq}/>
                </div>
            </div>
        </>
    )
}
export default Faq