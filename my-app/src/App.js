import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Input from "./components/input/index.js";
import ListComponent from "./components/list/index";
//import {data} from "./components/list/list_items.js"

function App() {
   // console.log(Input.inputValue);
   const [toDos, setToDos] = useState([]);

   const [id, setID] = useState(0);

   function add(text) {
      setID(id + 1);
      const newObject = {
         id: id,
         toDo: text,
      };

      setToDos([...toDos, newObject]);
   }

   function remove(event) {
      const id = event.target.parentElement.id;
      const index = toDos.findIndex((toDo) => toDo.id == id);
      setToDos([...toDos.slice(0, index), ...toDos.slice(index + 1)]);
   }

   return (
      <div className="App">
         <h1>To do List</h1>
         <Input add={add} />
         <ListComponent content={toDos} remove={remove} />
      </div>
   );
}

export default App;
