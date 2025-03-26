import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { RootState } from "../../../store/store"
import { addProduct } from "../../../slices/ProductSlice"

import { AddProdutoForm, AddProdutoTitle, ButtonDiv, InputDiv, InputPrice, LabelImg, InputImg, InputName, AddButton, CancelButton } from "./styles"

const AddProduto = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState(Number)
    const [image, setImage] = useState<File | null>(null)

    const dispatch = useDispatch()
    const products = useSelector((state: RootState) => state.products.products)

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setImage(e.target.files[0])
        }
    }

    const addingProduct = () => {
        if (!name || !price) {
            return
        }

        const product = {
            id: (products.length > 0 ? products[products.length - 1].id + 1 : 1),
            name,
            price,
            image: image ? URL.createObjectURL(image) : null 
        }

        dispatch(addProduct(product))

        setName('')
        setPrice(0)
        setImage(null)
    }

    const cancel = () => {
        setName('')
        setPrice(0)
        setImage(null)
    }

    return (
        <AddProdutoForm onSubmit={(e) => { e.preventDefault(); addingProduct() }}>
            <AddProdutoTitle>Adicionar novo produto:</AddProdutoTitle>
            <InputDiv>
                    <LabelImg htmlFor="image-input">
                        { image === null ? 'Nenhuma imagem selecionada'
                        : 'Imagem selecionada 👍'}
                    </LabelImg>
                    <InputImg id="image-input" type="file" accept="image/*" onChange={handleImageChange} />
                    <div>
                        <label htmlFor="text">Nome:</label>
                        <InputName required onChange={(e) => setName(e.target.value)} value={name} type="text" />
                        <label htmlFor="number">Preço:</label>
                        <InputPrice required onChange={(e) => setPrice(Number(e.target.value))} value={price} type="number" min={0} step="any" />
                    </div>
            </InputDiv>
            <ButtonDiv>
                <CancelButton type="button" onClick={cancel}>Cancelar</CancelButton>
                <AddButton type="submit">Adicionar</AddButton>
            </ButtonDiv>
        </AddProdutoForm>
    )
}

export default AddProduto