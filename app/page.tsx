import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-4">
        <div className="flex items-center">
          <Image
            src="/napkin-logo.svg"
            alt="Napkin logo"
            width={120}
            height={40}
          />
        </div>
        <nav className="flex items-center gap-6">
          <a href="/" className="text-gray-700">Home</a>
          <a href="/pricing" className="text-gray-700">Pricing</a>
          <a href="/about-us" className="text-gray-700">About us</a>
          <a href="/sign-in" className="text-gray-700">Sign in</a>
          <a 
            href="/get-started" 
            className="bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center gap-2"
          >
            Get Napkin Free
            <span className="text-xl">→</span>
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-8 py-20">
        <div className="grid grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-blue-100 px-3 py-1.5 rounded-lg">
              <Image
                src="/lightning-icon.svg"
                alt="Lightning icon"
                width={24}
                height={24}
              />
              <div className="text-3xl font-semibold">
                Get visuals
                <br />
                from your text
              </div>
            </div>
            <p className="text-gray-600 text-lg">
              Napkin turns your text into visuals so sharing your ideas is quick and effective.
            </p>
          </div>

          {/* Right Column - Workflow Diagram */}
          <div className="flex gap-8">
            {/* Phone Preview */}
            <div className="border rounded-3xl p-4 bg-white shadow-lg">
              <Image
                src="/phone-preview.png"
                alt="App preview"
                width={300}
                height={600}
              />
            </div>
            
            {/* Workflow Circle */}
            <div className="relative">
              <Image
                src="/workflow-diagram.svg"
                alt="Workflow diagram"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
