import { useContext } from "react";
import { textContext } from "./App";

const Third: React.FC = () => {
 const text = useContext(textContext)
  return ( 
    <div>
      <h3>Third Component</h3>
      <p>{text}</p>
    </div>
   );
}
 
export default Third;