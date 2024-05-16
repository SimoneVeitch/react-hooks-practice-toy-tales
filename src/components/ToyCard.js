import React from "react";

function ToyCard( {toy, name, image, likes, onDeleteToy, onUpdateLikes} ) {

  function handleDeleteClick() {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
    method: "DELETE",
  })
    .then((r) => r.json())
    .then(() => onDeleteToy(toy));
  }

  function handleLikeClick() {
    const updatedLikes = likes + 1;

    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ likes: updatedLikes }),
    })
      .then((r) => r.json())
      .then((updatedToy) => {
        // Call onUpdateLikes to update the likes in the parent component
        onUpdateLikes(updatedToy.id, updatedToy.likes);
      });
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLikeClick}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDeleteClick}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
