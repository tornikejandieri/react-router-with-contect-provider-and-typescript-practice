import { Route, Routes } from 'react-router-dom';
import App from './App';
import Counter from './Counter';

const Router = () => {
  return ( 
    <div>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/counter' element={<Counter />} />
      </Routes>
    </div>
   );
}
 
export default Router;