export default function ImagePlaceholder({ label, aspect = 'aspect-[4/3]' }) {
  return (
    <div className={`relative overflow-hidden rounded-[32px] border border-base-700 bg-base-900 p-6 ${aspect}`}>
      <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-accent/10 via-transparent to-transparent" />
      <div className="relative flex h-full w-full flex-col items-center justify-center gap-4 text-center text-slate-300">
        <div className="flex h-72 w-72 items-center justify-center rounded-[32px] border border-accent/20 bg-white/5 text-accent shadow-lg shadow-accent/10">
          <img src="/favicon-512x512.png" className="h-52 w-52 rounded-[28px] object-cover" />
        </div>
        <p className="max-w-xs text-sm leading-6 text-slate-400">{label}</p>
      </div>
    </div>
  )
}
