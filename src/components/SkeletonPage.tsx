
const Skeleton = ({ className = '' }: { className?: string }) => (
  <div className={`animate-pulse bg-gray-200 rounded ${className}`} />
)

const SkeletonPage = () => {
  return (
    <div>
      <Skeleton className="w-full h-64" />
      <div className="flex gap-4 px-4 py-2 overflow-x-auto mt-2">
        {Array(6)
          .fill(0)
          .map((_, idx) => (
            <Skeleton key={idx} className="h-6 w-24" />
          ))}
      </div>
      <div className="p-4 space-y-6">
        {Array(2)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="space-y-2">
              <Skeleton className="w-1/3 h-6" />
              <Skeleton className="w-full h-20" />
              <Skeleton className="w-full h-20" />
            </div>
          ))}
      </div>
    </div>
  )
}

export default SkeletonPage