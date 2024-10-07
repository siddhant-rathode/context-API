import { createContext, useState } from "react";
import Header from "./components/Header" 
import Nav from "./components/Nav"

// Step 1: Creating Context...
export const DataContext = createContext(null);

const App = () => {
  const [data, setdata] = useState("Some Imoportant Data")
  return (
    <>
    {/* Step 2: Providing Data to Context and Wraping the Application with Context Provider... */}
    <DataContext.Provider value={[data, setdata]}>
      <Header/>
      <Nav/>
    </DataContext.Provider>
    </>
  )
}

export default App