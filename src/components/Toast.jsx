import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export default function Toast({ toast, onClose }) {
  if (!toast) return null;

  const icon = toast.type === 'error' ? (
    <AlertCircle className="w-5 h-5 text-rose-400 flex-shrink-0" />
  ) : toast.type === 'info' ? (
    <Info className="w-5 h-5 text-indigo-400 flex-shrink-0" />
  ) : (
    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
  );

  return (
    <AnimatePresence>
      <div className="fixed bottom-6 right-6 z-50 pointer-events-auto max-w-sm w-full px-4">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/95 border border-white/15 shadow-2xl backdrop-blur-md text-white text-sm"
        >
          {icon}
          <div className="flex-1 text-xs sm:text-sm font-medium leading-tight">
            {toast.message}
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
