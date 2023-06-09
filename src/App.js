import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Product from './components/Product'
import Contact from './components/Contact'
import { Route } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';


function App() {
return (
<>
<Header />

<Route exact path="/" component={Home} />
<Route exact path="/products" component={Product} />
<Route exact path="/products/:id" component={ProductDetail} />
<Route exact path="/cart" component={Cart} />
<Route exact path="/about" component={About} />
<Route exact path="/contact" component={Contact} />

<Footer />
</>
);
}

export default App;