import { expect, test } from "vitest"
import path from "path"
import fs from "fs"
import { getMajorVersionHeaders } from "../../src/getChangeLogFromFile"
import { REG_X_HEADER } from "../../src/constants"

const MAJOR_VERSION_HEADERS = [
  "## [6.0.0-alpha.1](https://github.com/zemirco/json2csv/compare/v6.0.0-alpha.0...v6.0.0-alpha.1) (2022-02-23)",
  "## [6.0.0-alpha.0](https://github.com/zemirco/json2csv/compare/v5.0.3...v6.0.0-alpha.0) (2021-04-14)",
  "## [5.0.0](https://github.com/zemirco/json2csv/compare/v4.5.2...v5.0.0) (2020-03-15)",
  "# [4.0.0](https://github.com/zemirco/json2csv/compare/v4.0.0-alpha.2...v4.0.0) (2018-02-27)",
  "# [4.0.0-alpha.2](https://github.com/zemirco/json2csv/compare/v4.0.0-alpha.1...v4.0.0-alpha.2) (2018-02-25)",
  "# [4.0.0-alpha.1](https://github.com/zemirco/json2csv/compare/v4.0.0-alpha.0...v4.0.0-alpha.1) (2018-02-21)",
  "# [4.0.0-alpha.0](https://github.com/zemirco/json2csv/compare/v3.11.5...v4.0.0-alpha.0) (2018-02-21)",
  "## 2.0.0 / 2013-03-04",
]

test("getting major headers in a file with consistent header types", () => {
  const uriRaw = path.join(__dirname, "json2csvRaw.txt")
  const changesRaw = fs.readFileSync(uriRaw, "utf-8").toString()
  const headers: string[] = changesRaw?.match(REG_X_HEADER) ?? []
  const majorVersionHeaders = getMajorVersionHeaders(headers)

  expect(majorVersionHeaders).toEqual(MAJOR_VERSION_HEADERS)
})
