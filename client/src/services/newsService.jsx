// const API_KEY = 'your-newsapi-key'; // Replace with your NewsAPI key
// const BASE_URL = 'https://newsapi.org/v2';

// export const fetchArticles = async () => {
//   try {
//     const response = await fetch(`${BASE_URL}/top-headlines?country=us&apiKey=${API_KEY}`);
//     if (!response.ok) throw new Error('Failed to fetch articles');
//     const data = await response.json();
//     return data.articles;
//   } catch (error) {
//     console.error('Error fetching articles:', error);
//     return [];
//   }
// };