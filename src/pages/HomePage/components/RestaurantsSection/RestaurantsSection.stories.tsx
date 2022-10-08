import { ComponentMeta, ComponentStory } from '@storybook/react'

import { RestaurantsSection } from './RestaurantsSection'

export default {
  title: 'Pages/HomePage/components/RestaurantsSection',
  component: RestaurantsSection,
} as ComponentMeta<typeof RestaurantsSection>

const Template: ComponentStory<typeof RestaurantsSection> = (args) => (
  <RestaurantsSection {...args} />
)

export const Default = Template.bind({})
Default.args = {
  title: 'Our favourite picks',
}
