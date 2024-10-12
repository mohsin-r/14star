/* eslint-disable @typescript-eslint/no-explicit-any */
import { Menu } from 'antd'
import type { MenuProps } from 'antd'

const idToKey = {
  'about-us': 'about',
  services: 'services',
  team: 'team',
  'contact-us': 'contact',
  promotions: 'promotions'
}

function Navbar() {
  const items: MenuProps['items'] = [
    {
      label: 'About Us',
      key: 'about'
    },
    {
      label: 'Our Services',
      key: 'services'
    },
    {
      label: 'Our Team',
      key: 'team'
    },
    {
      label: 'Contact Us',
      key: 'contact'
    },
    { label: 'Promotions', key: 'promotions' }
  ]

  const onClick: MenuProps['onClick'] = (e) => {
    for (const [id, key] of Object.entries(idToKey)) {
      if (e.key === key) {
        const releventDiv = document.getElementById(id)
        // behavior: "smooth" parameter for smooth movement
        const y = releventDiv!.getBoundingClientRect().top
        // now account for fixed header
        if (y) {
          window.scrollBy({ left: 0, top: y - 64, behavior: 'smooth' })
        }
        return
      }
    }
  }

  return (
    <Menu
      // eslint-disable-next-line tailwindcss/no-custom-classname
      className="grow overflow-hidden"
      onClick={onClick}
      selectedKeys={[]}
      mode="horizontal"
      theme="dark"
      items={items}
    />
  )
}

export default Navbar
