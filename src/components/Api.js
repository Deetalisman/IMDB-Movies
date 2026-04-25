// export const getPopularMovies = async () => {
//   const response = await fetch(
//     `https://www.omdbapi.com/?s=iron&apikey=66ebad6a`,
//   );
//   const data = await response.json();
//   if (!response.ok) {
//     throw new Error(`HTTP error! Status: ${response.status}`);
//   }
//   return data.Search;
// };

export const getPopularMovies = async () => {
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?s=iron&apikey=66ebad6a`,
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    if (data.Response === "False") {
      throw new Error(data.Error || "OMDb returned an error");
    }

    return data.Search;
  } catch (error) {
    console.error("Failed to fetch movies:", error.message);
    return [];
  }
};

export const SearchMovies = async (query) => {
  const response = await fetch(
    `https://www.omdbapi.com/?s=${query}&apikey=66ebad6a`,
  );
  const data = await response.json();
  return data.Search;
};
