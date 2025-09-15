import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold">Art01</h1>
        <p className="text-lg text-gray-600">Art + Philanthropy Platform</p>
      </header>
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Connecting Artists and Volunteers</h2>
          <p className="text-xl text-gray-700 mb-8">
            Empowering homeless artists through mentorship, art distribution, and community support.
          </p>
          <Link href="/gallery" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            View Artist Gallery
          </Link>
        </div>
      </main>
      <footer className="container mx-auto px-4 py-6 text-center text-gray-500">
        <p>&copy; 2025 Art01. All rights reserved.</p>
      </footer>
    </div>
  );
}
