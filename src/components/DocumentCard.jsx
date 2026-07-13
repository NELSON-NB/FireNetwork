import { Link } from 'react-router-dom'

function formatDate(ts) {
  if (!ts?.toDate) return 'Unknown date'
  return ts.toDate().toLocaleDateString()
}

export default function DocumentCard({ doc }) {
  return (
    <div className="group rounded-3xl border border-gray-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-4 flex items-start gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-red-50 text-[#E3001B]">
          <span className="text-xl">📄</span>
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="truncate text-lg font-semibold text-[#1A2332]">
            {doc.title}
          </h3>
          <p className="mt-1 text-sm text-gray-500">{doc.category}</p>
        </div>
      </div>

      <p className="line-clamp-3 text-sm leading-6 text-gray-600">
        {doc.description}
      </p>

      <div className="mt-4 space-y-1 text-xs text-gray-500">
        <p>Uploaded by: {doc.uploadedBy || 'Unknown'}</p>
        <p>Uploaded: {formatDate(doc.createdAt)}</p>
      </div>

      <div className="mt-5 flex gap-3">
        <Link
          to={`/document/${doc.id}`}
          className="flex-1 rounded-xl bg-[#1A2332] px-4 py-3 text-center text-sm font-medium text-white transition hover:bg-[#0f1623]"
        >
          Read
        </Link>

        <a
          href={doc.fileUrl}
          target="_blank"
          rel="noreferrer"
          className="flex-1 rounded-xl border border-gray-200 px-4 py-3 text-center text-sm font-medium text-[#1A2332] transition hover:bg-gray-50"
        >
          Download
        </a>
      </div>
    </div>
  )
}