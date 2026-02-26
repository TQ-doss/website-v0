// src/components/BentoGrid.tsx
import { BentoItemConfig } from '@/types';

interface BentoGridProps {
  items: BentoItemConfig[];
}

interface BentoItemProps {
  item: BentoItemConfig;
}

function BentoItem({ item }: BentoItemProps) {
  return (
    <div
      className={`glassmorphism scroll-reveal rounded-2xl p-6 transition-shadow hover:shadow-lg ${
        !item.isAvailable ? 'opacity-50' : ''
      }`}
    >
      <h3 className="mb-2 text-lg font-semibold">{item.itemName}</h3>
      <p className="text-sm text-gray-500">{item.itemType}</p>
      {!item.isAvailable && (
        <span className="mt-2 inline-block rounded-full bg-gray-200 px-2 py-0.5 text-xs text-gray-600">
          Coming soon
        </span>
      )}
    </div>
  );
}

export default function BentoGrid({ items }: BentoGridProps) {
  return (
    <div className="grid grid-cols-bento gap-4">
      {items.map((item) => (
        <BentoItem key={item.itemName} item={item} />
      ))}
    </div>
  );
}
