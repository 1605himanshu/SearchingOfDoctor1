'use client';
import Image from 'next/image';

export default function DoctorCard({ doctor }) {
  return (
    <div className="w-100 bg-blue-50 border border-blue-200 rounded-xl p-5 shadow-md flex gap-5 items-start relative transition hover:shadow-lg">
      <div className="w-16 h-16 relative flex-shrink-0">
        <Image
          src={doctor.image}
          alt={doctor.name}
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
        {doctor.isAd && (
          <span className="absolute -top-2 left-0 bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded-full">
            AD
          </span>
        )}
      </div>

      <div className="flex-1 text-blue-900">
        <h3 className="text-base font-semibold">{doctor.name}</h3>
        <p className="text-sm">{doctor.experience}</p>
        <p className="text-sm text-blue-800">{doctor.location}</p>
        <p className="text-sm font-medium mt-1">{doctor.fee}</p>

        <div className="flex items-center mt-2 gap-2">
          <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded">
            👍 {doctor.rating}
          </span>
          <span className="text-sm text-blue-600 underline">
            {doctor.stories}
          </span>
        </div>

        {doctor.available && (
          <p className="text-green-600 text-sm mt-2 font-medium">
            ✅ Available Today
          </p>
        )}

        <div className="mt-3 flex flex-wrap gap-2">
          <button className="bg-blue-600 text-white px-3 py-1.5 rounded hover:bg-blue-700 transition text-sm">
            Book Clinic Visit
          </button>
          <button className="border border-blue-300 px-3 py-1.5 rounded text-blue-800 hover:bg-blue-100 transition text-sm">
            Contact Clinic
          </button>
        </div>
      </div>
    </div>
  );
}
