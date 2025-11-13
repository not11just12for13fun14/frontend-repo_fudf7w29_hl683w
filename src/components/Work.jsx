const works = [
  {
    title: 'SaaS Dashboard',
    tag: 'Web App',
    img: 'https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'E-commerce Experience',
    tag: 'Storefront',
    img: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'Brand System',
    tag: 'Identity',
    img: 'https://images.unsplash.com/photo-1508051123996-69f8caf4891e?q=80&w=1600&auto=format&fit=crop'
  }
]

export default function Work() {
  return (
    <section id="work" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Selected work</h2>
            <p className="mt-3 text-gray-600">A few highlights from recent collaborations.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center rounded-full bg-gray-900 text-white px-4 py-2 text-sm font-medium shadow hover:bg-black">Start a project</a>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {works.map((w) => (
            <article key={w.title} className="group relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200">
              <img src={w.img} alt={w.title} className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="p-5">
                <span className="inline-flex items-center rounded-full bg-gray-100 text-gray-700 px-3 py-1 text-xs font-medium">{w.tag}</span>
                <h3 className="mt-3 font-semibold text-gray-900">{w.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
