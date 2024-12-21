'use client'
import { useEffect } from 'react';

type FeaturedCardProps = {
  __html: string;
}

export function TweetCard({ __html }: FeaturedCardProps) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="ml-4" dangerouslySetInnerHTML={{ __html }} />
  );
}
