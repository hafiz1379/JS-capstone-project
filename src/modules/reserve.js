export default class Reserve {
  constructor(data) {
    this.name = data.name;
    this.image = data.image;
    this.summary = data.summary;
    this.genres = data.genres;
  }

  createTemplate() {
    const reserveCard = document.getElementById('reserveCard');
    reserveCard.innerHTML = '';

    const modalContent = document.createElement('div');
    modalContent.classList.add('modalContent');

    const popUp = document.createElement('div');
    popUp.classList.add('popUpR');

    const span = document.createElement('button');
    span.classList.add('closeButton');
    span.textContent = 'X';
    popUp.appendChild(span);

    const popImg = document.createElement('div');
    popImg.classList.add('popImg');
    const img = document.createElement('img');
    img.classList.add('imgReserve');
    img.src = this.image;
    popImg.appendChild(img);

    const containerInfo = document.createElement('div');
    containerInfo.classList.add('containerInfo');
    containerInfo.innerHTML = `
      <p><b>Title:</b> ${this.name}</p><p><b>Summary:</b> ${this.summary}</p><p><b>Genero:</b> ${this.genres}</p>
    `;

    modalContent.appendChild(popUp);
    modalContent.appendChild(popImg);
    modalContent.appendChild(containerInfo);

    span.onclick = () => {
      reserveCard.style.display = 'none';
    };

    return modalContent;
  }
}