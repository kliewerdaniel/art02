export default function ArtistCard({ artist }: { artist: any }) {
  return (
    <div className="border rounded-lg p-4">
      <img src={artist.imageUrl || '/placeholder.jpg'} alt={artist.name} className="w-full h-48 object-cover rounded-md mb-4" />
      <h3 className="text-xl font-bold">{artist.name}</h3>
      <p className="text-gray-600">{artist.bio}</p>
    </div>
  );
}
