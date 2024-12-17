// useEffect(() => {
//     const useFetchArticles = async () => {
//       try {
//         const response = await fetch(
//           `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=0ce9db2495ab4697bd69eabb20202e26`
//         );
  
//         // Check if the response is valid JSON
//         const contentType = response.headers.get("content-type");
//         if (!contentType || !contentType.includes("application/json")) {
//           throw new Error("Invalid response: Not JSON");
//         }
  
//         // Parse the JSON response
//         const data = await response.json();
//         if (data.articles) {
//           setArticles(data.articles);
//         } else {
//           console.error("No articles found in response:", data);
//           setArticles([]); // Fallback to an empty array
//         }
//       } catch (error) {
//         console.error("Error fetching articles:", error);
//         setArticles([]); // Fallback to an empty array
//       }
//     };
  
//     useFetchArticles();
//   }, [category]);