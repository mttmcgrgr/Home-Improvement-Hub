import React, { Component } from 'react';
import ImageIndexItem from './image_index_item.js'

class ImageIndex extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { imageSet } = this.props;
    const width = (Math.ceil(imageSet.length / 3) * 270).toString() + "px";
    const gridStyle = {
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      overflowX: "scroll",
      width: width,
      height: "510px",
    };

    return (
      <div className="image-index-container">
        <div style={ gridStyle }>
            { imageSet.map((image, idx) => (
              <ImageIndexItem
                key={ idx }
                image={ image }
              />
            )) }
        </div>
      </div>
    );
  }
}

export default ImageIndex;
