const API_URL = "https://api.themoviedb.org/3"
const API_GENRE = "/genre/movie/list"
const API_KEY = "c696ae5550ca0ba0e92a7be8d9a60acf"

export function getGenreList() {
    fetch(API_URL + API_GENRE + "?api_key=" + API_KEY)
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson
        }).catch((error) => {
            console.log('Data fetching failed');
            return 'failed'
        });
}