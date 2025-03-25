import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"

import { RootState } from "../../../store/store"
import { updateUser, removeUser } from '../../../slices/UserSlice'

import * as Icon from 'react-bootstrap-icons'

import { ComponentTitle, UsersDiv, AdmSpan, Dica } from "./styles"

interface User {
    id: number
    username: string
    password: string
    adm: boolean
}

interface Props {
    onDicaToggle: (showDica: boolean) => void
    showDica: boolean
    setShowDica: (newValue: boolean) => void
}

const UsersComponent = (props: Props) => {
    const dispatch = useDispatch()

    const users = useSelector((state: RootState) => state.users.users)

    function checkForAdms() {
        let adms = 0

        for (let i = 0; i < users.length; i++) {
            if (users[i].adm === true) {
                adms++
            }
        }

        if (adms >= 2) {
            return true
        } else {
            alert('Você precisa ter no mínimo 1 usuário administrador')
        }
    }

    const changeForNotAdm = (user: User) => {
        if (checkForAdms()) {
            dispatch(updateUser({ ...user, adm: false }))
        }
    }

    const changeForAdm = (user: User) => {
        dispatch(updateUser({ ...user, adm: true }))
    }
    
    const removingUser = (user: User) => {
        if (checkForAdms()) {
            dispatch(removeUser(user.id))
        }
    }

    const handleShowDicaChange = (newValue: boolean) => {
        props.setShowDica(newValue)
        props.onDicaToggle(newValue)
    }

    return (
        <>
            <Dica><input type="checkbox" onClick={() => handleShowDicaChange(!props.showDica)} checked={props.showDica} />mostrar dica de usuário e senha de administrador na tela de login</Dica>
            <ComponentTitle>Usuários:</ComponentTitle>
            <UsersDiv>
                { users.map((user) => (
                    <div key={user.id}>
                        <Icon.Trash onClick={() => removingUser(user)} />
                        <p>id: <span>{user.id}</span></p>
                        <p>usuário: <span>{user.username}</span></p>
                        <p>administrador: {
                            user.adm === true ? <AdmSpan onClick={() => changeForNotAdm(user)} $variant='green'>sim</AdmSpan>
                            : <AdmSpan onClick={() => changeForAdm(user)} $variant='red'>não</AdmSpan>
                        }</p>
                    </div>
                ))}
            </UsersDiv>
        </>
    )
}

export default UsersComponent