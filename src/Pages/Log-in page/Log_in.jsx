import styles from './Log_in.module.css'
import Button from '../../Components/Button/Button'
import { FcGoogle } from "react-icons/fc";
import LogIn_Component from '../../Components/LogIn Component/LogIn_Component';
import { Link } from 'react-router-dom';

const Log_in = () => {


 
 return (
   <>
       <main className={styles.log_in_container}>
         <section className={styles.background_container}>
           <img className={styles.image} src="/BackgroundImages/Background_image.jpg" alt="Sign-Up image" />
           <div className={styles.log_in_account}>
            <LogIn_Component/>
             <div className={styles.buttons}>
               <Link to="/account_setup" style={{textDecoration: "none"}}>
                 <Button className = {styles.log_in_btn}>Continue</Button>
               </Link>
             </div>
             <div className={styles.continue}>
                 <div className={styles.line}></div>
                 <p>or continue with</p>
                 <div className={styles.line}></div> 
             </div>
             <div className={styles.googleBtn}>
               <Button className = {styles.googleSignIn}><FcGoogle className={styles.googleIcon}/> Google</Button>
             </div>
             <div className={styles.termsConditions}>
               <p> <span>Terms & Conditions</span> and our <span>Privacy Policy</span> apply.</p>
             </div>
           </div>
         </section>
       </main>
   </>
 )
}
export default Log_in
