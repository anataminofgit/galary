import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//import ImageUpload from './Components/ImageUpload';
//import ImagesList from './Components/ImagesList';
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
