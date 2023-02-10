import { useState } from "react";
import { v1 as generateUniqueID } from "uuid";

export default function NewDogForm({ handleAddDog, toggleNewDogForm }) {
  const [checked, setChecked] = useState(false);
  const [selectOption, setSelectOption] = useState("");
  const [newDog, setNewDog] = useState({
    id: "",
    name: "",
    present: false,
    grade: 100,
    age: "",
    likesSwimming: "",
    favFlavor: "",
    contact: "",
  });

  function addDog() {
    const createDog = {
      id: generateUniqueID(),
      name: newDog.name,
      present: false,
      grade: 100,
      notes: "",
      age: newDog.age,
      likesSwimming: checked,
      favFlavor: selectOption,
      contact: newDog.contact,
    };
    handleAddDog(createDog);
  }

  function handleCheckboxChange() {
    setChecked(!checked);
  }

  function handleSelectChange(event) {
    setSelectOption(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    addDog();
    resetDogForm();
    toggleNewDogForm();
  }

  function handleTextChange(event) {
    setNewDog({
      ...newDog,
      [event.target.id]: event.target.value,
    });
  }
  function resetDogForm() {
    setNewDog({
      id: "",
      name: "",
      present: false,
      grade: 100,
      age: "",
      likesSwimming: "",
      favFlavor: "",
      contact: "",
    });
    setChecked(false);
    setSelectOption("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        onChange={handleTextChange}
        value={newDog.name}
      />

      <label htmlFor="age">Age:</label>
      <input
        type="number"
        min="0"
        id="age"
        onChange={handleTextChange}
        value={newDog.age}
      />

      <label htmlFor="contact">Contact:</label>
      <input
        type="email"
        id="contact"
        onChange={handleTextChange}
        value={newDog.contact}
      />
      <label htmlFor="favFlavor">Favorite flavor:</label>
      <select id="favFlavor" onChange={handleSelectChange}>
        <option value=""></option>
        <option value="beef">Beef</option>
        <option value="chicken">Chicken</option>
        <option value="carrot">Carrot</option>
        <option value="bacon">Bacon</option>
      </select>
      <label>Likes swimming:</label>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
      />
      <br />
      <input type="submit" />
    </form>
  );
}
