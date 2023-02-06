const API_KEY = '33416486-c62635052b6b12d1fd4b33539';
export function apiGet(name, page) {
  return fetch(
    `https://pixabay.com/api/?key=${API_KEY}&q=${name}&image_type=photo&page=${page}&per_page=12`
  ).then(response => {
    if (!response.ok) {
      // return console.log(response.status);
      throw new Error(response.status);
    }
    return response.json();
  });
}
