[**Azalea v1.0.0**](../README.md) • **Docs**

***

[Azalea v1.0.0](../README.md) / app

# Function: app()

## app(req, res)

> **app**(`req`, `res`): `any`

Express instance itself is a request handler, which could be invoked without
third argument.

### Parameters

• **req**: `IncomingMessage` \| `Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`\<`string`, `any`\>\>

• **res**: `Response`\<`any`, `Record`\<`string`, `any`\>, `number`\> \| `ServerResponse`\<`IncomingMessage`\>

### Returns

`any`

### Defined in

src/index.ts:4

## app(req, res, next)

> **app**(`req`, `res`, `next`): `void`

### Parameters

• **req**: `Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`\<`string`, `any`\>\>

• **res**: `Response`\<`any`, `Record`\<`string`, `any`\>, `number`\>

• **next**: `NextFunction`

### Returns

`void`

### Defined in

src/index.ts:4
