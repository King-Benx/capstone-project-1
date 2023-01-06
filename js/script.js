const speakerSection = document.getElementById('speaker-area');
const numberOfSpeakers = window.innerWidth < 768 ? 2 : 6;
const button = document.getElementById('add-more-views');
// dummy data
const data = [
  {
    id: 1,
    name: 'John Doe',
    role: 'CEO of Tyra Tech',
    image: './images/man1.jpg',
    description:
      ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis iste at ipsa id nesciunt dolores voluptate magni inventore praesentium reiciendis.',
  },
  {
    id: 2,
    name: 'Jane Doe',
    role: 'CEO of Facebook',
    image: './images/female1.jpg',
    description:
      ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis iste at ipsa id nesciunt dolores voluptate magni inventore praesentium reiciendis.',
  },
  {
    id: 3,
    name: 'Bob Doe',
    role: 'CEO of Twitter',
    image: './images/man2.jpg',
    description:
      ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis iste at ipsa id nesciunt dolores voluptate magni inventore praesentium reiciendis.',
  },
  {
    id: 4,
    name: 'Julie Doe',
    role: 'CEO of Google',
    image: './images/female2.jpg',
    description:
      ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis iste at ipsa id nesciunt dolores voluptate magni inventore praesentium reiciendis.',
  },
  {
    id: 5,
    name: 'James Doe',
    role: 'CEO of Twitter',
    image: './images/man3.jpg',
    description:
      ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis iste at ipsa id nesciunt dolores voluptate magni inventore praesentium reiciendis.',
  },
  {
    id: 6,
    name: 'Dune Doe',
    role: 'CEO of Tesla',
    image: './images/female3.jpg',
    description:
      ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis iste at ipsa id nesciunt dolores voluptate magni inventore praesentium reiciendis.',
  },
];

// create a single card
function createCard(id, name, position, description, image) {
  const card = document.createElement('div');
  card.className = 'card';
  const cardImage = document.createElement('div');
  cardImage.className = 'card-image';
  const imageProfile = document.createElement('img');
  imageProfile.setAttribute('src', image);
  imageProfile.setAttribute('alt', name);
  cardImage.append(imageProfile);
  card.append(cardImage);
  const cardBody = document.createElement('div');
  cardBody.className = 'card-content';
  const title = document.createElement('h4');
  title.innerText = name;
  cardBody.append(title);
  const jobPosition = document.createElement('em');
  jobPosition.innerText = position;
  cardBody.append(jobPosition);
  const cardDescription = document.createElement('p');
  cardDescription.innerText = description;
  cardBody.append(cardDescription);
  card.append(cardBody);
  if (speakerSection) {
    speakerSection.append(card);
  }
}

function generateSpeakers(speakers) {
  for (let i = 0; i < speakers; i += 1) {
    const {
      id, name, role, description, image,
    } = data[i];
    createCard(id, name, role, description, image);
  }
}

if (window.innerWidth < 768) {
  generateSpeakers(2);
} else {
  generateSpeakers(6);
}

if (button) {
  button.addEventListener('click', () => {
    if (numberOfSpeakers < 6) {
      let child = speakerSection.lastElementChild;
      while (child) {
        speakerSection.removeChild(child);
        child = speakerSection.lastElementChild;
      }
      generateSpeakers(6);
      button.remove();
    }
    if (numberOfSpeakers === 6) {
      button.remove();
    }
  });
}