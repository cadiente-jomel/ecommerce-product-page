import React from "react"

import { ComponentMeta, ComponentStory } from "@storybook/react"
import useState from "storybook-addon-state"

import Carousel from "./Carousel"
import FullCarousel from "./FullCarousel"
import { S } from "../Product/Product"

export default {
  title: "Product/Product Carousel",
  component: Carousel,
  subcomponents: { FullCarousel },
} as ComponentMeta<typeof Carousel>

const [showCarousel, setShowCarousel] = useState("click", false)
// const FullCarouselTemplate: ComponentStory<typeof FullCarousel> = (args) => (
//   <FullCarousel {...args} />
// )
// const ProductFullCarousel = FullCaoruselTemplate.bind({})

// ProductFullCarousel.args = {
//   carousel: showCarousel,
//   setShowCarousel: setShowCarousel,
// }

const Template: ComponentStory<typeof Carousel> = (args) => {
  return (
    <S.Row>
      <S.Column>
        <Carousel {...args} />
      </S.Column>
    </S.Row>
  )
}

export const ProductCarousel = Template.bind({})
ProductCarousel.args = {
  showCarousel: showCarousel,
  setShowCarousel: setShowCarousel,
}
