import { Link } from "react-router-dom"
import Button from "../../../Components/Button/Button"
import styles from './DashBoardCollections.module.css'
import { setMoveToAddress } from "../../../Redux/slice/cleanCitySlice"
import { useDispatch, useSelector } from "react-redux"

const Collections = [
    {
        header: "Waste",
        collections: ["Recyclable", "General", "Green", "General"],
    },
    {
        header: "Status",
        collections: ["Collected", "Failed", "Collected", "Cancelled"],
    },
    {
        header: "Location",
        collections: ["8 Edigbe Str", "8 Edigbe Str", "8 Edigbe Str", "8 Edigbe Str"],
    },
    {
        header: "Quantity",
        collections: ["12kg", "20kg", "16kg", "39kg"],
    },
    {
        header: "Date",
        collections: ["01/03/2024", "12/02/2024", "24/01/2024", "15/01/2024"],
    },  
]
const DashBoardCollections = () => {
    const linkToAddress = useSelector((state)=> state.Clean_City)
    const dispatch = useDispatch()

    function moveToPage(){
        dispatch(setMoveToAddress(true))
    console.log("1", linkToAddress.moveToAddress)

    }


  return (
    <main className={styles.collection_main}>
        <section className={styles.collection_section}>
            <div className={styles.collectionContainer}>
                <h2>Collections</h2>
                <Link to="/account_setup" style={{textDecoration: "none"}} onClick={moveToPage} >
                    <Button className={styles.make_request} >Schedule pick-up</Button>
                </Link>
            </div>
            <div className={styles.collectionSelect}><span>Upcoming</span><span>History</span></div>
            <div className={styles.collection_container}>
                {
                    Collections.map((item, index)=> (
                        <div key={index} className={styles.collections}>
                            <h4>{item.header}</h4>
                            <ul>
                                {
                                    item.collections.map((collection, collectionIndex)=> (
                                        <li key={collectionIndex}>{collection}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    ))
                }
            </div>
        </section>
        <div className={styles.collection_pickup}>
            <div className={styles.collection_pickup1}>
                <h4>Pickup Locations</h4>
                <img src="/dashboardImages/Frame 483.png" alt="house" />
            </div>
            <div className={styles.pickup_line}></div>
        </div>
    </main>
  )
}
export default DashBoardCollections
