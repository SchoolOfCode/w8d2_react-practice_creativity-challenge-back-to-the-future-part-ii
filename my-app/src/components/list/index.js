import React, { useState, useEffect } from "react";

function ListComponent({ content, remove }) {
   return (
      <div>
         <ul>
            {content.map(function (item) {
               return (
                  <div key={item.id} id={item.id}>
                     <li>{item.toDo}</li>
                     <input type="checkbox"></input>
                     <button onClick={remove}>DELETE</button>
                  </div>
               );
            })}
         </ul>
      </div>
   );
}

export default ListComponent;
