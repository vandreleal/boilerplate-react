import { ComponentMeta, ComponentStory } from "@storybook/react"

import { Home } from "./Home"

export default {
  title: "Components/Home",
  component: Home,
} as ComponentMeta<typeof Home>

const Template: ComponentStory<typeof Home> = args => <Home {...args} />

export const Default = Template.bind({})
Default.args = {}
