import { useSelector } from "react-redux"

import { RootState } from "../../../store/store"

import Produto from "../Produto"
import { ProdutosDiv } from "./styles"

type Props = {
    isAdm: boolean | undefined
}

const Produtos = ({ isAdm }: Props) => {
    const products = useSelector((state: RootState) => state.products.products)

    const sortedProducts = [...products].sort((a, b) => a.name.localeCompare(b.name))

    const searchProducts = () => {
        return sortedProducts.filter(product => product.name.toLocaleLowerCase())
    }

    return (
        <ProdutosDiv>
            { searchProducts().map(product => (
                <Produto
                    key={product.id} id={product.id} name={product.name} price={product.price}
                    isAdm={isAdm}
                />
            )) }
        </ProdutosDiv>
    )
}

export default Produtos