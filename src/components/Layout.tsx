import { Layout } from 'antd'
import Navbar from 'components/Navbar'
import logo from 'assets/logo.png'
import Home from 'components/Home'
import AboutUs from 'components/AboutUs'
import Services from 'components/Services'
import OurTeam from 'components/OurTeam'
import ContactUs from 'components/ContactUs'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function MyLayout() {
  const { Header, Content } = Layout
  return (
    <Layout>
      <div className="z-10 m-0 flex w-full flex-col p-0">
        <Header
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: 0,
            width: '100%'
          }}
        >
          <img
            src={logo}
            className="max-h-[60px] cursor-pointer p-1"
            onClick={() =>
              window.scroll({ left: 0, top: 0, behavior: 'smooth' })
            }
          />
          <Navbar />
        </Header>
        <hr className="m-0 w-full border-4 border-solid border-[#02C37E]" />
      </div>

      <Content
        style={{ padding: '0', backgroundColor: 'white', color: 'white' }}
      >
        <Home />
        <AboutUs />
        <Services />
        <OurTeam />
        <ContactUs />
      </Content>
    </Layout>
  )
}
