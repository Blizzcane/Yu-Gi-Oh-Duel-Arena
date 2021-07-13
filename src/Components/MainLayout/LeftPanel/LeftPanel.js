import "./LeftPanel.css";
import Detail from "./Detail";

function LeftPanel({ card }) { 
  return (
    <div className="left_panel">
      <div className="card_pic_container">
        <div className="card_pic_box">
          {/* insert card image here */}
          <img
            style={{ height: "100%", width: "100%" }}
            
            // src={card.card_images[0].image_url}
          />
        </div>
      </div>
      <Detail  card={card} />
    </div>
  );
}

export default LeftPanel;
