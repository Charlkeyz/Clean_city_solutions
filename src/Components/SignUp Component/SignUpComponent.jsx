/* eslint-disable react/prop-types */
import { useState } from 'react';
import styles from './SignUpComponent.module.css'
import { IoMdEyeOff } from "react-icons/io";
import { IoMdEye } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { setFormInput } from '../../Redux/slice/cleanCitySlice';
import { Link } from 'react-router-dom';
import Button from '../../Components/Button/Button'
// import { useHistory } from 'react-router-dom';

// import { Link } from 'react-router-dom';
  // const formFill = useSelector((state)=> state.Clean_City.formInput)



const SignUpComponent = () => {
  const [showPassword, setShowPassword] = useState(false)
  const dispatch = useDispatch()
  const inputForm = useSelector((state)=> state.Clean_City)
  const formFill = useSelector((state)=> state.Clean_City.formInput)
  



  const setFormFill = formFill.name !== "" && formFill.surname !== "" && formFill.email !== "" && formFill.password !== ""
  

  function handlePasswordClick(){
    setShowPassword(!showPassword)
  }
  function handleInputForm(e) {
    const {name, value} = e.target;
    dispatch(setFormInput({ name, value}))
    
  }
  // console.log(inputForm.name)
  // function handleClick(){
  //   if(!setFormFill){
  //     alert("Please fill in all fields")
  //   }return
  // }
  
  return (
    <main className={styles.input_form}>
        <section>
            <h1>Create your account</h1>
            <p>Already have an account? <Link to={'/log_in'} className={styles.log_in}><span>Log in</span></Link> </p>
        </section>
        <form action="" className={styles.mobile_form}>
            <input 
              type="text" 
              placeholder="First name"
              name='name'
              value={inputForm.name}
              onInput={handleInputForm}
            
              />
            <input 
              type="text" 
              placeholder="Last name"
              name='surname'
              value={inputForm.surname}
              onInput={handleInputForm}
          
              />
            <input 
              type="email" 
              placeholder="Email address"
              name='email'
              value={inputForm.email}
              onInput={handleInputForm}
          
              />
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder="Choose password"
              name='password'
              value={inputForm.password}
              onInput={handleInputForm}
          
              />
            <span className={styles.passwordEye} onClick={handlePasswordClick}>{showPassword ? <IoMdEye/> : <IoMdEyeOff/>}</span>

              <div className={styles.buttons}>
                <Link to = { setFormFill ? "/account_setup" : ""} style={{textDecoration: "none"}} onClick={() => {
                    if (!setFormFill) {
                      alert("Please fill in all fields");
                    }
                 }}>
                  <Button className = {styles.signUp_account} type = "submit">Create your account</Button>
                </Link>
                <div className={styles.checkbox}>
                  <input type="checkbox"  className={styles.checkbox1} />
                  <label htmlFor="newsletterCheckbox">Subscribe to our weekly newsletter</label> 
                </div>
              </div>
        </form>
        
    </main>
  )
}
export default SignUpComponent
