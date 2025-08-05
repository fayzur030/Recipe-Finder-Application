import HeroBanner from '../assets/HeroBanner.jpg'

const HeroPage = () => {
  return (
    <div
      className='relative w-full max-w-6xl mx-auto bg-cover bg-center rounded-3xl overflow-hidden min-h-[60vh]'
      style={{
        backgroundImage: `url(${HeroBanner})`,
      }}
    >
      <div className='absolute inset-0 bg-black bg-opacity-45'></div>

      <div className='relative z-10 flex items-center justify-center px-4 py-12 text-center text-white min-h-[60vh]'>
        <div className='w-full max-w-md'>
          <h1 className='mb-5 text-4xl font-bold text-white'>
            Welcome to Recipe App
          </h1>
          <p className='mb-5 text-sm sm:text-base font-light text-white'>
            Discover thousands of recipes and explore new flavors! Start your
            food journey today.
          </p>
          <button className='btn btn-primary'>Browse Recipes</button>
        </div>
      </div>
    </div>
  )
}

export default HeroPage
