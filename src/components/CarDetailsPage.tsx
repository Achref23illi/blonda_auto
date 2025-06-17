import { useState } from 'react';
import { cars } from '../data/cars';
import CarDetails from './CarDetails';
import Header from './Header';
import Footer from './Footer';

const CarDetailsPage = () => {
  const [selectedCarId, setSelectedCarId] = useState('1');

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Car Selector for Demo */}
      <div className="bg-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600 tracking-wide">Sélectionner un véhicule:</span>
            <select
              value={selectedCarId}
              onChange={(e) => setSelectedCarId(e.target.value)}
              className="text-sm border border-gray-300 rounded px-3 py-1 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            >
              {cars.map((car) => (
                <option key={car.id} value={car.id}>
                  {car.brand} {car.model} {car.year}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <CarDetails carId={selectedCarId} />
      <Footer />
    </div>
  );
};

export default CarDetailsPage;