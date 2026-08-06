import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, List, Music } from 'lucide-react';

export function SearchList({ data = [], onSelect, selectedId, accentColor = '#10b981' }) {
  const globeData = data;
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');

  // "아시아" 같은 상위 키워드도 매칭되도록 대륙 별칭 맵
  const continentAliases = useMemo(() => ({
    '아시아': ['동아시아', '동남아시아', '남아시아', '중동'],
    '아메리카': ['라틴아메리카', '북아메리카'],
    '남미': ['라틴아메리카'],
    '북미': ['북아메리카'],
    '태평양': ['오세아니아'],
    '중남미': ['라틴아메리카'],
    '카리브': ['라틴아메리카'],
    '중앙아시아': ['동아시아'],
    '서아시아': ['중동'],
    '북유럽': ['유럽'],
    '남유럽': ['유럽'],
    '동유럽': ['유럽'],
    '서유럽': ['유럽'],
    '서아프리카': ['아프리카'],
    '동아프리카': ['아프리카'],
    '남아프리카': ['아프리카'],
  }), []);

  const filtered = useMemo(() => {
    if (!query.trim()) return globeData;
    const q = query.toLowerCase();

    // Resolve continent aliases: e.g. "아시아" → ['동아시아', '동남아시아', '남아시아', '중동']
    const matchedContinents = new Set();
    Object.entries(continentAliases).forEach(([alias, continents]) => {
      if (alias.includes(q)) continents.forEach(c => matchedContinents.add(c));
    });

    return globeData.filter(d =>
      d.title.toLowerCase().includes(q) ||
      d.region.toLowerCase().includes(q) ||
      d.description.toLowerCase().includes(q) ||
      (d.continent && d.continent.toLowerCase().includes(q)) ||
      matchedContinents.has(d.continent)
    );
  }, [query, continentAliases]);

  // Group by continent for display
  const grouped = useMemo(() => {
    const map = new Map();
    filtered.forEach(item => {
      const key = item.continent || '기타';
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(item);
    });
    return map;
  }, [filtered]);

  const handleSelect = (item) => {
    onSelect(item);
    setIsOpen(false);
    setQuery('');
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="pointer-events-auto flex items-center gap-2 px-4 py-2.5 bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-2xl text-slate-300 hover:text-white hover:border-emerald-500/50 hover:bg-slate-800/90 transition-all shadow-lg group"
      >
        <List className="w-4 h-4 text-emerald-400 group-hover:text-emerald-300" />
        <span className="text-sm font-bold">전체 목록</span>
        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-md" style={{ background: `${accentColor}33`, color: accentColor }}>{globeData.length}</span>
      </button>

      {/* Panel Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="pointer-events-auto absolute bottom-14 left-0 w-[380px] max-h-[65vh] bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Search Header */}
            <div className="px-4 pt-4 pb-3 border-b border-white/5 shrink-0">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="진행 이름, 국가 검색..."
                  autoFocus
                  className="w-full pl-9 pr-8 py-2.5 bg-slate-800/80 border border-white/10 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all"
                />
                {query && (
                  <button onClick={() => setQuery('')} className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-slate-500 hover:text-white">
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
              <p className="text-[10px] text-slate-500 mt-2 font-bold">
                {filtered.length}개 코드 진행 · {grouped.size}개 대륙/지역
              </p>
            </div>

            {/* Results */}
            <div className="flex-1 overflow-y-auto overscroll-contain py-2">
              {[...grouped.entries()].map(([continent, items]) => (
                <div key={continent}>
                  <div className="px-4 py-1.5 text-[10px] font-bold text-slate-500 uppercase tracking-wider sticky top-0 bg-slate-900/95 backdrop-blur-sm z-10 flex items-center gap-2">
                    <span className="text-emerald-500/70">●</span>
                    {continent}
                    <span className="text-slate-600 ml-auto">{items.length}</span>
                  </div>
                  {items.map(item => (
                    <button
                      key={item.id}
                      onClick={() => handleSelect(item)}
                      className={`w-full text-left px-4 py-2.5 flex items-center gap-3 transition-all hover:bg-white/5 group
                        ${item.id === selectedId ? 'bg-emerald-500/10 border-l-2 border-emerald-500' : 'border-l-2 border-transparent'}`}
                    >
                      <div className="w-7 h-7 rounded-lg bg-slate-800 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-emerald-500/30 overflow-hidden">
                        {item.flag
                          ? <img src={`/flags/${item.flag}.svg`} alt="" className="w-full h-full object-cover" />
                          : <Music className={`w-3.5 h-3.5 ${item.id === selectedId ? 'text-emerald-400' : 'text-slate-500 group-hover:text-emerald-400'}`} />}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className={`text-sm font-bold leading-tight truncate ${item.id === selectedId ? 'text-emerald-400' : 'text-white'}`}>
                          {item.title}
                        </p>
                        <p className="text-[10px] text-slate-500 truncate mt-0.5">{item.description}</p>
                      </div>
                      <div className="text-[9px] font-mono text-slate-600 shrink-0">
                        {item.chords.map(c => c.numeral).join(' → ')}
                      </div>
                    </button>
                  ))}
                </div>
              ))}
              {filtered.length === 0 && (
                <div className="px-4 py-8 text-center text-slate-500 text-sm">
                  검색 결과가 없습니다
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
