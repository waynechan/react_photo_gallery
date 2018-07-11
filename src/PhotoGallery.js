import React from 'react'

export default class PhotoGallery extends React.Component {
    constructor(props) {
      super(props);
      this.state = {"imageIndex":0};
      
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        var newIndex = (parseInt(this.state.imageIndex) + 1) % this.props.images.length;
        this.setState({imageIndex: newIndex});
    }
  
    render() {
      return (
        <div>
          <figure>
            <img src={this.props.images[this.state.imageIndex].url} width="400" height="341" onClick={this.handleClick}/>
                <figcaption>{this.props.images[this.state.imageIndex].caption}</figcaption>
            </figure>
        </div>
      );
    }
  }