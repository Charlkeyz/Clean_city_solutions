/* eslint-disable react/prop-types */
import styles from './Button.module.css'
const Button = (props) => {
    const {className, children, onClick, type} = props


    
    return(
        
            <button className={`${styles.button} ${className}`} onClick={onClick} type={type}>{children}</button>
    
    )
}
export default Button