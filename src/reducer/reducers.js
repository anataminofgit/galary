const redux = require("redux");
const reduxLogger = require("redux-logger");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

const SET_ALBUMS = "SET_ALBUMS";
const SET_SELECTED_COURSE = "SET_SELECTED_COURSE";




export function setAlbumList(arr) {
  return (arr.length > 0)
    ? {
      type: SET_ALBUMS,
      albumList: arr
    }
    : {
      type: SET_ALBUMS,
      albumList: []
    }
}




export function setSelectedCourse(value) {
  return value
    ? {
      type: SET_SELECTED_COURSE,
      selectedCourse: value
    }
    : { id: null, title: "" };
}

const initialAlbums = {
  albumsList: []
};


const initialImglist = {
  albumsList: []
};


const albumListReducer = (state = initialAlbums, action) => {
 
  switch (action.type) {

    case SET_ALBUMS:
      {
        return {
          ...state,
          albumsList: [...action.albumList]
        };
      }

    default:
      return state;
  }
};

// const selectedCourseRedusecer = (state = initialListAlbums, action) => {
const imgListRedusecer = (state = initialImglist, action) => {
  switch (action.type) {
    case SET_SELECTED_COURSE:
      return {
        ...state,
        selectedCourse: action.selectedCourse
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  albumsList: albumListReducer, //authReducer,
  imagesList: imgListRedusecer // selectedCourseRedusecer
});

const galaryStore = createStore(rootReducer, applyMiddleware(logger));

export default galaryStore;
//export default tacticsStore;
