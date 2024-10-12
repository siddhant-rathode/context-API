import { useContext } from "react"
import { todocontext } from "../utils/Wrapper"

const Nav = () => {
  const [data,setData] = useContext(todocontext);
  return (
    <div>Nav: {data}</div>
  )
}

export default Nav