import { assert, expect, test } from "vitest"
import { reactChangeLogsV18 } from "./mocks"
import { getChangeLog } from "../../src/getChangeLog"

test("getting change logs (for react 15-latest)", async () => {
  const changeLogs = await getChangeLog({
    name: "react",
    currentVersion: "15.0.0",
  })

  console.log(changeLogs[0])

  expect(changeLogs).toStrictEqual(reactChangeLogsV18)

  assert.deepEqual(changeLogs, reactChangeLogsV18, "matches original")
})
