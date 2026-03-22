import React from 'react'
import PhotoCard from './PhotoCard'

export default function PhotoGrid({ photos, onPhotoClick, isShuffling }) {
  return (
    <div className="masonry px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {photos.map((photo, i) => (
        <PhotoCard
          key={photo.id}
          photo={photo}
          onClick={onPhotoClick}
          scatterStyle={
            isShuffling
              ? {
                  '--scatter-rotate': `${(Math.random() - 0.5) * 8}deg`,
                  '--scatter-x': `${(Math.random() - 0.5) * 20}px`,
                  '--scatter-y': `${(Math.random() - 0.5) * 16}px`,
                  animationDelay: `${i * 30}ms`,
                }
              : null
          }
        />
      ))}
    </div>
  )
}
