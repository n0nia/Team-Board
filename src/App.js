import "./App.css";
import Card from "./Card";

function App() {
  const data = [{
    name: "Denisa Boriceanu",
    skillBrainPosition: "Student",
    actualJob: "QA Engineer",
    shortDescription: "I am a student at the Faculty of Computer Science, specializing in Software Engineering. I am passionate about quality assurance and testing methodologies.",
    socialMediaLinks: {
      gitHub: "https://github.com/n0nia",
      linkedIn: "https://www.linkedin.com/in/denisa-boriceanu-5286b41a3/"
    },
    avatar: require("./images/denisa.jpg"),
  },
  {
    name: "Another Student",
    skillBrainPosition: "Student",
    actualJob: "FrontEnd Developer",
    shortDescription: "I love React and I am passionate about web development. I am currently learning about different frameworks and libraries.",
    socialMediaLinks: {
      gitHub: "https://github.com/n0nia",
      linkedIn: "https://www.linkedin.com/in/denisa-boriceanu-5286b41a3/"
    },
    avatar: require("./images/denisa.jpg"),
  },
];



  return (
    <div className="app-container">
      <h1>Andromeda Team</h1>
      <div className="content-container">
        <Card 
          cardData={data[0]}
        />
        <Card 
          cardData={data[1]}
        />
      </div>
    </div>
  );
}

export default App;
