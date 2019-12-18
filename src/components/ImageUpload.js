import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import defaultImage from '../selectPhoto.png';
import { uploadProfileImage } from '../Actions';
import logoSymbol from '../logo-symbol.png';

class ImageUpload extends React.Component {

  constructor(props){
    super(props);
    this._handleSubmit = this._handleSubmit.bind(this);
  }
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
    const { dispatch } = this.props;
    dispatch(uploadProfileImage(this.state.file))
    this.setState({
      file:'',
      imagePreviewUrl: null
    });
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
    let { uploadedProfileImage } = this.props;
    
    return (
      <div className="previewComponent">
        { uploadedProfileImage.isFetching
         ? <span className="loading"><img src={logoSymbol} alt="spinner" /></span>
         : <form>
         <img src={imagePreviewUrl ? imagePreviewUrl : defaultImage} className="defaultImage" alt="default" /> 
            <label>
              {
                imagePreviewUrl !== null
                ? <span className="selectPhotoBtn" onClick={(e)=>this._handleSubmit(e)}>Make this my Profile Picture</span>
                : <span className="selectPhotoBtn">Select a Photo</span>
              }
              <input
                style={{ display: "none" }}
                type="file"
                accept="image/x-png,image/gif,image/jpeg"
                onChange={(e)=>this._handleImageChange(e)}
              />
            </label>
            <span className="cancelUpload" onClick={(e)=> this._handleCancel()}>Cancel</span>
        </form>
      }
      </div>
    
    )
  }
}

ImageUpload.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const { uploadedProfileImage } = state;
  return {
    uploadedProfileImage,
  }
}

export default connect(mapStateToProps)(ImageUpload);