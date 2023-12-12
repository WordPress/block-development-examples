<?php

if ( function_exists( 'gutenberg_enqueue_module' ) ) {
	gutenberg_enqueue_module( 'interactivity_api_quiz_1835fa__view' );
}

$unique_id = substr(uniqid(), -5);


wp_store( array(
	'state' => array(
	  'interactivity_api_quiz_1835fa__store' => array(
		'selected'    => null,
			'openText'    => __( 'Open menu' ),
			'closeText'   => __( 'Close menu' ),
			'isActive'    => false,
			'quizzes'     => array(
				$unique_id => array( 
					'current' => null, 
					'correct' => $attributes['answer']
				)
				),
			'inputAnswer' => null
	  ),
	)
  ) );

?>

<div
	<?php echo get_block_wrapper_attributes(); ?>
	data-wp-interactive='{"namespace": "interactivity_api_quiz_1835fa__store"}'
	data-wp-context='{ "id": "<?php echo $unique_id; ?>" , "answer": null }'
	data-wp-on--keydown="actions.closeOnEsc"
>
	<div>
		<strong>
			<?php echo __( 'Question' ) . ": "; ?>
		</strong>

		<?php echo $attributes[ 'question' ]; ?>

		<button
			data-wp-on--click="actions.toggle"
			data-wp-bind--aria-expanded="state.isOpen"
			data-wp-text="state.toggleText"
			aria-controls="quiz-<?php echo $unique_id; ?>"
		>
		</button>
	</div>

	<div
		data-wp-bind--hidden="!state.isOpen"
		id="quiz-<?php echo $unique_id; ?>"
	>
		<?php if ( $attributes['typeOfQuiz'] == 'boolean' ): ?>
			<button
				data-wp-context='{ "thisAnswer": true }'
				data-wp-watch="callbacks.focusOnOpen"
				data-wp-on--click="actions.answerBoolean"
				data-wp-class--active="state.isActive"
			>
				<?php echo __( 'Yes' ); ?>
			</button>
			<button
				data-wp-context='{ "thisAnswer": false }'
				data-wp-on--click="actions.answerBoolean"
				data-wp-class--active="state.isActive"
			>
				<?php echo __( 'No' ); ?>
			</button>

		<?php elseif ( $attributes['typeOfQuiz'] === 'input'): ?>
			<input
				type="text"
				data-wp-watch="callbacks.focusOnOpen"
				data-wp-on--input="actions.answerInput"
				data-wp-bind--value="state.inputAnswer"
			>

		<?php endif; ?>
	</div>
</div>