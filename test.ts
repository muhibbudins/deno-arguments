import { args } from "deno"
import Arguments from ".";

console.log(Arguments(args))
/*
 * Run : deno test.ts variable --env=development -b boop --test=true --beep boop
 * { variable: true, env: "development", b: "boop", test: "true", beep: "boop" }
 */