import { useContext } from "react"
import { todocontext } from "../contexts/TodoContext"

const Nav = () => {
  const data = useContext(todocontext);
  return (
    <div>Nav: {data}</div>
  )
}

export default Nav