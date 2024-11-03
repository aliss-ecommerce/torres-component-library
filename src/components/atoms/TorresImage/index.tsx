import React from 'react';
import { IImage } from '../../../types/models';

import './style.scss';

const TorresImage: React.FC<IImage> = ({ url, alt, aspectRatio }) => {
  const [width, height] = aspectRatio.split('/').map(Number);

  return (
    <div className="torres-image" style={{ paddingBottom: `${(height / width) * 100}%` }}>
      <img
        src={url}
        alt={alt}
        className="torres-image__img"
      />
    </div>
  );
};

export default TorresImage;