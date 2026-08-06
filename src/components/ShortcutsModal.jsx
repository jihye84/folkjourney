import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Keyboard } from 'lucide-react';

export function ShortcutsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const shortcuts = [
    { key: 'Space', desc: '현재 진행 / 리듬 재생 & 정지' },
    { key: 'Esc', desc: '정보 패널 / 검색창 닫기, 세계 여행 종료' },
    { key: 'M', desc: '🎹 코드진행 ↔ 🥁 리듬 모드 전환' },
    { key: 'T', desc: '✈️ 세계 여행 (자동 탐험) 켜기 / 끄기' },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative w-full max-w-sm bg-slate-900 border border-white/15 rounded-2xl p-6 shadow-2xl"
        >
          <div className="flex justify-between items-center mb-5 pb-3 border-b border-white/10">
            <div className="flex items-center gap-2 text-emerald-400 font-black text-base">
              <Keyboard className="w-5 h-5" />
              <span>키보드 단축키</span>
            </div>
            <button
              onClick={onClose}
              className="p-1 text-slate-400 hover:text-white rounded-full hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-3">
            {shortcuts.map((s, i) => (
              <div key={i} className="flex items-center justify-between gap-3 text-sm">
                <span className="text-slate-300 text-xs font-medium">{s.desc}</span>
                <kbd className="px-2.5 py-1 bg-slate-800 border border-slate-700 text-amber-300 font-mono font-bold text-xs rounded-lg shadow-sm shrink-0">
                  {s.key}
                </kbd>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-3 border-t border-white/5 text-center">
            <button
              onClick={onClose}
              className="px-5 py-2 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 font-bold text-xs rounded-xl border border-emerald-500/30 transition-all"
            >
              확인
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
