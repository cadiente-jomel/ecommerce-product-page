import React from "react"
import Image from "next/image"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import useState from "storybook-addon-state"

import Navigation from "./Navigation"

export default {
  title: "Navigation/Navbar",
  component: Navigation,
} as ComponentMeta<typeof Navigation>

const [cartProductQuantity, setCartProductQuantity] = useState("click", 0)
const [showOverlay, setShowOverlay] = useState("click", false)

const Template: ComponentStory<typeof Navigation> = (args) => {
  return <Navigation {...args} />
}

export const NavigationBar = Template.bind({})

NavigationBar.args = {
  cartProductQuantity: 0,
  setCartProductQuantity: setCartProductQuantity,
  setShowOverlay: setShowOverlay,
  showOverlay: false,
}
