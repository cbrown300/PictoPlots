import React from 'react';
import axios from 'axios';
import './Image.css'

const PIXABAYKEY = "17228303-ec297062a3db99e52d960db51"

class Image extends React.Component {
    state = {
      imageData: [],
    };

    componentDidMount() {
      axios.get(`https://pixabay.com/api/?key=${PIXABAYKEY}&q=${this.props.plotWord}&image_type=photo&per_page=20&pretty=true&safesearch=true`)
        .then(res => {
          this.setState({ imageData: res.data.hits });
      });
    }

    render() {
      //get image whose tag contains sci-fi for better images
      let taggedImageIndex = this.state.imageData.findIndex(image => image.tags.includes("sci-fi"));
      if(taggedImageIndex === -1){
        //try to find an image with the plot word as tag if it could not find one with sci-fi
        taggedImageIndex = this.state.imageData.findIndex(image => image.tags.includes(this.props.plotWord));
      }
      
      let firstImage = '';
      if(taggedImageIndex !== -1){
        //get image with a tag that matches what we are looking for
        firstImage = this.state.imageData.slice(taggedImageIndex, taggedImageIndex+1);
      }else{
        //get first image in set from searched images relating to plot word
        firstImage = this.state.imageData.slice(0,1);
      }

      return (
        <>
        {Object.keys(firstImage).length !== 0 && (
          <div>
            {
            firstImage.map(image => (
              <a title={this.props.plotWord}>
                <img src={image.previewURL} alt=""/>
              </a>
            ))}
          </div>
        )}
        </>
      );
    }
}

export default Image;
