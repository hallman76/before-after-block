// const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import BeforeAfterImage from './before-after-image.jsx';

//         
//
// https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-registration/
registerBlockType( 'demo/before-after', {
	title: 'Before-After Slider',
	icon: 'format-gallery',                 // https://developer.wordpress.org/resource/dashicons/
  category: 'demo',                       // this category was added by the plugin php
  
  attributes: {

    // mediaId: {
    //   type: 'number',
    //   default: 3252,
    // },

    beforeImagePreviewUrl: {
      type: 'string',
      default: null,
    },

    beforeImageUrl: {
      type: 'string',
      default: null,
    },

    beforeImageMediaId: {
      type: 'number',
      default: null,
    },

    afterImagePreviewUrl: {
      type: 'string',
      default: null,
    },

    afterImageUrl: {
      type: 'string',
      default: null,
    },

    afterImageMediaId: {
      type: 'number',
      default: null,
    },


  },

	edit({ attributes, setAttributes }) {
    
    return (

      <div>

        <h2>Before After Slider</h2>

        <div className="ba-image-list">
          <div className="ba-editor-image ba-editor-image-before">
            <p>Before image:</p>
            <BeforeAfterImage onSelected={ media => { 
                setAttributes({ 
                  beforeImageMediaId: media.id, 
                  beforeImagePreviewUrl: media.sizes.thumbnail.url,
                  beforeImageUrl: media.url  
                }); 
            } }
              imagePreviewUrl={ attributes.beforeImagePreviewUrl }
              imageId={ attributes.beforeImageMediaId }
            />

          </div>

          <div className="ba-editor-image ba-editor-image-after">
            <p>After image:</p>
            <BeforeAfterImage onSelected={ media => { 
                setAttributes({ 
                  afterImageMediaId: media.id, 
                  afterImagePreviewUrl: media.sizes.thumbnail.url,
                  afterImageUrl: media.url  
                }); 
            } }
              imagePreviewUrl={ attributes.afterImagePreviewUrl }
              imageId={ attributes.afterImageMediaId }
            />        
          </div>
        </div>

      </div>


		);
  },
  
	save({ attributes }) {

      if (attributes.beforeImageMediaId && attributes.afterImageMediaId ) {
		    return (
          <div className="ba-wrap">
              <img src={attributes.beforeImageUrl} alt="Before" />
              <img src={attributes.afterImageUrl} alt="After" />
          </div>
        ) 
    } else {
      return (<div data-error="Error: block is missing content"></div>)
    }
  },
  
} );