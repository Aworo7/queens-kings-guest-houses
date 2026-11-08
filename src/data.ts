export const BRANCHES = [
  { id: 'plattekloof', name: 'Plattekloof 1', address: '1 General J H Olivier Lane, Welgelegen 2, Cape Town' },
  { id: 'westbeach', name: 'West Beach 1', address: 'No. 6 Balmoral Road, West Beach, Cape Town' },
  { id: 'milnerton2', name: 'Milnerton 2', address: '7 Oleander Street, Milnerton, Cape Town' },
  { id: 'milnerton1', name: 'Milnerton 1', address: '11 Fairbridge Road, Tijgerhof, Cape Town' },
  { id: 'brooklyn', name: 'Brooklyn', address: '12 Landdrost Street, Brooklyn, Cape Town' },
  { id: 'bokaap1', name: 'Bo-Kaap 1', address: '6 Morris Street, Bo-Kaap, Cape Town' },
  { id: 'bokaap2', name: 'Bo-Kaap 2', address: '6A August Street, Schotsche Kloof, Cape Town' },
  { id: 'goodwood', name: 'Goodwood', address: '156 Alice Street, Goodwood, Cape Town' },
  { id: 'bellville', name: 'Bellville', address: '8 Muller Street, Vredelust, Bellville' },
];

export const getMapsUrl = (address: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address + ', Cape Town')}`;

export const ROOM_TYPES = [
  { id: 'comfort-double', name: 'Comfort Double Room' },
  { id: 'executive-double', name: 'Executive Double Room' },
  { id: 'private-ensuite', name: 'Private En-suite Room' },
  { id: 'family-room', name: 'Family Room' },
  { id: 'multi-sleeper', name: 'Multi-Sleeper Room' },
  { id: 'dorm', name: 'Dormitory / Group Accommodation' },
  { id: 'self-catering', name: 'Self-Catering Room' },
];

export const WHATSAPP_NUMBER = '27688680158';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
