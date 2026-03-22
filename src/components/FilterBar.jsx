import React from 'react'

export default function FilterBar({ species, activeFilter, onFilter }) {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8" role="radiogroup" aria-label="Filter by species">
      <button
        onClick={() => onFilter(null)}
        className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-wide border transition-all duration-200 cursor-pointer ${
          activeFilter === null
            ? 'bg-charcoal text-ivory border-charcoal'
            : 'bg-transparent text-charcoal-light border-khaki hover:border-ochre hover:text-ochre-dark'
        }`}
        role="radio"
        aria-checked={activeFilter === null}
      >
        All Species
      </button>
      {species.map((sp) => (
        <button
          key={sp.id}
          onClick={() => onFilter(sp.id)}
          className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-wide border transition-all duration-200 cursor-pointer ${
            activeFilter === sp.id
              ? 'bg-charcoal text-ivory border-charcoal'
              : 'bg-transparent text-charcoal-light border-khaki hover:border-ochre hover:text-ochre-dark'
          }`}
          role="radio"
          aria-checked={activeFilter === sp.id}
        >
          {sp.name}
        </button>
      ))}
    </div>
  )
}
