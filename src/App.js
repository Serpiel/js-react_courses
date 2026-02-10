import logo from './logo.svg';
import './App.css';
import Title from './Title';
import ProductDetail from './ProductDetail';

function App(props) {
  console.log(props);
  return (
    <div className="App">
      <Title />
      <h1>Hello {props.name}</h1>
      <ProductDetail
          name="chocolate"
          price="5"
          description="good black chocolate"
          quantity="5"
      />
    </div>
  );
}
export default App;
