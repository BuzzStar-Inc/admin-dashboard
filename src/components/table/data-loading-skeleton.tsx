import { Skeleton } from "@/components/ui/skeleton";

const DataLoadingSkeleton = () => (
  <div className="space-y-4 w-full">
    <div className="flex items-center justify-between">
      <Skeleton className="h-12 w-[18.75rem]" />
      <Skeleton className="h-12 w-[18.75rem]" />
    </div>
    <div className="flex items-center justify-between">
      <Skeleton className="min-h-[80vh] w-full" />
    </div>
    <div className="flex items-center justify-center">
      <Skeleton className="h-10 w-[25rem]" />
    </div>
  </div>
);

DataLoadingSkeleton.displayName = "DataLoadingSkeleton";

const TableLoadingSkeleton = () => (
  <div className="space-y-[2rem] w-full">
    <Skeleton className="min-h-[14rem] w-full" />
    <Skeleton className="min-h-[65vh] w-full" />

    <div className="flex items-center justify-end">
      <Skeleton className="h-10 w-[25rem]" />
    </div>
  </div>
);

TableLoadingSkeleton.displayName = "TableLoadingSkeleton";
export { DataLoadingSkeleton, TableLoadingSkeleton };
