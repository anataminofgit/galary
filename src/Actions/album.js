const SET_ALBUMS = "SET_ALBUMS";

export function setAlbumList(arr) {
    return (arr.length > 0)
      ? {
        type: SET_ALBUMS,
        albumsList: arr
      }
      : {
        type: SET_ALBUMS,
        albumsList: []
      }
  }
  