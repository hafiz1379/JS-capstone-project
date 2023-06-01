const fetchData = async (movieData) => {
  const API = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/X5Vx3TOWxyak1SgHIAAo/reservations?item_id=item${movieData.id}`;
  const reserveSection = document.querySelector('.reserveSection');

  try {
    const response = await fetch(API);
    const data = await response.json();

    // Process the retrieved data
    data.forEach((element) => {
      const toAdd = document.createElement('div');
      toAdd.innerHTML = `
      <p>${element.date_start} - ${element.date_end} by ${element.username}</p>
      `;
      reserveSection.appendChild(toAdd);
    });
  } catch (error) {
    reserveSection.innerHTML += 'No reserve yet';
  }
};

export default fetchData;