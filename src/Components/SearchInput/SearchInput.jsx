import styles from './SearchInput.module.css'
import { GoSearch } from "react-icons/go";

 const SearchInput = () => {
  return (
    <main className={styles.search_input}>
        <GoSearch/>
        <input type="text" placeholder='Search'/>
    </main>
    
  )
}
export default SearchInput
