import { useEffect } from 'react'

interface SEOProps {
  title: string
  description: string
  image?: string
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  image = '/images/og-image.webp'
}) => {
  useEffect(() => {
    document.title = title;
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);
    
    updateMetaTag('property', 'og:title', title);
    updateMetaTag('property', 'og:description', description);
    updateMetaTag('property', 'og:image', image);
    updateMetaTag('property', 'og:type', 'website');
    
    updateMetaTag('name', 'twitter:card', 'summary_large_image');
    updateMetaTag('name', 'twitter:title', title);
    updateMetaTag('name', 'twitter:description', description);
    updateMetaTag('name', 'twitter:image', image);
  }, [title, description, image]);
  
  const updateMetaTag = (attributeName: string, attributeValue: string, content: string) => {
    let metaTag = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
    if (!metaTag) {
      metaTag = document.createElement('meta');
      metaTag.setAttribute(attributeName, attributeValue);
      document.head.appendChild(metaTag);
    }
    metaTag.setAttribute('content', content);
  };
  
  return null;
};

export default SEO;
