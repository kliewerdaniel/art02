import ArtistList from '@/components/ArtistList';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Artist Gallery</h1>
        <ArtistList />
      </main>
      <Footer />
    </div>
  );
}
