import { createContext } from "react";
import runChat from "../config/gemini"

const Context = createContext();

const ContextProvider = (props) => {

  const onSend = async (prompt) => {
    await runChat(prompt)
  }

  onSend("what is reactjs")
  const contextValue = {

  }

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  )
}

export default ContextProvider;