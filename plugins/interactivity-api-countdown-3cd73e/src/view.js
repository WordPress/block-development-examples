import { store, getContext } from '@wordpress/interactivity';

store( 'interactivityAPIExamples', {
	callbacks: {
		startCountdown: () => {
			const context = getContext();
			setInterval( () => {
				// Calculate seconds.
				if ( context.seconds - 1 < 0 ) {
					context.seconds = context.minutes > 0 ? 59 : 0;
					// Calculate minutes.
					if ( context.minutes - 1 < 0 ) {
						context.minutes = context.hours > 0 ? 59 : 0;
						// Calculate hours.
						if ( context.hours - 1 < 0 ) {
							context.hours = context.days > 0 ? 23 : 0;
							// Calculate days.
							if ( context.days - 1 < 0 ) {
								context.days = 0;
							} else {
								context.days--;
							}
						} else {
							context.hours--;
						}
					} else {
						context.minutes--;
					}
				} else {
					context.seconds--;
				}
			}, 1000 );
		},
	},
} );
