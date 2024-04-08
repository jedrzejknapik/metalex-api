export const COLORS_SEED = [
  { name: 'Kremowy biały', value: '#F1EBDC' },
  { name: 'Beżowy', value: '#E1D8B7' },
  { name: 'Jasnożółty', value: '#FFEB00' },
  { name: 'Żółty', value: '#FFD300' },
  { name: 'Bursztynowy', value: '#E1A000' },
  { name: 'Pomarańczowy', value: '#ED7600' },
  { name: 'Czerwony', value: '#C60C30' },
  { name: 'Śliwkowy czerwony', value: '#950740' },
  { name: 'Wiśniowy czerwony', value: '#781F34' },
  { name: 'Różowy', value: '#E4007C' },
  { name: 'Purpurowy czerwony', value: '#9B3259' },
  { name: 'Fioletowy czerwony', value: '#701F29' },
  { name: 'Bordo', value: '#6C1B2A' },
  { name: 'Granatowy', value: '#003087' },
  { name: 'Niebieski', value: '#0087BD' },
  { name: 'Jasnozielony', value: '#77A701' },
  { name: 'Zielony', value: '#008F39' },
  { name: 'Żółtozielony', value: '#BCCC02' },
  { name: 'Oliwkowy', value: '#6C541E' },
  { name: 'Brązowy', value: '#59260B' },
  { name: 'Szary beżowy', value: '#BEBD7F' },
  { name: 'Błyszczący srebrny', value: '#A5A5A5' },
  { name: 'Srebrny', value: '#8D9092' },
  { name: 'Jasnoszary', value: '#B7B7B7' },
  { name: 'Szary', value: '#8E8F8F' },
  { name: 'Antracytowy', value: '#4E545B' },
  { name: 'Biały', value: '#FFFFFF' },
  { name: 'Czarny', value: '#000000' },
];

export const CATEGORIES_SEED = [
  {
    name: 'Blachy',
  },
  {
    name: 'Blachy trapezowe',
  },
  {
    name: 'Blachy fińskie',
  },
  {
    name: 'Blachy podbitkowe',
  },
];

export const CUSTOMERS_SEED = [
  {
    firstName: 'Jan',
    lastName: 'Kowalski',
    address: 'ul. Przykładowa 1, 00-001 Warszawa',
    email: 'jan.kowalski@example.com',
    phoneNumber: '123456789',
    isCompany: false,
    nip: '',
    companyName: '',
  },
  {
    firstName: 'Anna',
    lastName: 'Nowak',
    address: 'ul. Testowa 2, 50-002 Kraków',
    email: 'anna.nowak@example.com',
    phoneNumber: '987654321',
    isCompany: false,
    nip: '',
    companyName: '',
  },
  {
    firstName: 'Firma XYZ',
    lastName: '',
    address: 'ul. Fikcyjna 3, 30-003 Gdańsk',
    email: 'biuro@firma.xyz',
    phoneNumber: '555666777',
    isCompany: true,
    nip: '1234567890',
    companyName: 'Firma XYZ Sp. z o.o.',
  },
];

export const MATERIALS_SEED = [
  { name: 'Stal nierdzewna' },
  { name: 'Stal' },
  { name: 'Aluminium' },
  { name: 'Alucynk' },
  { name: 'Ocynk' },
];

export const PROFILES_SEED = [{ name: 'T8' }, { name: 'T14' }];

export const ROLES_SEED = [{ name: 'ADMIN' }, { name: 'USER' }];

export const ROLLS_SEED = [{ name: 'Krążek testowy' }];

export const THICKNESSES_SEED = [
  { value: 0.4, name: '0,4 mm' },
  { value: 0.5, name: '0,5 mm' },
  { value: 0.7, name: '0,7 mm' },
];

export const ORDERS_SEED = [
  {
    orderNr: 'ORD123',
    date: new Date('2024-04-01'),
    status: 'Pending',
  },
  {
    orderNr: 'ORD124',
    date: new Date('2024-04-02'),
    status: 'Completed',
  },
  {
    orderNr: 'ORD125',
    date: new Date('2024-04-03'),
    status: 'Pending',
  },
];
