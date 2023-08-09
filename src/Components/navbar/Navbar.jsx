import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search'
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined'
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'

const Navbar = () => {
  const { t, i18n } = useTranslation()
  const languages = ['en', 'fr']
  const [index, setIndex] = useState(0)

  useEffect(() => {
    i18n.changeLanguage(languages[index])
  }, [index])
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchIcon />
        </div>
        <div className="items">
          <div
            className="item"
            onClick={() => {
              if (languages.indexOf(i18n.language) < languages.length - 1) {
                setIndex(languages.indexOf(i18n.language) + 1)
              } else {
                setIndex(0)
              }
            }}
          >
            <LanguageOutlinedIcon className="icon" />
            {i18n.language}
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <img
              src="https://scontent.ftun9-1.fna.fbcdn.net/v/t1.6435-9/184127210_106392224956920_7757592013308739961_n.png?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=JdPDQOsdmpEAX8qAm6C&_nc_ht=scontent.ftun9-1.fna&oh=00_AT95si7-UI-F2mXM5g1brG1CtWsvGBFHc2shPruDs7B5dw&oe=626916BA"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
