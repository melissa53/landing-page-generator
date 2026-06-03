// MANUAL FILL — team fills in image, name, result headline, description, and link per case study
const placeholders = [1, 2, 3];

export default function CaseStudies() {
  return (
    <div className="py-12 px-4 bg-gray-50">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-[#1A1A2E] mb-10">
        Client Success Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {placeholders.map((n) => (
          <div key={n} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
            {/* MANUAL FILL: replace with real image */}
            <div className="w-full h-44 bg-[#F0F0F0] border-b-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 text-sm">
              [Image]
            </div>
            <div className="p-5 flex flex-col flex-1">
              <p className="font-bold text-[#1A1A2E] text-base mb-1">[Client Name]</p>
              <p className="text-[#E63946] font-semibold text-sm mb-2">[Result Headline]</p>
              <p className="text-gray-500 text-sm flex-1">[Description]</p>
              <button
                disabled
                className="mt-4 w-full py-2 rounded-lg bg-gray-200 text-gray-400 font-semibold text-sm cursor-not-allowed"
              >
                Read Case Study
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
