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
		let containers = document.querySelectorAll( '.services-content' );

		containers.forEach( item => {
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

const test = new Swiper(".thumbs-slider", {
	spaceBetween: 10,
	slidesPerView: 'auto',
	freeMode: true,
	watchSlidesProgress: true,
});

const swiperMain = new Swiper(".slider", {
	spaceBetween: 10,
	navigation: {
		nextEl: ".swiper-button-next ",
		prevEl: ".swiper-button-prev",
	},
	thumbs: {
		swiper: test,
	},
});


const images = [
	[{
		data: 'web_design',
		src: './Pictures/amazing_block/4.png'
	},{
		data: 'landing_pages',
		src: './Pictures/amazing_block/2.png'
	},{
		data: 'graphic_design',
		src: './Pictures/amazing_block/3.png'
	},{
		data: 'wordpress',
		src: './Pictures/amazing_block/4.png'
	},{
		data: 'landing_pages',
		src: './Pictures/amazing_block/5.png'
	},{
		data: 'graphic_design',
		src: './Pictures/amazing_block/6.png'
	},{
		data: 'wordpress',
		src: './Pictures/amazing_block/7.png'
	},{
		data: 'landing_pages',
		src: './Pictures/amazing_block/8.png'
	},{
		data: 'graphic_design',
		src: './Pictures/amazing_block/9.png'
	},{
		data: 'wordpress',
		src: './Pictures/amazing_block/10.png'
	},{
		data: 'landing_pages',
		src: './Pictures/amazing_block/11.png'
	},{
		data: 'graphic_design',
		src: './Pictures/amazing_block/12.png'
	}],
]

const SET_TIMEOUT = 500; 
function Gallery() {
	let count = 0;
	const galleryMenuWrapper = document.querySelector('.gallery-menu');
	const loadMore = document.querySelector('.load_more');
	const galleryContent = document.querySelector('.gallery-content');

	galleryMenuWrapper.addEventListener('click', (event) => {
		let dataMenu = null;
		const dataGallery = document.querySelectorAll('.image-item');

		if ( event.target.nodeName === "BUTTON" ) {
			dataMenu = event.target.getAttribute( 'data-menu' );
		}

		let menuItems = document.querySelectorAll( '[data-menu]' );

		menuItems.forEach( item => {
			if ( item.classList.contains( 'active' ) ) {
				item.classList.remove( 'active' );
			}
		} );

		if ( !event.target.classList.contains( 'active' ) ) {
			event.target.classList.add( 'active' );
		}

		dataGallery.forEach((item) => {
			if (dataMenu !== item.getAttribute( 'data-gallery' ) && dataMenu !== 'all' ){
				item.style.display = 'none'
			} else {
				item.style.display = 'block'
			}
		})
	})

	loadMore.addEventListener('click', () => {

		loadMore.classList.add('loader');
		loadMore.setAttribute('disabled', '')


		setTimeout(() => {
			loadMore.classList.remove('loader');
			images[count].forEach((image, id) => {
				galleryContent.insertAdjacentHTML('beforeend', `
			<div class="image-item" data-gallery="${image.data}">
				<img class="img${id+13}" src="${image.src}" alt="image">
			</div>`)
			})

			count++

			if ( count === images.length ){
				loadMore.remove()
			}
		}, SET_TIMEOUT)

	})

}

document.addEventListener('DOMContentLoaded', () => {
	Gallery();
});