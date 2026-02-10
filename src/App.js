import './App.css';
import Title from './Title';
import ProductList from './ProductList';

function App(props) {
  console.log(props);
  return (
    <div className="App">
      <Title />
      <ProductList />
    </div>
  );
}
export default App;
