import { Clock, ShieldCheck, Award, Activity } from "lucide-react";

export default function Features() {
  const features = [
    { title: "24/7 Support", icon: <Clock /> },
    { title: "Verified Staff", icon: <ShieldCheck /> },
    { title: "Professional", icon: <Award /> },
    { title: "Health Track", icon: <Activity /> }
  ];
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-[#3D3D3D] mb-16">Why Choose CareZone</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="p-10 bg-[#FFF5F1] rounded-3xl border border-orange-50">
              <div className="text-[#EF6B35] flex justify-center mb-4">{f.icon}</div>
              <h3 className="text-xl font-bold">{f.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}