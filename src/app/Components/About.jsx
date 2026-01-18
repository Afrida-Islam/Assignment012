import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section className="py-20 bg-[#FFF5F1]">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
        <img src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800" className="lg:w-1/2 rounded-[3rem]" alt="About" />
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-4xl font-extrabold text-[#3D3D3D]">More Than Just A Service, We Are Family</h2>
          <p className="text-gray-600">We enhance the quality of life for those we serve through personalized care.</p>
          <ul className="space-y-4">
            {['Personalized Care', 'Emergency Response'].map((item, i) => (
              <li key={i} className="flex items-center gap-3 font-bold"><CheckCircle2 className="text-[#EF6B35]" /> {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}