import React, { useEffect, useState } from 'react';

const SitemapRoute = () => {
  const [sitemapContent, setSitemapContent] = useState('');

  useEffect(() => {
    // Use the fetch API to load the sitemap.xml content
    fetch('/sitemap.xml')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to load sitemap.xml');
        }
        return response.text();
      })
      .then((data) => {
        // Set the sitemap content in the component's state
        setSitemapContent(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {/* Render the sitemap content */}
      <pre>{sitemapContent}</pre>
    </div>
  );
};

export default SitemapRoute;
