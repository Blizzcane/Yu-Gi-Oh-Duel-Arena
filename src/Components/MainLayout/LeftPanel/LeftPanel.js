import "./LeftPanel.css";

function LeftPanel() {
  return (
    <div className="left_panel">
      <div className="card_pic_container">
        <div className="card_pic_box">
          {/* insert card image here */}
          <img
            style={{ height: "100%", width: "100%" }}
            src="https://storage.googleapis.com/ygoprodeck.com/pics/6983839.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default LeftPanel;
