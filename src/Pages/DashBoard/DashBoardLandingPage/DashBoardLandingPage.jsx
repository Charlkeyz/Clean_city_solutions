
import {Routes, Route} from "react-router-dom"
import DashBoard from "../DashBoard"
import DashBoardOverview from "../DashBoardOverview/DashBoardOverview"
import DashBoardSchedule from "../DashBoardSchedule/DashBoardSchedule"

const DashBoardLandingPage = () => {
  return (
    <>
    <div>
        <DashBoard/>   
        <Routes>
            <Route path="/*" element={<DashBoard/>}/>
            <Route path="/overview" element={<DashBoardOverview/>}/>
            <Route path="/scheduling" element={<DashBoardSchedule/>}/>
        </Routes>
    </div>
    </>
  )
}
export default DashBoardLandingPage
