// Import dependencies
import { render } from '@wordpress/element';

import './store';
import CounterList from './components/CounterList';

// Render component in DOM
const wrapper = document.getElementById( 'react-example-wrapper' );
render( <CounterList />, wrapper );
