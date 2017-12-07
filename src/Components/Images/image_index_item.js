import React, { Component } from 'react';

class ImageIndexItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { image } = this.props;
    const imageStyle = {
            height: (image.height / 5).toString(),
            width: (image.width / 5).toString(),
            padding: '5px'
          };

    return (
      <div style={ imageStyle }>
        <img className="image-heart" src="images/white-heart.png"/>
        <img className="photo" src={ image.imageKey } />
      </div>

    );
  }
}

export default ImageIndexItem;
