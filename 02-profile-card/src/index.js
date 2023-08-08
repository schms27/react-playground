import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const skills = [
  {
    skill: "Python",
    level: "advanced",
    color: "gray",
  },
  {
    skill: "C#",
    level: "advanced",
    color: "green",
  },
  {
    skill: "JavaScript",
    level: "intermediate",
    color: "red",
  },
  {
    skill: "C++",
    level: "beginner",
    color: "yellow",
  },
  {
    skill: "PyTorch",
    level: "enthusiastic",
    color: "darkgreen",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar
        name="generic avatar"
        imagePath="https://img.freepik.com/premium-vector/bearded-man-avatar-generic-male-profile-picture_53562-20202.jpg?w=2000"
      />
      <div className="data">
        <Intro
          name="Simon Schmid"
          text="Full-stack developer and data science enthusiast."
        />
        <Skills skills={skills} />
      </div>
    </div>
  );
}

function Avatar(props) {
  return <img className="avatar" src={props.imagePath} alt={props.name} />;
}

function Intro(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.text}</p>
    </div>
  );
}

function Skills(props) {
  return (
    <ul className="skill-list">
      {props.skills.map((skill) => (
        <Skill skillObj={skill} key={skill.skill} />
      ))}
    </ul>
  );
}

function Skill({ skillObj }) {
  return (
    <div className="skill" style={{ backgroundColor: skillObj.color }}>
      <span>{skillObj.skill}</span>
      <Emojj level={skillObj.level} />
    </div>
  );
}

function Emojj({ level }) {
  if (level === "advanced") return <span>🙌</span>;
  if (level === "intermediate") return <span>👍</span>;
  if (level === "beginner") return <span>🤔</span>;
  if (level === "enthusiastic") return <span>💖</span>;
}

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
