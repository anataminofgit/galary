import albumReducer from "./AlbumReducer";
import imageReducer from "./AlbumReducer";

const redux = require("redux");
const reduxLogger = require("redux-logger");

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();


const rootReducer = combineReducers({
  albumReducer: albumReducer, 
  imageReducer: imageReducer 
});

const galaryStore = createStore(rootReducer, applyMiddleware(logger));

export default galaryStore;
