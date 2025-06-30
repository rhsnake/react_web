import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Chicken", "Pork", "Beef", "Mutton", "Fish"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup items={items} heading="Meat" onSelectItem={handleSelectItem} />
      <Alert>
         <h1>Hello World</h1>
      </Alert>
    </div>
  );
}

export default App;
