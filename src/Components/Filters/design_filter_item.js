import React, { Component } from 'react';

class DesignFilterItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { designType, toggleFilter } = this.props;
    
    return (
      <button
        onClick={()=> (toggleFilter("designFilters", designType))}
        className="design-item">
        { designType.label }
      </button>

    );
  }
}

export default DesignFilterItem;
