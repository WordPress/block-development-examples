export default function getDisplayDate( { showStartingYear, startingYear } ) {
	const currentYear = new Date().getFullYear();
	if ( showStartingYear && startingYear ) {
		return startingYear + '–' + currentYear;
	} else {
		return currentYear;
	}
}
