import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import useState from "storybook-addon-state"
import { S } from "../Product/Product"

import ProductDetails from "./ProductDetails"

export default {
  title: "Product/Product Details",
  component: ProductDetails,
} as ComponentMeta<typeof ProductDetails>

const [quantityCounter, setQuantityCounter] = useState("click", 0)
const [cartProductQuantity, setCartProductQuantity] = useState("click", 0)
const Template: ComponentStory<typeof ProductDetails> = (args) => {
  return (
    <S.Column isProductDetails={true}>
      <ProductDetails {...args} />
    </S.Column>
  )
}

export const ProductAbout = Template.bind({})

ProductAbout.args = {
  quantityCounter: 0,
  setQuantityCounter: setQuantityCounter,
  setCartProductQuantity: setCartProductQuantity,
}
