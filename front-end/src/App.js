import './App.css';
import Title from './Title';
import ProductList from './ProductList';
import Magasin from './Magasin';

function App(props) {
  console.log(props);
  return (
    <div className="App">
      <Magasin hour={8} />
      <Title />
      <h1>Shop section</h1>
      <ProductList />
    </div>
  );
}
export default App;
