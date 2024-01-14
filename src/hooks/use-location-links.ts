import { useState, useEffect } from 'react';

type MapLinkProvider = 'Google' | 'Bing' | 'OpenStreetMap';

const providerURLs: Record<MapLinkProvider, string> = {
  Google: 'https://www.google.com/maps/search/',
  Bing: 'https://www.bing.com/maps?where1=',
  OpenStreetMap: 'https://www.openstreetmap.org/search?query=',
};

export function useLocationLinks(address: string, provider: MapLinkProvider) {
  const [link, setLink] = useState('');

  useEffect(() => {
    const baseURL = providerURLs[provider];
    const fullLink = baseURL + address;
    setLink(fullLink);
  }, [address, provider]);
  return link;
}
