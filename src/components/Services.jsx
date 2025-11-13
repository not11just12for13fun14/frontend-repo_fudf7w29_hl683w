import { Code2, PenTool, Smartphone, LineChart } from 'lucide-react'

const services = [
  {
    icon: PenTool,
    title: 'Brand & Design',
    desc: 'Visual identity, brand systems, and design language that scales.'
  },
  {
    icon: Code2,
    title: 'Web Development',
    desc: 'High-performance websites using modern stacks, optimized for SEO.'
  },
  {
    icon: Smartphone,
    title: 'Responsive UX',
    desc: 'Mobile-first interfaces that feel at home on every screen.'
  },
  {
    icon: LineChart,
    title: 'Growth & Analytics',
    desc: 'Measure what matters and iterate with confidence.'
  }
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">What we do</h2>
          <p className="mt-3 text-gray-600">A partner across design and development to move faster and look better.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-gray-200 p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="h-11 w-11 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center"><Icon className="h-5 w-5" /></div>
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
