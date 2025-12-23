import React from "react";
import ServiceCard from "./_component/ServiceCard";
import Container from "../../Components/Container";
import ServicesSearching from "./_component/ServicesSearching";
import localServices from "../../data/services.json";

export const metadata = {
  title: "Care Services | Professional Home Care",
  description: "High-quality Baby, Elderly, and Sick People Care Services",
};

const ServicesPage = async ({ searchParams }) => {
  const params = await searchParams;
  const searchTerm = params?.searchTerm?.toLowerCase() || "";

  // Filter logic
  const services = localServices.filter(
    (service) =>
      service.title.toLowerCase().includes(searchTerm) ||
      service.category.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="min-h-screen bg-[#FDFDFD] pb-20">
      {/* Header Section with Accent Background */}
      <div className="bg-[#f8f9fa] border-b border-gray-100 py-16 mb-12">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-black text-4xl md:text-5xl text-[#3D3D3D] leading-tight">
              Our Professional <span className="text-[#EF6B35]">Services</span>
            </h2>
            <p className="text-gray-500 mt-4 text-lg">
              Compassionate care tailored to your family's needs. We connect you
              with the best specialists for your loved ones.
            </p>

            {/* Searching Component centered with shadow */}
            <div className="mt-10 max-w-xl mx-auto shadow-xl shadow-orange-100/50 rounded-2xl overflow-hidden">
              <ServicesSearching />
            </div>
          </div>
        </Container>
      </div>

      <Container>
        {/* Results Metadata */}
        <div className="flex items-center justify-between mb-8 px-2">
          <p className="text-gray-600 font-medium">
            Showing{" "}
            <span className="text-black font-bold">{services.length}</span>{" "}
            services
            {searchTerm && (
              <span>
                {" "}
                for "<span className="text-[#EF6B35]">{searchTerm}</span>"
              </span>
            )}
          </p>
          <div className="h-px flex-1 bg-gray-100 ml-6 hidden md:block"></div>
        </div>

        {/* Services Grid */}
        {services.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="bg-gray-50 p-8 rounded-full mb-6">
              {/* You can add a Search-X icon here from Lucide */}
              <svg
                className="w-16 h-16 text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                />
              </svg>
            </div>
            <h3 className="font-bold text-2xl text-gray-800">
              No services found
            </h3>
            <p className="text-gray-500 mt-2 max-w-xs">
              Try adjusting your search term or browse our categories to find
              what you need.
            </p>
            <button
              onClick={() => (window.location.href = "/services")}
              className="mt-6 text-[#EF6B35] font-bold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service) => (
              <ServiceCard service={service} key={service.id} />
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};

export default ServicesPage;
