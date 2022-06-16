import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Home from './pages/Home';
import { getItemThunk } from './redux/actionsCreatior';

function App() {
  const dispatch = useDispatch()
useEffect(() => {
  dispatch(getItemThunk(3))
})
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
