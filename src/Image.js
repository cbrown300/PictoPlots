import React from 'react';
import axios from 'axios';

const PIXABAYKEY = "17228303-ec297062a3db99e52d960db51"

class Image extends React.Component {
    state = {
      imageData: [],
    };

    componentDidMount() {
      axios.get(`https://pixabay.com/api/?key=${PIXABAYKEY}&q=${this.props.plotWord}&image_type=photo&per_page=10&pretty=true`)
        .then(res => {
          this.setState({ imageData: res.data.hits });
          console.log("IMAGE RECIEVED" + res);
      });
    }

    render() {
      const firstImage = this.state.imageData.slice(0,1);
      return (
        <div>
          <div>
          {
          firstImage.map(image => (
            <img src={image.previewURL} alt="" title={this.props.plotWord}/>
          ))}
          </div>
        </div>
      );
    }
}

export default Image;
