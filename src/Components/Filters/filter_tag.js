import React, { Component } from 'react';


class FilterTag extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { filterType, toggleFilter } = this.props;
    let category = filterType.label.includes("stars") ? "qualityFilters" : "designFilters";

    if(category === "designFilters"){
      return (
        <div className="filter-tag">
          <div>{filterType.label}</div>
          <img
            className="filter-tag-img"
            src="images/delete-tag.png"
            onClick={ () => (toggleFilter(category, filterType)) }
           />
        </div>
      )
    } else {
      return (
        <div className="filter-tag">
          <img
            className="tag-stars"
            src={"images/" + filterType.label + ".png"} />
          <img
            className="filter-tag-img"
            src="images/delete-tag.png"
            onClick={ () => (toggleFilter(category, filterType)) }
           />
        </div>
      )
    }

  }
}

export default FilterTag;
