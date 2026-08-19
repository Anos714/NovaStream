import {
  ArrowRight,
  Check,
  Download,
  FileImage,
  Gauge,
  Lock,
  Maximize2,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { Link } from "react-router";

const features = [
  {
    icon: Zap,
    number: "01",
    title: "Lightning fast conversion",
    description:
      "Convert your images in seconds using a high-performance Go backend and native image processing.",
    details: [
      "Fast server-side processing",
      "Optimized binary handling",
      "Minimal processing overhead",
    ],
  },
  {
    icon: FileImage,
    number: "02",
    title: "Modern image formats",
    description:
      "Work with the formats developers and modern websites actually use.",
    details: ["JPEG", "PNG", "WebP", "AVIF"],
  },
  {
    icon: RefreshCw,
    number: "03",
    title: "Simple format conversion",
    description:
      "Choose your source image, select the target format and let Nova Stream handle the rest.",
    details: [
      "Automatic source detection",
      "Multiple output formats",
      "One-click conversion",
    ],
  },
  {
    icon: Gauge,
    number: "04",
    title: "Built for performance",
    description:
      "The processing pipeline is designed around efficient server-side image operations.",
    details: [
      "Go + Fiber backend",
      "libvips powered processing",
      "Efficient memory usage",
    ],
  },
  {
    icon: ShieldCheck,
    number: "05",
    title: "No unnecessary accounts",
    description:
      "You don't need to create an account just to convert an image.",
    details: ["No signup required", "No dashboard", "No complicated workflow"],
  },
  {
    icon: Download,
    number: "06",
    title: "Instant downloads",
    description:
      "Once your conversion finishes, your file is ready to download immediately.",
    details: [
      "Direct browser download",
      "Preserves original filename",
      "No extra steps",
    ],
  },
  {
    icon: Lock,
    number: "07",
    title: "Privacy focused",
    description:
      "Nova Stream is designed around processing your files without turning the product into a data collection platform.",
    details: [
      "No unnecessary user data",
      "No account required",
      "Simple upload workflow",
    ],
  },
  {
    icon: Maximize2,
    number: "08",
    title: "More tools are coming",
    description:
      "Nova Stream is being built as a broader file utility platform, not just another image converter.",
    details: [
      "Image compression",
      "PDF compression",
      "Archive tools",
      "More file utilities",
    ],
  },
];

export default function Features() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fafafa]">
      {/* Hero */}

      <section className="relative px-6 pb-20 pt-20 lg:px-12 lg:pb-28 lg:pt-28">
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-150 w-150 -translate-x-1/2 rounded-full bg-violet-200/30 blur-3xl" />

        <div className="mx-auto max-w-6xl">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium shadow-sm">
              <Sparkles size={15} className="text-violet-600" />
              Built for simplicity
            </div>

            <h1 className="text-5xl font-black tracking-tighter text-zinc-950 sm:text-6xl lg:text-8xl">
              Powerful tools.
              <br />
              <span className="text-violet-600">Zero complexity.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-500 sm:text-xl">
              Nova Stream gives you fast, straightforward tools for working with
              images and files without making simple tasks feel complicated.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-zinc-800"
              >
                Start converting
                <ArrowRight size={17} />
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-6 py-3.5 text-sm font-semibold transition hover:bg-zinc-100"
              >
                About Nova Stream
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature grid */}

      <section className="border-t border-zinc-200 px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-violet-600">
              What you get
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Everything important.
              <br />
              Nothing unnecessary.
            </h2>

            <p className="mt-5 leading-7 text-zinc-500">
              Every part of Nova Stream is designed around making common file
              operations faster and easier.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.number}
                  className="group relative overflow-hidden rounded-4xl border border-zinc-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-zinc-200/50 sm:p-9"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 text-violet-600 transition group-hover:scale-110">
                      <Icon size={22} />
                    </div>

                    <span className="text-sm font-bold text-zinc-300">
                      {feature.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-2xl font-bold tracking-tight">
                    {feature.title}
                  </h3>

                  <p className="mt-3 max-w-lg leading-7 text-zinc-500">
                    {feature.description}
                  </p>

                  <div className="mt-7 space-y-3">
                    {feature.details.map((detail) => (
                      <div
                        key={detail}
                        className="flex items-center gap-3 text-sm font-medium text-zinc-700"
                      >
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-zinc-100">
                          <Check size={12} />
                        </span>

                        {detail}
                      </div>
                    ))}
                  </div>

                  <div className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-violet-100/50 blur-3xl transition group-hover:bg-violet-200/70" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Format section */}

      <section className="px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-black p-8 text-white sm:p-12 lg:p-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-violet-400">
                Supported formats
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                Modern formats,
                <br />
                ready to go.
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-zinc-400">
                Convert between popular raster image formats without dealing
                with complicated desktop software.
              </p>

              <Link
                to="/"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-zinc-200"
              >
                Try the converter
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
              {["JPEG", "PNG", "WebP", "AVIF"].map((format) => (
                <div
                  key={format}
                  className="flex aspect-square items-center justify-center rounded-3xl border border-white/10 bg-white/5 text-xl font-black transition hover:bg-white/10"
                >
                  {format}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
