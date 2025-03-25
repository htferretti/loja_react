import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { RootState } from "../../../store/store"
import { addUser } from "../../../slices/UserSlice"

import { LoginDiv, SpanMessage } from "./styles"

interface User {
    id: number
    username: string
    password: string
    adm: boolean
}

interface Props {
    onLogin: (user: User) => void
    showDica: boolean
}

const LogingIn = (props: Props) => {
    const users = useSelector((state: RootState) => state.users.users)
    const dispatch = useDispatch()

    const [inputUser, setInputUser] = useState('')
    const [inputPassword, setInputPassword] = useState('')

    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState(false)

    const registerNewUser = () => {
        setErrorMessage('')
        setSuccessMessage(false)

        if (inputUser.length < 2) {
            return setErrorMessage('Usuário precisa conter mais de 2 caractéres')
        }

        for (let i = 0; i < users.length; i++) {
            if (inputUser === users[i].username) {
                let userExists = inputUser
                return setErrorMessage('O usuário "' + userExists + '" já existe')
            }
        }

        if (inputPassword.length < 2) {
            return setErrorMessage('Senha precisa conter mais de 2 caractéres')
        }

        const user = {
            id: (users.length > 0 ? users[users.length - 1].id + 1 : 1),
            username: inputUser,
            password: inputPassword,
            adm: false
        }

        dispatch(addUser(user))
        setInputUser('')
        setInputPassword('')
        setErrorMessage('')
        setSuccessMessage(true)
    }

    const logIn = () => {
        setErrorMessage('')
        setSuccessMessage(false)

        const foundUser = users.find(user => 
            user.username === inputUser && user.password === inputPassword
        )

        if (foundUser) {
            setInputUser('')
            setInputPassword('')
            props.onLogin(foundUser)
            return
        }

        setErrorMessage('Usuário ou senha incorretos')
    }

    const [userDica, setUserDica] = useState<any>(null)

    useEffect(() => {
        const foundUser = users.find(user => user.adm === true)
        if (foundUser) {
            setUserDica(foundUser)
        }
    }, [users])

    return (
        <LoginDiv>
            <input
                placeholder="usuário"
                onChange={(e) => setInputUser(e.target.value)}
                value={inputUser}
            />
            <input
                placeholder="senha"
                onChange={(e) => setInputPassword(e.target.value)}
                value={inputPassword}
            />
            { errorMessage !== '' &&
                <SpanMessage $variant={'red'}>{errorMessage}</SpanMessage>
            }
            { successMessage && errorMessage === '' &&
                <SpanMessage $variant={'green'}>Usuário criado com sucesso!</SpanMessage>
            }
            <div>
                <button onClick={registerNewUser}>Cadastrar</button>
                <button onClick={logIn}>Entrar</button>
            </div>
            { props.showDica && userDica &&
                <p>*dica: {userDica && `'${userDica.username}' '${userDica.password}'`}</p>
            }
        </LoginDiv>
    )
}

export default LogingIn