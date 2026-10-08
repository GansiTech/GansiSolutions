import Reveal from './Reveal'

export default function SectionTitle({ eyebrow, heading, description }) {
  return (
    <Reveal className="mb-10 max-w-2xl">
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent-light">{eyebrow}</p>
      )}
      <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{heading}</h2>
      {description && <p className="mt-4 text-base leading-7 text-slate-300">{description}</p>}
    </Reveal>
  )
}
