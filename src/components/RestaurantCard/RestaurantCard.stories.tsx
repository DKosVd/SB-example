import { ComponentMeta, ComponentStory } from '@storybook/react'
import { restaurants } from 'stub/restaurants'

import { RestaurantCard } from './RestaurantCard'

export default {
  title: 'Components/RestaurantCard',
  component: RestaurantCard,
  args: {
    ...restaurants[0],
  },
} as ComponentMeta<typeof RestaurantCard>

const Template: ComponentStory<typeof RestaurantCard> = (args) => <RestaurantCard {...args} />

export const Default = Template.bind({})

export const isClosed = Template.bind({})
isClosed.args = {
  isClosed: true,
}

export const isLoading = Template.bind({})
isLoading.args = {
  isLoading: true,
}

export const isNew = Template.bind({})
isNew.args = {
  isNew: true,
}
