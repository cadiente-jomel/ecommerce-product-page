import { useState } from "react"
import styled from "styled-components"

import Navigation from "@shared/components/src/Navigation/Navigation";
import Product from "@shared/components/src/Product/Product";
import { S as Styled } from "@shared/components/src/ProductDetails/ProductDetails";

export const S = {
  MainContainer: styled.main`
    margin-top: 2rem;
    display: flex;
    justify-content: center;

    @media all and (min-width: 770px) {
      margin-top: 8rem;
    }
  `,
}

function App() {
  const [showOverlay, setShowOverlay] = useState(false)
  const [cartProductQuantity, setCartProductQuantity] = useState(0)

  return (
    <div>
      <Navigation
        cartProductQuantity={cartProductQuantity}
        setCartProductQuantity={setCartProductQuantity}
        setShowOverlay={setShowOverlay}
        showOverlay={showOverlay}
      />
      <S.MainContainer>
        <Product setCartProductQuantity={setCartProductQuantity} />
      </S.MainContainer>
    </div>
  )
}

export default App
