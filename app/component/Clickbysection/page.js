"use client"
import { useState } from 'react';

const items = [
  {
    id: 1,
    title: 'Car ownership details',
    icon: '🚗',
    details: ['Owner details', 'Registration status', 'Insurance validity'],
  },
  {
    id: 2,
    title: 'Engine and transmission',
    icon: '⚙️',
    details: ['Engine status', 'Transmission type', 'Oil levels'],
  },
  {
    id: 3,
    title: 'Exterior and tyres',
    icon: '🌐',
    details: [
      'Tyre life',
      'Car body scratches',
      'Light status',
      'Bonnet/ head status',
      'Chassis condition',
      'Structural damage',
    ],
  },
  {
    id: 4,
    title: 'Electrical and interiors',
    icon: '🔌',
    details: ['Interior lights', 'Dashboard electronics', 'Window controls'],
  },
  {
    id: 5,
    title: 'Air conditioner',
    icon: '❄️',
    details: ['AC cooling', 'Ventilation', 'Compressor status'],
  },
  {
    id: 6,
    title: 'Steering, suspension, and brakes',
    icon: '🛠️',
    details: ['Steering play', 'Brake pad condition', 'Suspension state'],
  },
  {
    id: 7,
    title: 'OEM specs and features',
    icon: '📄',
    details: ['Car manual', 'OEM features', 'Manufacturing date'],
  },
];

export default function Page() {
  const [selectedItem, setSelectedItem] = useState(items[0]);

  return (
    <div className="flex  p-6 border-2 border-gray-100 rounded-xl">
      {/* Sidebar */}
      <div className="w-1/3 bg-white rounded-lg shadow-md p-4">
        <ul>
          {items.map((item , index) => (
            <li
              key={index}
              className={`flex items-center p-4 cursor-pointer rounded-lg mb-2 ${
                selectedItem.id === item.id
                  ? 'bg-orange-100 text-orange-600'
                  : 'hover:bg-gray-100'
              }`}
              onClick={() => setSelectedItem(item)}
            >
              <span className="text-2xl mr-4">{item.icon}</span>
              <span>{item.title}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Details Section */}
      <div className="w-2/3 bg-white rounded-lg shadow-md p-6 ml-6">
        <h2 className="text-xl font-semibold mb-4">{selectedItem.title}</h2>
        <ul className="list-disc pl-6">
          {selectedItem.details.map((detail, index) => (
            <li key={index} className="text-gray-700 mb-2">
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
