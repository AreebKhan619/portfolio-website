import React from "react";
import ReactDOM from "react-dom/client";
import { segmentLogScriptSetup } from "./analytics/segment";
import GlobalStyles from "./assets/styles/globalStyles";
import App from "./pages";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE_ID}/environments/master?access_token=${process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN}`,
  cache: new InMemoryCache(),
});

segmentLogScriptSetup();

const root = ReactDOM.createRoot(document.getElementById("root") as Element);
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
