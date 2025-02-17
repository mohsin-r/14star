import Service from 'components/Service'

export default function Services() {
  return (
    <div
      id="services"
      className="flex min-h-screen flex-col bg-[#1A2529] p-3 sm:px-5"
    >
      <h1 className="m-0 px-0 text-5xl font-bold text-[#02C37E]">
        Our Services
      </h1>
      <h2 className="mx-0 mb-0 px-0 text-3xl font-bold text-[#02C37E]">
        Accounting & Tax
      </h2>
      <div className="mt-3 grid grid-flow-row auto-rows-fr gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <Service
          title="Personal Tax"
          content="
          We provide dependable tax preparation using advanced software for accuracy. With our CRA e-filing service, your tax return is swiftly submitted. Plus, we offer instant tax refund calculations. Our services include guidance on tax planning, such as RRSP contribution limits, and keep you updated on entitlements like the Canada Child Benefit and GST/HST Credit."
        />
        <Service
          title="Corporate Tax"
          content="We help businesses with T2 tax filing, from incorporation to e-filing with the CRA. Our services include bookkeeping, advance tax payment advice, and serving as your CRA liaison, including audits. We also specialize in tax returns for liquidation or amalgamation scenarios, ensuring compliance and accuracy."
        />
        <Service
          title="Bookkeeping"
          content="Our experienced bookkeeper ensures accurate financial records daily, covering inventory, CRM, and payroll. Accessible anytime, anywhere via platforms like QuickBooks Online or Xero, our service provides cost-effective, secure support for streamlined operations."
        />
        <Service
          title="Payroll Services"
          content="
          We manage payroll from statements to T4s and ROE filings with Service Canada. No upfront or ongoing costs for hardware or software. Outsourcing reduces errors, enhances security, and maintains confidentiality. Fewer employees needed means a lean headcount for stable operations without turnover risk."
        />
        <Service
          title="HST Filing"
          content="We simplify your HST process by registering your account with the CRA and filing your returns monthly or quarterly as needed. Expect hassle-free refunds for smooth financial management. Plus, we offer support during CRA audits for compliance and peace of mind."
        />
        <Service
          title="Internal Audit"
          content="
          We enhance corporate governance and risk management with industry-based process improvements. Our Automated Internal Audit Observation Tracking System identifies weaknesses and non-compliance efficiently, offering hassle-free assurance through monthly reports supervised by certified Internal Auditors."
        />
        <Service
          title="Tax Planning"
          content="We’ll help optimize your tax savings while staying compliant with tax laws. This includes advising on whether to incorporate your business or remain a sole proprietor/partnership, determining the right mix of salary vs. dividends if incorporated, maximizing tax deductions and credits, income splitting within the family, and estate planning or implementing an estate freeze."
        />
        <Service
          title="Corporate Affairs"
          content="We assist with company formation, whether federal or provincially incorporated, and ensure that all necessary steps are taken to set up your business correctly. Our services also include filing annual returns, maintaining minute books, and updating company registers in accordance with the latest regulations. Additionally, we provide guidance on the amalgamation or dissolution of your company, ensuring that these processes are handled smoothly and efficiently."
        />
      </div>
      <h2 className="mx-0 mb-0 px-0 text-3xl font-bold text-[#02C37E]">
        Software Development
      </h2>
      <div className="my-3 grid grid-flow-row auto-rows-fr gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <Service
          title="Web Application Development"
          content="Transforming digital visions into reality? Our web app development service caters to your needs, guaranteeing a seamless online experience. Whether you're a startup or a large enterprise, we craft dynamic and innovative web apps. Prioritizing creativity, functionality, and scalability, we deliver high-quality solutions with modern tech and best practices."
        />
        <Service
          title="Mobile Application Development"
          content="Elevate your business with our mobile app development service! Our expert crafts custom apps to match your unique needs. Whether enhancing customer experience or streamlining internal processes, we bring your vision to life. Prioritizing user experience, performance, and security, we ensure your app shines in the marketplace."
        />
        <Service
          title="Desktop Application Development"
          content="Unleash your business potential with our desktop app development service! Specializing in tailored apps, whether standalone or integrated, our skilled developers prioritize functionality, usability, and performance from concept to deployment, ensuring your desktop application exceeds expectations and streamlines your workflow."
        />
        <Service
          title="Software Modernization"
          content="Revamp your software with our modernization service! Outdated systems hinder growth, but we specialize in revitalizing legacy software, upgrading it for current and future needs. From legacy code to inefficient processes, we transform your software into cutting-edge solutions, boosting performance, security, and innovation opportunities."
        />
      </div>
    </div>
  )
}
