import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  orderBy,
} from 'firebase/firestore'
import { db, storage } from './firebase'
import { getDownloadURL, ref } from 'firebase/storage'

const collectionName = 'documents'

export async function getDocuments() {
  const snap = await getDocs(collection(db, "documents"));

  console.log("Total documents:", snap.size);

  snap.forEach((doc) => {
    console.log(doc.id, doc.data());
  });

  return snap.docs.map((d) => ({
    id: d.id,
    ...d.data(),
  }));
}

export async function getDocumentsByCategory(category) {
  const q = query(
    collection(db, collectionName),
    where('isPublished', '==', true),
    where('category', '==', category),
    orderBy('createdAt', 'desc')
  )

  const snap = await getDocs(q)
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }))
}

export async function getDocument(id) {
  const refDoc = doc(db, collectionName, id)
  const snap = await getDoc(refDoc)

  if (!snap.exists()) return null
  return { id: snap.id, ...snap.data() }
}

export async function getPdfDownloadUrl(fileUrl) {
  if (!fileUrl) throw new Error('Missing PDF URL')
  return getDownloadURL(ref(storage, fileUrl))
}