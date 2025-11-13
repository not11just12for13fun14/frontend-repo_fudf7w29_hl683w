export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Built for speed and substance</h2>
            <p className="mt-4 text-gray-600">We combine strategy, design, and engineering to deliver modern, responsive websites that load fast, look sharp, and convert. Whether youre a startup or an established brand, our team adapts to your needs.</p>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-blue-600" /> Pixel-perfect, responsive layouts</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-blue-600" /> SEO-friendly and analytics-ready</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-blue-600" /> Accessible, fast, and secure</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 p-6 bg-gray-50">
            <dl className="grid grid-cols-2 gap-6">
              <div>
                <dt className="text-sm text-gray-600">Years of experience</dt>
                <dd className="text-3xl font-semibold text-gray-900">8+</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-600">Projects shipped</dt>
                <dd className="text-3xl font-semibold text-gray-900">120+</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-600">Avg. site speed</dt>
                <dd className="text-3xl font-semibold text-gray-900">95/100</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-600">Client satisfaction</dt>
                <dd className="text-3xl font-semibold text-gray-900">4.9/5</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
