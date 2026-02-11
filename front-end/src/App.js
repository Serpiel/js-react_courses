import './App.css';
import Title from './Title';
import ProductList from './ProductList';
import Magasin from './Magasin';
import CounterPerson from './CounterPerson';

function App(props) {
  console.log(props);
  return (
    <div className="App">
      <Magasin hour={8} />
      <Title />
      <h1>Shop section</h1>
      <ProductList />
      <CounterPerson />
    </div>
  );
}
export default App;
