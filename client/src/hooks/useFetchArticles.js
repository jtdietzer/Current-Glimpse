// // Custom hook for fetching articles
// import { useState, useEffect } from 'react';

// const useFetchArticles = () => {
//     const [articles, setArticles] = useState([]);

//     useEffect(() => {
//         fetch('/api/articles')
//             .then((response) => response.json())
//             .then((data) => setArticles(data));
//     }, []);

//     return articles;
// };

// export default useFetchArticles;
