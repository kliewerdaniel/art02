import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnalyticsCharts from '@/components/AnalyticsCharts';

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Volunteer Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 border rounded-lg">
            <h2 className="text-2xl font-bold mb-4">My Artists</h2>
            {/* Placeholder for artist list */}
          </div>
          <div className="p-6 border rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Recent Interactions</h2>
            {/* Placeholder for interactions */}
          </div>
        </div>
        <div className="mt-8 p-6 border rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Analytics</h2>
          <AnalyticsCharts />
        </div>
      </main>
      <Footer />
    </div>
  );
}
