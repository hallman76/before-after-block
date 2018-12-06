<?php
/**
 * Plugin Name: Before After Block Demo
 * Plugin URI: https://github.com/hallman76/before-after-block
 * Description: Demo Gutenberg block that implements a before-after slider.
 * Version: 1.0.0
 * Author: Steve Hallman
 *
 * @package before-after-block
 * 
 */


function before_after_block__admin_init() {
      
  // Make sure Gutenberg is in the house
  if ( function_exists( 'register_block_type' ) ) {
  

    // wp_enqueue_script( 'wp-api' );


    $FORCE_INTO_FOOTER = true;
  
    wp_enqueue_script(
      'before-after-block-js',
      plugin_dir_url( __FILE__ ) . 'dist/blocks.build.js',
      array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-components', 'wp-editor', 'wp-api' ),
      filemtime( plugin_dir_path( __FILE__ ) . 'dist/blocks.build.js' ),
      $FORCE_INTO_FOOTER
    );

    wp_register_style(
      'before-after-block-editor-style',
      plugin_dir_url( __FILE__ ) . '/before-after-block-editor.css', 
      array( 'wp-edit-blocks' )
    );

    wp_register_style(
      'before-after-block-frontend-style',
      plugin_dir_url( __FILE__ ) . 'vendor/before-after/dist/css/before-after.min.css',
      array( 'wp-edit-blocks' )
    );

    register_block_type( 'demo/before-after', array(
      'editor_script' => 'before-after-block-js',
      'editor_style' => 'before-after-block-editor-style',
      'style' => 'before-after-block-frontend-style',
    ) );

    wp_register_script( 
      'before-after-vendor-js', 
      plugin_dir_url( __FILE__ ) . 'vendor/before-after/dist/js/before-after.min.js',
      array(), 
      false, 
      true 
    );

    wp_enqueue_script('before-after-vendor-js');

    wp_register_script( 
      'before-after-runtime-js', 
      plugin_dir_url( __FILE__ ) . 'before-after-runtime.js',
      array('before-after-vendor-js'), 
      false, 
      true 
    );

    wp_enqueue_script('before-after-runtime-js');

  }

}
add_action( 'init', 'before_after_block__admin_init' );

add_filter( 'block_categories', function( $categories, $post ) {
  if ( $post->post_type !== 'post' ) {
    return $categories;
  }
  
  return array_merge(
    $categories,
    array(
      array(
        'slug' => 'demo',
        'title' => __( 'Demo Blocks', 'demo-blocks' ),
      ),
    )
  );
}, 10, 2 );
