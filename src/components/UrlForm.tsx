// src/components/UrlForm.tsx
import React, { useState } from 'react';
import bgMobile from './assets/bg-shorten-mobile.svg';
import bgDesktop from './assets/bg-shorten-desktop.svg';

const UrlForm = () => {
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!url.trim()) {
      setError('Please add a link');
      return;
    }
    try {
      new URL(url);
      setError('');
      // --- Add your URL shortening logic here ---
      console.log('Submitting URL:', url);
      setUrl('');
    } catch (_) {
      setError('Please enter a valid URL');
    }
  };

  return (
    // Removed id from section
    <section className="relative -mt-48 lg:-mt-52 z-10 px-4 sm:px-6 lg:px-8">
      {/* Form container with background images */}
      <div
        className="
          max-w-5xl mx-auto px-6 py-10 lg:px-16 lg:py-12  // Padding inside the violet box
          rounded-lg
          bg-primary-dark-violet
          bg-no-repeat bg-right-top lg:bg-cover
          bg-[image:var(--bg-mobile-url)] lg:bg-[image:var(--bg-desktop-url)]
        "
        style={
          {
            '--bg-mobile-url': `url(${bgMobile})`,
            '--bg-desktop-url': `url(${bgDesktop})`,
          } as React.CSSProperties
        }
      >
        {/* Added id="url-form-section" to the form */}
        <form
          id="url-form-section"
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row gap-4 md:gap-6 items-stretch md:items-start"
        >
          <div className="flex-grow relative">
            <input
              type="text"
              value={url}
              onChange={(e) => {
                setUrl(e.target.value);
                if (error) setError('');
              }}
              placeholder="Shorten a link here..."
              aria-label="Link to shorten"
              className={`
                w-full px-4 py-3 md:px-6 md:py-4 rounded-md text-lg bg-white
                placeholder-neutral-gray focus:outline-none focus:ring-2 focus:ring-primary-cyan
                ${error ? 'border-2 border-secondary-red ring-secondary-red' : 'border border-transparent'}
              `}
            />
            {error && (
              <p
                className="text-secondary-red italic text-sm mt-1 md:absolute md:left-0 md:-bottom-6"
                role="alert"
              >
                {error}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="
              bg-primary-cyan text-white font-bold text-lg
              px-8 py-3 md:py-4 rounded-md
              hover:bg-[hsl(180,66%,55%)] transition-colors duration-200
              focus:outline-none focus:ring-2 focus:ring-primary-cyan focus:ring-offset-2 focus:ring-offset-primary-dark-violet
              flex-shrink-0
            "
          >
            Shorten It!
          </button>
        </form>
      </div>
    </section>
  );
};

export default UrlForm;
