type ButtonProps = {
  path: string;
  text: string;
  styles?: string;
};

export default function Button({ path, text, styles }: ButtonProps) {
  return (
    <a 
      href={path} 
      className={`px-3 xl:px-5 font-semibold text-xs lg:text-sm" rounded-sm ${styles}`}
    >
      {text}
    </a>
  );
}
 