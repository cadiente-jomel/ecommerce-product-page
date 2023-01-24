import React, { useState } from "react"

import { ComponentMeta, ComponentStory } from "@storybook/react"

import Quantity from "./Quantity"

export default {
  title: "Quantity Counter",
  component: Quantity,
} as ComponentMeta<typeof Quantity>

export const QuantityCounter: ComponentStory<typeof Quantity> = (args) => {
  const [counter, setCounter] = useState(0)
  return <Quantity counter={counter} setCounter={setCounter} />
}
