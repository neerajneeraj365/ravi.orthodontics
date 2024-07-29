import { cn } from "@/lib/utils";

export const Wrapper = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn("mx-auto w-full max-w-screen-xl px-2.5 md:px-6", className)}
    >
      {children}
    </div>
  );
};
