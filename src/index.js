import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const Header = ({ text }) => <h1 id="hi">{text}</h1>;
// React.createElement("h1", { id: "hi" }, props.text);

//const Element = React.createElement("p", null, "par");
const Element = <p>parNew</p>;
// class MainClassComponents extends React.Component {
//   render(props) {
//     console.log(this.props);
//     return (
//       <div className="qwe">
//         <Header text={"my text new" + this.props.count} />
//         {Element}
//       </div>
//     );

//   }
//}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
