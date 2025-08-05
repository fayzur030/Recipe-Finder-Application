import React, { useState } from 'react'

const ContactPage = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  // input change Handler
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  //Submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Thank you, ${formData.name}! We received your message.`)
    // Here you can add real submission logic, like API calls
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className='max-w-3xl mx-auto px-6 py-16'>
      {/* Page heading */}
      <h1 className='text-4xl font-bold mb-8 text-center text-primary'>
        Contact Us
      </h1>

      {/* Intro text */}
      <p className='text-center mb-10 text-gray-700 text-lg'>
        Have questions or want to share your feedback? Send us a message — we'd
        love to hear from you!
      </p>

      {/* Contact form */}
      <form onSubmit={handleSubmit} className='space-y-6' noValidate>
        {/* Name input */}
        <div>
          <label
            htmlFor='name'
            className='block mb-2 font-semibold text-gray-800'
          >
            Name
          </label>
          <input
            id='name'
            name='name'
            type='text'
            required
            value={formData.name}
            onChange={handleChange}
            className='w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary'
            placeholder='Your full name'
          />
        </div>

        {/* Email input */}
        <div>
          <label
            htmlFor='email'
            className='block mb-2 font-semibold text-gray-800'
          >
            Email
          </label>
          <input
            id='email'
            name='email'
            type='email'
            required
            value={formData.email}
            onChange={handleChange}
            className='w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary'
            placeholder='your.email@example.com'
          />
        </div>

        {/* Message textarea */}
        <div>
          <label
            htmlFor='message'
            className='block mb-2 font-semibold text-gray-800'
          >
            Message
          </label>
          <textarea
            id='message'
            name='message'
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            className='w-full border border-gray-300 rounded-md px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-primary'
            placeholder='Write your message here...'
          />
        </div>

        {/* Submit button */}
        <button
          type='submit'
          className='btn btn-primary w-full py-3 text-lg font-semibold'
        >
          Send Message
        </button>
      </form>
    </div>
  )
}

export default ContactPage
