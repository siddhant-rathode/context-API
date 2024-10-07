import { useContext } from "react"
import { DataContext } from "../App"

const Header = () => {
// Step 3: Use Context Data...
const [data, setdata] = useContext(DataContext);

  return (
    <div>Header: {data}</div>
  )
}

export default Header