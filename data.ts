import { ProjectType } from "./components/project";

export const ProjectData: ProjectType[] = [
  {
    title: "Lunde Water",
    description:
      "Water Delivery application using an MERN stack with Typescript. Created and implemented a custom algorithm to interact with T Sheets API, that scans employee timesheets and creates a calendar of available booking dates based on that data. Used RESTful design principles for API communication. Created role based user authentication for different authorization levels.",
    video: { src: "lunde_water.mp4", type: "video/mp4" },
  },
  {
    title: "Mockup",
    description:
      "Mockup is an ecommerce store built with React for the frontend and Firebase for backend serverside needs. Used react router for routing between pages, and Redux for state management.",
    video: { src: "mockup.mp4", type: "video/mp4" },
    link: {
      demo: "https://jeff-brausam.github.io/mockup-online-store",
      repo: "https://github.com/Jeff-Brausam/mockup-online-store",
    },
  },
  {
    title: "Calculator",
    description:
      "An application built with Javascript using ES5 syntax, with the purpose of solving math equations with precision and ease.",
    video: { src: "calculator.mp4", type: "video/mp4" },
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
      src: "/images/ToDoListScreenshot.jpg",
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
