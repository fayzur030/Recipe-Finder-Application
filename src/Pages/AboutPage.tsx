const AboutPage = () => {
  return (
    <div className='max-w-5xl mx-auto px-6 py-20 text-gray-800'>
      <h1 className='text-5xl font-extrabold mb-12 text-center text-primary'>
        About Our Recipe App
      </h1>
      <p className='max-w-3xl mx-auto text-lg leading-relaxed mb-16 text-center'>
        Welcome to our Recipe App! We are passionate about food and cooking, and
        our mission is to bring the joy of cooking to everyone, whether you're a
        beginner or a seasoned chef. Explore thousands of recipes from around
        the globe, discover new flavors, and create unforgettable meals right in
        your own kitchen.
      </p>
      <section className='mb-16'>
        <h2 className='text-3xl font-semibold mb-6'>Our Mission</h2>
        <p className='text-lg leading-relaxed'>
          {' '}
          Our goal is to inspire and empower food lovers to cook more at home
          with easy-to-follow, delicious recipes. We believe cooking should be
          fun, accessible, and rewarding for everyone. That’s why we curate a
          diverse collection of recipes — from quick weeknight dinners to
          traditional dishes and healthy options — all carefully categorized to
          help you find exactly what you want.
        </p>
      </section>
      {/* Features Section */}
      <section className='mb-16'>
        <h2 className='text-3xl font-semibold mb-6'>Features</h2>
        <ul className='list-disc list-inside space-y-3 text-lg'>
          <li>
            <strong>Vast Recipe Collection:</strong> Browse thousands of recipes
            sorted by cuisine, ingredients, and meal type.
          </li>
          <li>
            <strong>Smart Search:</strong> Find recipes quickly by ingredient,
            category, or area of origin.
          </li>
          <li>
            <strong>Favorites:</strong> Save your favorite recipes for easy
            access anytime.
          </li>
          <li>
            <strong>Random Recipe Generator:</strong> Feeling adventurous? Get a
            random recipe suggestion instantly!
          </li>
          <li>
            <strong>User-friendly Instructions:</strong> Step-by-step guides to
            help cooks of all skill levels.
          </li>
        </ul>
      </section>
      {/* Our Team Section */}
      <section className='mb-16'>
        <h2 className='text-3xl font-semibold mb-6'>Meet Our Team</h2>
        <p className='text-lg leading-relaxed mb-6'>
          We are a small group of passionate foodies, developers, and recipe
          curators dedicated to bringing the best cooking experience to your
          fingertips. Our team works tirelessly to ensure the app is easy to
          use, visually appealing, and packed with delicious recipes.
        </p>
        {/* Optionally add team member profiles or photos here */}
      </section>
      {/* Call to Action Section */}
      <section className='text-center'>
        <h2 className='text-3xl font-semibold mb-4'>Ready to Start Cooking?</h2>
        <p className='mb-8 text-lg'>
          Dive into our recipe collection and find your next favorite meal!
        </p>
        <button className='btn btn-primary px-8 py-3 text-xl font-semibold'>
          Browse Recipes
        </button>
      </section>
    </div>
  )
}

export default AboutPage
