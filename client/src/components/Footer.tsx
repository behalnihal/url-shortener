export default function Footer() {
  return (
    <div>
      <footer className="border-t h-16 flex justify-center items-center container mx-auto">
        <span className="text-sm text-gray-600">
          &copy; {new Date().getFullYear()} URL Shortener. All rights reserved.
        </span>
      </footer>
    </div>
  );
}
