import React from "react";
import PropTypes from "prop-types";

function Flashcard(props){

  return (
    <React.Fragment>
      {/* onClick = {() => props.whenTicketClicked(props.id)} */}
      <div >
        {/* the stuff that goes in the card */}
      </div>
    </React.Fragment>
  );
}

Flashcard.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.string,
  // implement these later
  // id: PropTypes.string,
  // whenTicketClicked: PropTypes.func
}

export default Flashcard;