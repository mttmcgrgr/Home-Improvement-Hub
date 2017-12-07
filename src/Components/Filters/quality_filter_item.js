import React, { Component } from 'react';

class QualityFilterItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { qualityType, toggleFilter } = this.props;
    
    return (
      <button
        onClick={()=> (toggleFilter("qualityFilters", qualityType))}
        className="quality-item">
        <img
          className="quality-image"
          src={"images/" + qualityType.label + ".png"}
        />
      </button>

    );
  }
}

export default QualityFilterItem;
