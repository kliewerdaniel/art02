import Link from 'next/link';

export default function Navigation() {
  return (
    <header className="container mx-auto px-4 py-6 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold">
        Art01
      </Link>
      <nav>
        <Link href="/gallery" className="mr-4">
          Gallery
        </Link>
        <Link href="/dashboard">
          Dashboard
        </Link>
      </nav>
    </header>
  );
}
