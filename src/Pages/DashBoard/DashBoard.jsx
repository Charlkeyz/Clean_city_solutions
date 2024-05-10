// import DashboardOverviewComponent from '../../Components/Dashboard_Overview/DashboardOverviewComponent'
import DashboardSideBar from './DashboardSideBar/DashboardSideBar'
import SearchInput from '../../Components/SearchInput/SearchInput'
import styles from './DashBoard.module.css'
import { useSelector } from 'react-redux'




const  DashBoard = () => {
  const userName = useSelector((state)=> state.Clean_City)

  return (
    <main className={styles.DashBoard_Container}>
        <section>
            <DashboardSideBar/>
            <div className={styles.searchButton}>
              <SearchInput/>
              <div className={styles.user_name}>
                <h2>Hello, {userName.formInput.name}</h2>
                <p>Monitor all your activities here</p>
              </div>
            </div>
            
            
            {/* <DashBoardOverview/> */}

        </section>
    </main>
  )
}

export default DashBoard