

const { Component } = wp.element;
const { Button } = wp.components;
const { MediaUpload } = wp.editor;

class BeforeAfterImage extends Component {

    render() {
        
        const getBeforeImageButton = (openEvent) => {
            
            if(this.props.imagePreviewUrl) {
              // this renders the selected image
              return (
                <img 
                  src={ this.props.imagePreviewUrl }
                  onClick={ openEvent }
                  className="image"
                />
              );
            }
            else {
              return (
                <div className="button-container">
                  <Button 
                    onClick={ openEvent }
                    className="button button-large"
                  >
                    Pick an image
                  </Button>
                </div>
              );
            }
          }

        return (
            <MediaUpload
                onSelect={ media => { 
                    console.log( 'selected: ' );
                    console.log(media );  
                    this.props.onSelected(media);
                } }
                type="image"
                value={ this.props.imageId }
                render={ ({ open }) => getBeforeImageButton(open) }
          />
        )
    }

}





export default BeforeAfterImage;