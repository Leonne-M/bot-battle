import BotSpecs from "./BotSpecs";

function EnlistSection(props) {
  const { clickedBot, setClickedBot, army, setArmy } = props;
  const enlist = () => {
    console.log("enlist");
    for (let i = 0; i < army.length; i++) {
      let bot = army[i];
      if (bot.id === clickedBot.id) {
        return;
      }
    }
    let newArmy = army;
    newArmy.push(clickedBot);
    setClickedBot(null);
  };
  const goBack = () => {
    setClickedBot(null);
  };
  if (clickedBot === null) {
    return null;
  }

  return <BotSpecs bot={clickedBot} enlist={enlist} goBack={goBack} />;
}

export default EnlistSection;
