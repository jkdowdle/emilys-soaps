import React from 'react'
import { Field, Label, Control, Input, TextArea, Button } from 'bloomer'

export const OrderForm = () => (
  <form>
    <Field>
      <Label>Name</Label>
      <Control>
        <Input name="name" type="text" />
      </Control>
    </Field>

    <Field>
      <Label>Email</Label>
      <Control>
        <Input name="email" type="email" />
      </Control>
    </Field>

    <Field>
      <Label>Venmo ID</Label>
      <Control>
        <Input name="venmo" type="text" />
      </Control>
    </Field>

    <Field>
      <Label>Order</Label>
      <Control>
        <TextArea name="order" placeholder="Six purple soaps" />
      </Control>
    </Field>

    <Field  isGrouped>
      <Control>
        <Button isColor="info">Submit</Button>
      </Control>
      <Control>
        <Button isColor="danger">Cancel</Button>
      </Control>
    </Field>
  </form>
)

export default OrderForm
