import { useContext } from "react"
import { DataContext } from "../App"
import Navchild from "./Navchild"

const Nav = () => {
  // Step 3: Use Context Data...
  const [data, setdata] = useContext(DataContext);
  return (
    <>
    <div>Nav: {data}</div>
    <Navchild/>
    </>
  )
}

export default Nav