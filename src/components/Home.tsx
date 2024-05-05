import { Button } from 'antd'
import home from 'assets/home.png'

export default function Home() {
  const goToContact = () => {
    const releventDiv = document.getElementById('contact-us')
    // behavior: "smooth" parameter for smooth movement
    const y = releventDiv!.getBoundingClientRect().top
    // now account for fixed header
    if (y) {
      window.scrollBy({ left: 0, top: y - 64, behavior: 'smooth' })
    }
  }
  return (
    <div className="flex h-screen bg-[#02C37E] p-5 pt-16" id="home">
      <div className="flex w-full flex-col items-center justify-center text-center sm:w-2/5 sm:items-start sm:text-left">
        <div className="flex items-center justify-center sm:justify-normal sm:pt-2">
          <div className="m-0 mr-2 h-8 w-1 border-0 border-l-4 border-solid border-black"></div>
          <span className="text-xl">14 Star Solutions</span>
        </div>
        <h1 className="mx-0 mt-16 px-0 text-7xl font-bold">
          Charting excellence together.
        </h1>
        <h1 className="mx-0 mt-0 px-0 text-3xl font-semibold">
          Your partner in software development, accounting, and more!
        </h1>
        <Button
          onClick={goToContact}
          className="mt-5 size-fit rounded-xl bg-black px-8 py-2 text-xl text-white"
        >
          Get a quote
        </Button>
      </div>
      <div className="mt-10 hidden w-3/5 sm:flex">
        <img src={home} className="min-w-[80%] max-w-full" />
      </div>
    </div>
  )
}
