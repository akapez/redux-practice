import { useDispatch, useSelector } from 'react-redux';
import {actionCreators} from './actions/index';
import { bindActionCreators } from 'redux';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const account = useSelector((state) => state.account);

  const {depositMoney, withdrawMoney} = bindActionCreators(actionCreators, dispatch);

  return (
    <div className='App'>
      <h2>{account}</h2>
      <button onClick={() => depositMoney(100)}>Deposit</button>
      <button onClick={() => withdrawMoney(50)}>Withdraw</button>
    </div>
  );
}

export default App;
