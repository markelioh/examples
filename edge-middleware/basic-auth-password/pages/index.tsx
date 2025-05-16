import { Layout, Page, Text, List } from '@vercel/examples-ui'

export default function Index() {
  return (
    <Page>
      <Text variant="h2" className="mb-6">
        Password-protected page demo
      </Text>
      <List>
        <li>Username: admin</li>
        <li>Password: admin1234</li>
      </List>
    </Page>
  )
}

Index.Layout = Layout
