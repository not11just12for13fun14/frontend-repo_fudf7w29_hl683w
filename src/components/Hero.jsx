import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/WCoEDSwacOpKBjaC/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white/90" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm ring-1 ring-black/5 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Available for new projects
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900">
            Modern websites and digital products for companies
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-xl">
            We help brands like yours design, build, and launch delightful experiences that perform on every device.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-blue-600 text-white px-6 py-3 font-medium shadow hover:bg-blue-700 transition-colors">
              Get a quote
            </a>
            <a href="#work" className="inline-flex items-center justify-center rounded-full bg-white text-gray-900 px-6 py-3 font-medium shadow ring-1 ring-gray-200 hover:bg-gray-50 transition-colors">
              See our work
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
