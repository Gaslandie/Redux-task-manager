import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import App from "./App";
//Redux
import store from './redux/store';
import { Provider  } from 'react-redux';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>{/* pour rendre notre store disponible pour tous les composants */}
        <Routes>
          <Route path='/' element={<App />} />
        </Routes>
      </Provider>
    </Router>
  </React.StrictMode>
);
