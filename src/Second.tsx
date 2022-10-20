import Third from "./Third";
interface Props {text: string}
const Second: React.FC<Props> = ({text}) => {
  return ( 
    <div>
      <p>This is second component</p>
      <Third text={text} />
    </div>
   );
}
 
export default Second;