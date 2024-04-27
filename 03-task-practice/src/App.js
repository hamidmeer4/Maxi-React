// import componentsImage from "./Assests/images/components.png";
// import stateImage from "./Assests/images/state.png";
// import eventsImage from "./Assests/images/events.png";\

import HTMl from './Assests/images/html.png'
import CSS from './Assests/images/css.png'
import javaScript from './Assests/images/js.png'
import React from './Assests/images/react.png'

import Header from "./components/Header/Header";
import Concepts from "./components/Concept/Concepts";

const Concept = [
  {
    title: "HTML",
    image: HTMl,
    description: "HTML, or Hypertext Markup Language, is the standard language used to create and design web pages and web applications.",
  },
  {
    title: "CSS",
    image: CSS,
    description:"CSS, or Cascading Style Sheets, is a stylesheet language used to control the presentation and layout of HTML documents. ",
  },
  {
    title: "JavaScript",
    image: javaScript,
    description: "JavaScript is a high-level, interpreted programming language primarily used to add interactivity and dynamic behavior to web pages. ",
  },
  {
    title: "React",
    image: React,
    description: "React is a popular JavaScript library for building user interfaces, developed by Facebook. It is widely used for creating interactive and dynamic web applications ",
  },
];

function App() {
  return (
    <div>
      <Header />
      <ul id="concepts">
        <Concepts
          image={Concept[0].image}
          title={Concept[0].title}
          description={Concept[0].description}
        />
        <Concepts
          image={Concept[1].image}
          title={Concept[1].title}
          description={Concept[1].description}
        />
        <Concepts
          image={Concept[2].image}
          title={Concept[2].title}
          description={Concept[2].description}
        />
        <Concepts
          image={Concept[3].image}
          title={Concept[3].title}
          description={Concept[3].description}
        />
      </ul>
    </div>
  );
}

export default App;
