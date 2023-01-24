import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import CheckoutButton from "./CheckoutButton"

export default {
  title: "Button",
  component: CheckoutButton,
} as ComponentMeta<typeof CheckoutButton>

export const Checkout: ComponentStory<typeof CheckoutButton> = () => (
  <CheckoutButton>Checkout</CheckoutButton>
)
