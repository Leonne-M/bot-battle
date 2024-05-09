import React from "react";
import BotSpecs from "./BotSpecs";
import SingleBot from "./SingleBot";
function BotCollection(props) {
  // Your code here
  const { bots } = props;
  const addToArmy = (bot) => {};
  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
        {bots.map((bot) => {
          return <SingleBot key={bot.id} bot={bot} />;
        })}
      </div>
    </div>
  );
}

export default BotCollection;
