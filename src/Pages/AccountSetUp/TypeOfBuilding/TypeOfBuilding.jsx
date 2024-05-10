import Button from '../../../Components/Button/Button'
import styles from './TypeOfBuilding.module.css'
const TypeOfBuilding = () => {
    return (
      <main>
          <section className={styles.building_container}>
              <h1>Type of Building</h1>
              <p>Tell us more about your property to help us tailor our waste management services to suit your specific needs.</p>
              <div className={styles.building_type}>
                  <p>What is your building type?</p>
                  <div className={styles.building_btn}>
                    <Button className = {styles.buildingBtn}>Residential</Button>
                    <Button className = {styles.buildingBtn}>Commercial</Button>
                    <Button className = {styles.buildingBtn}>Industrial</Button>
                    <Button className = {styles.buildingBtn}>Infrastructure</Button>
                    <Button className = {styles.buildingBtn}>Others</Button>
                  </div>
              </div>
          </section>
      </main>
    )
  }
  export default TypeOfBuilding