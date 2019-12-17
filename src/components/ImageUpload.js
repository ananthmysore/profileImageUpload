import React from 'react';
import defaultImage from '../selectPhoto.png';

class ImageUpload extends React.Component {
  state = {
    file: '',
    imagePreviewUrl: null
  };

  _handleCancel(){
    this.setState({
      file:'',
      imagePreviewUrl: null
    });
  }

  _handleSubmit(e) {
    e.preventDefault();
    console.log('handle uploading-', this.state.file);
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    if(file){
      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result
        });
      }
      reader.readAsDataURL(file)
    }
    
  }

  render() {
    let { imagePreviewUrl } = this.state;

    return (
      <div className="previewComponent">
        <form onSubmit={(e)=>this._handleSubmit(e)}>
         <img src={imagePreviewUrl ? imagePreviewUrl : defaultImage} className="defaultImage" alt="image default" />
            <label>
              {
                imagePreviewUrl !== null
                ? <span className="selectPhotoBtn" onClick={(e)=>this._handleSubmit(e)}>Make it a Profile Pic</span>
                : <span className="selectPhotoBtn">Select a Photo</span>
              }
              <input
                style={{ display: "none" }}
                type="file"
                onChange={(e)=>this._handleImageChange(e)}
              />
            </label>
            <span className="cancelUpload" onClick={(e)=> this._handleCancel()}>Cancel</span>
        </form>
      </div>
    )
  }
}

export default ImageUpload;