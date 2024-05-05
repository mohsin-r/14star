import Member from 'components/Member'
import mohsin from 'assets/mohsin.jpeg'
import ali from 'assets/ali.jpeg'

export default function OurTeam() {
  return (
    <div id="team" className="flex flex-col items-center bg-[#FFFFFF] p-3">
      <h1 className="mx-0 mb-0 px-0 text-5xl font-bold text-[#02C37E]">
        Our Team
      </h1>
      <p className="mt-1 text-center text-2xl font-semibold text-black">
        Meet the team behind your success!
      </p>
      <div className="mb-5 mt-3 grid grid-flow-row auto-rows-fr gap-4 sm:grid-cols-2 lg:w-4/5">
        <Member
          name="Ali Hyder, CPA"
          bio="As a Chartered Professional Accountant (CPA), Ali brings a wealth of experience and expertise in financial 
          management, tax planning, and regulatory compliance. With a meticulous attention to detail and a commitment to 
          accuracy, Ali provides comprehensive accounting services tailored to meet the unique needs of each client.
          Whether you're a small business owner or a corporate entity, Ali is dedicated to 
          delivering exceptional service and helping you navigate the complexities of finance with confidence. Let's work 
          together to optimize your financial health and drive long-term success."
          image={ali}
        />
        <Member
          name="Mohsin Reza, Software Engineer"
          bio="Mohsin is a dedicated and passionate software engineer with a proven track record of delivering innovative 
          solutions to complex technical challenges. With a strong foundation in computer science and
          software development, Mohsin excels in designing, building, and maintaining robust and scalable applications.
          Mohsin is highly skilled in programming languages such as Python, JavaScript, and Java, and proficient in utilizing modern 
          frameworks and tools to streamline development processes. With a keen eye for detail and a commitment to excellence, 
          Let's work together to bring your ideas to life and create impactful software solutions."
          image={mohsin}
        />
      </div>
    </div>
  )
}
