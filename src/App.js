import React from "react";
import "./styles.css";
import { useState } from "react";

const recommendationsDatabase = {
  RCs: [
    {
      name: "The Guardian",
      levelOfDifficulty: "Intermediate",
      link: "https://www.theguardian.com/international",
      description: "General Global news."
    },
    {
      name: "AEON Essays",
      levelOfDifficulty: "Tough",
      link: "https://aeon.co/essays",
      description:
        "Topics related to Psychology, Sociology, Physics, Cosmopolitanism, etc."
    },
    {
      name: "New York Times",
      levelOfDifficulty: "Intermediate",
      link: "https://www.nytimes.com/",
      description: "General Global news."
    },
    {
      name: "Wall Street Journal",
      levelOfDifficulty: "Tough",
      link: "https://www.wsj.com/",
      description:
        "Global cues related to finance along with news and well published articles."
    }
  ],

  Quants: [
    {
      name: "Bharat Gupta-Free Sessions-UnAcademy",
      levelOfDifficulty: "Beginner",
      link: "https://unacademy.com/@bharat_gupta/courses?goal=all&type=free",
      description: "One of the best starter package for your Quants Journey."
    },
    {
      name: "Rodha- Youtube",
      levelOfDifficulty: "Intermediate",
      link:
        "https://www.youtube.com/c/Rodha/playlists?view=50&sort=dd&shelf_id=6",
      description: "New Methods and advanced topics discussed."
    },
    {
      name: "Elites Grid-Quants",
      levelOfDifficulty: "Intermediate",
      link: "https://www.youtube.com/watch?v=2DQyLKb8edY",
      description: "Compilation of important concepts required for entrances."
    }
  ],
  LRDI: [
    {
      name: "Elites Grid-LRDI",
      levelOfDifficulty: "Beginner-Intermediate",
      link:
        "https://www.youtube.com/playlist?list=PL66qMJTd-VefmFgmCEbgB6mR6tTrVNYXu",
      description: "Best source for practicing LRDI on the web."
    },
    {
      name: "Anastasis Shankar-Youtube",
      levelOfDifficulty: "Intermediate",
      link:
        "https://www.youtube.com/channel/UCqlZOhHS0MUJuq1MuhBlBUQ/playlists?view=50&sort=dd&shelf_id=4",
      description: "Hidden Gem"
    },
    {
      name: "2IIM CAT Preparation- Past year Solutions",
      levelOfDifficulty: "Intermediate",
      link: "https://www.youtube.com/c/2iimcat/playlists",
      description:
        "The only BEST reference you can have before the actual exam."
    }
  ]
};

export default function App() {
  const [selectedSection, setSection] = useState("Quants");
  function SectionClickHandler(Section) {
    setSection(Section);
  }
  return (
    <div className="App">
      <h1>MBA Aspirants-Study Material </h1>
      <p style={{ fontSize: "medium" }}>
        If you are studing for MBA entrances this is a list of FREE resources
        which you can refer:
      </p>

      <div>
        {Object.keys(recommendationsDatabase).map((Section) => (
          <button
            key={Section.name}
            onClick={() => SectionClickHandler(Section)}
            style={{
              cursor: "pointer",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem",
              fontSize: "larger",
              backgroundColor: "#E0E7FF"
            }}
          >
            {Section}
          </button>
        ))}
      </div>
      <hr />
      <div>
        <ul>
          {recommendationsDatabase[selectedSection].map((topic) => (
            <li
              key={topic.name}
              style={{
                listStyle: "none",
                padding: ".5rem",
                border: "2px solid darkgray",
                width: "90%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem",
                backgroundColor: "#DBEAFE"
              }}
            >
              <div
                style={{
                  fontSize: "1.2rem",
                  backgroundColor: "#D1D5DB"
                }}
              >
                {" "}
                {topic.name}{" "}
              </div>
              <div style={{ fontSize: "medium" }}>
                {" "}
                Level of Difficulty:
                {topic.levelOfDifficulty}
              </div>
              <div style={{ padding: ".5rem" }}></div>

              <div style={{ fontSize: "large", fontStyle: "italic" }}>
                Description:- {topic.description}
              </div>
              <div style={{ padding: ".5rem" }}></div>
              <div style={{ fontSize: "medium" }}>{topic.link}</div>
            </li>
          ))}
        </ul>
        <div style={{ padding: "1.5rem", fontSize: "larger" }}>
          Note: You need to copy paste the URL into your address bar. We will
          add a few more resources and books later. STAY TUNED!!!
        </div>
      </div>
      <footer> </footer>
    </div>
  );
}
