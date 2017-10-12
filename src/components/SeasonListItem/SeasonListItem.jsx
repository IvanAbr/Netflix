import "./SeasonListItem.scss";
import React from "react";

class SeasonListItem extends React.Component {
  render() {
    const id= this.props.match.params.name;
    console.log(this.props.match)
  return (
    <div className="season-list-item">
      <p>SeasonListItem {id}</p>
      
    </div>
  );
}
};

export default SeasonListItem;
