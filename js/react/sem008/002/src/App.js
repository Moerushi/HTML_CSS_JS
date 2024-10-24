import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {setAmount, setCurrency, fetchExchange} from './redux/slices/exchangeSlice'

function App() {
  const { amount, currency, result, currencyList, loading, error  } = useSelector((state) => state.exchange);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchExchange());
  }, [dispatch]);

  const handleConvert = (e) => {
    e.preventDefault();
    if (amount && currency) {
      dispatch(fetchExchange());
    }
  }

  return (
    <div className="App">
      <h2>Exchange converter</h2>
      <form onSubmit={handleConvert}>
        <input
          type='number'
          placeholder='Enter amount in rubles'
          value={amount}
          onChange={(e) => dispatch(setAmount(e.target.value)) } />

        <select onChange={(e) => dispatch(setCurrency(e.target.value))} value={currency}>
          <option value=''>Choose currency</option>
          {currencyList.map(cur => <option key={cur}>{cur}</option>)}
        </select>
        <button type='submit' disabled={loading}>{loading ? 'Loading...' : 'Convert!'}</button>
      </form>
      <p>{error ? error.message || 'Something goes wrong!' : `${amount} RUB = ${result} ${currency}`}</p>
    </div>
  );
}

export default App;
