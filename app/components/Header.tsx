import Image from "next/image";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-4">
      <div className="flex items-center">
        <Image
          src="/napkin-logo.svg"
          alt="Napkin logo"
          width={120}
          height={40}
        />
      </div>
      <nav className="hidden md:flex items-center gap-6">
        <a href="/" className="text-gray-700 hover:text-gray-900 transition-colors">Home</a>
        <a href="/pricing" className="text-gray-700 hover:text-gray-900 transition-colors">Pricing</a>
        <a href="/about-us" className="text-gray-700 hover:text-gray-900 transition-colors">About us</a>
        <a href="/sign-in" className="text-gray-700 hover:text-gray-900 transition-colors">Sign in</a>
        <a 
          href="/get-started" 
          className="bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-700 transition-colors"
        >
          Get Napkin Free
          <span className="text-xl">→</span>
        </a>
      </nav>
      {/* 添加移动端菜单按钮 */}
      <button className="md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
    </header>
  );
} 