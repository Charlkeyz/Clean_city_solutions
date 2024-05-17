 import Button from '../../Components/Button/Button'
 import { FcGoogle } from "react-icons/fc";
import SignUpComponent from '../../Components/SignUp Component/SignUpComponent'
import styles from './SignUp.module.css'

 const SignUp = () => {

  // const formFill = useSelector((state)=> state.Clean_City.formInput)
  // const [confirmInput, setConfirmInput] = useState(false)

  // function handleClick(){
  //   setConfirmInput(true)
  // }

  // const setFormFill = formFill.name !== "" && formFill.surname !== "" && formFill.email !== "" && formFill.password !== ""
  
  
  return (
    <>
        <main className={styles.sign_up_container}>
          <section className={styles.background_container}>
            <img className={styles.image} src="/BackgroundImages/Background_image.jpg" alt="Sign-Up image" />
            <div className={styles.create_account}>
              <SignUpComponent/>
              
              <div className={styles.sign_up_subContainer}>
                  <div className={styles.continue}>
                      <div className={styles.line}></div>
                      <p>or continue with</p>
                      <div className={styles.line}></div> 
                  </div>
                  <div className={styles.googleBtn}>
                    <Button className = {styles.googleSignIn}><FcGoogle className={styles.googleIcon}/> Google</Button>
                  </div>
                  <div className={styles.termsConditions}>
                    <p>By creating an account you agree to our <span>Terms & Conditions</span> and our <span>Privacy Policy</span>.</p>
                  </div>
              </div>
            </div>
          </section>
        </main>
    </>
  )
}
export default SignUp
