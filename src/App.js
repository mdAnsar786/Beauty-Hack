
import './App.css';
import Appoment from './Component/Appoment/Appoment';
import Bestquality from './Component/Bestquality/Bestquality';
import Choose from './Component/Choose/Choose';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Product from './Component/Product/Product';
import Wellness from './Component/Wellness/Wellness';

function App() {
  return (
    <div className="App">
     <Header/>
     <Wellness/>
     <Choose/>
     <Product/>
     <Appoment/>
     <Bestquality/>
     <Footer/>
    </div>
  );
}

export default App;
