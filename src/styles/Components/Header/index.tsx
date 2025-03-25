import { useState } from 'react';

import * as Icon from 'react-bootstrap-icons'

import { HeaderDiv, HeaderTitle, LeftDiv, CenterDiv, RightDiv, XIcon, CheckIcon } from "./styles" 

interface User {
    id: number
    username: string
    password: string
    adm: boolean
}

interface Props {
    changeTheme: () => void
    onLoginClick: () => void
    onLogoutClick: () => void
    user: User | null
}

const Header = (props: Props) => {
    const [storeName, setStoreName] = useState('NOME DA LOJA')
    const [editedStoreName, setEditedStoreName] = useState('')
    const [isEditing, setIsEditing] = useState(false)


    const login = () => {
        props.onLoginClick()
    }

    const logout = () => {
        props.onLogoutClick()
    }

    const startEditing = () => {
        setEditedStoreName(storeName)
        setIsEditing(true)
    }


    const cancelChanges = () => {
        setEditedStoreName(storeName)
        setIsEditing(false)
    }

    const saveChanges = () => {
        setStoreName(editedStoreName)
        setIsEditing(false)
    }

    return (
        <HeaderDiv>
            <LeftDiv>
                <Icon.Palette onClick={props.changeTheme} />
            </LeftDiv>
            <CenterDiv>
                { isEditing &&
                    <XIcon onClick={(e) => cancelChanges()} />
                }
                <HeaderTitle
                    type='text'
                    value={isEditing ? editedStoreName : storeName}
                    onChange={(e) => setEditedStoreName(e.target.value)}
                    readOnly={!props.user?.adm}
                    onClick={props.user?.adm ? startEditing : undefined}
                />
                { isEditing && 
                    <CheckIcon onClick={(e) => saveChanges()} />
                }
            </CenterDiv>
            <RightDiv>
                { !props.user &&
                    <Icon.Person onClick={() => login()} />
                }
                { props.user &&
                    <>
                        <p>{props.user.username}</p>
                        <span onClick={() => logout()}>Sair</span>
                    </>
                }
            </RightDiv>
        </HeaderDiv>
    )
}

export default Header