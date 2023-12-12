import { store, getContext, getElement } from '@wordpress/interactivity';

const { state } = store('interactivity-api-quiz-1835fa__store', {
	state: {
		get isOpen() {
			const context = getContext();
			return state.selected === context.id;
		},
		get toggleText() {
			return state.isOpen ? state.closeText : state.openText;
		},
		get isActive() {
			const context = getContext();
			const id = context.id;
			return state.quizzes[id].current === context.thisAnswer;
		},
		get inputAnswer() {
			const context = getContext();
			const id = context.id;
			return state.quizzes[id].current || '';
		},
	},
	actions: {
		toggle: () => {
			const context = getContext();
			if (state.selected === context.id) {
				state.selected = null;
			} else {
				state.selected = context.id;
			}
		},
		closeOnEsc: (event) => {
			const { ref } = getElement();
			if (event.key === 'Escape') {
				state.selected = null;
				ref.querySelector('button[aria-controls^="quiz-"]').focus();
			}
		},
		answerBoolean: () => {
			const context = getContext();
			const id = context.id;
			const quiz = state.quizzes[id];
			quiz.current =
				quiz.current !== context.thisAnswer ? context.thisAnswer : null;
		},
		answerInput: (event) => {
			const context = getContext();
			const id = context.id;
			state.quizzes[id].current = event.target.value || null;
		},
	},
	callbacks: {
		focusOnOpen: () => {
			const { ref } = getElement();
			state.isOpen && ref.focus();
		},
	},
});
