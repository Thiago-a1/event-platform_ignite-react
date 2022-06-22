import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o2eyjt085t01xi7y3d23zm/master',
  cache: new InMemoryCache()
})