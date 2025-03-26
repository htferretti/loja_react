/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react"
import { useDispatch } from "react-redux"

import { removeProduct, updateProduct } from "../../../slices/ProductSlice"

import { ProdutoDiv, ProdutoTitle, ProdutoPrice, TrashIcon, CheckIcon, XIcon } from "./styles"

interface ProductProps {
    id: number
    name: string
    price: number
    image: string | null

    isAdm: boolean | undefined
}

const Produto = ({ id, name, price, image, isAdm }: ProductProps) => {
    const [isEditing, setIsEditing] = useState(false)
    const [editedName, setEditedName] = useState(name)
    const [editedPrice, setEditedPrice] = useState(price)
    const [editedImage, setEditedImage] = useState<File | null>(null)

    const dispatch = useDispatch()

    const Editing = () => {
        setIsEditing(true)
    }

    const saveChanges = () => {
        dispatch(updateProduct({id, name: editedName, price: editedPrice, image: editedImage ? URL.createObjectURL(editedImage) : image}))
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
        }).format(value)
    }

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null
        setEditedImage(file)
    }

    return (
        <ProdutoDiv onClick={isAdm ? () => Editing() : undefined}>
            <img src={image !== null ? image : 'https://dummyimage.com/300x400/cccccc/000000&text=imagem'}></img>
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
                    <label htmlFor="image-input">Mudar imagem</label>
                    <input
                        id="image-input"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                </div>
            }
        </ProdutoDiv>
    )
}

export default Produto