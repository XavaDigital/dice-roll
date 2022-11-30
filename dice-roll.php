<?php
/**
 * Plugin Name:       Dice Roll
 * Description:       A Gutenberg block for rolling dice to choose a random result
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Xava Digital
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       dice-roll
 *
 * @package           create-block
 */

 /** Based on https://codesandbox.io/s/xjk3xqnprw */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function xavadigital_dice_roll_block_init() {
	register_block_type( __DIR__ . '/build' );
	// wp_enqueue_script(
    //     'rolldice',
    //     plugins_url('rolldice.js', __FILE__ ),
    //     array('jquery'),
	// 	'1.0.0',
    //     true
    // );
}
add_action( 'init', 'xavadigital_dice_roll_block_init' );

/**
 * Enqueue frontend blockJavaScript and CSS
*/
function jsforwpblocks_scripts() {
	// $sharedBlockPath = '/src/rolldice.js';
	//$info = include plugin_dir_path(__FILE__) . "/js/rolldice.asset.php";
  // Enqueue frontend and editor JS
  wp_enqueue_script(
    'rolldice',
	plugin_dir_url(__FILE__) . "src/js/rolldice.js",
    [  'jquery', 'wp-element', 'wp-components', 'wp-i18n' ],
    '1.0.0'
  );

}

// Hook scripts function into block editor hook
add_action( 'enqueue_block_assets', 'jsforwpblocks_scripts' );
