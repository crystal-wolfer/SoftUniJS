export const getCrypto = async()=> {

const url = 'https://cryptocurrency-markets.p.rapidapi.com/v1/crypto/coins?page=1';
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '13dce977a2msh389b1afb1cf7258p197a51jsn2d1d7d2362e7',
    'x-rapidapi-host': 'cryptocurrency-markets.p.rapidapi.com'
  }
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
  const array = Object.values(result);
  const arrayResults = array[1];

  return arrayResults
} catch (error) {
	console.error(error);
}
}

// using the following free API: https://rapidapi.com/sparior/api/cryptocurrency-markets/playground/apiendpoint_dc38c718-1e01-4d38-8aea-7a40d57f6a48 