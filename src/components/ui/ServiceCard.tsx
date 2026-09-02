import type { IconType } from "react-icons";

type CardProps= {
  icon: IconType;
  title: string;
  paragraph: string;
}

export default function ServiceCard({ icon: Icon, title, paragraph }: CardProps) {
  return (
    <div className="hover:bg-ink-primary flex flex-col justify-center border
     border-gray-600 hover:border-lime p-15">
      <Icon size={30} className="mb-4 text-lime" />
      <h3 className="font-semibold text-lime mb-4">{ title }</h3>
      <p className="text-sm text-muted">{ paragraph }</p>
    </div>
  )
}
