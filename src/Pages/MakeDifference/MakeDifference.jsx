import styles from './MakeDifference.module.css'
import Button from '../../Components/Button/Button'
import { Link } from 'react-router-dom'
 const MakeDifference = () => {
  return (
    <>
            <div className={styles.container}>
                <h1>Ready to Make a Difference ?</h1>
                <p>Start your journey towards a cleaner Lagos today</p>
                <Link to="/sign_up" style={{textDecoration: "none"}}>
                  <Button>Get started today</Button>
                </Link>
            </div>
    
    </>
  )
}
export default MakeDifference
