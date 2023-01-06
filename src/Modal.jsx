import React from 'react'

const Modal = ({setQuestionValue,setAnswerValue}) => {
  return (
    <div>
        <p>Question:</p>
        <input type="text" onChange={(e) => setQuestionValue(e.target.value)} />
        <p>Answer:</p>
        <input type="text" onChange={(e) => setAnswerValue(e.target.value)} />
    </div>
  )
}

export default Modal