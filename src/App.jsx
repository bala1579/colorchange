import { useState } from 'react'
import './App.css'
import Button from './Button'

function App() {

      const red = "RED";
      const orange = "ORANGE";

  const [containercolor , setColor] = useState('');
  



   const colorchange = (color )=>
    {
        setColor(color)
           
    }    

  return (
    <>
        
      <div className='container' id="container" style={{backgroundColor : containercolor}}>

        <Button  btncolor="green" name={red} color={colorchange}/>
        <Button  btncolor="orange" name={orange} color={colorchange}/>
        

        
        

        </div>
    </>
  )
}

export default App
