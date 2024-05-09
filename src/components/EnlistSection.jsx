import BotSpecs from "./BotSpecs";

function EnlistSection(props) {
  const { clickedBot, setClickedBot } = props;
  if (clickedBot === null) {
    return null;
  }
  return <BotSpecs bot={clickedBot} />;
}

export default EnlistSection;
