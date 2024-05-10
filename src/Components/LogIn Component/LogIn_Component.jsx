/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import styles from './LogIn_Component.module.css'
import { IoMdEyeOff } from "react-icons/io";
import { IoMdEye } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { setFormInput } from '../../Redux/slice/cleanCitySlice';
import { Link } from 'react-router-dom';
const LogIn_Component = () => {
  const [showPassword, setShowPassword] = useState(false)
  const dispatch = useDispatch()
  const inputForm = useSelector((state)=> state.Clean_City)

  

  function handlePasswordClick(){
    setShowPassword(!showPassword)
  }
  function handleInputForm(e) {
    const {name, value} = e.target;
    dispatch(setFormInput({ name, value}))
    // console.log(inputForm.formInput)

  }

  
  return (
    <main className={styles.log_in_form}>
        <section>
            <h1>Log in</h1>
            <p>Don't have an account? <Link to='/sign_up' className={styles.log_in}><span>Sign Up</span></Link></p>
        </section>
        <form action="">
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
        </form>
        
    </main>
  )
}
export default LogIn_Component
