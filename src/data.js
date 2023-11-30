import tourImg1 from "./images/tour-1.jpeg";
import tourImg2 from "./images/tour-2.jpeg";
import tourImg3 from "./images/tour-3.jpeg";
import tourImg4 from "./images/tour-4.jpeg";
import tourImg5 from "./images/tour-5.jpeg";

export const navLinks = [
  { id: 1, href: "#home", text: "Start" },
  { id: 2, href: "#about", text: "About" },
  { id: 3, href: "#services", text: "Services" },
  { id: 4, href: "#tours", text: "Tours" },
];
export const socialLinks = [
  { id: 1, href: "https://www.twitter1.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter2.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.twitter3.com", icon: "fab fa-squarespace" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia",
  },
];

export const tours = [
  {
    id: 1,
    title: "Tibet Adventure",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    date: "august 26th, 2020",
    img: tourImg1,
    country: "china",
    duration: "6 days",
    price: "from $2100",
  },
  {
    id: 2,
    title: "best of java",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    date: "october 1th, 2020",
    img: tourImg2,
    country: "indonesia",
    duration: "11 days",
    price: "from $1400",
  },
  {
    id: 3,
    title: "explore hong kong",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    date: "september 15th, 2020",
    img: tourImg3,
    country: "Hong Kong",
    duration: "8 Days",
    price: "From $5000",
  },
  {
    id: 4,
    title: "kenya highlights",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    date: "december 5th, 2019",
    img: tourImg4,
    country: "Kenya",
    duration: "20 Days",
    price: "From $ 3300",
  },
  {
    id: 5,
    title: "malawi highlights",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    date: "december 24th, 2023",
    img: tourImg5,
    country: "Malawi",
    duration: "140 Days",
    price: "From $ 2400",
  },
];
