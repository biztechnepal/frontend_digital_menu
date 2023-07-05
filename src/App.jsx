import Router from './routes';
import { ShoppingCartProvider } from './contexts/ShoppingCartContext';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <ShoppingCartProvider>
      <HelmetProvider>
        <Router />
      </HelmetProvider>
    </ShoppingCartProvider>
  );
}

export default App;
