import React from "react";
import Divider from "@material-ui/core/Divider";
import Chip from "@material-ui/core/Chip";
import "./LeftPanel.css";

function Detail( ) {
  const card = {
    level: "3",
    race: "alien",
    attribute: "dragon",
  };

  const card_type_to_show = {
    MONSTER_NORMAL: "Normal Monster",
    MONSTER_EFFECT: "Effect Monster",
    MONSTER_RITUAL: "Ritual Monster",
    MONSTER_FUSION: "Fusion Monster",
    MONSTER_SYNCHRO: "Synchro Monster",
    SPELL_NORMAL: "Normal Spell",
    SPELL_QUICK: "Quick Spell",
    SPELL_EQUIPMENT: "Equipment Spell",
    SPELL_CONTINUOUS: "Continuous Spell",
    SPELL_ENVIRONMENT: "Environment Spell",
    TRAP_NORMAL: "Normal Trap",
    TRAP_CONTINUOUS: "Continuous Trap",
    TRAP_COUNTER: "Counter Trap",
  };

  return (
    <div>
      <div className="specific">
        <p className="specific_type">{card_type_to_show[card.card_type]}</p>
        <div className="specific_others">
          <img
            className="specific_others_icon"
            src={"https://ygoprodeck.com/wp-content/uploads/2017/01/level.png"}
            title={"Level: " + card.level}
          ></img>
          <p>{card.level}</p>
          <img
            className="specific_others_icon"
            src={"https://ygoprodeck.com/pics/" + card.attribute + ".jpg"}
            title={"Attr: " + card.attribute}
          /> 
        </div>
      </div>
      <div className="specific_atk_def">
        <Chip label={"ATK: "  } />
        <Chip label={"DEF: "   } />
      </div>
    </div>
  );
}

export default Detail;
