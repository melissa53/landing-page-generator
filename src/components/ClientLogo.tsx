interface Props {
  logoUrl: string;
  clientName: string;
}

export default function ClientLogo({ logoUrl, clientName }: Props) {
  return (
    <div className="flex justify-center items-center pt-10 pb-6">
      <img
        src={logoUrl}
        alt={`${clientName} logo`}
        className="h-14 max-w-xs object-contain"
        onError={(e) => {
          const target = e.currentTarget;
          target.style.display = 'none';
          const fallback = target.nextElementSibling as HTMLElement;
          if (fallback) fallback.style.display = 'flex';
        }}
      />
      <div
        className="hidden h-14 px-6 items-center justify-center rounded bg-gray-100 text-gray-600 font-semibold text-lg"
      >
        {clientName}
      </div>
    </div>
  );
}
