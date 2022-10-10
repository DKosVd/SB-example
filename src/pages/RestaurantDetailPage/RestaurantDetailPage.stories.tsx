import { rest } from 'msw'
import { within, userEvent } from '@storybook/testing-library'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { BASE_URL } from 'api'
import { restaurants } from 'stub/restaurants'
import { expect } from '@storybook/jest'

import { RestaurantDetailPage } from './RestaurantDetailPage'

export default {
  title: 'Pages/RestaurantDetailPage',
  component: RestaurantDetailPage,
  parameters: {
    deeplink: {
      path: '/restaurants/:id',
      route: '/restaurants/1',
    },
  },
} as ComponentMeta<typeof RestaurantDetailPage>

const Template: ComponentStory<typeof RestaurantDetailPage> = (args) => (
  <>
    <div id="modal" />
    <RestaurantDetailPage {...args} />
  </>
)

export const Default = Template.bind({})

export const Success = Template.bind({})
Success.parameters = {
  msw: {
    handlers: [rest.get(BASE_URL, (req, res, ctx) => res(ctx.json(restaurants[0])))],
  },
}

export const WithModalOpen = Template.bind({})
WithModalOpen.parameters = {
  ...Success.parameters,
}
WithModalOpen.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const itemFromMenu = await canvas.findByText(/Cheeseburger/i)
  await userEvent.click(itemFromMenu)
  expect(canvas.getByTestId('modal')).toBeInTheDocument()
}

export const NotFound = Template.bind({})
NotFound.parameters = {
  msw: {
    handlers: [rest.get(BASE_URL, (req, res, ctx) => res(ctx.status(404)))],
  },
}

export const Error = Template.bind({})
Error.parameters = {
  msw: {
    handlers: [rest.get(BASE_URL, (req, res, ctx) => res(ctx.status(500)))],
  },
}

export const Loading = Template.bind({})
Loading.parameters = {
  msw: {
    handlers: [rest.get(BASE_URL, (req, res, ctx) => res(ctx.delay('infinite')))],
  },
}
