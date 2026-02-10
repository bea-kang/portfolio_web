export default function Footer() {
  return (
    <footer className="border-t border-stroke bg-almost-black">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-sub text-caption">
            &copy; {new Date().getFullYear()} Bea. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/in/ye-been-kang-b7a145236/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-sub hover:text-lime transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/bea-kang"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-sub hover:text-lime transition-colors"
            >
              GitHub
            </a>
            <a
              href="mailto:garding3@gmail.com"
              className="text-text-sub hover:text-lime transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
