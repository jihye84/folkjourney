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
      globeEl.current.pointOfView({ altitude: isMobile ? 3.5 : 2.5 });
    }
  }, [isMobile]);

  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = !selectedRegionId;
    }
  }, [selectedRegionId]);

  const isMobile = windowSize.width < 768;

  // Smoothly rotate globe camera to center selected country whenever selectedRegionId changes
  useEffect(() => {
    if (selectedRegionId && globeEl.current && globeData.length > 0) {
      const selectedItem = globeData.find(d => d.id === selectedRegionId);
      if (selectedItem && selectedItem.lat !== undefined && selectedItem.lng !== undefined) {
        globeEl.current.pointOfView(
          { lat: selectedItem.lat, lng: selectedItem.lng, altitude: isMobile ? 3.5 : 2.5 },
          1400
        );
      }
    } else if (!selectedRegionId && globeEl.current) {
      globeEl.current.pointOfView({ altitude: isMobile ? 3.5 : 2.5 }, 1000);
    }
  }, [selectedRegionId, globeData, isMobile]);

  const handleSelect = useCallback((point) => {
    onRegionSelectRef.current(point);
    if (globeEl.current) {
      globeEl.current.pointOfView({ lat: point.lat, lng: point.lng, altitude: isMobile ? 3.5 : 2.5 }, 1000);
    }
  }, [isMobile]);

  const getTransform = () => {
    if (!selectedRegionId) return 'translate(0, 0)';
    // On mobile: bottom sheet takes bottom 56vh -> remaining top visible area is 44vh (center @ 22vh). Shift from 50vh to 22vh = -26vh
    // On desktop: side panel takes right 460px -> remaining left area center is shifted -230px
    return isMobile ? 'translateY(-26vh)' : 'translateX(-230px)';
  };

  return (
    <div
      className="absolute inset-0 z-0 bg-slate-950 transition-transform duration-700 ease-out"
      style={{ transform: getTransform() }}
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
            color: ${isSelected ? '#fbbf24' : 'rgba(255,255,255,0.85)'};
            font-size: ${isSelected ? '11px' : '9.5px'};
            font-weight: ${isSelected ? '800' : '600'};
            letter-spacing: 0.03em;
            font-family: "Plus Jakarta Sans", -apple-system, sans-serif;
            background: ${isSelected ? 'rgba(15, 23, 42, 0.95)' : 'rgba(2, 6, 23, 0.6)'};
            backdrop-filter: blur(6px);
            padding: ${isSelected ? '3px 9px' : '2px 7px'};
            border-radius: 20px;
            border: 1px solid ${isSelected ? 'rgba(251,191,36,0.85)' : 'rgba(255,255,255,0.12)'};
            box-shadow: ${isSelected ? '0 0 14px rgba(251,191,36,0.45)' : '0 2px 6px rgba(0,0,0,0.4)'};
            white-space: nowrap;
            transform: translate(-50%, -24px);
            pointer-events: auto;
            cursor: pointer;
            text-shadow: ${isSelected ? '0 0 8px rgba(251,191,36,0.5)' : '0 1px 3px rgba(0,0,0,0.7)'};
            transition: all 0.25s ease;
          `;
          el.textContent = d.region;
          el.addEventListener('click', (e) => {
            e.stopPropagation();
            handleSelect(d);
          });
          el.addEventListener('mouseenter', () => {
            if (!isSelected) {
              el.style.background = `${accentColor}44`;
              el.style.borderColor = `${accentColor}a0`;
              el.style.color = '#fff';
            }
          });
          el.addEventListener('mouseleave', () => {
            if (!isSelected) {
              el.style.background = 'rgba(2, 6, 23, 0.6)';
              el.style.borderColor = 'rgba(255,255,255,0.12)';
              el.style.color = 'rgba(255,255,255,0.85)';
            }
          });
          return el;
        }}
      />
    </div>
  );
}
