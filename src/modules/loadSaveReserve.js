const fetchData = async (movieData) => {
  const API = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/X5Vx3TOWxyak1SgHIAAo/reservations?item_id=item${movieData.id}`;
  const reserveSection = document.querySelector('.reserveSection');
  const titleSection = document.createElement('h2');
  titleSection.textContent = 'Reservations';
  const toAddReserve = document.createElement('div');
  toAddReserve.classList.add('listReserve');
  try {
    const response = await fetch(API);
    const data = await response.json();
    // Process the retrieved data
    data.forEach((element) => {
      reserveSection.appendChild(titleSection);
      toAddReserve.innerHTML += `
      <p>${element.date_start} - ${element.date_end} by ${element.username}</p>
      `;
      reserveSection.appendChild(toAddReserve);
    });
  } catch (error) {
    reserveSection.appendChild(titleSection);
    toAddReserve.innerHTML = `
    <h3><b>No reserve yet</b></h3>`;
    reserveSection.appendChild(toAddReserve);
  }
};

const saveDataReserve = async (movieData) => {
  const API = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/X5Vx3TOWxyak1SgHIAAo/reservations';
  const name = document.getElementById('nameReserve');
  const start = document.getElementById('startDate');
  const end = document.getElementById('endDate');

  const nameValue = name.value.trim();
  const startValue = start.value.trim();
  const endValue = end.value.trim();

  const reserveObject = {
    item_id: `item${movieData.id}`,
    username: nameValue,
    date_start: startValue,
    date_end: endValue,
  };

  await fetch(API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(reserveObject),
  });

  name.value = '';
  start.value = '';
  end.value = '';
};

export { fetchData, saveDataReserve };