import React, { Component } from 'react';
import QualityFilterItem from './quality_filter_item.js'

class QualityFilters extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className="quality-filters" >
        <label> Quality </label>
          <ul className="categories-list">
            { this.props.qualityCategories.map((quality, idx) => (
              <QualityFilterItem
                key={ idx }
                qualityType={ quality }
                toggleFilter ={ this.props.toggleFilter }
               />
            )) }
          </ul>
      </div>
    );
  }
}

export default QualityFilters;
