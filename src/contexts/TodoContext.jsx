import { createContext } from "react"

export const todocontext = createContext(null);

const TodoContext = (props) => {
    console.log(props);
  return (
    <todocontext.Provider value="bdjhf">
        {props.children}
    </todocontext.Provider>
  )
}

export default TodoContext