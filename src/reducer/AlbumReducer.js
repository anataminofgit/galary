
const SET_ALBUMS = "SET_ALBUMS";

const initialAlbums = {albumsList: []};

const albumReducer = (state = initialAlbums, action) => {
    console.log("action", action);

    switch (action.type) {
        case SET_ALBUMS:
            {
                console.log("action", action)
                return {
                    ...state,
                    albumsList: [...action.albumsList]
                };
            }
        default:
            return state;
    }
};
export default albumReducer;