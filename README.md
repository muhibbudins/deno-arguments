# Arguments

Simple CLI arguments parser for Deno — Learn Deno

### Usage

Example code, create file **test.ts** and fill with below code.

```ts
import { args } from "deno"
import Arguments from "https://github.com/muhibbudins/deno-arguments/index.ts";

console.log(Arguments(args))
```

And then run :
```
$ deno test.ts variable --env=development -b boop --test=true --beep boop
$ > { variable: true, env: "development", b: "boop", test: "true", beep: "boop" }
```

### License

This project under MIT License