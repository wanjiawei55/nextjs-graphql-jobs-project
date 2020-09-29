import '../styles/globals.css'
import { ApolloProvider, ApolloClient, HttpLink, InMemoryCache } from "@apollo/client"

function MyApp({ Component, pageProps }) {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: 'https://api.graphql.jobs'
    })
  })

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp
