import { GraphQLClient } from "graphql-request";
import { graphql, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { expect, test } from "vitest";

test("GraphQL mocks should work", async () => {
  const expected = { hello: "world" };
  const msw = setupServer(
    graphql.operation<typeof expected>(() =>
      HttpResponse.json({ data: expected })
    )
  );
  msw.listen({ onUnhandledRequest: "error" });

  try {
    const client = new GraphQLClient("http://localhost/api/graphql/");
    const data = await client.request("query { hello }");

    expect(data).toStrictEqual(expected);
  } finally {
    msw.close();
  }
});
