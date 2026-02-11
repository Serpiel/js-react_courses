import './App.css';
import Title from './Title';
import ProductList from './ProductList';
import Magasin from './Magasin';
import CounterPerson from './CounterPerson';
import GuessNumber from './GuessNumber';

function App(props) {
  console.log(props);
  return (
    <div className="App">
      <Magasin />
      <CounterPerson />
      <GuessNumber />
      <Title />
      <h1>Shop section</h1>
      <ProductList />
    </div>
  );
}
export default App;
