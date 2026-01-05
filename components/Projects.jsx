import { ArrowBigRight, Projector } from "lucide-react";
import { Cedarville_Cursive } from "next/font/google";

const cedarville = Cedarville_Cursive({
  subsets: ["latin"],
  weight: "400",
});

const Projects = () => {
  return (
    <div>
      <section className="recents text-center my-20 px-5 mt-5">
        <h1 className={`${cedarville.className} text-5xl font-bold`}>
          Recent Projects
         
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-5">
          {[
            {
              title: "Think n Maker",
              img: "https://www.thinknmaker.com/theme_2/pix.png",
            },
            {
              title: "Seadeck",
              img: "https://seadeck.in/theme-1/upload/logo-nx1.png",
            },
            {
              title: "Andaman Akash",
              img: "https://andamanakash.com/themes-2/images/logo.png",
            },
            {
              title: "Andaman Bliss",
              img: "https://andamanbliss.com/site/img/logo.png",
            },
            {
              title: "Island Wonders",
              img: "https://islandswonder.com/assets/img/home/900ba028c5d27653.png",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl p-3 shadow-sm hover:shadow-md transition"
            >
              {/* Smaller Image Box */}
              <div className="h-20 w-full flex items-center justify-center bg-red-600 rounded-lg">
                <img
                  src={item.img}
                  alt={item.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* Smaller Text */}
              <p className="mt-2 text-center text-sm font-medium text-gray-800 truncate">
                {item.title}
              </p>

              {/* Tooltip */}
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition pointer-events-none z-10">
                <div className="bg-black text-white text-xs px-2 py-1 rounded">
                  {item.title}
                </div>
              </div>
            </div>
          ))}

          {/* Compact Text-only Cards */}
          <div className="group relative bg-white rounded-xl p-3 shadow-sm hover:shadow-md transition text-center">
            <h3 className="text-sm font-semibold text-gray-800">
              MCM Building Solutions
            </h3>
            <p className="text-xs text-gray-600 mt-1 truncate">
              Inventory Management System
            </p>

            <div className="absolute -top-1 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition pointer-events-none">
              <div className="bg-black text-white text-xs px-2 py-1 rounded">
                Enterprise Application
              </div>
            </div>
          </div>

          <div className="group relative bg-white rounded-xl p-3 shadow-sm hover:shadow-md transition text-center">
            <h3 className="text-sm font-semibold text-gray-800">
              Aditya Finance
            </h3>
            <p className="text-xs text-gray-600 mt-1 truncate">
              Loan Management CRM
            </p>

            <div className="absolute -top-1 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition pointer-events-none">
              <div className="bg-black text-white text-xs px-2 py-1 rounded">
                Finance CRM System
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
