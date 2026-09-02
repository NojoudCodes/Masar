type SubtitleProps = {
  subtitle: string;
}

export default function Subtitle({ subtitle }: SubtitleProps) {
  return (
    <div className="flex items-center gap-1.5">
      <span className="bg-lime w-2 h-2 rounded-full"></span>
      <h6 className="text-sm text-lime">{subtitle}</h6>
    </div>
  )
}
