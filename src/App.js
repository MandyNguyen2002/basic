import logo from "./logo.svg";
import "./App.css";
import profile from "./profile.jpg";
import { Heading } from "./components/resume/Heading";

function App() {
  const date = new Date(Date.now()).toDateString();

  return (
    <div className="App">
      <Heading
        fullName={"MANDY NGUYEN"}
        about="Junior year Computer Engineering student actively looking for an
          internship/co-op position in Computer Engineering that will allow me
          to apply my knowledge to benefit my workspace."
      />

      <div className="space">
        <hr></hr>
      </div>

      <div className="Section">
        <h2>EDUCATION</h2>
        <div className="education-item">
          <span>
            International University - Viet Nam National University, Ho Chi
            Minh, Viet Nam
          </span>
          <span className="date">October 2020 — May 2023</span>
        </div>
        <div className="education-item">
          <span>
            State University of New York at Binghamton, Binghamton, NY
          </span>
          <span className="date">August 2023</span>
        </div>
        <div className="information">
          <p>Bachelor of Science in Computer Engineering</p>
          <p>GPA: 3.85/4</p>
          <p>Expected Graduation: May 2025</p>
        </div>
      </div>
      <div className="space">
        <hr></hr>
      </div>
      <div className="Section">
        <h2>TECHNICAL SKILLS</h2>
        <div className="information">
          <p>Programming languages: Java, Python, C, Matlab, VHDL.</p>
          <p>
            Development tools: Visual Studio Code, MATLAB, Vivado, LT Spice.
          </p>
        </div>
      </div>

      <div className="space">
        <hr></hr>
      </div>

      <div className="Section">
        <h2>PROJECTS</h2>
        <div className="project-item">
          <p>Simple Calculator - Developer</p>
          <span className="date">Sep 2022 — Dec 2022</span>
        </div>
        <div className="information2">
          <ul>
            <li>
              Developed a simple calculator that includes simple functions and
              displays the result: addition, subtraction, multiplication,
              division, square root, exponential, sin, cos, tan.
            </li>
            <li>Built with Graphical User Interface in Matlab.</li>
          </ul>
        </div>
        <div className="project-item">
          <p>Minesweeper Game</p>
          <span className="date">Feb 2023 — May 2023</span>
        </div>
        <div className="information2">
          <ul>
            <li>
              A clone of the classic Minesweeper game with the additional
              feature of an undo button.
            </li>
            <li>
              The game is played on a square grid, some of which contain mines.
              The player must click on the squares to reveal them, and if they
              click on a mine, they lose the game. The goal of the game is to
              reveal all of the squares without clicking on any mines.
            </li>
            <li>
              The game is implemented in Java using the Swing Graphical User
              Interface.
            </li>
          </ul>
        </div>
      </div>

      <div className="space">
        <hr></hr>
      </div>

      <div className="Section">
        <h2>RELEVANT COURSEWORK</h2>
        <div className="information2">
          <ul>
            <li>
              Digital System Design: Specification and synthesis of digital
              systems using hardware description language and implementation
              using programmable logic devices.
            </li>
            <li>
              Object-Oriented Programming: Explain and use concepts in
              object-oriented programming, including classes, objects,
              abstraction, encapsulation, inheritance, and polymorphism.
              Implement an object-oriented solution in Java programming
              language.
            </li>
            <li>
              Algorithms and Data Structures: Understand basic data structures
              and algorithms. Analyze and evaluate data structures and
              algorithms. Design algorithms and select data structures for
              real-world applications.
            </li>
            <li>
              Other Coursework: Digital Logic Design, Sophomore Design, Design
              Lab, Signals and Systems, Electronics.
            </li>
          </ul>
        </div>
      </div>
      <div className="space">
        <hr></hr>
      </div>
    </div>
  );
}

export default App;
