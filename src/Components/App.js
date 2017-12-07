'use strict';
//css
require('style-loader!./App.css');
import React, { Component } from 'react';
import ImageIndex from './Images/image_index.js';
import FiltersIndex from './Filters/filters_index.js';
import SelectedFiltersIndex from './Filters/selected_filters_index.js';
import data from '../data.json';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      qualityFilters: [],
      designFilters: [],
      showFilters: false
    }

  this.toggleFilter = this.toggleFilter.bind(this);
  this.filterImages = this.filterImages.bind(this);
  this.getFilterIds = this.getFilterIds.bind(this);
  this.checkIfSelected = this.checkIfSelected.bind(this);
  }

  getFilterIds(array) {
    return array.map( filter => (
      filter.id
    ))
  }

  checkIfSelected(metaData, selected) {
    for(let i = 0; i < metaData.length; i++) {
      let id = metaData[i]

      if(selected.includes(id)) {
        return true;
      }
    }

    return false;
  }


  filterImages() {
    let images = data.data;
    let qualityFilterIds = this.getFilterIds(this.state.qualityFilters);
    let designFilterIds = this.getFilterIds(this.state.designFilters);
    let filtered = [];

    if(qualityFilterIds.length === 0 && designFilterIds.length === 0){
      return images;
    }

    for(let i = 0; i < images.length; i++) {
      let image = images[i];
      let designIds = image.metaData.designStyle;
      let qualityIds = image.metaData.qualityStandard;

      if(!filtered.includes(image)) {
        if(this.checkIfSelected(qualityIds, qualityFilterIds)) {
          filtered.push(image);
        } else if(this.checkIfSelected(designIds, designFilterIds)) {
          filtered.push(image);
        }
      }
    }

    return filtered;
  }


  toggleFilter(category, filterType) {
    let filterIdx =  this.state[category].indexOf(filterType);

    if(filterIdx > -1) {
      this.setState({category: this.state[category].splice(filterIdx, 1)})
    } else {
      this.setState({category: this.state[category].push(filterType)})
    }
  }


  render() {
    let filtersView = this.state.showFilters ? "show-filters" : "hide-filters";
    let imageSet = this.filterImages();

    return (
      <div className="root">
        <div className={ filtersView }>
          <FiltersIndex
            toggleFilter={ this.toggleFilter }
            designCategories={ data.designStyle }
            selectedDesigns={ this.state.designFilters }
            qualityCategories={ data.qualityStandard }
            selectedQualities={ this.state.qualityFilters }
          />
        </div>
        <div className="grid-container">
          <div className="filters-container">
            <button
              className="filter-button"
              onClick={() => this.setState({showFilters: !this.state.showFilters})}>
              <img className="filter-img" src="images/filter.png" />
            </button>
            <SelectedFiltersIndex
              toggleFilter={ this.toggleFilter }
              selectedDesigns={ this.state.designFilters }
              selectedQualities={ this.state.qualityFilters }
            />
          </div>
          <button className="scroll-button" onClick={() => this.scrollImages("left") }>
            <img className="scroll-arrow" src='images/left-arrow.png' />
          </button>
          <ImageIndex imageSet={ imageSet }/>
          <button className="scroll-button" onClick={() => this.scrollImages("right") }>
            <img className="scroll-arrow" src='images/right-arrow.png' />
          </button>
        </div>

      </div>
    );
  }
}

export default App;
