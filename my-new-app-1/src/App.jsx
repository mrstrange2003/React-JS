import Greeting from './Greeting'
import './App.css'
import Message from './Message'


function App() {

  function handleClick(name){
    alert(`Hello ${name}`)
  }
  return (
    <>
      <Greeting name="Viktor" onClick={handleClick} />

    </>
  )
}

export default App
