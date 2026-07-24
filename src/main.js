import Masonry from "masonry-layout";
import imagesLoaded from "imagesloaded";

var gallery = document.querySelector('.projects-gallery');
var msnry;

imagesLoaded(gallery, function() {
  // init Isotope after all images have loaded
  msnry = new Masonry(gallery, {
		itemSelector: '.projects-gallery-item',
		columnWidth: '.projects-gallery-sizer',
		gutter: 42,
		horizontalOrder: true,
	})
});
