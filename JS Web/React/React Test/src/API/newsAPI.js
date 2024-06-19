export const getNews = async () => {
  const url =
    'https://newsapi90.p.rapidapi.com/search?query=Cryptocurrency&language=en-US&region=US';
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "13dce977a2msh389b1afb1cf7258p197a51jsn2d1d7d2362e7",
      "x-rapidapi-host": "newsapi90.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    
    const result = await response.json();
    console.log(result.slice(0,2));
    return result;
  } catch (error) {
    console.error(error);
  }
};
