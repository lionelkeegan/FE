/**
 * Import main Components 
 */

import './App.css';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';

/**
 * Import main components for get all components
 */
 const App = () => {
  return(
      <div>
          <Header />
          <Main />
          <Footer />
      </div>
  )
}

export default App;