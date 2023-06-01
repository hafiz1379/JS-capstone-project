const fetchData = async (movieData) => {
  const API = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/X5Vx3TOWxyak1SgHIAAo/reservations?item_id=item${movieData.id}`;
  const reserveSection = document.querySelector('.reserveSection');
  const toAddReserve = document.createElement('div');
  toAddReserve.classList.add('listReserve');

  try {
    const response = await fetch(API);
    const data = await response.json();

    // Process the retrieved data
    data.forEach((element) => {
      toAddReserve.innerHTML += `
      <p>${element.date_start} - ${element.date_end} by ${element.username}</p>
      `;
      reserveSection.appendChild(toAddReserve);
    });
  } catch (error) {
    toAddReserve.innerHTML = '<h3><b>No reserve yet</b></h3>';
    reserveSection.appendChild(toAddReserve);
  }
};

export default fetchData;