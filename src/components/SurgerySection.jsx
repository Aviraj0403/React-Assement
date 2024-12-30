import React from "react";

const SurgerySection = () => {
  const surgeries = [
    {
      title: "Piles",
      img: "https://img.pristyncare.com/new_brand%2Felements%2Ftop_disease_icons%2Fpiles.svg",
      link: "https://www.pristyncare.com/treatment/piles/",
    },
    {
      title: "Anal Fistula",
      img: "https://img.pristyncare.com/new_brand%2Felements%2Ftop_disease_icons%2Ffistula.svg",
      link: "https://www.pristyncare.com/treatment/fistula/",
    },
    {
      title: "Anal Fissure",
      img: "https://img.pristyncare.com/new_brand%2Felements%2Ftop_disease_icons%2Ffissure.svg",
      link: "https://www.pristyncare.com/treatment/fissure/",
    },
    {
      title: "Gallstone",
      img: "https://img.pristyncare.com/new_brand%2Felements%2Ftop_disease_icons%2FGalstone.svg",
      link: "https://www.pristyncare.com/treatment/gallstone/",
    },
    {
      title: "Kidney Stones",
      img: "https://img.pristyncare.com/new_brand%2Felements%2Ftop_disease_icons%2FUrology.svg",
      link: "https://www.pristyncare.com/treatment/kidney-stones/",
    },
    {
      title: "Cataract",
      img: "https://img.pristyncare.com/new_brand%2Felements%2Ftop_disease_icons%2Fcataract.svg",
      link: "https://www.pristyncare.com/treatment/cataract/",
    },
  ];

  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-blue-900 mb-6">
          Common Surgeries We Offer
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {surgeries.map((surgery, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <a href={surgery.link} target="_blank" rel="noopener noreferrer">
                <div className="flex justify-center mb-4">
                  <img
                    src={surgery.img}
                    alt={surgery.title}
                    className="h-20 w-20"
                  />
                </div>
                <p className="text-center text-blue-900 font-semibold">
                  {surgery.title}
                </p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SurgerySection;
