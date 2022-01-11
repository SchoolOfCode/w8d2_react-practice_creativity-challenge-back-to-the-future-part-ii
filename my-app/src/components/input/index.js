import React, { useState } from "react";

function Input({ add }) {
   const [inputValue, setInputValue] = useState("test");

   function onChange(e) {
      setInputValue(e.target.value);
   }

   return (
      <div>
         <input onChange={onChange} type="text" />
         <button className="submit-button" onClick={() => add(inputValue)}>
            SUBMIT
         </button>
      </div>
   );
}

export default Input;
