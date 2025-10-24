import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet.markercluster';
import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current || mapInstance.current) return;

    // Initialize map
    const map = L.map(mapContainer.current).setView([-22.5609, 17.0658], 12);
    mapInstance.current = map;

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Create marker cluster groups
    const facilities = (L as any).markerClusterGroup();
    const incidents = (L as any).markerClusterGroup();

    function addPoint(
      group: L.LayerGroup,
      lat: number,
      lng: number,
      title: string,
      img?: string,
      caption?: string
    ) {
      const html = `
        <div style="max-width:240px">
          ${img ? `<img src="${img}" style="width:100%;height:120px;object-fit:cover;border-radius:8px;margin-bottom:8px;border:1px solid hsl(var(--border))">` : ''}
          <strong>${title}</strong><br>
          <span style="color:hsl(var(--muted-foreground))">${caption || ''}</span>
          <div style="margin-top:8px">
            <a style="color:hsl(var(--primary))" href="mailto:team@jtptoursandsafaris.com?subject=Sanitation issue at ${lat},${lng}&body=Observed near ${lat},${lng} — describe the issue and attach a photo.">
              Report here
            </a>
          </div>
        </div>
      `;
      L.marker([lat, lng]).bindPopup(html).addTo(group);
    }

    // Add sample markers
    addPoint(facilities, -22.5609, 17.0658, 'Water Access Point', '/src/assets/water-access.jpg', 'Windhoek Central');
    addPoint(incidents, -22.5520, 17.0800, 'Open Dumping', '/src/assets/sanitation-challenge.jpg', 'Informal settlement hotspot');
    addPoint(facilities, -22.5780, 17.0400, 'Sanitation Block', '/src/assets/sanitation-facilities.jpg', 'Public ablution facility');

    facilities.addTo(map);
    incidents.addTo(map);

    L.control.layers(null, {
      'Facilities': facilities,
      'Incidents': incidents
    }, { collapsed: false }).addTo(map);

    // Cleanup
    return () => {
      map.remove();
      mapInstance.current = null;
    };
  }, []);

  return (
    <div 
      ref={mapContainer} 
      className="h-[420px] w-full rounded-xl border border-border shadow-lg"
    />
  );
};

export default Map;
