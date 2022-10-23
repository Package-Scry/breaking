import { expect, test } from "vitest"
import path from "path"
import fs from "fs"
import { getBreakingChange } from "../../src/getBreakingChange"

test("getting breaking changes in a file with inconsistent header types", () => {
  const uriRaw = path.join(__dirname, "mongoV3Raw.txt")
  const uriBreaking = path.join(__dirname, "mongoV3Breaking.txt")

  const changesRaw = fs.readFileSync(uriRaw, "utf-8").toString()
  const changesHtml = fs.readFileSync(uriBreaking, "utf-8")
  const breakingChanges = getBreakingChange(changesRaw)

  expect(breakingChanges).eq(changesHtml)
})
test("getting breaking changes in a file with proper header types", () => {
  const uriRaw = path.join(__dirname, "json2csvV5Raw.txt")
  const uriBreaking = path.join(__dirname, "json2csvV5Breaking.txt")

  const changesRaw = fs.readFileSync(uriRaw, "utf-8").toString()
  const changesHtml = fs.readFileSync(uriBreaking, "utf-8").toString()
  const breakingChanges = getBreakingChange(changesRaw)

  expect(breakingChanges).eq(changesHtml)
})
