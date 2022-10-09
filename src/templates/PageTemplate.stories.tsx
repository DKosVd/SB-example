import { ComponentMeta, ComponentStory } from '@storybook/react'
import { cartItems } from 'stub/cart-items'

import { PageTemplate } from './PageTemplate'

export default {
  title: 'Templates/PageTemplate',
  component: PageTemplate,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof PageTemplate>

const DummyComponent: React.FC = ({ children }) => <div style={{ padding: 60 }}>{children}</div>

const Tempalte: ComponentStory<typeof PageTemplate> = (args) => <PageTemplate {...args} />

export const Default = Tempalte.bind({})

Default.args = {
  type: 'default',
  children: <DummyComponent>This some text, Default</DummyComponent>,
}

export const Sticky = Tempalte.bind({})
Sticky.args = {
  type: 'sticky-header',
  children: <DummyComponent>This some text, Sticky</DummyComponent>,
}

export const WithItemState = Tempalte.bind({})
WithItemState.parameters = {
  store: {
    initialState: {
      cart: {
        items: cartItems,
      },
    },
  },
}

export const Basic = Tempalte.bind({})
Basic.args = {
  type: 'basic',
  children: <DummyComponent>This some text, Basic</DummyComponent>,
}
