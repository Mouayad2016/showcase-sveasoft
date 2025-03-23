
import React, { useState, useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapPin } from 'lucide-react';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [tokenInput, setTokenInput] = useState('');
  const [mapLoaded, setMapLoaded] = useState(false);

  // Stockholm coordinates
  const defaultLocation = { lng: 18.0686, lat: 59.3293 };

  useEffect(() => {
    if (!mapboxToken || !mapContainer.current || map.current) return;

    // Initialize map
    mapboxgl.accessToken = mapboxToken;
    
    try {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [defaultLocation.lng, defaultLocation.lat],
        zoom: 11,
        pitch: 30,
      });

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl({
          visualizePitch: true,
        }),
        'top-right'
      );

      // Add a marker for Stockholm office
      map.current.on('load', () => {
        setMapLoaded(true);

        // Add a pulsing dot marker
        if (map.current) {
          const marker = new mapboxgl.Marker({
            color: '#3b82f6',
          })
            .setLngLat([defaultLocation.lng, defaultLocation.lat])
            .addTo(map.current);
          
          // Add a popup
          new mapboxgl.Popup({
            offset: 25,
            closeButton: false,
            className: 'custom-popup'
          })
            .setLngLat([defaultLocation.lng, defaultLocation.lat])
            .setHTML('<div class="font-semibold">Sveasoft Headquarters</div><div>Stockholm, Sweden</div>')
            .addTo(map.current);
        }
      });
    } catch (error) {
      console.error("Error initializing map:", error);
    }

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

  const handleSetToken = () => {
    setMapboxToken(tokenInput);
    // Save token to localStorage for persistence
    localStorage.setItem('mapbox-token', tokenInput);
  };

  // Check for token in localStorage on initial load
  useEffect(() => {
    const savedToken = localStorage.getItem('mapbox-token');
    if (savedToken) {
      setMapboxToken(savedToken);
      setTokenInput(savedToken);
    }
  }, []);

  return (
    <section id="location" className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Location</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Visit our office in Stockholm, Sweden, where our team of experts creates innovative solutions for clients worldwide.
          </p>
        </div>

        {!mapboxToken ? (
          <div className="max-w-md mx-auto p-6 rounded-lg bg-card shadow-sm border">
            <div className="text-center mb-4">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
              <h3 className="text-xl font-semibold">Enter your Mapbox Token</h3>
              <p className="text-sm text-muted-foreground mt-1">
                You need a Mapbox public token to display the map. Get one for free at{" "}
                <a 
                  href="https://mapbox.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  mapbox.com
                </a>
              </p>
            </div>
            <div className="space-y-3">
              <input
                type="text"
                value={tokenInput}
                onChange={(e) => setTokenInput(e.target.value)}
                placeholder="Enter your Mapbox public token"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button
                onClick={handleSetToken}
                disabled={!tokenInput}
                className="w-full py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50"
              >
                Set Token
              </button>
            </div>
          </div>
        ) : (
          <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-lg">
            <div ref={mapContainer} className="absolute inset-0" />
            
            {!mapLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-background/80">
                <div className="text-center">
                  <div className="inline-block w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin mb-4"></div>
                  <p className="text-foreground/70">Loading map...</p>
                </div>
              </div>
            )}

            <div className="absolute bottom-4 right-4 p-3 bg-background/90 backdrop-blur-sm rounded-lg shadow-sm text-sm z-10">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 text-primary mr-2" />
                <span className="font-medium">Sveasoft</span>
              </div>
              <p className="text-xs text-muted-foreground">Stockholm, Sweden</p>
            </div>
          </div>
        )}

        <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
          <div className="p-6 rounded-lg bg-card border shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-lg mb-2">Visit Us</h3>
            <p className="text-muted-foreground">Sveavägen 123, 111 34 Stockholm, Sweden</p>
          </div>
          
          <div className="p-6 rounded-lg bg-card border shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-lg mb-2">Call Us</h3>
            <p className="text-muted-foreground">+46 8 123 45 67</p>
          </div>
          
          <div className="p-6 rounded-lg bg-card border shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-lg mb-2">Email Us</h3>
            <p className="text-muted-foreground">contact@sveasoft.se</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
