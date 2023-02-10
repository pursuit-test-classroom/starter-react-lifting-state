import { useState } from "react";
import { dogsData } from "./data";
import DogListItem from "./Components/DogListItem";
import NewDogForm from "./Components/NewDogForm";

function App() {
  const [dogs, setDogs] = useState(dogsData);
  const [showNewDogForm, setNewDogForm] = useState(false);

  function handleAddDog(dog) {
    setDogs([dog, ...dogs]);
  }

  function removeDog(dogID) {
    const filteredDogArray = dogs.filter((dog) => dog.id !== dogID);
    setDogs(filteredDogArray);
  }

  function toggleNewDogForm() {
    setNewDogForm(!showNewDogForm);
  }

  function updateDogAttendance(dogId) {
    const dogArray = [...dogs];
    const index = dogArray.findIndex((dog) => dogId === dog.id);
    dogArray[index].present = !dogArray[index].present;
    setDogs(dogArray);
  }
  return (
    <div className="App">
      <header>
        <h1> Bark and Bowl Doggy Day Care</h1>
      </header>
      <main>
        <div>
          <button onClick={toggleNewDogForm}>
            {showNewDogForm ? "hide form" : "Add a new dog"}
          </button>
          {showNewDogForm ? <NewDogForm /> : null}
        </div>
        <div>
          <ul>
            {dogs.map((dog) => {
              return <DogListItem dog={dog} key={dog.id} />;
            })}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
