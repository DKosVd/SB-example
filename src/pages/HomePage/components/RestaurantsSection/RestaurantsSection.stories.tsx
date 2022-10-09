import { ComponentMeta, ComponentStory } from '@storybook/react'
import { restaurants } from 'stub/restaurants'
import { rest } from 'msw'
import { BASE_URL } from 'api'

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

Default.parameters = {
  msw: {
    handlers: [rest.get(BASE_URL, (req, res, ctx) => res(ctx.json(restaurants)))],
  },
}

export const Loading = Template.bind({})
Loading.args = {
  title: 'Our favourite picks',
}

Loading.parameters = {
  msw: {
    handlers: [rest.get(BASE_URL, (req, res, ctx) => res(ctx.delay('infinite')))],
  },
}
