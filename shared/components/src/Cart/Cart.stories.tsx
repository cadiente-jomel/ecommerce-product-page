import React from "react"

import { ComponentMeta, ComponentStory } from "@storybook/react"
import useState from "storybook-addon-state"

import Cart from "./Cart"

export default {
  title: "Cart/Cart",
  component: Cart,
} as ComponentMeta<typeof Cart>

const [cartProductQuantity, setCartProductQuantity] = useState("click", 0)

const Template: ComponentStory<typeof Cart> = (args) => {
  return <Cart {...args} />
}

export const ProductCart = Template.bind({})

ProductCart.args = {
  cartProductQuantity: 0,
  setCartProductQuantity: setCartProductQuantity,
  isActive: true,
}
