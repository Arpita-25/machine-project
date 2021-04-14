import React from "react";

function Results(props) {
    var answer; var topic;
    if(props.value > 0)
    {
    answer=props.value+"Nm";
    topic="The Value of the Starting Torque is";
    }
    else
    {
    answer="Please enter correct inputs as output is negative.";
    topic="ERROR"
    }
    function redirect()
    {
      window.location.reload();
    }

  return (
    <><div className="card border-primary mb-3" id="answer" style={{maxwidth: "18rem"}}  data-aos="zoom-out" data-aos-duration="3000">
    <div className="card-header" style={{textAlign: "center"}}>Answers</div>
    <div className="card-body text-primary">
      <h5 className="card-title" style={{textAlign: "center"}}>{topic}</h5>
      <p className="card-text" style={props.value>0?{textAlign: "center",color:"green"}:{textAlign: "center",color:"red"}}>{answer}</p>
      <button type="button" onClick={redirect} style={{textAlign: "center"}} id="try-again" class="btn btn-outline-primary">Try Again</button>

    </div>
  </div></>
  );
}

export default Results;
