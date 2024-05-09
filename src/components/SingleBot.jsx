import React from "react";

function SingleBot({ bot }) {
  return (
    <div style={{ padding: "10px", border: "1px solid black", margin: "10px" }}>
      <div>
        <img
          alt="oh no!"
          className="ui medium circular image bordered"
          src={bot.avatar_url}
        />
      </div>
      <div>
        <h2>Name: {bot.name}</h2>
      </div>
      <div>
        <p>
          <strong>Catchphrase: </strong>
          {bot.catchphrase}
        </p>
      </div>
    </div>
  );
}

export default SingleBot;
