import { useState } from "react";
import LeftPanel from "./LeftPanel/LeftPanel";
import "./Main.css";

function Main() {
  const [card, setCard] = useState({});
  fetch(
    "https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Dark%20Magician%20Girl"
  )
    .then((res) => res.json())
    .then((data) => setCard(data.data[0]));

    console.log(card);
  return (
    <div className="main_container">
      <LeftPanel card={card} />
    </div>
  );
}

export default Main;
