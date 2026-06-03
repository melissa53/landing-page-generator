import logos from '../logos.json';

export default function MediaLogosStrip() {
  return (
    <div className="bg-white py-10 px-4">
      <p className="text-center text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">
        We've Gotten Our Clients Featured On
      </p>
      {logos.length === 0 ? (
        <p className="text-center text-sm text-gray-400 italic">
          [Media logos will appear here after scraping]
        </p>
      ) : (
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {logos.map((outlet) => (
            <img
              key={outlet.name}
              src={outlet.logoUrl}
              alt={outlet.name}
              title={outlet.name}
              className="h-10 object-contain grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-200"
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = 'none';
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'inline';
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
