import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen p-4 md:p-6 space-y-6">
      <Skeleton className="min-h-[90vh] w-full rounded-[48px]" />
      <Skeleton className="h-12 w-64 mx-auto" />
      <div className="max-w-6xl mx-auto space-y-4">
        <Skeleton className="h-40 w-full rounded-2xl" />
        <Skeleton className="h-40 w-full rounded-2xl" />
        <Skeleton className="h-40 w-full rounded-2xl" />
      </div>
      <Skeleton className="h-12 w-64 mx-auto" />
      <Skeleton className="h-64 w-full max-w-6xl mx-auto rounded-2xl" />
    </div>
  )
}
