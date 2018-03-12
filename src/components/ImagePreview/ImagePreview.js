import React, { Component } from 'react';

class ImagePreview extends Component {
  state = {
    img: ''
  }

  onFileSelected = (e) => {
    const file = e.target.files.item(0);
    const reader = new FileReader();

    if (file) {
      reader.addEventListener('load', this.onImageLoad);
      reader.readAsDataURL(file);
    }
  }

  onImageLoad = (e) => {
    this.setState({
      img: e.target.result
    });
  }

  render() {
    return (
      <div className="container">
        <input type="file" onChange={this.onFileSelected} />
        <br />
        <img src={this.state.img} alt="" />
      </div>
    );
  }
}

export default ImagePreview;
