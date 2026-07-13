import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import DocumentCard from "../components/DocumentCard";
import DocumentSkeleton from "../components/DocumentSkeleton";


export default function Documents() {

  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    async function fetchDocuments() {

      try {

        const querySnapshot = await getDocs(
          collection(db, "documents")
        );


        const docs = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));


        setDocuments(docs);


      } catch(error) {

        console.error("Error loading documents:", error);

      } finally {

        setLoading(false);

      }

    }


    fetchDocuments();

  }, []);



  return (

    <div className="min-h-screen bg-gray-50 p-8">

      <div className="mx-auto max-w-7xl">

        <h1 className="mb-8 text-3xl font-bold text-[#1A2332]">
          Documents
        </h1>


        {loading ? (

          <div className="grid gap-6 md:grid-cols-3">

            {[1,2,3].map((item)=>(
              <DocumentSkeleton key={item}/>
            ))}

          </div>


        ) : documents.length === 0 ? (

          <p className="text-gray-500">
            No documents found
          </p>


        ) : (

          <div className="grid gap-6 md:grid-cols-3">

            {documents.map((doc)=>(
              <DocumentCard
                key={doc.id}
                doc={doc}
              />
            ))}

          </div>

        )}


      </div>

    </div>

  );

}