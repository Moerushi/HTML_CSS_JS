import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import TrunkComponent from './TrunkEx4'
import SagaButton from './SagaComp'
import FetchButtonEx3 from './FetchButtonEx3'
import Ex2Button from './Ex2Button';

function App() {
const dispatch = useDispatch();

useEffect(() => {
  dispatch({type: 'TEST_ACTION'});
}, [dispatch])


  return (
    <div className='example'>
      <div>Open console to see the results</div>
      <Ex2Button />
      <FetchButtonEx3 />
      <TrunkComponent />
      <SagaButton />
    </div>
  );
}

export default App;
