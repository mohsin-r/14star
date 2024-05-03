export default function ContactUs() {
  return (
    <div className="flex h-screen flex-col bg-[#182527] p-5" id="contact-us">
      <h1 className="mx-0 mb-0 px-0 text-center text-5xl font-bold text-[#02C37E]">
        Contact Us
      </h1>
      <div className="flex grow flex-col sm:flex-row">
        <div className="flex w-full flex-col items-center text-center sm:w-1/2">
          <h2 className="mx-0 mb-0 mt-8 px-0 text-3xl font-bold text-white">
            Phone
          </h2>
          <h2 className="mx-0 mb-0 mt-2 px-0 text-2xl font-bold text-white">
            For Accounting/Tax Inquiries:
          </h2>
          <div className="mt-1 size-fit rounded-3xl bg-[#02C37E] px-8 py-1">
            <a href="tel:4168483406" className="text-xl font-bold text-black">
              416-848-3406
            </a>
          </div>
          <h2 className="mx-0 mb-0 mt-4 px-0 text-2xl font-bold text-white">
            For Software Development Inquiries:
          </h2>
          <div className="mt-1 size-fit rounded-3xl bg-[#02C37E] px-8 py-1">
            <a href="tel:6472234757" className="text-xl font-bold text-black">
              647-223-4757
            </a>
          </div>
          <h2 className="mx-0 mb-0 mt-8 px-0 text-3xl font-bold text-white">
            Email
          </h2>
          <div className="mt-2 size-fit rounded-3xl bg-[#02C37E] px-8 py-1">
            <a
              href="mailto:info@14star.ca"
              className="text-xl font-bold text-black"
            >
              info@14star.ca
            </a>
          </div>
        </div>
        <div className="flex w-full flex-col items-center text-center sm:w-1/2">
          <h2 className="mx-0 mb-0 mt-8 px-0 text-3xl font-bold text-white">
            Contact Form
          </h2>
          <p className="m-0 mt-2 p-0 text-white">
            Kindly fill out the form below if you have any queries at all, from
            questions to inquiries or concerns. You are also welcome to give us
            any feedback so we can continue to provide you with the best
            possible services!
          </p>
          <iframe
            className="mt-2 w-full grow border-0"
            src="https://docs.google.com/forms/d/e/1FAIpQLScVuU9Vz-2I3W9T0xjpXi2_y_IEktzvAL46AwvLTNwboaO4nw/viewform?embedded=true"
          ></iframe>
        </div>
      </div>
    </div>
  )
}
