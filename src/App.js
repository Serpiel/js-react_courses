import logo from './logo.svg';
import './App.css';
import './Title';
import Title from './Title';

function App(props) {
  console.log(props);
  return (
    <div className="App">
      <Title />
      <h1>Hello {props.name}</h1>
    </div>
  );
}
export default App;
