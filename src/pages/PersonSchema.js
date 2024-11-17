import React from 'react';

const PersonSchema = () => {
  return (
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Md Shabbir Jamal",
          "url": "https://mdshabbirjamal.one",
          "image": "https://mdshabbirjamal.one/face.jpg",
          "jobTitle": "Software Engineer",
          "sameAs": [
            "https://www.linkedin.com/in/md-shabbir-jamal-0620781a0",
            "https://github.com/jamal474"
          ]
        })}
      </script>
  );
};

export default PersonSchema;
