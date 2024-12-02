const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
export default function App() {
  return (
    <div className="steps">
      Hello React
      <div></div>
      <div></div>
      <div></div>
      <p className="message">Hello</p>
      <div className="buttons"></div>
      <button style={{ backgroundColor: "#7950f2", color: "#fff" }}>
        Previous
      </button>
      <button style={{ backgroundColor: "#7950f2", color: "#fff" }}>
        Next
      </button>
    </div>
  );
}
