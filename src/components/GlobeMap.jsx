import React, { useEffect, useRef, useState, useCallback } from 'react';
import Globe from 'react-globe.gl';
import { earthWaterBase64 } from '../data/earth_water_base64';

export function GlobeMap({ data, onRegionSelect, selectedRegionId, accentColor = '#10b981' }) {
  const globeEl = useRef();
  const onRegionSelectRef = useRef(onRegionSelect);
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  const globeData = data || [];

  // Keep callback ref up to date
  useEffect(() => {
    onRegionSelectRef.current = onRegionSelect;
  }, [onRegionSelect]);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.5;
      globeEl.current.pointOfView({ altitude: 2 });
    }
  }, []);

  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = !selectedRegionId;
    }
  }, [selectedRegionId]);

  // Smoothly rotate globe camera to center selected country whenever selectedRegionId changes
  useEffect(() => {
    if (selectedRegionId && globeEl.current && globeData.length > 0) {
      const selectedItem = globeData.find(d => d.id === selectedRegionId);
      if (selectedItem && selectedItem.lat !== undefined && selectedItem.lng !== undefined) {
        globeEl.current.pointOfView(
          { lat: selectedItem.lat, lng: selectedItem.lng, altitude: 1.5 },
          1400
        );
      }
    }
  }, [selectedRegionId, globeData]);

  const handleSelect = useCallback((point) => {
    onRegionSelectRef.current(point);
    if (globeEl.current) {
      globeEl.current.pointOfView({ lat: point.lat, lng: point.lng, altitude: 1.5 }, 1000);
    }
  }, []);

  return (
    <div
      className="absolute inset-0 z-0 bg-slate-950 transition-transform duration-700 ease-out"
      style={{ transform: selectedRegionId ? 'translateX(-230px)' : 'translateX(0)' }}
    >
      <Globe
        ref={globeEl}
        width={windowSize.width}
        height={windowSize.height}
        globeImageUrl={earthWaterBase64}
        backgroundColor="#020617"
        atmosphereColor={accentColor}
        atmosphereAltitude={0.15}
        pointsData={globeData}
        pointLat="lat"
        pointLng="lng"
        pointColor={d => (d.id === selectedRegionId ? '#fbbf24' : accentColor)}
        pointAltitude={d => (d.id === selectedRegionId ? 0.12 : 0.06)}
        pointRadius={d => (d.id === selectedRegionId ? 1 : 0.6)}
        pointsMerge={false}
        onPointClick={handleSelect}
        htmlElementsData={globeData}
        htmlLat="lat"
        htmlLng="lng"
        htmlAltitude={d => (d.id === selectedRegionId ? 0.14 : 0.08)}
        htmlElement={d => {
          const el = document.createElement('div');
          const isSelected = d.id === selectedRegionId;
          el.style.cssText = `
            color: ${isSelected ? '#fbbf24' : '#fff'};
            font-size: ${isSelected ? '13px' : '11px'};
            font-weight: ${isSelected ? '800' : '600'};
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
            background: ${isSelected ? 'rgba(251,191,36,0.15)' : 'rgba(15,23,42,0.7)'};
            backdrop-filter: blur(4px);
            padding: 3px 8px;
            border-radius: 6px;
            border: 1px solid ${isSelected ? 'rgba(251,191,36,0.5)' : 'rgba(255,255,255,0.15)'};
            white-space: nowrap;
            transform: translate(-50%, -24px);
            pointer-events: auto;
            cursor: pointer;
            text-shadow: 0 1px 3px rgba(0,0,0,0.5);
            transition: all 0.3s;
          `;
          el.textContent = d.region;
          el.addEventListener('click', (e) => {
            e.stopPropagation();
            handleSelect(d);
          });
          el.addEventListener('mouseenter', () => {
            if (!isSelected) {
              el.style.background = `${accentColor}33`;
              el.style.borderColor = `${accentColor}80`;
              el.style.color = accentColor;
            }
          });
          el.addEventListener('mouseleave', () => {
            if (!isSelected) {
              el.style.background = 'rgba(15,23,42,0.7)';
              el.style.borderColor = 'rgba(255,255,255,0.15)';
              el.style.color = '#fff';
            }
          });
          return el;
        }}
      />
    </div>
  );
}
