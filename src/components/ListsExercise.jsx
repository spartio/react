import React from 'react';
const emojis = ["😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾"];
const Component = props => (
  <div className='flex note-exercise-s'>
      {emojis.map(em => <li key={em} className="emoji"> {em} </li>)}
    {/* reimplement emojis using map -> emojis [...].map(...)*/}
  </div>
);
/* 😺 😸 😹 😻 😼 😽 🙀 😿 😾*/
export default Component;
