const template = ( initial ) => `
	<button class="decrement">-</button>
	<input value="${ initial }" />
	<button class="increment">+</button>
`;

class GutenbergCounter extends HTMLElement {
	constructor() {
		super();
		this.attachShadow( { mode: 'open' } );
	}

	connectedCallback() {
		if ( ! this.hasAttribute( 'value' ) ) {
			this.setAttribute( 'value', 0 );
		}
		if ( ! this.hasAttribute( 'increment' ) ) {
			this.setAttribute( 'increment', 1 );
		}

		this.shadowRoot.innerHTML = template( this.getAttribute( 'value' ) );

		this.increment = this.shadowRoot.querySelector( '.increment' );
		this.decrement = this.shadowRoot.querySelector( '.decrement' );
		this.input = this.shadowRoot.querySelector( 'input' );

		this.increment.addEventListener( 'click', () => {
			const oldValue = parseInt( this.getAttribute( 'value' ), 10 );
			const increment = parseInt( this.getAttribute( 'increment' ), 10 );
			this.setAttribute( 'value', oldValue + increment );
			this.replaceValue();
		} );
		this.decrement.addEventListener( 'click', () => {
			const oldValue = parseInt( this.getAttribute( 'value' ), 10 );
			const increment = parseInt( this.getAttribute( 'increment' ), 10 );
			this.setAttribute( 'value', oldValue - increment );
			this.replaceValue();
		} );
	}

	attributeChangedCallback( name, oldValue, newValue ) {
		if ( name === 'value' && newValue !== oldValue ) {
			this.setAttribute( 'value', newValue );
			this.replaceValue();
		}
	}

	replaceValue() {
		this.input.value = this.getAttribute( 'value' );
	}
}

window.customElements.define( 'gutenberg-counter', GutenbergCounter );
