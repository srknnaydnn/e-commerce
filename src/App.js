import logo from './logo.svg';
import './App.css';
import { Product } from './component/Product';
import { Category } from './component/Category';
import { Header } from './component/Header';
import { Router } from './component/router/Router';

function App() {
  return (
    <div style={{ overflowY: 'hidden' }}>
      <div className='row'>

        <div className='col-md-12 '>
          <Header />
        </div>
      </div>
      <div className='container-fluid'>
        <div className='row mt-5 '>

          <div className='col-md-2 '>
            <Category />
          </div>
          <div className='col-md-10'>
            <Router/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
