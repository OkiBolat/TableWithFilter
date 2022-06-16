import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Home from './pages/Home';
import { getItemsThunk } from './redux/actionsCreatior';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItemsThunk(1))
  });

  return (
    <div className="App">
      <Home />
    </div>
  )
};

export default App;
