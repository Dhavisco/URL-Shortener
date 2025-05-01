// ...imports remain the same
import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { shortenUrl } from '../hooks/useShortenUrl';
// import bgMobile from './assets/bg-shorten-mobile.svg';
// import bgDesktop from './assets/bg-shorten-desktop.svg';

const UrlForm = () => {
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [copied, setCopied] = useState(false);

  const { mutate, isPending } = useMutation({
    mutationFn: shortenUrl,
    onSuccess: (data) => {
      setShortUrl(data.result_url);
      setOriginalUrl(url);
      setUrl('');
      setError('');
    },
    onError: () => {
      setError('Failed to shorten URL. Please try again.');
      setShortUrl('');
      setOriginalUrl('');
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!url.trim()) {
      setError('Please add a link');
      setShortUrl('');
      setOriginalUrl('');
      return;
    }
    try {
      new URL(url);
      mutate(url);
    } catch {
      setError('Please enter a valid URL');
      setShortUrl('');
      setOriginalUrl('');
    }
  };

  const handleCopy = () => {
    if (!shortUrl) return;
    navigator.clipboard.writeText(shortUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section className="relative -mt-48 lg:-mt-52 z-10 px-4 sm:px-6 lg:px-8">
      <div
        className="
          max-w-5xl mx-auto px-6 py-10 lg:px-16 lg:py-12
          rounded-lg
          bg-primary-dark-violet
    bg-no-repeat bg-right-top lg:bg-cover
    bg-[url('/images/bg-shorten-mobile.svg')] lg:bg-[url('/images/bg-shorten-desktop.svg')]
        "
        // style={
        //   {
        //     '--bg-mobile-url': `url(${bgMobile})`,
        //     '--bg-desktop-url': `url(${bgDesktop})`,
        //   } as React.CSSProperties
        // }
      >
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
            disabled={isPending}
            className="
              bg-primary-cyan text-white font-bold text-lg
              px-8 py-3 md:py-4 rounded-md
              hover:bg-[hsl(180,66%,55%)] transition-colors duration-200
              focus:outline-none focus:ring-2 focus:ring-primary-cyan focus:ring-offset-2 focus:ring-offset-primary-dark-violet
              flex-shrink-0
            "
          >
            {isPending ? 'Shortening...' : 'Shorten It!'}
          </button>
        </form>

        {shortUrl && (
          <div className="mt-6 bg-white p-4 rounded-lg flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <span className="text-black font-medium break-words md:flex-1">{originalUrl}</span>

            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
              <a
                href={shortUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-cyan font-semibold break-all hover:underline"
              >
                {shortUrl}
              </a>
              <button
                onClick={handleCopy}
                className={`px-6 py-2 rounded-md text-white font-bold transition-colors duration-200
                  ${copied
                    ? 'bg-primary-dark-violet'
                    : 'bg-primary-cyan hover:bg-[hsl(180,66%,55%)]'}
                `}
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default UrlForm;
