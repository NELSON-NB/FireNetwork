import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { ArrowLeft, Download, FileText } from "lucide-react";


export default function DocumentDetails() {

  const { id } = useParams();

  const [documentData, setDocumentData] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    const fetchDocument = async () => {

      try {

        const docRef = doc(db, "documents", id);

        const snapshot = await getDoc(docRef);


        if (snapshot.exists()) {

          setDocumentData({
            id: snapshot.id,
            ...snapshot.data()
          });

        }


      } catch (error) {

        console.error(
          "Error fetching document:",
          error
        );

      } finally {

        setLoading(false);

      }

    };


    fetchDocument();

  }, [id]);



  // Loading state

  if (loading) {

    return (

      <main className="min-h-screen bg-gray-50 pt-32 flex items-center justify-center">

        <div className="text-center">

          <div className="animate-spin h-10 w-10 rounded-full border-4 border-[#E3001B] border-t-transparent mx-auto mb-4"></div>

          <p className="text-gray-600">
            Loading document...
          </p>

        </div>

      </main>

    );

  }



  // Not found

  if (!documentData) {

    return (

      <main className="min-h-screen bg-gray-50 pt-32 flex items-center justify-center">

        <div className="bg-white rounded-3xl shadow p-10 text-center">

          <FileText 
            size={50}
            className="mx-auto text-gray-400 mb-4"
          />

          <h2 className="text-xl font-bold text-[#1A2332]">
            Document not found
          </h2>


          <Link
            to="/certification"
            className="inline-block mt-5 bg-[#E3001B] text-white px-6 py-3 rounded-xl"
          >
            Back to documents
          </Link>

        </div>

      </main>

    );

  }



  return (

    <main className="min-h-screen bg-gray-50 pt-32 pb-20">


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        {/* Back navigation */}

        <Link
          to="/certification"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#1A2332] hover:text-[#E3001B] transition mb-8"
        >

          <ArrowLeft size={18}/>

          Back to documents

        </Link>




        <div className="grid lg:grid-cols-3 gap-8">



          {/* Document information */}


          <section className="lg:col-span-1">


            <div className="bg-white rounded-3xl shadow-lg p-7">


              <div className="flex items-start gap-4 mb-6">


                <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center">

                  <FileText
                    size={30}
                    className="text-[#E3001B]"
                  />

                </div>


                <div>

                  <h1 className="text-xl font-bold text-[#1A2332] leading-tight">

                    {documentData.title}

                  </h1>


                  <p className="text-sm text-gray-500 mt-1">

                    {documentData.category}

                  </p>

                </div>


              </div>





              <div className="space-y-5">


                <div>

                  <p className="text-xs uppercase tracking-wide text-gray-400">
                    Uploaded by
                  </p>


                  <p className="mt-1 font-medium text-[#1A2332]">

                    {documentData.uploadedBy || "Unknown"}

                  </p>

                </div>





                <div>

                  <p className="text-xs uppercase tracking-wide text-gray-400">
                    Description
                  </p>


                  <p className="mt-2 text-sm leading-6 text-gray-600">

                    {documentData.description}

                  </p>

                </div>



              </div>





              <a

                href={documentData.fileUrl}

                target="_blank"

                rel="noreferrer"

                className="mt-8 flex items-center justify-center gap-2 bg-[#E3001B] hover:bg-[#FF6B35] text-white font-semibold py-3 rounded-xl transition"

              >

                <Download size={18}/>

                Open PDF

              </a>



            </div>


          </section>







          {/* PDF viewer */}


          <section className="lg:col-span-2">


            <div className="bg-white rounded-3xl shadow-lg p-4">


              <div className="rounded-2xl overflow-hidden border border-gray-200">


                <iframe

                  src={documentData.fileUrl}

                  title={documentData.title}

                  className="w-full h-[800px]"

                />


              </div>


            </div>


          </section>



        </div>


      </div>


    </main>

  );

}