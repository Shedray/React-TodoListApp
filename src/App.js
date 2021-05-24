import "./styles.css";
import { useState } from "react";
function Test(props) {
  return (
    <div>
      <h1 className={""}>{props.name}</h1>
    </div>
  );
}
function ArrayItem() {
  let [array, setArray] = useState([]);
  let [text, setText] = useState("");
  let deleteHandler = (index) => {
    let a = array.filter((item, array_index) => {
      return index !== array_index;
    });
    setArray(a);
  };
  let getInputValue = (e) => {
    setText(e.target.value);
  };
  let addArray = () => {
    array.push(text);
    setArray(array);
    setText("");
  };
  return (
    <div>
      <input
        className={"mx-3"}
        type="text"
        value={text}
        onChange={(e) => {
          getInputValue(e);
        }}
      ></input>
      <button onClick={addArray}>添加</button>
      {array.map((item, index) => (
        <div>
          <div style={{ display: "inline-block" }}>{item}</div>
          <button
            style={{ marginLeft: "20px" }}
            onClick={() => {
              deleteHandler(index);
            }}
          >
            删除
          </button>
        </div>
      ))}
    </div>
  );
}
export default function App() {
  return (
    <div>
      <Test name="Simple Todolist App"></Test>
      <ArrayItem></ArrayItem>
    </div>
  );
}
