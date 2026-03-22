import React, { useEffect, useRef } from 'react'

export default function Lightbox({ photo, onClose }) {
  const closeBtn = useRef(null)

  useEffect(() => {
    closeBtn.current?.focus()

    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!photo) return null

  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center bg-charcoal/90 backdrop-blur-sm animate-[fadeIn_0.25s_ease-out]"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${photo.species} full-screen view`}
    >
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(24px) scale(0.97); } to { opacity: 1; transform: translateY(0) scale(1); } }
      `}</style>

      <button
        ref={closeBtn}
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 text-ivory/80 hover:text-ivory text-3xl font-display cursor-pointer z-50 w-10 h-10 flex items-center justify-center rounded-full hover:bg-ivory/10 transition-colors"
        aria-label="Close lightbox"
      >
        ×
      </button>

      <div
        className="max-w-4xl w-full mx-4 animate-[slideUp_0.35s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={photo.srcLarge}
          alt={photo.alt}
          className="w-full max-h-[75vh] object-contain rounded-sm"
        />
        <div className="mt-4 px-2 text-center">
          <h2 className="font-display text-3xl text-ivory font-semibold tracking-wide">
            {photo.species}
          </h2>
          <p className="font-mono text-sm text-khaki-light mt-2 max-w-xl mx-auto">
            {photo.funFact}
          </p>
          <p className="font-mono text-xs text-khaki mt-3">
            Photo by {photo.credit} · Unsplash
          </p>
        </div>
      </div>
    </div>
  )
}
