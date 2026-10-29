import previewImage from '../assets/ROM_ABV_KLEUR_DEF.jpg'

export const scenes = [
  {
    id: 'viewer-preview',
    title: 'Rome from above',
    period: 'Historical scene preview',
    image: previewImage,
    imageAlt: 'Aerial view of Rome, showing rooftops, streets, and a domed building',
    imageStatus: 'Scene preview',
    pois: [
      { id: 'example-1', label: 'Example point of interest 1', x: 28, y: 34 },
      { id: 'camp-defense', label: 'Verdediging van het legerkamp', x: 68, y: 48 },
      { id: 'example-3', label: 'Example point of interest 3', x: 47, y: 72 },
    ],
  },
]