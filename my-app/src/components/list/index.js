import React, { useState, useEffect } from "react";

function ListComponent({ content, remove, onPriorityChange }) {
   return (
      <div>
         <ul>
            {content.map(function (item) {
               return (
                  <div key={item.id} id={item.id}>
                     <li>{item.toDo}</li>
                     <input type="checkbox"></input>
                     <button onClick={remove}>DELETE</button>
                     <select onClick={onPriorityChange}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                     </select>
                  </div>
               );
            })}
         </ul>
      </div>
   );
}

export default ListComponent;
