import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((r) => r.json())
      .then((data) => {
        setToys(data);
      });
  }, []);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }
  function handleAddToy(newToy) {
    setToys([...toys, newToy]);
  }

  function handleDeleteToy(deletedToy) {
    const updatedToys = toys.filter((toy) => toy.id !== deletedToy.id);
  setToys(updatedToys);
  }

  function handleUpdateLikes(id, newLikes) {
    const updatedToys = toys.map((toy) =>
      toy.id === id ? { ...toy, likes: newLikes } : toy
    );
    setToys(updatedToys);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={handleAddToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} handleDeleteToy={(handleDeleteToy)} handleUpdateLikes={handleUpdateLikes}/>
    </>
  );
}

export default App;
