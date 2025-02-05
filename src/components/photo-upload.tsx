import React from 'react';
import { crossIcon } from '../assets/images'

type PhotoUploaderProps = {
  photos: string[];
  setPhotos: (photos: string[]) => void;
  maxFields?: number;
};

const PhotoUploader = ({ photos, setPhotos, maxFields = 4 }: PhotoUploaderProps) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const file = e.target.files?.[0];
    if (file) {
      const newPhoto = URL.createObjectURL(file);
      const updatedPhotos = [...photos];
      updatedPhotos[index] = newPhoto;
      setPhotos(updatedPhotos);
    }
  };

  const removePhoto = (index: number) => {
    const updatedPhotos = photos.filter((_, i) => i !== index);
    setPhotos(updatedPhotos);
  };

  return (
    <div className='mt-3'>
      <p>Photos</p>
      <div className="photo-uploader">
        {Array(maxFields).fill(0).map((_, index) => (
          <div key={index} style={{ position: 'relative', display: 'inline-block', marginRight: '10px' }}>
            {photos[index] ? (
              <>
                <img
                  src={photos[index]}
                  alt={`Preview ${index + 1}`}
                  style={{
                    width: '80px',
                    height: '80px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                  }}
                />
                <button
                  onClick={() => removePhoto(index)}
                  style={{
                    position: 'absolute',
                    borderRadius: '100%',
                    border: 'none',
                    top: '5px',
                    right: '5px',
                    width: '20px',
                    height: '20px',
                    // background: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                >
                  <img
                    src={crossIcon}
                    alt="Remove"
                    style={{ width: '12px', height: '12px', color: '#fff' }}
                  />
                </button>
              </>
            ) : (
              <label
                className="upload-box"
                style={{
                  display: 'inline-block',
                  width: '80px',
                  height: '80px',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  textAlign: 'center',
                  lineHeight: '80px',
                  cursor: 'pointer',
                }}
              >
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: 'none' }}
                  onChange={(e) => handleFileChange(e, index)}
                />
                <span style={{ fontSize: '24px', color: '#aaa' }}>+</span>
              </label>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoUploader;
