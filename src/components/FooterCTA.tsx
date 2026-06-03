interface Props {
  websiteUrl: string;
  accentColor: string;
}

export default function FooterCTA({ websiteUrl, accentColor }: Props) {
  return (
    <div className="py-16 px-4 text-center bg-white border-t border-gray-100">
      <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A2E] mb-3">
        Want To Learn More About Us Before Your Call?
      </h2>
      <p className="text-gray-500 mb-8 text-base">
        Click the button below to visit our website.
      </p>
      <a
        href={websiteUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-10 py-4 rounded-full text-white font-semibold text-base shadow-md hover:opacity-90 transition-opacity"
        style={{ backgroundColor: accentColor }}
      >
        See Our Website
      </a>
    </div>
  );
}
