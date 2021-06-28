import React, { useState } from "react";
import "./App.css";
import List from "./components/List";
import AddToList from "./components/AddToList";

export interface IState {
  people: {
    name: string;
    age: number;
    img: string;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Atm",
      img: "https://atm1504-d8f82.firebaseapp.com/images/me.jpg",
      age: 21,
      note: "Allergic to eggs",
    },
  ]);

  // people.map((p) => {
  //   p.age = 24;
  // });

  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
