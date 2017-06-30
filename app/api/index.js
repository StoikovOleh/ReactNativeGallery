const apiUrl = 'https://api.500px.com/v1/photos?feature=popular&consumer_key=wB4ozJxTijCwNuggJvPGtBGCRqaZVcF6jsrzUadF';

export default (options = {method: 'get'}) => {
    const url = `${apiUrl}`;
    return fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}