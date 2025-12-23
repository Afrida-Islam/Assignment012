import Image from "next/image";
import { Clock, Star, CheckCircle2, User, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ServiceCard({ service }) {
  const {
    id,
    title,
    category,
    provider,
    rating,
    reviews,
    price,
    availability,
    highlights,
    desc,
    image,
  } = service || {};

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-gray-100 bg-white transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:-translate-y-2">
      {/* Image Section */}
      <div className="relative h-60 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Floating Category Badge */}
        <div className="absolute left-5 top-5">
          <span className="rounded-full bg-white/80 backdrop-blur-md px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-gray-900 shadow-sm">
            {category}
          </span>
        </div>

        {/* Rating Overlay */}
        <div className="absolute right-5 top-5 flex items-center gap-1 rounded-full bg-black/50 backdrop-blur-md px-3 py-1 text-white">
          <Star size={12} className="fill-yellow-400 text-yellow-400" />
          <span className="text-xs font-bold">{rating}</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col p-6">
        {/* Price & Provider */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-[#EF6B35]">
              <User size={16} />
            </div>
            <span className="text-sm font-semibold text-gray-700">
              {provider}
            </span>
          </div>
          <div className="text-right">
            <p className="text-[10px] font-bold uppercase text-gray-400">
              Rate
            </p>
            <p className="text-xl font-black text-[#EF6B35]">{price}</p>
          </div>
        </div>

        <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 line-clamp-1">
          {title}
        </h3>

        <p className="mb-5 line-clamp-2 text-sm leading-relaxed text-gray-500">
          {desc}
        </p>

        {/* Highlights as Mini Pills */}
        <div className="mb-6 flex flex-wrap gap-2">
          {highlights?.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="flex items-center gap-1 rounded-lg bg-gray-50 px-2.5 py-1 text-[10px] font-bold text-gray-600 border border-gray-100"
            >
              <CheckCircle2 size={12} className="text-green-500" />
              {tag}
            </span>
          ))}
        </div>

        {/* Footer info & CTA */}
        <div className="mt-auto flex items-center justify-between border-t border-gray-50 pt-5">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold uppercase text-gray-400 tracking-wide">
              Availability
            </span>
            <div className="flex items-center gap-1 text-sm font-bold text-gray-800">
              <Clock size={14} className="text-blue-500" />
              {availability}
            </div>
          </div>

          <Link href={`/services/${id}`}>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 text-white transition-all duration-300 group-hover:w-32 group-hover:rounded-xl group-hover:bg-[#EF6B35]">
              <span className="hidden opacity-0 transition-all duration-300 group-hover:block group-hover:opacity-100 font-bold text-sm mr-2">
                Details
              </span>
              <ArrowRight size={20} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
