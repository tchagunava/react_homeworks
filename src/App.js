import './App.css';
import React from 'react';
import "./index.css";
import Parent from './Parent'

const App = () => {
  return (
    <div className="App">
      <Parent />
    </div>
  );
}

export default App;
// პირველი დავალება
// function App() {
//   const Users = [
//     { name: 'john', lname: 'smith', age: 18, id: 1 },
//     { name: 'tom', lname: 'hertz', age: 19, id: 2 },
//     { name: 'ben', lname: 'bright', age: 20, id: 3 },
//     { name: 'don', lname: 'leam', age: 21, id: 4 },
//     { name: null, lname: null, age: null, id: null },

//   ];

//   return (
// //     <div>
//       {Users.map((user) => {
//         return <h1>{user.name}, {user.lname}, {user.age}, {user.id}</h1>
//       })}
// //     </div>
//   )

//   function Child(Users, isUserLoggedin) {
//     if (isUserLoggedin = true) {
//       return (
//         <div>
//         </div>
//       )
//     }
//     <div>
//       no users in the systems
//     </div>
//   }

// }


// მეორე დავალება
// function Wrapper() {
//   return (
//     <div>
//       <p>just text</p>
//     </div>
//   )
// }

// function Navbar() {
//   return (
//     <div>
//       <p>just text</p>
//     </div>
//   )
// }

// function Footer() {
//   return (
//     <div>
//       <p>just text</p>
//     </div>
//   )

// }


