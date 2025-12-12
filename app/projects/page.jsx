
import { ArrowBigRight, Projector } from "lucide-react";
import { Cedarville_Cursive } from "next/font/google";
const cedarville = Cedarville_Cursive({
    subsets: ["latin"],
    weight: "400",
});

const page = () => {
    return (
        <main className="min-h-screen  bg-gradient-to-b from-gray-900 to-black text-white p-4">
            <section className="banner ">
                <h1 className={`${cedarville.className}  text-center text-4xl`}>Projects</h1>

            </section>
            <section>
                <p className="flex text-2xl gap-2">Current Working <Projector/></p> 
                <hr />
                <div className="flex border rounded-2xl bg-white text-black cursor-pointer flex-row-reverse items-center justify-between  mt-3 gap-6">
                    {/* Left Column (Text col-8) */}
                    <div className="w-2/3">
                        <h2 className="text-2xl font-black mb-2">Andaman Bliss</h2>
                        <a href="andamanbliss.com" className="text-red-500" target="_blank">andamanbliss.com</a>
                        <p className="text-gray-600">
                            Short description about the project goes here. You can add details,
                            highlights, or any content that fits your layout.
                        </p>
                    </div>

                    {/* Right Column (Image col-4) */}
                    <div className="w-1/5 text-end">
                        <img
                            src="/images/companies/andaman_bliss.png"
                            alt="Project 1"
                            className="rounded-md inline-block max-w-full h-auto"
                        />
                    </div>
                </div>

            </section>
            <section className="recents">
                <h2 className="text-2xl font-bold mt-6 mb-4 border-b">Recent Projects <ArrowBigRight className="inline-block w-6 h-6" /></h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <div className="flex flex-col bg-white text-black rounded-2xl p-4 mb-4">
                        <p>Andaman bliss agent</p>
                    </div>
                    <div className="flex flex-col bg-white text-black rounded-2xl p-4 mb-4">
                        <p>Andaman bliss agent</p>
                    </div>
                    <div className="flex flex-col bg-white text-black rounded-2xl p-4 mb-4">
                        <p>Andaman bliss agent</p>
                    </div>

                    <div className="flex flex-col bg-white text-black rounded-2xl p-4 mb-4">
                        <p>Andaman bliss agent</p>
                    </div>
                    <div className="flex flex-col bg-white text-black rounded-2xl p-4 mb-4">
                        <p>Andaman bliss agent</p>
                    </div>

                </div>
            </section>
        </main>
    )
}

export default page