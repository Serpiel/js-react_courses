import Title from '../components/layouts/Title';
import ProductList from '../components/features/ProductList';
import Magasin from '../components/features/Magasin';
import CounterPerson from '../components/features/CounterPerson';
import GuessNumber from '../components/features/GuessNumber';

const Home = () => (
  <main>
    <h3>Bienvenue sur la page d'Accueil</h3>
    <Magasin />
    <CounterPerson />
    <GuessNumber />
    <Title />
    <section>
      <h1>Shop section</h1>
      <h2>Product List</h2>
      <ProductList />
    </section>
  </main>
);

export default Home;