import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ConfigProvider, Flex } from 'antd'
import Layout from 'components/Layout'
import AboutUs from 'components/AboutUs'
import Home from 'components/Home'

function App() {
  if (import.meta.env.VITE_DOWN === 'true') {
    return (
      <Flex
        gap="small"
        className="h-screen w-screen text-[#02C37E]"
        vertical
        align="center"
        justify="center"
      >
        <h1 className="m-0 p-0">14 Star Solutions</h1>
        <h2 className="m-0 p-0">
          Website is down for implementing improvements.
        </h2>
        <h3 className="m-0 p-0">Please check back later.</h3>
      </Flex>
    )
  }
  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: '#02C37E',
          colorLink: '#02C37E',
          colorInfo: '#02C37E',
          colorBorder: '#02C37E',
          colorBorderSecondary: '#02C37E',
          colorBgContainerDisabled: '#ffffff',
          colorTextDisabled: '#000000',
          fontSize: 16,
          fontFamily: 'Nunito'
        },
        components: {
          Menu: {
            iconSize: 18,
            horizontalItemHoverBg: '#02C37E',
            itemHoverBg: '#02C37E',
            darkItemHoverBg: '#02C37E'
          },
          Form: {
            labelHeight: 0,
            verticalLabelPadding: 0
          }
        }
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="about-us" element={<AboutUs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  )
}

export default App
