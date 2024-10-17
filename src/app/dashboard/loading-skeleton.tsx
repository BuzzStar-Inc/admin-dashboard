import { Skeleton } from "@/components/ui/skeleton";

export function LoadingSkeleton() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-4 py-5">
        {[...Array(5)].map((_, i) => (
          <Skeleton key={i} className="h-[8.75rem] w-full" />
        ))}
      </div>
      <div className="grid 2xl:grid-cols-2 2xl:gap-6">
        <Skeleton className="h-[35rem] w-full" />
        <Skeleton className="h-[35rem] w-full" />
      </div>
    </>
  );
}
