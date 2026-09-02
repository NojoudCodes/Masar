type CardProps= {
  number: string,
  title: string;
  paragraph: string;
  styles: string;
}

export default function ProcessCard({ number, title, paragraph, styles }: CardProps) {
  return (
    <div className={`hover:bg-ink-primary flex flex-col justify-center border-t
     border-gray-600 hover:border-t-lime p-15 ${styles}`}>
      <h6 className="mb-4 text-lime">{number}</h6>
      <h3 className="font-semibold text-lime mb-4">{ title }</h3>
      <p className="text-sm text-muted">{ paragraph }</p>
    </div>
  )
}
