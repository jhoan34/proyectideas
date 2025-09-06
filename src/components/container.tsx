import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  children: React.ReactNode;
}

const Container: React.FC<Props> = ({ children, className }) => {
  return (
    <section className={cn("w-full max-w-[1440px] mx-auto", className)}>
      {children}
    </section>
  );
};

export default Container;
