# Some weird issue with `msw` > `2.4.3`

I _briefly_ had it, but now I cannot reproduce it anymore :(

```
> test
> vitest run


 RUN  v2.1.8 /Users/code/msw-graphql-readable-stream-is-locked

stderr | issue.spec.ts > GraphQL mocks should work
TypeError: Invalid state: ReadableStream is locked
    at setupReadableStreamDefaultReader (node:internal/webstreams/readablestream:2278:11)
    at new ReadableStreamDefaultReader (node:internal/webstreams/readablestream:839:5)
    at readableStreamDefaultTee (node:internal/webstreams/readablestream:1600:18)
    at readableStreamTee (node:internal/webstreams/readablestream:1596:10)
    at ReadableStream.tee (node:internal/webstreams/readablestream:454:12)
    at Function.cloneBodyStream (file:///Users/code/msw-graphql-readable-stream-is-locked/node_modules/happy-dom/src/fetch/utilities/FetchBodyUtility.ts:144:53)
    at new Request (file:///Users/code/msw-graphql-readable-stream-is-locked/node_modules/happy-dom/src/fetch/Request.ts:77:60)
    at new Request (file:///Users/code/msw-graphql-readable-stream-is-locked/node_modules/happy-dom/src/window/WindowContextClassExtender.ts:169:3)
    at Request.clone (file:///Users/code/msw-graphql-readable-stream-is-locked/node_modules/happy-dom/src/fetch/Request.ts:387:10)
    at getGraphQLInput (file:///Users/code/msw-graphql-readable-stream-is-locked/node_modules/msw/src/core/utils/internal/parseGraphQLRequest.ts:116:36) {
  code: 'ERR_INVALID_STATE'
}

 ❯ issue.spec.ts (1)
   × GraphQL mocks should work

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Failed Tests 1 ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯

 FAIL  issue.spec.ts > GraphQL mocks should work
Error: GraphQL Error (Code: 500): {"response":{"name":"TypeError","message":"Invalid state: ReadableStream is locked","stack":"TypeError: Invalid state: ReadableStream is locked\n    at setupReadableStreamDefaultReader (node:internal/webstreams/readablestream:2278:11)\n    at new ReadableStreamDefaultReader (node:internal/webstreams/readablestream:839:5)\n    at readableStreamDefaultTee (node:internal/webstreams/readablestream:1600:18)\n    at readableStreamTee (node:internal/webstreams/readablestream:1596:10)\n    at ReadableStream.tee (node:internal/webstreams/readablestream:454:12)\n    at Function.cloneBodyStream (file:///Users/code/msw-graphql-readable-stream-is-locked/node_modules/happy-dom/src/fetch/utilities/FetchBodyUtility.ts:144:53)\n    at new Request (file:///Users/code/msw-graphql-readable-stream-is-locked/node_modules/happy-dom/src/fetch/Request.ts:77:60)\n    at new Request (file:///Users/code/msw-graphql-readable-stream-is-locked/node_modules/happy-dom/src/window/WindowContextClassExtender.ts:169:3)\n    at Request.clone (file:///Users/code/msw-graphql-readable-stream-is-locked/node_modules/happy-dom/src/fetch/Request.ts:387:10)\n    at onUnhandledRequest (file:///Users/code/msw-graphql-readable-stream-is-locked/node_modules/msw/src/core/utils/request/onUnhandledRequest.ts:30:23)","status":500,"headers":{}},"request":{"query":"query { hello }"}}
 ❯ makeRequest node_modules/graphql-request/src/index.ts:426:11
 ❯ issue.spec.ts:17:18
     15|   try {
     16|     const client = new GraphQLClient("http://localhost/api/graphql/");
     17|     const data = await client.request("query { hello }");
       |                  ^
     18|
     19|     expect(data).toStrictEqual(expected);

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
Serialized Error: { response: { name: 'TypeError', message: 'Invalid state: ReadableStream is locked', stack: 'TypeError: Invalid state: ReadableStream is locked\n    at setupReadableStreamDefaultReader (node:internal/webstreams/readablestream:2278:11)\n    at new ReadableStreamDefaultReader (node:internal/webstreams/readablestream:839:5)\n    at readableStreamDefaultTee (node:internal/webstreams/readablestream:1600:18)\n    at readableStreamTee (node:internal/webstreams/readablestream:1596:10)\n    at ReadableStream.tee (node:internal/webstreams/readablestream:454:12)\n    at Function.cloneBodyStream (file:///Users/code/msw-graphql-readable-stream-is-locked/node_modules/happy-dom/src/fetch/utilities/FetchBodyUtility.ts:144:53)\n    at new Request (file:///Users/code/msw-graphql-readable-stream-is-locked/node_modules/happy-dom/src/fetch/Request.ts:77:60)\n    at new Request (file:///Users/code/msw-graphql-readable-stream-is-locked/node_modules/happy-dom/src/window/WindowContextClassExtender.ts:169:3)\n    at Request.clone (file:///Users/code/msw-graphql-readable-stream-is-locked/node_modules/happy-dom/src/fetch/Request.ts:387:10)\n    at onUnhandledRequest (file:///Users/code/msw-graphql-readable-stream-is-locked/node_modules/msw/src/core/utils/request/onUnhandledRequest.ts:30:23)', status: 500, headers: { constructor: 'Function<Headers>', get: 'Function<get>', forEach: 'Function<forEach>', set: 'Function<set>', append: 'Function<append>', has: 'Function<has>', delete: 'Function<delete>', raw: 'Function<raw>', keys: 'Function<keys>', values: 'Function<values>', entries: 'Function<[Symbol.iterator]>' } }, request: { query: 'query { hello }', variables: undefined } }
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯

 Test Files  1 failed (1)
      Tests  1 failed (1)
   Start at  15:52:07
   Duration  416ms (transform 28ms, setup 0ms, collect 76ms, tests 23ms, environment 113ms, prepare 63ms)
```
