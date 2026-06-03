import clientData from './client-data.json';
import ClientLogo from './components/ClientLogo';
import HeroHeader from './components/HeroHeader';
import VideoEmbed from './components/VideoEmbed';
import MediaLogosStrip from './components/MediaLogosStrip';
import CaseStudies from './components/CaseStudies';
import FooterCTA from './components/FooterCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: clientData.fontFamily || 'Inter' }}>
      <div className="max-w-[700px] mx-auto">
        <ClientLogo logoUrl={clientData.logoUrl} clientName={clientData.clientName} />
        <HeroHeader />
        <VideoEmbed />
        <MediaLogosStrip />
        <CaseStudies />
        <FooterCTA websiteUrl={clientData.websiteUrl} accentColor={clientData.accentColor} />
      </div>
    </div>
  );
}
