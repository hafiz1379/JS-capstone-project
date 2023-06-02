import { fetchData, saveDataReserve } from './loadSaveReserve.js';

const reserve = (movieData) => {
  const $ = document;
  const reserveCard = $.getElementById('reserveCard');
  const bodyOverflow = $.getElementById('body');
  reserveCard.style.display = 'block';
  bodyOverflow.style.overflow = 'hidden';

  const modalContent = $.createElement('div');
  modalContent.classList.add('modalContent');

  const span = $.createElement('button');
  span.classList.add('closeButton');
  span.textContent = 'X';
  span.onclick = () => {
    reserveCard.removeChild(modalContent);
    reserveCard.style.display = 'none';
    bodyOverflow.style.overflow = 'auto';
  };
  window.onclick = (e) => {
    if (e.target === reserveCard) {
      reserveCard.removeChild(modalContent);
      reserveCard.style.display = 'none';
      bodyOverflow.style.overflow = 'auto';
    }
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

  const reserveForm = $.createElement('form');
  reserveForm.classList.add('reserveForm');
  reserveForm.innerHTML = `
    <input type="text" id="nameReserve" name="nameReserve" placeholder="Add your name" required>
    <input type="date" id="startDate" name="startDate" required>
    <input type="date" id="endDate" name="endDate" required>
  `;
  const submitBtn = $.createElement('button');
  submitBtn.classList.add('submitBtn');
  submitBtn.textContent = 'Reserve';
  reserveForm.appendChild(submitBtn);
  submitBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    await saveDataReserve(movieData);
    reserveSection.innerHTML = '';
    await fetchData(movieData);
  });

  modalContent.appendChild(span);
  modalContent.appendChild(popImg);
  modalContent.appendChild(containerInfo);
  modalContent.appendChild(reserveSection);
  modalContent.appendChild(reserveForm);

  reserveCard.appendChild(modalContent);
  fetchData(movieData);
};

export default reserve;