import React, { Component } from 'react';
import DesignFilterItem from './design_filter_item.js'

class DesignFilters extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="design-filters" >
        <label> Style </label>
          <ul className="categories-list">
            { this.props.designCategories.map((design, idx) => (
              <DesignFilterItem
                key={ idx }
                designType={ design }
                toggleFilter ={ this.props.toggleFilter }
               />
            )) }
          </ul>
      </div>
    );
  }

}

export default DesignFilters;
