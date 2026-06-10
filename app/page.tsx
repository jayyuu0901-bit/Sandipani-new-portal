import Link from 'next/link';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-blue-600 mb-4">Sandipani School</h1>
        <p className="text-xl text-gray-600">Smart Education, Simplified.</p>
      </div>

      {/* Main Action Buttons */}
      <div className="flex flex-col gap-4 w-full max-w-sm">
        <Link href="/login" className="bg-blue-600 text-white text-center py-4 rounded-xl font-semibold hover:bg-blue-700 transition shadow-lg">
          Student/Teacher Login
        </Link>
        <button className="bg-white text-blue-600 border border-blue-600 py-4 rounded-xl font-semibold hover:bg-blue-50 transition">
          Admission Inquiry
        </button>
      </div>

      {/* Footer Info */}
      <div className="mt-16 text-gray-400 text-sm">
        © 2026 Sandipani School Portal
      </div>
    </main>
  );
}
