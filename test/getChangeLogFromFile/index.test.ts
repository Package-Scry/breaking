import { expect, test } from "vitest"
import path from "path"
import fs from "fs"
import {
  getMajorChangeLogs,
  getMajorVersionHeaders,
} from "../../src/getChangeLogFromFile"
import { REG_X_HEADER } from "../../src/constants"
import {
  json2csvMajorChangeLogsConsistent,
  mongoMajorChangeLogs,
} from "./mocks"

const json2csvMajorVersionHeaders = [
  "## [6.0.0-alpha.1](https://github.com/zemirco/json2csv/compare/v6.0.0-alpha.0...v6.0.0-alpha.1) (2022-02-23)",
  "## [6.0.0-alpha.0](https://github.com/zemirco/json2csv/compare/v5.0.3...v6.0.0-alpha.0) (2021-04-14)",
  "## [5.0.0](https://github.com/zemirco/json2csv/compare/v4.5.2...v5.0.0) (2020-03-15)",
  "# [4.0.0](https://github.com/zemirco/json2csv/compare/v4.0.0-alpha.2...v4.0.0) (2018-02-27)",
  "# [4.0.0-alpha.2](https://github.com/zemirco/json2csv/compare/v4.0.0-alpha.1...v4.0.0-alpha.2) (2018-02-25)",
  "# [4.0.0-alpha.1](https://github.com/zemirco/json2csv/compare/v4.0.0-alpha.0...v4.0.0-alpha.1) (2018-02-21)",
  "# [4.0.0-alpha.0](https://github.com/zemirco/json2csv/compare/v3.11.5...v4.0.0-alpha.0) (2018-02-21)",
  "## 2.0.0 / 2013-03-04",
]
const mongoMajorVersionHeaders = [
  "## [3.0.0] - 2019-06-17",
  "## [2.0.0] - 2017-10-09",
]

test("getting major headers in a file with consistent header types", () => {
  const uriRaw = path.join(__dirname, "json2csvRaw.txt")
  const changesRaw = fs.readFileSync(uriRaw, "utf-8").toString()
  const headers: string[] = changesRaw?.match(REG_X_HEADER) ?? []
  const majorVersionHeaders = getMajorVersionHeaders(headers)

  expect(majorVersionHeaders).toEqual(json2csvMajorVersionHeaders)
})

test("getting major headers in a file with inconsistent header types", () => {
  const uriRaw = path.join(__dirname, "mongoRaw.txt")
  const changesRaw = fs.readFileSync(uriRaw, "utf-8").toString()
  const headers: string[] = changesRaw?.match(REG_X_HEADER) ?? []
  const majorVersionHeaders = getMajorVersionHeaders(headers)

  expect(majorVersionHeaders).toEqual(mongoMajorVersionHeaders)
})

test("getting major change logs in a file with inconsistent header types", () => {
  const uriRaw = path.join(__dirname, "mongoRaw.txt")
  const changesRaw = fs.readFileSync(uriRaw, "utf-8").toString()
  const headers: string[] = changesRaw?.match(REG_X_HEADER) ?? []
  const majorVersionHeaders = getMajorVersionHeaders(headers)
  const majorChangeLogs = getMajorChangeLogs(changesRaw, majorVersionHeaders)

  expect(majorChangeLogs).toStrictEqual(mongoMajorChangeLogs)
})

test("getting major change logs in a file with consistent header types", () => {
  const uriRaw = path.join(__dirname, "json2csvRawConsistent.txt")
  const changesRaw = fs.readFileSync(uriRaw, "utf-8").toString()
  const headers: string[] = changesRaw?.match(REG_X_HEADER) ?? []
  const majorVersionHeaders = getMajorVersionHeaders(headers)
  const majorChangeLogs = getMajorChangeLogs(changesRaw, majorVersionHeaders)

  expect(majorChangeLogs).toStrictEqual(json2csvMajorChangeLogsConsistent)
})
