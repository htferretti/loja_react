import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { RootState } from "../../../store/store"
import { addProduct } from "../../../slices/ProductSlice"

import { AddProdutoForm, AddProdutoTitle, ButtonDiv, InputDiv, InputPrice, InputImg, InputName, AddButton, CancelButton } from "./styles"

const AddProduto = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState(Number)

    const dispatch = useDispatch()
    const products = useSelector((state: RootState) => state.products.products)

    const addingProduct = () => {
        if (!name || !price) {
            return
        }

        const product = {
            id: (products.length > 0 ? products[products.length - 1].id + 1 : 1)
            , name, price }
        dispatch(addProduct(product))

        setName('')
        setPrice(0)
    }

    const cancel = () => {
        setName('')
        setPrice(0)
    }

    return (
        <AddProdutoForm onSubmit={(e) => { e.preventDefault(); addingProduct() }}>
            <AddProdutoTitle>Adicionar novo produto:</AddProdutoTitle>
            <InputDiv>
                    <InputImg placeholder="Imagem" type="file" />
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