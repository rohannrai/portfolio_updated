export default function Loading() {
  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-bg">
      <div className="text-center">
        <div className="text-2xl font-bold tracking-tight text-gradient-gold mb-2">
          ROHAN RAI
        </div>
        <div className="w-48 h-[2px] bg-white/[0.06] rounded-full overflow-hidden mx-auto">
          <div className="h-full w-1/2 bg-accent rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  );
}
