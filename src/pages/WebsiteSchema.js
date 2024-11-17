import React from 'react';

const WebsiteSchema = () => {
  return (
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Md Shabbir Jamal",
          "url": "https://mdshabbirjamal.one",
          "alternateName": "Portfolio of Md Shabbir Jamal",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://mdshabbirjamal.one/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        })}
      </script>
  );
};

export default WebsiteSchema;
