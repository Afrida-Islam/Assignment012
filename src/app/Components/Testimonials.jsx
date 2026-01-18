import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-[#3D3D3D] mb-12">Client Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white p-10 rounded-[2rem] shadow-sm italic">
              <div className="flex justify-center gap-1 text-[#EF6B35] mb-4"><Star size={16} fill="currentColor" /></div>
              <p className="text-gray-600">"Finding a caregiver used to be stressful. CareZone simplified everything!"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}