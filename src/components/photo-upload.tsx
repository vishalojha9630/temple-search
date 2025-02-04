import React, { useState } from 'react';

const PhotoUploader = ({ photos, setPhotos }: { photos: string[]; setPhotos: (photos: string[]) => void }) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const newPhotos = files.map((file) => URL.createObjectURL(file));
    setPhotos([...photos, ...newPhotos]);
  };

  return (
    <div className='mt-3'>
      <p>Photos</p>
      <div className="photo-uploader">
        {Array(4)
          .fill(0)
          .map((_, index) => (
            <label
              key={index}
              className="upload-box"
              style={{
                display: 'inline-block',
                width: '80px',
                height: '80px',
                border: '1px solid #ddd',
                borderRadius: '8px',
                marginRight: '10px',
                textAlign: 'center',
                lineHeight: '80px',
                cursor: 'pointer',
              }}
            >
              {index < photos.length ? (
                <img
                  src={photos[index]}
                  alt={`Preview ${index + 1}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '8px',
                  }}
                />
              ) : (
                <>
                  <input
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                  />
                  <span style={{ fontSize: '24px', color: '#aaa' }}>+</span>
                </>
              )}
            </label>
          ))}
      </div>

      <div className="photo-preview mb-3">
        <p>Preview</p>
        <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
          {photos.map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt={`Selected ${index + 1}`}
              style={{
                width: '80px',
                height: '80px',
                objectFit: 'cover',
                borderRadius: '8px',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoUploader;
