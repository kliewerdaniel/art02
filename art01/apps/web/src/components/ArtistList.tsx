import ArtistCard from './ArtistCard';

const mockArtists = [
  { id: 1, name: 'John Doe', bio: 'Street artist specializing in murals.', imageUrl: '' },
  { id: 2, name: 'Jane Smith', bio: 'Creates sculptures from recycled materials.', imageUrl: '' },
];

export default function ArtistList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {mockArtists.map((artist) => (
        <ArtistCard key={artist.id} artist={artist} />
      ))}
    </div>
  );
}
