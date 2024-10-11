import { createContext } from "react";
import runChat from "../config/gemini"

const Context = createContext();

const ContextProvider = (props) => {

  const [input,setInput] = useState("");
  const [recentPrompt,setRecentPrompt] = useState("");
  const [previousPrompt,setPreviousPrompt] = useState([]);
  const [showResult,setShowResult] = useState(false);
  const [loading,setLoading] = useState(false);
  const [resultData,setResultData] = useState("")

  const onSent = async (prompt) => {
    await runChat(prompt)
  }

  const contextValue = {
    previousPrompt,
    setPreviousPrompt,
    onSent,
    setRecentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput
  }

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  )
}

export default ContextProvider;