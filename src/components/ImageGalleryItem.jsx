import React, { Component } from 'react';
import Loader from './Loader';

export class ImageGalleryItem extends Component {
  continue = (e) => {
    e.preventDefault();
};
  render() {
    const {picturesFound, state, handleImageClick} = this.props
    return (
      <>
        {        
        state==='false'?
        picturesFound.map((pic)=>{
          return(
            
            <li className="ImageGalleryItem" key={pic.id} onClick={handleImageClick} >
            <img className="ImageGalleryItem-image" src={pic.previewURL} alt="none" />
            </li>

            
            
            
          )
        })
         :<Loader/>
          
        
        }

      {/* {console.log("desde imageGalleryItem",picturesFound)} */}
       
      </>
    )
  }
}

export default ImageGalleryItem