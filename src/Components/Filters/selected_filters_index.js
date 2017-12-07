import React, { Component } from 'react';
import FilterTag from './filter_tag.js'

class SelectedFiltersIndex extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { selectedDesigns, selectedQualities, toggleFilter } = this.props;
    let combinedFilters = selectedDesigns.concat(selectedQualities);

    return (
        <ul className="tag-list">
          { combinedFilters.map((filterType, idx) => (
            <FilterTag
              key={ idx }
              filterType={ filterType }
              toggleFilter={ toggleFilter }
            />
          )) }
        </ul>
    );
  }
}

export default SelectedFiltersIndex;
