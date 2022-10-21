import { useContext } from "react";
import {  MyContext } from "./App";

const Third: React.FC = () => {
 const appContext = useContext(MyContext)
  return ( 
    <div>
      <h3>Third Component</h3>
      {appContext.text}
    </div>
   );
}
 
export default Third;