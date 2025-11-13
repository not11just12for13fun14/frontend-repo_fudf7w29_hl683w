import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value,
        }),
      })
      if (res.ok) {
        setStatus('Thanks! We will get back to you shortly.')
        e.target.reset()
      } else {
        setStatus('There was a problem. Please try again.')
      }
    } catch (err) {
      setStatus('Network error. Please try again later.')
    }
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Lets build something great</h2>
            <p className="mt-3 text-gray-600">Tell us about your goals and well reach out to plan the next steps.</p>
            <div className="mt-8 rounded-2xl border border-gray-200 p-6 bg-white">
              <p className="text-sm text-gray-600">Prefer email? hello@deyucreative.com</p>
              <p className="text-sm text-gray-600">Or call us: +1 (555) 123-4567</p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="rounded-2xl border border-gray-200 p-6 bg-white shadow-sm">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input name="name" required className="mt-1 w-full rounded-lg border-gray-300 focus:border-blue-600 focus:ring-blue-600" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" name="email" required className="mt-1 w-full rounded-lg border-gray-300 focus:border-blue-600 focus:ring-blue-600" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea name="message" rows="4" required className="mt-1 w-full rounded-lg border-gray-300 focus:border-blue-600 focus:ring-blue-600" />
              </div>
              <button type="submit" className="inline-flex items-center justify-center rounded-full bg-blue-600 text-white px-6 py-3 font-medium shadow hover:bg-blue-700">Send message</button>
              {status && <p className="text-sm text-gray-700">{status}</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
