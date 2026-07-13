export default function DocumentSkeleton() {
  return (
    <div className="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm">
      <div className="mb-4 h-10 w-10 animate-pulse rounded-2xl bg-gray-200" />
      <div className="mb-3 h-5 w-3/4 animate-pulse rounded bg-gray-200" />
      <div className="mb-2 h-4 w-full animate-pulse rounded bg-gray-200" />
      <div className="mb-2 h-4 w-5/6 animate-pulse rounded bg-gray-200" />
      <div className="mt-5 h-10 w-full animate-pulse rounded-xl bg-gray-200" />
    </div>
  )
}