import React, {useState, useEffect} from "react";
import ToyCard from "./ToyCard";

function ToyContainer( {toys, handleDeleteToy, handleUpdateLikes} ) {

  return (
     <div id="toy-collection">
    {toys.map((toy) => (
      <ToyCard 
        key={toy.id}
        name={toy.name}
        image={toy.image}
        likes={toy.likes}
        toy={toy}
        onDeleteToy={handleDeleteToy}
        onUpdateLikes={handleUpdateLikes}
      />
    ))}
      </div>
  );
}

export default ToyContainer;
