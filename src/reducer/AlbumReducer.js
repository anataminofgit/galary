
const SET_ALBUMS = "SET_ALBUMS";

const initialAlbums = { albumsList: [] };

const albumReducer = (state = initialAlbums, action) => {
    switch (action.type) {
        case SET_ALBUMS:
            {
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