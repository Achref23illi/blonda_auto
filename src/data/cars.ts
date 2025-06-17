import { assets } from '../config/assets';

export interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuel: string;
  transmission: string;
  images: string[];
  features: string[];
  description: string;
  status: 'available' | 'sold' | 'reserved';
}

export const cars: Car[] = [
  {
    id: '1',
    brand: 'Volkswagen',
    model: 'Jetta',
    year: 2013,
    price: 8900,
    mileage: 125000,
    fuel: 'Essence',
    transmission: 'Automatique',
    images: [assets.cars.jetta2013, assets.cars.jetta2013, assets.cars.jetta2013],
    features: ['Climatisation', 'Régulateur de vitesse', 'Sièges chauffants', 'Bluetooth'],
    description: 'Volkswagen Jetta 2013 en excellent état. Entretien régulier chez le concessionnaire.',
    status: 'available'
  },
  {
    id: '2',
    brand: 'Subaru',
    model: 'Legacy',
    year: 2013,
    price: 11500,
    mileage: 110000,
    fuel: 'Essence',
    transmission: 'Automatique',
    images: [assets.cars.legacy2013, assets.cars.legacy2013, assets.cars.legacy2013],
    features: ['Traction intégrale', 'Toit ouvrant', 'Sièges en cuir', 'Navigation GPS'],
    description: 'Subaru Legacy 2013 avec traction intégrale. Parfait pour l\'hiver québécois.',
    status: 'available'
  },
  {
    id: '3',
    brand: 'Dodge',
    model: 'Journey',
    year: 2010,
    price: 7900,
    mileage: 145000,
    fuel: 'Essence',
    transmission: 'Automatique',
    images: [assets.cars.journey2010, assets.cars.journey2010, assets.cars.journey2010],
    features: ['7 places', 'DVD arrière', 'Caméra de recul', 'Climatisation tri-zone'],
    description: 'Dodge Journey 2010, VUS familial spacieux avec 7 places. Idéal pour les grandes familles.',
    status: 'available'
  },
  {
    id: '4',
    brand: 'Chevrolet',
    model: 'Cruze',
    year: 2011,
    price: 6500,
    mileage: 135000,
    fuel: 'Essence',
    transmission: 'Automatique',
    images: [assets.cars.cruze2011, assets.cars.cruze2011, assets.cars.cruze2011],
    features: ['Économique', 'Bluetooth', 'OnStar', 'Contrôle de stabilité'],
    description: 'Chevrolet Cruze 2011, voiture compacte économique et fiable. Parfait pour la ville.',
    status: 'available'
  },
  {
    id: '5',
    brand: 'Subaru',
    model: 'Outback',
    year: 2013,
    price: 13900,
    mileage: 98000,
    fuel: 'Essence',
    transmission: 'Automatique',
    images: [assets.cars.outback2013, assets.cars.outback2013, assets.cars.outback2013],
    features: ['Traction intégrale', 'Toit panoramique', 'Sièges chauffants', 'Système EyeSight'],
    description: 'Subaru Outback 2013 avec faible kilométrage. Véhicule versatile parfait pour l\'aventure.',
    status: 'available'
  }
];