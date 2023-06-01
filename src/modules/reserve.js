import fetchData from './loadSaveReserve.js';

const reserve = (movieData) => {
  const $ = document;
  const reserveCard = $.getElementById('reserveCard');
  reserveCard.style.display = 'block';

  const modalContent = $.createElement('div');
  modalContent.classList.add('modalContent');

  const span = $.createElement('button');
  span.classList.add('closeButton');
  span.textContent = 'X';
  span.onclick = () => {
    reserveCard.removeChild(modalContent);
    reserveCard.style.display = 'none';
  };

  const popImg = $.createElement('div');
  popImg.classList.add('popImg');
  const img = $.createElement('img');
  img.classList.add('imgReserve');
  img.src = movieData.image;
  popImg.appendChild(img);

  const containerInfo = $.createElement('div');
  containerInfo.classList.add('containerInfo');
  containerInfo.innerHTML = `
    <p><b>Title:</b> ${movieData.name}</p><p><b>Summary:</b> ${movieData.summary}</p><p><b>Genres:</b> ${movieData.genres}</p>
  `;

  const reserveSection = $.createElement('div');
  reserveSection.classList.add('reserveSection');
  const titleSection = $.createElement('h2');
  titleSection.textContent = 'Reservations';
  reserveSection.appendChild(titleSection);

  modalContent.appendChild(span);
  modalContent.appendChild(popImg);
  modalContent.appendChild(containerInfo);
  modalContent.appendChild(reserveSection);

  reserveCard.appendChild(modalContent);
  fetchData(movieData);
};

export default reserve;