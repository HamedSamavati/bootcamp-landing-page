const accordionHeaders = document.querySelectorAll(".accordion__header");
const mentorName = document.querySelectorAll(".mentor__name");
const mentorImg = document.querySelectorAll(".mentor__img");
const mentorRole = document.querySelectorAll(".mentor__role");
const arrows = document.querySelectorAll(".arrow");

const accordionHandler = (event) => {
  const underAccordion = event.target.nextElementSibling;
  const arrowhead = event.target.children[0];
  event.target.classList.toggle("active");
  underAccordion.classList.toggle("accordion--collapse");
  arrowhead.classList.toggle("accordion-svg--active");
};
accordionHeaders.forEach((accordion) => {
  accordion.addEventListener("click", accordionHandler);
});

const mentors = [
  {
    name: "سپهر احمدی",
    role: "پشتیبانی",
    image: "./images/sepehr-ahmadi.png",
  },
  {
    name: "مریم رضایی",
    role: "منتور",
    image: "./images/maryam-rezai.png",
  },
  {
    name: "علی محمدی",
    role: "منتور",
    image: "./images/ali-mohamadi.png",
  },
  {
    name: "محمد زارعی",
    role: "منتور",
    image: "./images/mohamad-zarei.png",
  },
  {
    name: "مهسا صالحی",
    role: "پشتیبانی",
    image: "./images/mahsa-salehi.png",
  },
];

const arrowsHandler = (event) => {
  const target = event.target;
  if (target.classList.contains("left-arrow")) {
    const lastE = mentors.pop();
    mentors.unshift(lastE);
  } else {
    const firstE = mentors.shift();
    mentors.push(firstE);
  }
  reloadMentors();
};

const reloadMentors = () => {
  mentors.forEach((mentor, index) => {
    const { role, name, image } = mentor;
    mentorImg[index].src = image;
    mentorName[index].textContent = name;
    mentorRole[index].textContent = role;
  });
};

arrows.forEach((arrow) => {
  arrow.addEventListener("click", arrowsHandler);
});
reloadMentors();
