import "./App.css";
import Card from "./Card";
import Navbar from "./Navbar";
import data from "./data.js";

function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <div className="App">
      <Navbar />
      <section className="card-list">{cards}</section>
    </div>
  );
}

export default App;
