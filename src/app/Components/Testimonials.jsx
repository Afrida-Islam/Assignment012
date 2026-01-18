import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Jenkins",
      role: "Daughter of Client",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "Finding a caregiver used to be stressful. CareZone simplified everything for our family. The nurse we found is truly professional and caring.",
    },
    {
      id: 2,
      name: "Robert Fox",
      role: "Business Owner",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "The level of care provided by CareZone is exceptional. Their platform is easy to use, and the background-checked staff gives us peace of mind.",
    },
    {
      id: 3,
      name: "Afrida Khan",
      role: "Home Maker",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      text: "I highly recommend CareZone! Their 24/7 support team is always there to help, and the quality of their service is top-notch.",
    }
  ];

  return (
    <section className="py-24 bg-[#FFF5F1]/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#3D3D3D] mb-6">
            What Our <span className="text-[#EF6B35]">Clients</span> Say
          </h2>
          <p className="text-gray-500 text-lg">
            Hear from the families who have found peace of mind and quality care through our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div 
              key={item.id} 
              className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-orange-100/20 border border-orange-50 relative group hover:-translate-y-2 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute top-8 right-10 text-orange-100 group-hover:text-[#EF6B35]/20 transition-colors">
                <Quote size={48} fill="currentColor" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 text-[#EF6B35] mb-6">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={18} fill="currentColor" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-600 leading-relaxed mb-8 italic relative z-10">
                "{item.text}"
              </p>

              {/* User Info */}
              <div className="flex items-center gap-4 border-t border-orange-50 pt-6">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-14 h-14 rounded-2xl object-cover border-2 border-[#EF6B35]/20"
                />
                <div>
                  <h4 className="font-bold text-[#3D3D3D] text-lg">{item.name}</h4>
                  <p className="text-[#EF6B35] text-sm font-semibold uppercase tracking-wider">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
