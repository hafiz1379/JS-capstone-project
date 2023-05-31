const fetchData = async (movieData) => {
  const API = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/X5Vx3TOWxyak1SgHIAAo/comments?item_id=${movieData.id}`;

  try {
    const response = await fetch(API);
    const data = await response.json();

    // Process the retrieved data
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
};

export default fetchData;