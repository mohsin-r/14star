import about from 'assets/about.png'

export default function AboutUs() {
  return (
    <div id="about-us" className="flex flex-col items-center bg-[#F4F4F4] p-3">
      <h1 className="mx-0 mb-0 px-0 text-5xl font-bold text-[#02C37E]">
        About Us
      </h1>
      <p className="mb-0 mt-3 text-center text-2xl font-semibold text-black sm:w-[70%]">
        At 14 Star Solutions, we seamlessly blend the worlds of software
        development and accounting to provide innovative solutions tailored to
        your unique needs. Whether you&#39;re seeking custom software
        development, or comprehensive accounting solutions, trust our family
        business to deliver excellence every step of the way.
      </p>
      <div className="flex w-full justify-center">
        <img src={about} className="sm:min-w-[45%]" />
      </div>
    </div>
  )
}
