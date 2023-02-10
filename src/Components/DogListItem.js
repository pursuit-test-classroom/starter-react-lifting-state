import DogDetails from "./DogDetails";

export default function DogListItem({ dog }) {
  return (
    <li key={dog.id}>
      <span
        // onClick={() => updateDogAttendance(dog.id)}
        style={
          dog.present
            ? { textDecoration: "none" }
            : { textDecoration: "line-through" }
        }
      >
        {dog.name}{" "}
      </span>

      {/* <button onClick={() => removeDog(dog.id)}>remove</button> */}
      <DogDetails dog={dog} />
    </li>
  );
}
