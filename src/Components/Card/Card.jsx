import styles from './Card.module.css'
const Card = () => {
        const cardData = [
            {
                id: Math.floor(Math.random() * 1000),
                img: "/Example2.png",
                header: "Intuitive Dashboard and Scheduling",
                text: "Effortlessly manage your waste disposal needs with our user-friendly dashboard. Schedule pickups, track upcoming collections, and streamline your waste management tasks. Clean City Solutions brings convenience to your fingertips."   
   
            },
            {
                id: Math.floor(Math.random() * 1000),
                img: "/image 1.png",
                header: "Empowering Recycling Initiatives",
                text: "Join the recycling revolution with Clean City Solutions. Discover the impact of responsible waste disposal by engaging in our recycling initiatives. Connect with recycling centers, contribute to a sustainable future, and be part of the change."   
            },
            {
                id: Math.floor(Math.random() * 1000),
                img: "/Frame 18.png",
                header: "Real-Time Tracking",
                text: "Experience transparency like never before with our real-time tracking feature. Know exactly when your waste collection is scheduled, track the progress, and receive timely updates. Your peace of mind starts with visibility."   
            }
            
        ]
        

        
    return(
        <>

            <div>
                {/* <img src={cardData[0].img} alt="page" /> */}
            </div>
            {
                cardData.map((item, index)=> (
                    
                    <div key={index} className={styles.container}>
                        <div className= {`${styles.card_container} ${index === 1 ? styles.image: ""}`}>
                            <img src={item.img} alt="img" />
                            <div className={styles.text_container}>
                                <h1>{item.header}</h1>
                                <p>{item.text}</p>
                            </div>
                        </div>
                    </div>
            

                ))

            }
        </>
    )
}
export default Card