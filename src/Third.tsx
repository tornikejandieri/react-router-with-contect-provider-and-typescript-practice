interface Props {text: string}
const Third: React.FC<Props> = ({text}) => {
  return ( 
    <div>
      <p> 3{text}</p>
    </div>
   );
}
 
export default Third;