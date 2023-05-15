import { GraphicType } from "./components/graphic";
import { ProjectType } from "./components/project";

export const GraphicData: GraphicType[] = [
  {
    title: "Travel Banner Ad",
    description: "Travel Banner made in Adobe Illustrator",
    image: {
      src: "/images/TravelBannerAd1.jpg",
      width: "9667",
      height: "3125",
    },
  },
  {
    title: "Travel Brochure Example",
    description: "Travel Brochure made in Adobe Illustrator",
    image: {
      src: "/images/TravelBrochure1.jpg",
      width: "9667",
      height: "6250",
    },
  },
  {
    title: "Travel Brochure Example",
    description: "Travel Brochure made in Adobe Illustrator",
    image: {
      src: "/images/TravelBrochure2.jpg",
      width: "9667",
      height: "6250",
    },
  },
  {
    title: "Reflect",
    description:
      "Artwork built with Adobe Illustrator with the concept of wireframe designs and repetition.",
    image: {
      src: "/images/LogoDesign2.JPG",
      width: "562",
      height: "765",
    },
  },
  {
    title: "Logo Work",
    description: "Logo design with Adobe Illustrator.",
    image: {
      src: "/images/LogoWork.jpg",
      width: "450",
      height: "450",
    },
  },
  {
    title: "Lunar Tide",
    description: "3D artwork made with Blender.",
    image: {
      src: "/images/lunartide-min.png",
      width: "1920",
      height: "1080",
    },
  },
  {
    title: "3d Cube",
    description: "3D Cube made with Blender.",
    image: {
      src: "/images/cube-min.png",
      width: "1920",
      height: "1080",
    },
  },
];

export const ProjectData: ProjectType[] = [
  {
    title: "Ecommerce Startup",
    description: "Ecommerce website using NextJS and Sanity.IO.",
    image: {
      src: "/images/Ecommerce.png",
    },
  },
  {
    title: "Lunde Water",
    description:
      "Water Delivery application using an MERN stack with Typescript. Created and implemented a custom algorithm to interact with T Sheets API, that scans employee timesheets and creates a calendar of available booking dates based on that data. Used RESTful design principles for API communication. Created role based user authentication for different authorization levels.",
    image: {
      src: "/images/lundewater.gif",
    },
  },
  {
    title: "Mockup",
    description:
      "Mockup is an ecommerce store built with React for the frontend and Firebase for backend serverside needs. Used react router for routing between pages, and Redux for state management.",
    image: {
      src: "/images/mockup.gif",
    },
    link: {
      demo: "https://jeff-brausam.github.io/mockup-online-store",
      repo: "https://github.com/Jeff-Brausam/mockup-online-store",
    },
  },
  {
    title: "Calculator",
    description:
      "An application built with Javascript using ES5 syntax, with the purpose of solving math equations with precision and ease.",
    image: {
      src: "/images/calculator.gif",
    },
    // video: {
    //   src: "calculator.mov",
    //   type: "video/mov",
    //   fallback: {
    //     src: "calculator.mp4",
    //     type: "video/mp4",
    //   },
    // },
    link: {
      demo: "https://jeff-brausam.github.io/calculator-app",
      repo: "https://github.com/Jeff-Brausam/calculator-app",
    },
  },
  {
    title: "To-do List",
    description:
      "Built in React, a user may create, edit, and delete a to-do item. Persisted storage for users through localStorage.",
    image: {
      src: "/images/todolist.gif",
    },
    link: {
      demo: "https://jeff-brausam.github.io/to-do-list",
      repo: "https://github.com/Jeff-Brausam/to-do-list",
    },
  },
  {
    title: "Weather Application",
    description:
      "Built using Javascript, HTML5, CSS, a very minimal application that allows a user to search and find the 5-day forecast in their city.",
    image: {
      src: "/images/WeatherAppScreenshot.jpg",
    },
    link: {
      demo: "https://jeff-brausam.github.io/weather-app",
      repo: "https://github.com/Jeff-Brausam/weather-app",
    },
  },
];
