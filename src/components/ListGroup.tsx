import { MouseEvent } from "react";

function ListGroup() {
  let items = ["Chicken", "Pork", "Beef", "Mutton", "Fish"];
  

  //const Message = items.length === 0 ? <p>No item found</p> : null

  const getMessage = () => {
    //in JS using && if 1st condition is true will render the 2nd condition
    return items.length === 0 && <p>No item found</p>
  }
  //Event handler, ( :MouseEvent) is a type annotation in TS for Reacts own onClick mouse event
  const handleClick = (event : MouseEvent) => console.log(event)

  //<> tells React that its a fragment. (needed when there is multiple elements like h1 and ul in this case)
  //with {} you can add variables or functions into jsx markup
  return (
    
    <>
      <h1>List</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item"key={item} onClick={handleClick}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
