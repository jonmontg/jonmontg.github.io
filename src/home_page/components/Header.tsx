import { useState } from 'react';
import SearchButton from './SearchButton';

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Array<{text: string, element: string}>>([]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);

    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    // Get all text content from the page
    const queryWords = query.toLowerCase().split(/\s+/);

    const results: Array<{text: string, element: string}> = [];

    // Search through headings and paragraphs
    const elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, li');
    elements.forEach((element) => {
      const text = element.textContent || '';
      const lowerText = text.toLowerCase();

      // Check if any query word is found in this element
      const hasMatch = queryWords.some(word => lowerText.includes(word));

      if (hasMatch && text.trim()) {
        // Highlight the matching text
        const highlightedText = queryWords.reduce((acc, word) => {
          const regex = new RegExp(`(${word})`, 'gi');
          return acc.replace(regex, '<mark className="bg-yellow-200">$1</mark>');
        }, text);

        results.push({
          text: highlightedText,
          element: element.tagName.toLowerCase()
        });
      }
    });

    setSearchResults(results.slice(0, 10)); // Limit to 10 results
  };

  const scrollToElement = (index: number) => {
    const elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, li');
    const targetElement = elements[index];
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      targetElement.classList.add('bg-yellow-100', 'transition-colors', 'duration-300');
      setTimeout(() => {
        targetElement.classList.remove('bg-yellow-100');
      }, 2000);
    }
    setIsSearchOpen(false);
  };

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
              <li><a>Homepage</a></li>
              <li><a>Portfolio</a></li>
              <li><a>About</a></li>
              <li><a href="/Resume.pdf" download>Resume</a></li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl">Jon Montgomery</a>
        </div>
        <div className="navbar-end">
          <SearchButton onClick={() => setIsSearchOpen(true)} />
        </div>
      </div>

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="modal modal-open">
          <div className="modal-box w-11/12 max-w-2xl">
            <h3 className="font-bold text-lg mb-4">Search Page Content</h3>
            <div className="form-control">
              <input
                type="text"
                placeholder="Search for keywords..."
                className="input input-bordered w-full"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                autoFocus
              />
            </div>

            {searchResults.length > 0 && (
              <div className="mt-4 max-h-96 overflow-y-auto">
                <h4 className="font-semibold mb-2">Results ({searchResults.length})</h4>
                <div className="space-y-2">
                  {searchResults.map((result, index) => (
                    <div
                      key={index}
                      className="p-3 bg-base-200 rounded-lg cursor-pointer hover:bg-base-300 transition-colors"
                      onClick={() => scrollToElement(index)}
                    >
                      <div className="text-sm text-base-content/70 mb-1">
                        {result.element.toUpperCase()}
                      </div>
                      <div
                        className="text-base-content"
                        dangerouslySetInnerHTML={{ __html: result.text }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {searchQuery && searchResults.length === 0 && (
              <div className="mt-4 text-center text-base-content/70">
                No results found for "{searchQuery}"
              </div>
            )}

            <div className="modal-action">
              <button
                className="btn"
                onClick={() => {
                  setIsSearchOpen(false);
                  setSearchQuery('');
                  setSearchResults([]);
                }}
              >
                Close
              </button>
            </div>
          </div>
          <div
            className="modal-backdrop"
            onClick={() => {
              setIsSearchOpen(false);
              setSearchQuery('');
              setSearchResults([]);
            }}
          />
        </div>
      )}
    </>
  );
}
