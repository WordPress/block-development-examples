<?php
/**
 * The render.php file for this block.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 *
 * @package block-development-examples
 */

if ( function_exists( 'gutenberg_enqueue_module' ) ) {
	gutenberg_enqueue_module( 'interactivity_api_quiz_1835fa__view' );
}

$unique_id = substr( uniqid(), -5 );


wp_store(
	array(
		'state' => array(
			'interactivity_api_quiz_1835fa__store' => array(
				'selected'    => null,
				'openText'    => __( 'Open menu', 'block-development-examples' ),
				'closeText'   => __( 'Close menu', 'block-development-examples' ),
				'isActive'    => false,
				'quizzes'     => array(
					$unique_id => array(
						'current' => null,
						'correct' => $attributes['answer'],
					),
				),
				'inputAnswer' => null,
			),
		),
	)
);

?>

<div
	<?php echo wp_kses_data( get_block_wrapper_attributes() ); ?>
	data-wp-interactive='{"namespace": "interactivity_api_quiz_1835fa__store"}'
	data-wp-context='{ "id": "<?php echo esc_attr( $unique_id ); ?>" , "answer": null }'
	data-wp-on--keydown="actions.closeOnEsc"
>
	<div>
		<strong>
			<?php echo esc_html__( 'Question', 'block-development-examples' ) . ': '; ?>
		</strong>

		<?php echo wp_kses_post( $attributes['question'] ); ?>

		<button
			data-wp-on--click="actions.toggle"
			data-wp-bind--aria-expanded="state.isOpen"
			data-wp-text="state.toggleText"
			aria-controls="quiz-<?php echo esc_attr( $unique_id ); ?>"
		>
		</button>
	</div>

	<div
		data-wp-bind--hidden="!state.isOpen"
		id="quiz-<?php echo esc_attr( $unique_id ); ?>"
	>
		<?php if ( 'boolean' === $attributes['typeOfQuiz'] ) : ?>
			<button
				data-wp-context='{ "thisAnswer": true }'
				data-wp-watch="callbacks.focusOnOpen"
				data-wp-on--click="actions.answerBoolean"
				data-wp-class--active="state.isActive"
			>
				<?php esc_html_e( 'Yes', 'block-development-examples' ); ?>
			</button>
			<button
				data-wp-context='{ "thisAnswer": false }'
				data-wp-on--click="actions.answerBoolean"
				data-wp-class--active="state.isActive"
			>
				<?php esc_html_e( 'No', 'block-development-examples' ); ?>
			</button>

		<?php elseif ( 'input' === $attributes['typeOfQuiz'] ) : ?>
			<input
				type="text"
				data-wp-watch="callbacks.focusOnOpen"
				data-wp-on--input="actions.answerInput"
				data-wp-bind--value="state.inputAnswer"
			>

		<?php endif; ?>
	</div>
</div>
