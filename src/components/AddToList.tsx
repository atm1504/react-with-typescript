import React, { useState } from "react";
import { IState as Props } from "../App";

interface IProps {
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
  people: Props["people"];
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({ name: "", age: "", note: "", img: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleClick = (): void => {
    if (!input.name || !input.age) return;

    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        img: input.img,
        note: input.note,
      },
    ]);
    setInput({
      name: "",
      age: "",
      img: "",
      note: "",
    });
  };

  return (
    <div className="AddToList">
      <input
        type="text"
        className="AddToList-input"
        name="name"
        value={input.name}
        placeholder="Name"
        onChange={handleChange}
      />
      <input
        type="text"
        className="AddToList-input"
        name="age"
        value={input.age}
        placeholder="Age"
        onChange={handleChange}
      />
      <input
        type="text"
        className="AddToList-input"
        name="img"
        value={input.img}
        placeholder="Image Url"
        onChange={handleChange}
      />
      <textarea
        className="AddToList-input"
        name="note"
        placeholder="Note"
        value={input.note}
        onChange={handleChange}
      />
      <button className="AddToList-btn" onClick={handleClick}>
        Add to List
      </button>
    </div>
  );
};

export default AddToList;
