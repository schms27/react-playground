import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

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
        <Skills />
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

function Skills() {
  return (
    <div className="skill-list">
      <Skill desc="Python" emoji="👌" color="gray" />
      <Skill desc="C#" emoji="👍" color="green" />
      <Skill desc="JavaScript" emoji="🤞" color="red" />
      <Skill desc="C++" emoji="🤔" color="yellow" />
      <Skill desc="PyTorch" emoji="💖" color="darkgreen" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.desc}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
