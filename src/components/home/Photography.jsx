import React, { useEffect, useRef, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Masonry from 'masonry-layout';
import Lightbox from 'yet-another-react-lightbox';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'yet-another-react-lightbox/styles.css'; // Import the lightbox CSS
import 'react-lazy-load-image-component/src/effects/blur.css'; // Import the blur effect CSS
import './Photography.css'; // Import the CSS file for styling

// Dynamically import all images from the photography folder
const importAll = (r) => r.keys().map(r);
const photos = importAll(require.context('../../assets/photography', false, /\.(png|jpe?g|svg)$/));

// Fisher-Yates shuffle algorithm
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const Photography = ({ heading }) => {
  const masonryRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [shuffledPhotos] = useState(() => shuffleArray([...photos])); // Shuffle photos only once
  const [showImages, setShowImages] = useState(false);

  useEffect(() => {
    if (showImages) {
      const masonryInstance = new Masonry(masonryRef.current, {
        itemSelector: '.masonry-item',
        columnWidth: '.masonry-sizer',
        percentPosition: true,
        gutter: 16,
      });

      // Re-layout Masonry after each image loads
      const handleImageLoad = () => {
        masonryInstance.layout();
      };

      // Attach the load event listener to each image
      const images = masonryRef.current.querySelectorAll('.masonry-image');
      images.forEach((img) => {
        img.addEventListener('load', handleImageLoad);
      });

      // Cleanup event listeners on unmount
      return () => {
        images.forEach((img) => {
          img.removeEventListener('load', handleImageLoad);
        });
      };
    }
  }, [showImages]);

  return (
    <Container id="photography" className="pt-5 pb-5">
      <Row className="mb-4 align-items-center justify-content-center">
        <Col md={4} className="text-center">
          <LazyLoadImage
            src={require('../../assets/img/photographer_portrait.jpg')}
            className="rounded-square"
            effect="blur"
            alt="Photographer Portrait"
            fluid
          />
        </Col>
        <Col md={4} className="d-flex align-items-center">
          <p className="lead blurb-text text-center">
            I take pictures for fun.
          </p>
        </Col>
      </Row>

      {!showImages && (
        <div className="text-center mb-5">
          <Button
            className="btn btn-outline-dark btn-lg"
            onClick={() => setShowImages(true)}
            role="button"
            aria-label="Show Images"
            style={{ backgroundColor: 'transparent' }}
          >
            Show Images
          </Button>
        </div>
      )}

      {showImages && (
        <div ref={masonryRef} className="masonry-grid">
          <div className="masonry-sizer"></div>
          {shuffledPhotos.map((photo, index) => (
            <div key={index} className="masonry-item">
              <LazyLoadImage
                src={photo}
                alt={`Photography ${index}`}
                className="masonry-image"
                effect="blur"
                onClick={() => {
                  setPhotoIndex(index);
                  setIsOpen(true);
                }}
                afterLoad={() => {
                  // Trigger Masonry layout after each image loads
                  if (masonryRef.current) {
                    new Masonry(masonryRef.current, {
                      itemSelector: '.masonry-item',
                      columnWidth: '.masonry-sizer',
                      percentPosition: true,
                      gutter: 16,
                    }).layout();
                  }
                }}
              />
            </div>
          ))}
        </div>
      )}

      {isOpen && (
        <Lightbox
          slides={shuffledPhotos.map((photo) => ({ src: photo }))}
          open={isOpen}
          index={photoIndex}
          close={() => setIsOpen(false)}
          onIndexChange={setPhotoIndex}
        />
      )}
    </Container>
  );
};

export default Photography;