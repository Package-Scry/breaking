import { assert, expect, test } from "vitest"
import { reactChangeLogsV18 } from "./mocks"
import { getChangeLog } from "../../src/getChangeLog"

test("getting change logs (for react 15-18)", async () => {
  // Testing only first three entries
  const changeLogs = (
    await getChangeLog({
      name: "react",
      currentVersion: "15.0.0",
    })
  ).slice(0, 3)

  expect(changeLogs).toStrictEqual(reactChangeLogsV18)

  assert.deepEqual(changeLogs, reactChangeLogsV18, "matches original")
})
