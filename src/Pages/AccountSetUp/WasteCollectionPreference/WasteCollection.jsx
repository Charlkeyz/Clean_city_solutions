import Button from "../../../Components/Button/Button"
// import CalendarDate from "../CalendarDate/CalendarDate"
import styles from "./WasteCollection.module.css"


const WasteCollection = () => {
    return (
      <main>
          <section className={styles.waste_container}>
              <h1>Waste Collection Preferences</h1>
              <p>Specify a waste pickup frequency and the types of waste you generate for a personalized plan.</p>
              {/* <CalendarDate/> */}
              <div className={styles.waste_option}>
                  <p>How often should we collect your waste?</p>
                  <div className={styles.waste_selection}>
                    <select>
                        <option value="">Select an option</option>
                    </select>
                  </div>
              </div>
              <div className={styles.wasteBtn_container}>
                <p>Select the types(s) of waste you generate</p>
                <div className={styles.waste_btn}>
                    <Button className = {styles.wasteBtn}>General</Button>
                    <Button className = {styles.wasteBtn}>Recyclable</Button>
                    <Button className = {styles.wasteBtn}>Green</Button>
                    <Button className = {styles.wasteBtn}>Hazardous</Button>
                    <Button className = {styles.wasteBtn}>Others</Button>
                </div>
              </div>
          </section>
      </main>
    )
  }
  export default WasteCollection
  