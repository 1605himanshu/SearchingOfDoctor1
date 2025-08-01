'use client';
import { useEffect, useState } from 'react';
import DoctorCard from '../components/DoctorCard';
import { useSearchParams } from 'next/navigation';

export default function SearchComponent() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams();
  const location = searchParams.get('location') || '';
  const profession = searchParams.get('profession') || '';

  useEffect(() => {
    if (!location || !profession) return;

    const fetchDoctors = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://searchingofdoctor1.onrender.com/api/doctors?location=${encodeURIComponent(location)}&profession=${encodeURIComponent(profession)}`
        );
        const data = await response.json();
        setDoctors(data);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, [location, profession]);

  return (
    <div className="  min-h-screen bg-white flex justify-center items-center px-4">
      <div className="w-full max-w-[600px] space-y-6 ">
        {loading && <p className="text-gray-500 text-center">Loading doctors...</p>}
        {!loading && doctors.length === 0 && <p className="text-gray-500 text-center">No doctors found.</p>}
        {!loading &&
          doctors.map((doctor, index) => (
            <DoctorCard key={index} doctor={doctor} />
          ))}
      </div>
    </div>
  );
}
