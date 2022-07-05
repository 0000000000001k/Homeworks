const tabsFn = () => {
	let tabs = document.querySelector( '.services-list' );

	const change = ( event ) => {
		let menuItems = document.querySelectorAll( '[data-tab]' );

		menuItems.forEach( item => {
			if ( item.classList.contains( 'active' ) ) {
				item.classList.remove( 'active' );
			}
		} );

		if ( !event.target.classList.contains( 'active' ) ) {
			event.target.classList.add( 'active' );
		}

		let id = event.target.getAttribute( 'data-tab' );
		let conteiners = document.querySelectorAll( '.services-content' );

		conteiners.forEach( item => {
			if ( item.classList.contains( 'active' ) ) {
				item.classList.remove( 'active' );
			}
		} );

		if ( !document.getElementById( id ).classList.contains( 'active' ) ) {
			document.getElementById( id ).classList.add( 'active' );
		}
	}

	tabs.addEventListener( 'click', ( event ) => {
		if ( event.target.nodeName === 'BUTTON' ) {
			change( event );
		}
	} );

}
tabsFn();