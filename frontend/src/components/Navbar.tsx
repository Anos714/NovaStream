import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-5 lg:px-12">
      <Link to="/" className="text-xl font-bold tracking-tight">
        nova<span className="text-violet-600">.</span>
      </Link>

      <div className="hidden items-center gap-8 text-sm text-zinc-600 md:flex">
        <Link to="/" className="transition hover:text-black">
          Converter
        </Link>

        <Link to="/features" className="transition hover:text-black">
          Features
        </Link>

        <Link to="/about" className="transition hover:text-black">
          About
        </Link>
      </div>

      <a
        href="https://github.com/Anos714/NovaStream"
        target="_blank"
        rel="noreferrer"
        className="rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium transition hover:bg-zinc-100"
      >
        GitHub ↗
      </a>
    </nav>
  );
}
