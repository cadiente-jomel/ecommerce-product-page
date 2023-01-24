import React from "react"
import Image from "next/image"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import Button from "./Button"
import { S } from "../Product/Product"
export default {
  title: "Button",
  component: Button,
  subcomponents: { Image },
} as ComponentMeta<typeof Button>

export const AddToCart: ComponentStory<typeof Button> = () => (
  <Button>
    <Image
      priority
      src="/assets/images/icon-cart.svg"
      alt="icon-cart"
      width={20}
      height={20}
    />
    <S.CartText>Add To Cart</S.CartText>
  </Button>
)
