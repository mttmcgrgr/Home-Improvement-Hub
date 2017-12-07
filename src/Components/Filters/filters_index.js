import React, { Component } from 'react';
import QualityFilters from './quality_filters.js';
import DesignFilters from './design_filters.js';

class FiltersIndex extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="filters-index">
        <DesignFilters
          designCategories={ this.props.designCategories }
          selectedDesigns={ this.props.selectedDesigns }
          toggleFilter ={ this.props.toggleFilter }
         />
        <QualityFilters
          qualityCategories={ this.props.qualityCategories }
          selectedQualities={ this.props.selectedQualities }
          toggleFilter ={ this.props.toggleFilter }
        />
      </div>

    );
  }
}

export default FiltersIndex;
