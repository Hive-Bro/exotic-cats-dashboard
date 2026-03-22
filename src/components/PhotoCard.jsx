import React, { useState } from 'react'

export default function PhotoCard({ photo, onClick, scatterStyle }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div
      className={`masonry-item group cursor-pointer ${scatterStyle ? 'scatter' : ''}`}
      style={scatterStyle || {}}
      onClick={() => onClick(photo)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClick(photo)
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`View ${photo.species} photo — ${photo.funFact}`}
    >
      <div className="relative bg-parchment border border-khaki-light rounded-sm shadow-md overflow-hidden transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:rotate-[0.5deg] group-hover:shadow-xl">
        {/* Tape effect at top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-3 bg-khaki-light/60 z-10 rounded-b-sm" />

        {/* Image */}
        <div className="relative overflow-hidden">
          {!loaded && (
            <div className="w-full aspect-[3/4] bg-ivory-dark animate-pulse" />
          )}
          <img
            src={photo.src}
            alt={photo.alt}
            loading="lazy"
            onLoad={() => setLoaded(true)}
            className={`w-full block transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}
          />
        </div>

        {/* Content */}
        <div className="p-4 pt-3">
          <h3 className="font-display text-xl font-semibold text-charcoal mb-1 tracking-wide">
            {photo.species}
          </h3>
          <p className="font-mono text-[11px] leading-relaxed text-charcoal-light mb-3">
            {photo.funFact}
          </p>
          <div className="flex items-center justify-between border-t border-khaki-light pt-2">
            <span className="font-mono text-[10px] text-khaki tracking-wider uppercase">
              Field Note
            </span>
            <span className="font-mono text-[10px] text-khaki">
              📷 {photo.credit}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
