import './App.css'
import Form from './components/Form'
import Color from './Color'
import { useState } from 'react'

function App() {
  const [elColor, setColor] = useState()

  console.log('en app', elColor);
  function handleSubmit(color){
    setElColor(Color)
  }

  function handleDelete() {
    setElColor();
  }
  return (
    <>
      <Form onColor={handleSubmit}/>
      {elColor ? <Color onDelete={handleDelete}>{elColor}</Color> : undefined}
    </>
  );
}

export default App
