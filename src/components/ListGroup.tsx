import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  //to get variable from this component
  onSelectItem: (item:string) => void;
}

function ListGroup({items,heading, onSelectItem}: Props) {
  // State Hook (Tells React DOM that this is a dyanic variable index 0 is variable index 1 is method to change it)
  const [selectedIndex, setSelectedIndex] = useState(-1);
  

  //const Message = items.length === 0 ? <p>No item found</p> : null
  const getMessage = () => {
    //in JS using && if 1st condition is true will render the 2nd condition
    return items.length === 0 && <p>No item found</p>
  }

  //<> tells React that its a fragment. (needed when there is multiple elements like h1 and ul in this case)
  //with {} you can add variables or functions into jsx markup
  return (
    
    <>
      <h1>{heading}</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item,index) => (
          <li className= {selectedIndex === index ? 'list-group-item active' : 'list-group-item'} key={item} onClick={() => {setSelectedIndex(index); onSelectItem(item)}}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
