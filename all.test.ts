import { TESTS } from "./packages/utils/test.ts";
import "./packages/tests/all.test.ts";

TESTS.forEach(test => test.run());
