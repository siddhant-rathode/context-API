import { useContext } from "react"
import { DataContext } from "../App"

const Navchild = () => {
    // Step 3: Use Context Data...
    const [data, setdata] = useContext(DataContext);
  return (
    <div>Navchild: {data}</div>
  )
}

export default Navchild