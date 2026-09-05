import smoothScrollPolyfill from 'smoothscroll-polyfill';

import AppProvider from './providers/AppProvider';
import RouterProvider from 'routes/Router';

import './App.css';

smoothScrollPolyfill.polyfill();

function App() {
  return (
    <AppProvider>
      <RouterProvider />
    </AppProvider>
  );
}

export default App;
