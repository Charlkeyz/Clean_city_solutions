import { useState } from "react";
import Button from "../../Components/Button/Button"
import styles from "./AccountSetUp.module.css"
import TypeOfBuilding from "./TypeOfBuilding/TypeOfBuilding"
import WasteCollection from "./WasteCollectionPreference/WasteCollection";
import WelcomePage from "./welcome_page/WelcomePage"
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Address_page from "./Address_page/Address_page";
import { useSelector } from 'react-redux'

// import { setMoveToAddress } from "../../Redux/slice/cleanCitySlice";



 const AccountSetUp = () => {

  const [pageIndex, setPageIndex] = useState(0);

  function next(){
    setPageIndex(prev => prev + 1)
  }
  function prev(){
    setPageIndex(prev => prev - 1)
  }

  const displayAddress = useSelector((state)=> state.Clean_City)
  // console.log(displayAddress)


  return (
    <main className={styles.mainWelcome}>
        <section className={styles.sectionWelcome}>
            <img src="/BackgroundImages/Background_image.jpg" alt="image" />
            <div className={styles.setUp_account_container}>
              <div className={styles.arrow_container}>
                {pageIndex !== 0 &&<FaArrowLeft onClick={prev}/>}
              </div>
              <div className={styles.account_tracker}>
                <span style={{backgroundColor: "#0486A8"}}></span>
                <span style={{backgroundColor: pageIndex === 1 || pageIndex === 2 ? "#0486A8" : ""}}></span>
                <span style={{backgroundColor: pageIndex === 2 ? "#0486A8" : ""}}></span>
              </div>
              <div className={styles.welcome_container}>
                
              {pageIndex === 0 && displayAddress.moveToAddress ?<Address_page/> : pageIndex === 0 ? <WelcomePage/> : null}
              {pageIndex === 1 &&<TypeOfBuilding/>}
              {pageIndex === 2 &&<WasteCollection/>}
              </div>
              <div className={styles.next_page}>
                {
                  pageIndex === 2 ? (
                    <Link to='/' style={{textDecoration: "none"}}>
                      <Button className = {styles.finish_btn}>Finish</Button>
                    </Link>
                    ) : (
                    <Button className = {styles.next_button} onClick = {next}>Continue</Button>
                  )
                }
                {pageIndex !==2 && <span onClick={prev}>Skip</span>}
            </div>
            </div>
            
        </section>
    </main>
  )
}
export default AccountSetUp
