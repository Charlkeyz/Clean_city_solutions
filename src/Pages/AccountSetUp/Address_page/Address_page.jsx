import { setInputAddress } from '../../../Redux/slice/cleanCitySlice'
import styles from './Address_page.module.css'
import { useDispatch, useSelector } from 'react-redux'
const Address_page = () => {

  const addressLocation = useSelector((state)=> state.Clean_City)
  const dispatch = useDispatch()

  function handleInputAddress(e){
    const {name, value} = e.target
    dispatch(setInputAddress({name, value}))
    // console.log(value)
  }
  console.log(addressLocation.address.street)


  return (
    <>
        <section className={styles.address_section}>
            <h1>Adress</h1>
            <div className={styles.address_input}>
                <label htmlFor="text">Enter Address</label>
                <input 
                    type="text" 
                    placeholder="Your preffered address"
                    value={addressLocation.street}
                    onInput={handleInputAddress} />
            </div>
            <div className={styles.address_container}>
                <div className={styles.address_line}></div>
                <span>OR</span>
                <div className={styles.address_line}></div>
            </div>
            <div className={styles.address_container1}>
                <h4>Choose from a saved locations</h4>
            </div>
            <h2>{addressLocation.address.street}</h2>
        </section>
    </>
  )
}

export default Address_page