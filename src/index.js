import { App } from 'components/App/App';
import { GlobalStyle } from 'components/App/App.styled';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from 'redux/store';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <GlobalStyle/>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>
);
