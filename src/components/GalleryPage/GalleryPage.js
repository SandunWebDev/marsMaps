/**
 * This component render Gallery Page (/gallery Route).
 */

import React, { Component } from "react";
import ImageGallery from "react-image-gallery";

// CSS File to implement react-image-gallery compoennt
import "react-image-gallery/styles/css/image-gallery.css";
import "./GalleryPage.css";

// Importing already added images
import img1 from "../../images/gallery/img1.jpg";
import img2 from "../../images/gallery/img2.jpeg";
import img3 from "../../images/gallery/img3.jpg";
import img4 from "../../images/gallery/img4.jpg";
import img5 from "../../images/gallery/img5.jpg";
import img6 from "../../images/gallery/img6.jpg";
import img7 from "../../images/gallery/img7.jpg";

class GalleryPage extends Component {
  render() {
    // Setting images for image gallery
    const images = [
      { original: img1, thumbnail: img1 },
      { original: img2, thumbnail: img2 },
      { original: img3, thumbnail: img3 },
      { original: img4, thumbnail: img4 },
      { original: img5, thumbnail: img5 },
      { original: img6, thumbnail: img6 },
      { original: img7, thumbnail: img7 }
    ];

    return (
      <div className="GalleryPage">
        <div>
          {/* Rendering image gallery. */}
          <ImageGallery
            items={images}
            thumbnailPosition="top"
            showBullets="true"
          />
        </div>
      </div>
    );
  }
}

export default GalleryPage;
