export default function api(){
    let url = 'https://api.themoviedb.org/4/list/{list_id}?page=1&api_key=';
    let API_KEY = '094dea99f1750956f962e70833efee95';
    let data;
    let error;

    fetch(`https://api.themoviedb.org/4/list/01?page=1&api_key=${API_KEY}`)
        .then(data => console.log(data))
        .catch(error => console.error(error))

}