import { useEffect, useMemo, useState } from 'react'
import { getDocuments } from '../firebase/documents'
import SearchBar from '../components/SearchBar'
import DocumentCard from '../components/DocumentCard'
import DocumentSkeleton from '../components/DocumentSkeleton'

export default function Certifications() {
  const [documents, setDocuments] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getDocuments()
        setDocuments(data)
      } catch (e) {
        console.error(e)
        setError('Unable to load certifications.')
      } finally {
        setLoading(false)
      }
    }

    load()
  }, [])

  const filteredDocuments = useMemo(() => {
    const q = search.trim().toLowerCase()
    if (!q) return documents

    return documents.filter((doc) =>
      [doc.title, doc.description, doc.category]
        .filter(Boolean)
        .some((field) => field.toLowerCase().includes(q))
    )
  }, [documents, search])

  return (
    <div className="min-h-screen bg-[#F7F8FA]">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#1A2332] sm:text-4xl">
            Certifications
          </h1>
          <p className="mt-2 text-gray-600">
            Browse and read published certification PDFs.
          </p>
        </div>

        <SearchBar value={search} onChange={setSearch} />

        {error ? (
          <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-red-700">
            {error}
          </div>
        ) : null}

        {loading ? (
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <DocumentSkeleton key={i} />
            ))}
          </div>
        ) : filteredDocuments.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-gray-300 bg-white px-6 py-14 text-center text-gray-600 shadow-sm">
            No certifications available.
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {filteredDocuments.map((doc) => (
              <DocumentCard key={doc.id} doc={doc} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}