
import './App.css'
import React, { useState } from "react";

const App = () => {
  const [textMutation, setTextMutaion] = useState<string>('')

  const onChange = (event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
    const {value} = event.target
    setTextMutaion(value)
  }

  return (
    <>

    </>
  )
};

export default App
