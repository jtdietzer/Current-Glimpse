// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { categories } from "../../config/categories";
// import NotFound from "../NotFound/NotFound";

// const Category = () => {
//   const { category } = useParams();
//   const [articles, setArticles] = useState([]);
//   const [isValidCategory, setIsValidCategory] = useState(false);

//   useEffect(() => {
//     if (categories.includes(category)) {
//       setIsValidCategory(true);
//       fetch(
//         `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=0ce9db2495ab4697bd69eabb20202e26`
//       )
//         .then((response) => response.json())
//         .then((data) => {
//           console.log("API Response:", data);
//           setArticles(data.articles || []); // Safely handle undefined articles
//         })
//         .catch((error) => {
//           console.error("Error fetching articles:", error);
//           setArticles([]); // Ensure articles is always defined
//         });
//     } else {
//       setIsValidCategory(false);
//     }
//   }, [category]);

//   if (!isValidCategory) {
//     return <NotFound />;
//   }

//   return (
//     <div>
//       <h1>{category.toUpperCase()} News</h1>
//       <ul>
//         {articles && articles.length > 0 ? (
//           articles.map((article, index) => <li key={index}>{article.title}</li>)
//         ) : (
//           <p>No articles available.</p>
//         )}
//       </ul>
//     </div>
//   );
// };

// export default Category;



// import React from "react";
// import { useParams } from "react-router-dom";
// import "./Category.css";

// const Category = () => {
//   const { category } = useParams();

//   return (
//     <div className="placeholder">
//       <h1>Category: {category}</h1>
//       <p>This page is under construction. Please check back later.</p>
//     </div>
//   );
// };

// export default Category;


import React from "react";

const Category = () => {
    return (
        <div>Category</div>
    );
};

export default Category;