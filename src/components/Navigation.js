import React from 'react';

export default function Navigation({ externalSites }) {
  return (
    <nav>
      <ul className="social-links">
        {externalSites.map((site, i) => {
          return (
            <li key={i}>
              <a target="_blank" rel="noopener noreferrer" href={site.url}>
                {site.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
