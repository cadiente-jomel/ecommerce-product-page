import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import useState from "storybook-addon-state"
import Product from "./Product"

export default {
  title: "Product/Entire Product",
  component: Product,
} as ComponentMeta<typeof Product>

const Template: ComponentStory<typeof Product> = (args) => {
  return <Product {...args} />
}

const [cartProductQuantity, setCartProductQuantity] = useState("click", 0)

export const EntireProduct = Template.bind({})

EntireProduct.args = {
  setCartProductQuantity: setCartProductQuantity,
}
