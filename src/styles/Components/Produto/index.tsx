/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react"
import { useDispatch } from "react-redux"

import { removeProduct, updateProduct } from "../../../slices/ProductSlice"

import { ProdutoDiv, ProdutoTitle, ProdutoPrice, TrashIcon, CheckIcon, XIcon } from "./styles"

interface ProductProps {
    id: number
    name: string
    price: number

    isAdm: boolean | undefined
}

const Produto = ({ id, name, price, isAdm }: ProductProps) => {
    const [isEditing, setIsEditing] = useState(false)
    const [editedName, setEditedName] = useState(name)
    const [editedPrice, setEditedPrice] = useState(price)

    const dispatch = useDispatch()

    const Editing = () => {
        setIsEditing(true)
    }

    const saveChanges = () => {
        dispatch(updateProduct({id, name: editedName, price: editedPrice}))
        setIsEditing(false)
    }

    const cancelChanges = () => {
        setEditedName(name)
        setEditedPrice(price)
        setIsEditing(false)
    }

    const removingProduct = () => {
        dispatch(removeProduct(id))
    }

    const formatNumber = (value: number) => {
        return new Intl.NumberFormat('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(value);
    };

    return (
        <ProdutoDiv onClick={isAdm ? () => Editing() : undefined}>
            <img src="https://dummyimage.com/300x400/cccccc/000000&text=imagem"></img>
            { isEditing && isAdm &&
                <>
                    <TrashIcon onClick={(e) => { e.stopPropagation(); removingProduct()}} />
                    <XIcon onClick={(e) => { e.stopPropagation(); cancelChanges()}} />
                    <CheckIcon onClick={(e) => { e.stopPropagation(); saveChanges()}} />
                </>
            }
            { !isEditing &&
                <div>
                    <ProdutoTitle>{name}</ProdutoTitle>
                    <ProdutoPrice>R$ {formatNumber(price)}</ProdutoPrice>
                </div>
            }
            { isEditing && isAdm &&
                <div>
                    <input
                        value={editedName}
                        onChange={(e) => setEditedName(e.target.value)}
                    />
                    <input
                        type="number"
                        value={editedPrice}
                        onChange={(e) => setEditedPrice(Number(e.target.value))}
                        min={0}
                        step="any"
                    />
                </div>
            }
        </ProdutoDiv>
    )
}

export default Produto