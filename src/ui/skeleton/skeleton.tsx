export function SkeletonText({ width }: { width: number }) {
  const className = `animate-pulse h-3 bg-slate-400 rounded-sm w-${width}`;
  return <div className={className}></div>;
}

export function SkeletonImage({ size }: { size: number }) {
  const className = `animate-pulse h-${size} w-${size} bg-slate-400 rounded-full`;
  return <div className={className}></div>;
}
