import { useState, useEffect, useRef, useCallback } from 'react';

/* ─── useInterval ─── */
export function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef(callback);
  useEffect(() => { savedCallback.current = callback; }, [callback]);
  useEffect(() => {
    if (delay === null) return;
    const id = setInterval(() => savedCallback.current(), delay);
    return () => clearInterval(id);
  }, [delay]);
}

/* ─── useFluctuatingValue ─── */
export function useFluctuatingValue(base: number, range: number, intervalMs: number = 3000) {
  const [value, setValue] = useState(base);
  useInterval(() => {
    const delta = Math.round((Math.random() - 0.4) * range);
    setValue(prev => Math.max(0, prev + delta));
  }, intervalMs);
  return value;
}

/* ─── useLiveTimestamp ─── */
export function useLiveTimestamp() {
  const [now, setNow] = useState(Date.now());
  useInterval(() => setNow(Date.now()), 1000);
  return now;
}

/* ─── formatRelativeTime ─── */
export function formatRelativeTime(seconds: number): string {
  if (seconds < 5) return 'just now';
  if (seconds < 60) return `${Math.floor(seconds)}s ago`;
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
  return `${Math.floor(seconds / 3600)}h ago`;
}

/* ─── useInView ─── */
export function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

/* ─── useStaggeredReveal ─── */
export function useStaggeredReveal(count: number, baseDelay = 0.08) {
  const { ref, inView } = useInView(0.1);
  const delays = Array.from({ length: count }, (_, i) => baseDelay + i * baseDelay);
  return { ref, inView, delays };
}
