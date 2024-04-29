import logo from './logo.svg';
import './App.css';
import Table from './components/Table'
import TransactionForm from './components/TransactionForm';
import SearchTransaction from './components/SearchTransaction';

function App() {
  return (
    <div className = "container">
      <SearchTransaction />
      <TransactionForm />
      <Table />
    </div>
  );
}

export default App;
