export const mongoMajorChangeLogs = [
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

export const json2csvMajorChangeLogs = [
  {
    version: "5.0.0",
    changes: {
      breaking:
        '<h3 id="⚠-breaking-changes">⚠ BREAKING CHANGES</h3>\n' +
        "<ul>\n" +
        "<li><p>Node 8 and 9 no longer supported, use Node 10 or greater. It might still work, but it has reached End-Of-Life.</p>\n" +
        "</li>\n" +
        "<li><p>module no longer takes <code>unwind</code>, <code>unwindBlank</code>, <code>flatten</code> or the <code>flattenSeparator</code> options, instead see the new <code>transforms</code> option. CLI options are unchanged from the callers side, but use the built in transforms under the hood.</p>\n" +
        "</li>\n" +
        "<li><p>Add support for transforms</p>\n" +
        "</li>\n" +
        "<li><p>Add documentation about transforms</p>\n" +
        "</li>\n" +
        "<li><p>remove extra commonjs build, use starting point in package.json <code>main</code> field.</p>\n" +
        "</li>\n" +
        "<li><p>Renamed <code>doubleQuote</code> to <code>escapedQuote</code></p>\n" +
        "</li>\n" +
        "<li><p>remove <code>stringify</code> option</p>\n" +
        "</li>\n" +
        "<li><p><code>--fields-config</code> option has been removed, use the new <code>--config</code> option for all configuration, not just fields.</p>\n" +
        "</li>\n" +
        "<li><p>Drop node 6 and 7, and add node 11 and 12</p>\n" +
        "</li>\n" +
        "</ul>\n",
    },
  },
  {
    version: "4.0.0",
    changes: {
      breaking:
        '<h3 id="bug-fixes">Bug Fixes</h3>\n' +
        "<ul>\n" +
        '<li>Replace webpack with rollup packaging (<a href="https://github.com/zemirco/json2csv/issues/266">#266</a>) (<a href="https://github.com/zemirco/json2csv/commit/a9f8020">a9f8020</a>)</li>\n' +
        "</ul>\n" +
        '<h3 id="features">Features</h3>\n' +
        "<ul>\n" +
        '<li>Pass transform options through (<a href="https://github.com/zemirco/json2csv/issues/262">#262</a>) (<a href="https://github.com/zemirco/json2csv/commit/650913f">650913f</a>)</li>\n' +
        "</ul>\n" +
        '<p><a name="4.0.0-alpha.2"></a></p>\n',
    },
  },
  {
    version: "2.0.0",
    changes: { breaking: "<ul>\n<li>err in callback function</li>\n</ul>\n" },
  },
]

export const json2csvMajorChangeLogsConsistent = [
  {
    version: "5.0.0",
    changes: {
      breaking:
        '<h3 id="⚠-breaking-changes">⚠ BREAKING CHANGES</h3>\n' +
        "<ul>\n" +
        "<li><p>Node 8 and 9 no longer supported, use Node 10 or greater. It might still work, but it has reached End-Of-Life.</p>\n" +
        "</li>\n" +
        "<li><p>module no longer takes <code>unwind</code>, <code>unwindBlank</code>, <code>flatten</code> or the <code>flattenSeparator</code> options, instead see the new <code>transforms</code> option. CLI options are unchanged from the callers side, but use the built in transforms under the hood.</p>\n" +
        "</li>\n" +
        "<li><p>Add support for transforms</p>\n" +
        "</li>\n" +
        "<li><p>Add documentation about transforms</p>\n" +
        "</li>\n" +
        "<li><p>remove extra commonjs build, use starting point in package.json <code>main</code> field.</p>\n" +
        "</li>\n" +
        "<li><p>Renamed <code>doubleQuote</code> to <code>escapedQuote</code></p>\n" +
        "</li>\n" +
        "<li><p>remove <code>stringify</code> option</p>\n" +
        "</li>\n" +
        "<li><p><code>--fields-config</code> option has been removed, use the new <code>--config</code> option for all configuration, not just fields.</p>\n" +
        "</li>\n" +
        "<li><p>Drop node 6 and 7, and add node 11 and 12</p>\n" +
        "</li>\n" +
        "</ul>\n",
    },
  },
  {
    version: "4.0.0",
    changes: {
      breaking:
        '<h3 id="bug-fixes">Bug Fixes</h3>\n' +
        "<ul>\n" +
        '<li>Replace webpack with rollup packaging (<a href="https://github.com/zemirco/json2csv/issues/266">#266</a>) (<a href="https://github.com/zemirco/json2csv/commit/a9f8020">a9f8020</a>)</li>\n' +
        "</ul>\n" +
        '<h3 id="features">Features</h3>\n' +
        "<ul>\n" +
        '<li>Pass transform options through (<a href="https://github.com/zemirco/json2csv/issues/262">#262</a>) (<a href="https://github.com/zemirco/json2csv/commit/650913f">650913f</a>)</li>\n' +
        "</ul>\n" +
        '<p><a name="4.0.0-alpha.2"></a></p>\n',
    },
  },
]
