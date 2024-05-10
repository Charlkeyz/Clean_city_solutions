/* eslint-disable react/prop-types */
import styles from './DashboardCard.module.css'
 const DashboardCard = ({heading, massKg, image, body, index}) => {
  return (
    <main>
        <section className={styles.containerCard}>
            <div className={styles.container} style={{
                color: index === 0 ? "#035F77": index === 2 ? "#00CA5B": index === 3 ? "#FF3838" : ""
            }}>
                <h4>{heading}</h4>
                <h1 style={{fontSize: 35, width: "98px"}}>{`${massKg}${index !== 3 ? "kg": ""}`}</h1>
                <div className={styles.imageContainer} style={{
                    backgroundColor: index === 0 ? "#EEF7F9": index === 1 ? "#F6F6F6" : index === 2 ? "#DBF7E7": index === 3 ? "#FEF0F0" : ""

                }}><img src={image} alt="image" /></div>
            </div>
            <p className={styles.cardBody}>{body}</p>
        </section>
    </main>
  )
}
export default DashboardCard
