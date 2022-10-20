import Second from "./Second";
interface Props {text: string}
const First: React.FC<Props> = ({text}) => {
  return ( 
    <div>
      <p>component one:</p>
      <Second text={text}/>
    </div>
   );
}
 
export default First;