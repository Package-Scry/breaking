import { expect, test } from "vitest"
import path from "path"
import fs from "fs"
import {
  getMajorChangeLogs,
  getMajorVersionHeaders,
} from "../../src/getChangeLogFromFile"
import { REG_X_HEADER } from "../../src/constants"

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

const mongoMajorChangeLogs = [
  {
    version: "3.0.0",
    changes: {
      breaking:
        '<h3 id="breaking-changes"><strong>BREAKING CHANGES</strong></h3>\n' +
        "<ul>\n" +
        "<li>Drop Node.js 4 &amp; 6 support</li>\n" +
        "<li>Upgrade <code>mongoose</code> to v5 and <code>mongodb</code> to v3 and drop old version support</li>\n" +
        "<li>Replace deprecated mongo operation</li>\n" +
        "<li>MongoStore need to supply client/clientPromise instead of db/dbPromise due to depns upgrade</li>\n" +
        "</ul>\n" +
        '<h2 id="added">Added</h2>\n' +
        "<ul>\n" +
        "<li>Add Node.js 10 &amp; 12 support</li>\n" +
        "<li>Implement store.all function (#291)</li>\n" +
        "<li>Add option <code>writeOperationOptions</code> (#295)</li>\n" +
        "<li>Add Transparent crypto support (#314)</li>\n" +
        "</ul>\n" +
        '<h2 id="changed">Changed</h2>\n' +
        "<ul>\n" +
        "<li>Change test framework from Mocha to Jest</li>\n" +
        "<li>Change linter from <code>xo</code> to <code>eslint</code></li>\n" +
        "</ul>\n" +
        '<h2 id="203---2018-12-03">[2.0.3] - 2018-12-03</h2>\n' +
        '<h2 id="fixed">Fixed</h2>\n' +
        "<ul>\n" +
        "<li>Fixed interval autoremove mode to use current date with every interval (#304, #305) (jlampise)</li>\n" +
        "</ul>\n" +
        '<h2 id="202---2018-11-20">[2.0.2] - 2018-11-20</h2>\n' +
        '<h2 id="fixed-1">Fixed</h2>\n' +
        "<ul>\n" +
        "<li>Fxi #300 DeprecationWarning: collection.remove is deprecated. Use deleteOne, deleteMany, or bulkWrite instead</li>\n" +
        "<li>Fxi #297 DeprecationWarning: collection.update is deprecated. Use updateOne, updateMany, or bulkWrite instead</li>\n" +
        "</ul>\n" +
        '<h2 id="201---2018-01-04">[2.0.1] - 2018-01-04</h2>\n' +
        '<h2 id="fixed-2">Fixed</h2>\n' +
        "<ul>\n" +
        "<li>Fixed #271 TypeError: cb is not a function (brainthinks)</li>\n" +
        "</ul>\n",
    },
  },
  {
    version: "2.0.0",
    changes: {
      breaking:
        '<h3 id="breaking-changes"><strong>BREAKING CHANGES</strong></h3>\n' +
        "<ul>\n" +
        "<li><strong>Drop</strong> Node.js 0.12 and io.js support</li>\n" +
        "<li><strong>Drop</strong> MongoDB 2.x support</li>\n" +
        "<li><strong>Drop</strong> mongodb driver &lt; 2.0.36 support</li>\n" +
        "<li><strong>Drop</strong> mongoose &lt; 4.1.2 support</li>\n" +
        "</ul>\n" +
        '<h2 id="changed">Changed</h2>\n' +
        "<ul>\n" +
        "<li><strong>Fix</strong> <code>ensureIndex</code> deprecation warning ([</li>\n" +
        "</ul>\n",
    },
  },
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
  console.log("BEGIN")
  const majorChangeLogs = getMajorChangeLogs(changesRaw, majorVersionHeaders)

  expect(majorChangeLogs).toStrictEqual(mongoMajorChangeLogs)
})
