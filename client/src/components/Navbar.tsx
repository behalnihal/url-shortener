export default function Navbar() {
  return (
    <div className="border-b h-16 flex justify-between items-center container mx-auto">
      <span className="text-lg font-bold">URL Shortener</span>
      <a
        href="https://github.com/behalnihal/url-shortener"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/github.svg" alt="GitHub" className="w-8 h-8" />
      </a>
    </div>
  );
}
