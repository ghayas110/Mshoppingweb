import "./App.css";
import { Route, Switch, BrowserRouter, withRouter } from "react-router-dom";
import { configureStore } from './redux/ConfigureStore';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import { connect } from 'react-redux'
import Main from './component/MainComponent'

const { persistor, store } = configureStore()

function App() {
  return (
    <Provider store={store} >
      <PersistGate
        persistor={persistor}
      >
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </PersistGate>
    </Provider>

  );
}

export default App;

