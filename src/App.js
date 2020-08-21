import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import galaryStore from "./Reducer/reducers";
import ListAlbums from './Components/ListAlbums';


function App() {
  return (
    <div className="app">
      <Provider store={galaryStore}>
        <h1>Galary-App</h1>
        <ListAlbums />
      </Provider>

    </div>
  );
}

export default App;
