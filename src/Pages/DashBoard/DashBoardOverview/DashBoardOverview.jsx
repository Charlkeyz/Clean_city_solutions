import DashBoardCollections from "../DashBoardCollections/DashBoardCollections"
import DashboardCard from '../Dashboardcard/DashboardCard'
import styles from './DashBoardOverview.module.css'

const DashBoardData = [
    {
      heading: "Recyclable",
      massKg: 150,
      img: "/src/assets/dashboardImages/recycle.svg",
      body: "Contribute to a sustainable future with recycling"
    },
    {
      heading: "General Waste",
      massKg: 325,
      img: "/src/assets/dashboardImages/waste.svg",
      body: "Manage your general waste responsibly"
    },
    {
      heading: "Green",
      massKg: 210,
      img: "/src/assets/dashboardImages/green.svg",
      body: "Keep our environment green and clean"
    },
    {
      heading: "Hazardous",
      massKg: "---",
      img: "/src/assets/dashboardImages/hazardous.svg",
      body: "Handle hazardous waste with care"
    },
  ]

const DashBoardOverview = () => {
  return (
    <>
        <div className={styles.dashboardData}>
              {
                DashBoardData.map((item, index)=> (
                  <DashboardCard key={index} index={index} heading={item.heading} massKg={item.massKg} image={item.img} body={item.body}/>
                ))
              }
        </div>
        <DashBoardCollections/>
    </>
  )
}
export default DashBoardOverview
