import React, { useState, useMemo, useCallback } from 'react'
import FilterBar from './components/FilterBar'
import PhotoGrid from './components/PhotoGrid'
import Lightbox from './components/Lightbox'
import { buildCatPhotos, getSpeciesList } from './data/cats'
import { fisherYatesShuffle } from './utils/shuffle'

const allPhotos = buildCatPhotos()
const speciesList = getSpeciesList()

export default function App() {
  const [photos, setPhotos] = useState(() => fisherYatesShuffle(allPhotos))
  const [activeFilter, setActiveFilter] = useState(null)
  const [lightboxPhoto, setLightboxPhoto] = useState(null)
  const [isShuffling, setIsShuffling] = useState(false)

  const filteredPhotos = useMemo(
    () =>
      activeFilter
        ? photos.filter((p) => p.speciesId === activeFilter)
        : photos,
    [photos, activeFilter],
  )

  const handleShuffle = useCallback(() => {
    setIsShuffling(true)
    // Let scatter animation play, then reshuffle
    setTimeout(() => {
      setPhotos(fisherYatesShuffle(allPhotos))
      setIsShuffling(false)
    }, 500)
  }, [])

  const handleFilter = useCallback((speciesId) => {
    setActiveFilter(speciesId)
  }, [])

  const openLightbox = useCallback((photo) => {
    setLightboxPhoto(photo)
  }, [])

  const closeLightbox = useCallback(() => {
    setLightboxPhoto(null)
  }, [])

  return (
    <div className="min-h-screen pb-16">
      {/* Header */}
      <header className="pt-10 pb-8 px-4 text-center">
        <h1 className="font-display text-5xl sm:text-6xl font-bold text-charcoal tracking-wide">
          Exotic Cats
        </h1>
        <p className="font-display text-lg sm:text-xl text-ochre-dark italic mt-2">
          A Field Journal of the World's Wild Felines
        </p>

        {/* Shuffle button */}
        <button
          onClick={handleShuffle}
          disabled={isShuffling}
          className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 bg-ochre text-ivory font-mono text-sm tracking-wider rounded-sm border border-ochre-dark hover:bg-ochre-dark transition-colors duration-200 disabled:opacity-50 cursor-pointer shadow-sm"
          aria-label="Shuffle photos"
        >
          <svg
            className={`w-4 h-4 ${isShuffling ? 'animate-spin' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          {isShuffling ? 'Shuffling…' : 'Shuffle'}
        </button>
      </header>

      {/* Filter bar */}
      <nav className="max-w-5xl mx-auto px-4 mb-6">
        <FilterBar
          species={speciesList}
          activeFilter={activeFilter}
          onFilter={handleFilter}
        />
      </nav>

      {/* Photo grid */}
      <main>
        {filteredPhotos.length > 0 ? (
          <PhotoGrid
            photos={filteredPhotos}
            onPhotoClick={openLightbox}
            isShuffling={isShuffling}
          />
        ) : (
          <p className="text-center font-mono text-sm text-khaki mt-16">
            No photos found for this species.
          </p>
        )}
      </main>

      {/* Lightbox */}
      {lightboxPhoto && (
        <Lightbox photo={lightboxPhoto} onClose={closeLightbox} />
      )}

      {/* Footer */}
      <footer className="text-center mt-16 pb-8">
        <p className="font-mono text-[11px] text-khaki">
          Photos sourced from Unsplash · Built with React & Tailwind CSS
        </p>
      </footer>
    </div>
  )
}
