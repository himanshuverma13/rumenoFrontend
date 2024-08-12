// import React, { useState } from 'react';
// import '../../../assets/css/test.css';



// const ImageGallery = ({img,alt,video}) => {
//   const [selectedImage, setSelectedImage] = useState(img[0]);

//   return (
//     <div className="gallery-container">
//       <div className="big-image">
//         <img src={selectedImage} alt={alt} />
//         || <iframe></iframe>
//       </div>
//       <div className="thumbnail-container">
//         {img?.map((image, index) => (
//           <img
//             key={index}
//             src={image}
//             alt={alt}
//             className="thumbnail m-1 border"
//             onClick={() => setSelectedImage(image)}
//           />
//         ))}
//         <iframe width="100" height="100" src={video} onClick={setSelectedImage(video)} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
//       </div>
//     </div>
//   );
// };

// export default ImageGallery;

import React, { useState } from 'react';
import '../../../assets/css/test.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

const ImageGallery = ({ img = [], alt, video = null }) => {
  const [selectedMedia, setSelectedMedia] = useState({ type: 'image', url: img[0] || '' });

  const handleSelectMedia = (url, mediaType) => {
    setSelectedMedia({ type: mediaType, url });
  };

  return (
    <div className="gallery-container">
      <div className="big-image">
        {selectedMedia.type === 'image' ? (
          <img src={selectedMedia.url} alt={alt} className="selected-media" />
        ) : (
          <iframe
            src={selectedMedia.url}
            title="Video Player"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className=""
          ></iframe>
        )}
      </div>
      <div className="thumbnail-container">
        {img?.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${alt} ${index + 1}`}
            className="thumbnail m-1 border"
            onClick={() => handleSelectMedia(image, 'image')}
          />
        ))}
        {video && (
          <button
            onClick={() => handleSelectMedia(video, 'video')}
            title="Play Video"
            className="m-1 border thumbnail"
          >
            <FontAwesomeIcon icon={faYoutube} className='fs-1 px-4 text-danger' />
          </button>
        )}
      </div>
    </div>
  );
};




export default ImageGallery;
