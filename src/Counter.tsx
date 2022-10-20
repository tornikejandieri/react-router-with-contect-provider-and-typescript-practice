
// simple counter component for router to display different page lol

import { useState } from "react";



const Counter: React.FC = () => {
  const [number, setNumber] = useState<number>(0)

  const handleDecrement = () => {
    
    if (number === 0) {
      setNumber(0)
    } else {
      setNumber(n => number - 1)
    }
  }
  const handleIncrement = () => {
    setNumber(n => number + 1)
  }

  return ( 
    <div>
      <button onClick={handleDecrement}>-</button>
      <p>{number}</p>
      <button onClick={handleIncrement}>+</button>
    </div>
   );
}
 
export default Counter;