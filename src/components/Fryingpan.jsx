import "./fryingpan.css";

const FryingPan = () => {
   
  return (
    <div className = "h-[100vh] w-[100vw]" >
    <div className="cooking" >
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="area">
        <div className="sides">
          <div className="pan"></div>
          <div className="handle"></div>
        </div>
        <div className="pancake">
          <div className="pastry"></div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default FryingPan;