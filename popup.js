const projects = [
  {
    featuredImg: './assets/Snapshoot Portfolio9.png',
    name: 'Tonic',
    Description:
        'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    language: ['HTML', 'CSS', 'JavaScript'],
    details: { company: 'CANOPY', profile: 'Back END Dev', year: 2015 },
    seeLive: 'https://github.com/the-faizmohammad/my-portfolio',
    seeSource: 'https://github.com/the-faizmohammad/my-portfolio.git',
  },
  {
    featuredImg: './assets/Snapshoot Portfolio (5).png',
    name: 'Multi-Post Stories',
    Description:
        'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    language: ['HTML', 'CSS', 'Ruby', 'JavaScript'],
    details: {
      company: 'FACEBOOK',
      profile: 'Full Stack Dev',
      year: 2016,
    },
    seeLive: 'https://github.com/the-faizmohammad/my-portfolio',
    seeSource: 'https://github.com/the-faizmohammad/my-portfolio.git',
  },
  {
    featuredImg: './assets/Snapshoot Portfolio.png',
    name: 'Facebook 360',
    Description:
        'Exploring the future of media in Facebooks first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    language: ['HTML', 'CSS', 'JavaScript', 'Ruby'],
    details: {
      company: 'FACEBOOK',
      profile: 'Full Stack Dev',
      year: 2017,
    },
    seeLive: 'https://github.com/the-faizmohammad/my-portfolio',
    seeSource: 'https://github.com/the-faizmohammad/my-portfolio.git',
  },
  {
    featuredImg: './assets/Snapshoot Portfolio (2).png',
    name: 'Uber Navigation',
    Description:
        'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    language: ['HTML', 'Ruby', 'CSS', 'JavaScript'],
    details: { company: 'UBER', profile: 'Front End Dev', year: 2017 },
    seeLive: 'https://github.com/the-faizmohammad/my-portfolio',
    seeSource: 'https://github.com/the-faizmohammad/my-portfolio.git',
  },
];

function createCard(project, index) {
  const mycard = document.createElement('li');
  mycard.classList.add('my-works-card');
  mycard.id = `my-works-card-${index + 1}`;
  mycard.innerHTML = `<img src='${project.featuredImg}' alt='Recent Work'>
        <div class='works-card-main'>
            <h3 class='works-card-heading-large'>${project.name}</h3>
            <div class='d-flex works-card-client'>
                <p class='paragraph'>${project.details.company}</p>
                <i class='fa-solid fa-circle my-works-card-client-counter'></i>
                <p class='my-works-card-client-role paragraph'>${
  project.details.profile
}</p>
                <i class='fa-solid fa-circle my-works-card-client-counter'></i>
                <p class='my-works-card-client-year paragraph'>${
  project.details.year
}</p>
            </div>
            <p class='paragraph works-card-paragraph'>${project.Description}</p>
            <ul class="works-card-skills">
                <li class="skill-list">${project.language[0]}</li>
                <li class="skill-list">${project.language[1]}</li>
                <li class="skill-list">${project.language[2]}</li>
            </ul>
            <button class="see-project-button">See Project</button>
        </div>`;
  return mycard;
}

function createPopup(project, index) {
  const popup = document.createElement('div');
  popup.classList.add('card-detail');
  popup.id = `card-detail-${index + 1}`;
  popup.innerHTML = `<div class='card-detail-inner'>
        <div class='d-flex card-detail-header'>
            <div>
                <h3 class='card-detail-heading'>${project.name}</h3>
                <div class='d-flex works-card-client'>
                    <p class='paragraph'>${project.details.company}</p>
                    <i class='fa-solid fa-circle my-works-card-client-counter'></i>
                    <p class='works-card-client-role paragraph'>${
  project.details.profile
}</p>
                    <i class='fa-solid fa-circle my-works-card-client-counter'></i>
                    <p class='my-works-card-client-year paragraph'>${
  project.details.year
}</p>
                </div>
            </div>
            <i id='card-detail-close-${
  index + 1
}' class='fa-solid fa-xmark card-detail-cross-icon'></i>
        </div>
        <div class='card-detail-display-img-container'>
            <img class='' src='${project.featuredImg}' alt='Recent Work'>
        </div>
        <div class='card-detail-body'>
            <p class='paragraph'>${project.Description}</p>
            <div class='card-detail-body-right'>
                <ul class="d-flex card-detail-body-tags">
                  <li class="card-detail-body-tag">${project.language[0]}</li>
                  <li class="card-detail-body-tag">${project.language[1]}</li>
                  <li class="card-detail-body-tag">${project.language[2]}</li>
                </ul>
                <div class='card-detail-body-right-button-container'>
                    <button class='card-detail-button' src='${
  project.seeLive
}'>See Live
                     <i class='fa-solid fa-arrow-up-right-from-square'></i></button>
                    <button class='card-detail-button'  src='${
  project.seeSource
}'>
                    See Source <i class='fa-brands fa-github'></i></button>
                </div>
            </div>
        </div>
      </div>`;
  return popup;
}

function showProjectDetails(index) {
  const popupContainer = document.getElementById('popup-container');
  const popup = popupContainer.querySelector(`#card-detail-${index + 1}`);
  const body = document.getElementById('body');

  // Hide all other popups
  const allPopups = popupContainer.querySelectorAll('.card-detail');
  allPopups.forEach((p) => {
    p.classList.remove('card-detail--show');
  });

  // Show the selected popup
  popup.classList.add('card-detail--show');
  body.classList.add('blur');
}

function hideProjectDetails() {
  const popupContainer = document.getElementById('popup-container');
  const body = document.getElementById('body');

  // Hide all popups
  const allPopups = popupContainer.querySelectorAll('.card-detail');
  allPopups.forEach((p) => {
    p.classList.remove('card-detail--show');
  });

  body.classList.remove('blur');
}

function renderProjects() {
  const container = document.getElementById('works-cards');
  const popupContainer = document.getElementById('popup-container');

  projects.forEach((project, index) => {
    const card = createCard(project, index);
    container.appendChild(card);

    const popup = createPopup(project, index);
    popupContainer.appendChild(popup);

    card.querySelector('.see-project-button').addEventListener('click', () => {
      showProjectDetails(index);
    });

    popup.querySelector('.card-detail-cross-icon').addEventListener('click', hideProjectDetails);
  });
}

renderProjects();