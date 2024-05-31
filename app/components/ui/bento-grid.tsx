import { cn } from "../../utils/cn";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[16rem] grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 max-w-7xl mx-auto  ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  card,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  card?: React.ReactNode;
}) => {
  return (
    <>
      <div
        className={cn(
          " row-span-1 rounded-xl group/bento  transition duration-200 dark:shadow-none p-4 border-transparent justify-between flex flex-col  space-y-4",
          className
        )}
      >
        {card}
      </div>
    </>
  );
};
