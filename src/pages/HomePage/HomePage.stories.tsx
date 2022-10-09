import { ComponentMeta, ComponentStory } from '@storybook/react'
import { BASE_URL } from 'api'
import { rest } from 'msw'
import { restaurants } from 'stub/restaurants'

import { HomePage } from './HomePage'

export default {
  title: 'Pages/HomePage/HomePage',
  component: HomePage,
  parameters: {
    layout: 'fullscreen',
    msw: {
      hanlders: [rest.get(BASE_URL, (req, res, ctx) => res(ctx.json(restaurants)))],
    },
  },
} as ComponentMeta<typeof HomePage>

const Template: ComponentStory<typeof HomePage> = () => <HomePage />

export const Default = Template.bind({})
