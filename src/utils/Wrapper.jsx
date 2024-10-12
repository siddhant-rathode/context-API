import { createContext, useState } from "react"

export const todocontext = createContext(null);

const Wrapper = (props) => {
    const [data, setData] = useState("important data");
  return (
    <todocontext.Provider value={[data, setData]}>
        {props.children}
    </todocontext.Provider>
  )
}

export default Wrapper