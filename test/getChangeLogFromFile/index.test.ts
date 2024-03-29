import { assert, expect, test } from "vitest"
import path from "path"
import fs from "fs"
import {
  getMajorChangeLogs,
  getMajorVersionHeaders,
} from "../../src/getChangeLogFromFile"
import {
  json2csvMajorChangeLogs,
  mongoMajorChangeLogs,
  reactMajorChangeLogs,
} from "./mocks"
import { getHeaders } from "../../src/utils"

const json2csvMajorVersionHeaders = [
  "## [5.0.0](https://github.com/zemirco/json2csv/compare/v4.5.2...v5.0.0) (2020-03-15)",
  "# [4.0.0](https://github.com/zemirco/json2csv/compare/v4.0.0-alpha.2...v4.0.0) (2018-02-27)",
  "## 2.0.0 / 2013-03-04",
]
const mongoMajorVersionHeaders = [
  "## [3.0.0] - 2019-06-17",
  "## [2.0.0] - 2017-10-09",
]

test("getting major headers in a file with consistent header types", () => {
  const uriRaw = path.join(__dirname, "json2csvRaw.txt")
  const changesRaw = fs.readFileSync(uriRaw, "utf-8").toString()
  const headers: string[] = getHeaders(changesRaw)
  const majorVersionHeaders = getMajorVersionHeaders(headers)

  expect(majorVersionHeaders).toEqual(json2csvMajorVersionHeaders)
})

test("getting major headers in a file with inconsistent header types", () => {
  const uriRaw = path.join(__dirname, "mongoRaw.txt")
  const changesRaw = fs.readFileSync(uriRaw, "utf-8").toString()
  const headers: string[] = getHeaders(changesRaw)
  const majorVersionHeaders = getMajorVersionHeaders(headers)

  expect(majorVersionHeaders).toEqual(mongoMajorVersionHeaders)
})

test("getting major headers in a file with consistent header types 2", () => {
  const uriRaw = path.join(__dirname, "json2csvRaw.txt")
  const changesRaw = fs.readFileSync(uriRaw, "utf-8").toString()
  const headers: string[] = getHeaders(changesRaw)
  const majorVersionHeaders = getMajorVersionHeaders(headers)

  expect(majorVersionHeaders).toEqual(json2csvMajorVersionHeaders)
})

test("getting major change logs in a file with inconsistent header types", () => {
  const uriRaw = path.join(__dirname, "mongoRaw.txt")
  const changesRaw = fs.readFileSync(uriRaw, "utf-8").toString()
  const headers: string[] = getHeaders(changesRaw)
  const majorChangeLogs = getMajorChangeLogs(changesRaw, headers)

  expect(majorChangeLogs).toStrictEqual(mongoMajorChangeLogs)
})

test("getting major change logs in a file with inconsistent header types 2", () => {
  const uriRaw = path.join(__dirname, "json2csvRaw.txt")
  const changesRaw = fs.readFileSync(uriRaw, "utf-8").toString()
  const headers: string[] = getHeaders(changesRaw)
  const majorChangeLogs = getMajorChangeLogs(changesRaw, headers)

  expect(majorChangeLogs).toStrictEqual(json2csvMajorChangeLogs)

  assert.deepEqual(majorChangeLogs, json2csvMajorChangeLogs, "matches original")
})

test("getting major change logs in a file with consistent header types", () => {
  const uriRaw = path.join(__dirname, "reactRaw.txt")
  const changesRaw = fs.readFileSync(uriRaw, "utf-8").toString()
  const headers: string[] = getHeaders(changesRaw)
  const majorChangeLogs = getMajorChangeLogs(changesRaw, headers)

  expect(majorChangeLogs[1].changes).toStrictEqual(
    reactMajorChangeLogs[1].changes
  )
})
