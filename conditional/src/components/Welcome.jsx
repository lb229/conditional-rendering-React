import { Age } from "./Age";

export function Welcome({ name, age }) {
  return (
    <div>
      <p>Welcome, <strong>{name}</strong>!</p>

      <Age age={age} />

      {/*Render the age if is greater than 18*/}
      {age > 18 && <Age age={age} />} 
      {/*Render the age only if is present*/}
      { age !== undefined && <Age age={age}/>} 
      {/*Render the age if is between 18  and 65*/}
      {(18 < age && age < 65)  && <Age age={age}/>} 
      {/*Render the age if is between 18 and 65 and if the name is John*/}
      {((18 < age && age < 65 )&& name === 'John') && <Age age={age}/>} 
      
    </div>
  );
}
