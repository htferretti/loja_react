import { ThemeProvider } from "styled-components"
import { useState } from "react"
import { Provider } from "react-redux"

import store from './store/store'

import themeLight from "./styles/themes/light"
import themeDark from "./styles/themes/dark"

import MyGlobalStyle, { Container } from "./styles"
import Header from "./styles/Components/Header"
import Produtos from "./styles/Components/Produtos"
import AddProduto from "./styles/Components/AddProduto"
import LogingIn from "./styles/Components/LoginIn"
import UsersComponent from "./styles/Components/UsersComponent"

interface User {
  id: number
  username: string
  password: string
  adm: boolean
}

function App() {
  const [isUsingThemeDark, setIsUsingThemeDark] = useState(false)

  function changeTheme() {
    setIsUsingThemeDark(!isUsingThemeDark)
  }

  const [isLogingIn, setIsLogingIn] = useState(false)

  const showLogin = () => {
    setIsLogingIn(!isLogingIn)
  }

  const [loggedUser, setLoggedUser] = useState<User | null>(null)

  const handleLogin = (user: User) => {
    setLoggedUser(user)
}

  const [showDica, setShowDica] = useState(true)

  const handleDicaToggle = (newValue: boolean) => {
    setShowDica(newValue)
  }

  return (
    <ThemeProvider theme={isUsingThemeDark ? themeDark : themeLight}>
      <Provider store={store}>
        <MyGlobalStyle />
        <Container>
          <Header changeTheme={changeTheme} onLoginClick={showLogin} onLogoutClick={() => {setLoggedUser(null); setIsLogingIn(false)}} user={loggedUser} />
          { loggedUser?.adm === true &&
            <AddProduto />
          }
          { isLogingIn && loggedUser === null ? 
            <LogingIn showDica={showDica} onLogin={handleLogin} />
            :
            <Produtos isAdm={loggedUser?.adm} />
          }
          { loggedUser?.adm === true &&
            <UsersComponent showDica={showDica} setShowDica={setShowDica} onDicaToggle={handleDicaToggle} />
          }
        </Container>
      </Provider>
    </ThemeProvider>
  )
}

export default App
