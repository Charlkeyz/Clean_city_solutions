/* eslint-disable react/no-unescaped-entities */

import { useSelector } from 'react-redux'
import styles from './WelcomePage.module.css'
const WelcomePage = () => {
  const firstName = useSelector((state)=> state.Clean_City)
  // const firstName = accountName ?  accountName.name : ""
  // console.log(firstName.formInput.name)


  return (
    <main className={styles.welcomeStyling}>
        <section className={styles.welcome_container}>
            <h1>Welcome to Clean City! {firstName.formInput.name} {firstName.formInput.surname}</h1>
            <p>Let's set up your profile in a few easy steps!</p>
            <div className={styles.confirm_pickup}>
                <div className={styles.one}>
                  <p>Enter address</p>
                  <input type="text" placeholder='Your preffered address'/>
                </div>
                <div className={styles.two}>
                  <p>What do you call this place?</p>
                  <input type="text" placeholder='Enter an Alias' />
                </div>
            </div>
        </section>
    </main>
  )
}
export default WelcomePage
