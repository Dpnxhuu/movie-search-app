export default function EmptyState() {
  return (
    <div
      className="flex flex-col max-w-md mx-auto items-center justify-center rounded-2xl border border-dashed border-zinc-700/80 bg-zinc-900/30 px-8 py-16 text-center"
      role="status"
    >
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-zinc-800">
        <svg
          className="h-8 w-8 text-zinc-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
          />
        </svg>
      </div>
      <h2 className="text-lg font-semibold text-zinc-200">No results found</h2>
      <p className="mt-2 max-w-sm text-sm text-zinc-500">
        Try a different search term or browse our featured movies.
      </p>
    </div>
  );
}
