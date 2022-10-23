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

export const json2csvMajorChangeLogs = [
  {
    version: "6.0.0",
    changes: {
      breaking:
        '<h3 id="features">Features</h3>\n' +
        "<ul>\n" +
        '<li>expose JSON2CSVStreamParser (<a href="https://github.com/zemirco/json2csv/commit/d47670780f3dd07299ece99c7a5de409f714d21f">d476707</a>)</li>\n' +
        "</ul>\n" +
        '<h3 id="bug-fixes">Bug Fixes</h3>\n' +
        "<ul>\n" +
        '<li>fix missing ndjson option to CLI (<a href="https://github.com/zemirco/json2csv/commit/885e28bef66777d715f6df575f971525391efbbe">885e28b</a>)</li>\n' +
        '<li>fix some issues in the AsyncParser tests (<a href="https://github.com/zemirco/json2csv/commit/695f116cca80f316a802b85c6065ad5db3b9d2d8">695f116</a>)</li>\n' +
        '<li>reset lockfile due to changes in url patterns for github (<a href="https://github.com/zemirco/json2csv/commit/b58937294b383946067f0eb415e484f645c420f0">b589372</a>)</li>\n' +
        '<li>unwind transform issue with nested arrays (<a href="https://github.com/zemirco/json2csv/issues/548">#548</a>) (<a href="https://github.com/zemirco/json2csv/commit/3cb57f3357b053ce0d4a26e474dae10e07d14ac4">3cb57f3</a>)</li>\n' +
        '<li>update engines and volta (<a href="https://github.com/zemirco/json2csv/commit/98984ddd479439c904c8434cafac6bdbabf2e6f2">98984dd</a>)</li>\n' +
        "</ul>\n",
    },
  },
  {
    version: "6.0.0",
    changes: {
      breaking:
        '<h3 id="⚠-breaking-changes">⚠ BREAKING CHANGES</h3>\n' +
        "<ul>\n" +
        "<li><p>Drop support for Node &lt; v12</p>\n" +
        "</li>\n" +
        "<li><p>AsyncParser API has changed, see the <code>Upgrading from 5.X to 6.X</code> section for details.</p>\n" +
        "</li>\n" +
        "<li><p>fix: consolidate the API of AsyncParser and parseAsync</p>\n" +
        "</li>\n" +
        "<li><p>feat: simplify AsyncParser</p>\n" +
        "</li>\n" +
        "<li><p>chore: drop support for node 11</p>\n" +
        "</li>\n" +
        "<li><p>refactor: improve AsyncParser parse method</p>\n" +
        "</li>\n" +
        "<li><p>docs: add links to node docs and fix few small issues</p>\n" +
        "</li>\n" +
        "<li><p>In the JavaScript modules, <code>formatters</code> are introduced and the <code>quote</code>, <code>escapedQuote</code> and <code>excelStrings</code> options are removed. See the migration notes in the readme. CLI hasn&#39;t changed.</p>\n" +
        "</li>\n" +
        "</ul>\n",
    },
  },
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
    version: "4.0.0",
    changes: {
      breaking:
        '<h3 id="bug-fixes">Bug Fixes</h3>\n' +
        "<ul>\n" +
        '<li>flatten issue with toJSON (<a href="https://github.com/zemirco/json2csv/issues/259">#259</a>) (<a href="https://github.com/zemirco/json2csv/commit/7006d2b">7006d2b</a>)</li>\n' +
        "</ul>\n" +
        '<p><a name="4.0.0-alpha.1"></a></p>\n',
    },
  },
  {
    version: "4.0.0",
    changes: {
      breaking:
        '<h3 id="bug-fixes">Bug Fixes</h3>\n' +
        "<ul>\n" +
        '<li>Remove TypeScript definition (<a href="https://github.com/zemirco/json2csv/issues/256">#256</a>) (<a href="https://github.com/zemirco/json2csv/commit/4f09694">4f09694</a>)</li>\n' +
        "</ul>\n" +
        '<p><a name="4.0.0-alpha.0"></a></p>\n',
    },
  },
  {
    version: "4.0.0",
    changes: {
      breaking:
        '<h3 id="bug-fixes">Bug Fixes</h3>\n' +
        "<ul>\n" +
        '<li>Add CLI tests (<a href="https://github.com/zemirco/json2csv/issues/247">#247</a>) (<a href="https://github.com/zemirco/json2csv/commit/bb8126f">bb8126f</a>)</li>\n' +
        '<li>Add excel string to cli and standardize (<a href="https://github.com/zemirco/json2csv/issues/231">#231</a>) (<a href="https://github.com/zemirco/json2csv/commit/421baad">421baad</a>)</li>\n' +
        '<li>Allow passing ldjson input files (<a href="https://github.com/zemirco/json2csv/issues/220">#220</a>) (<a href="https://github.com/zemirco/json2csv/commit/9c861ed">9c861ed</a>)</li>\n' +
        '<li>Avoid throwing an error on elements that can&#39;t be stringified (like functions) (<a href="https://github.com/zemirco/json2csv/issues/223">#223</a>) (<a href="https://github.com/zemirco/json2csv/commit/679c687">679c687</a>)</li>\n' +
        '<li>backslash logic (<a href="https://github.com/zemirco/json2csv/issues/222">#222</a>) (<a href="https://github.com/zemirco/json2csv/commit/29e9445">29e9445</a>)</li>\n' +
        '<li>broken stdin input (<a href="https://github.com/zemirco/json2csv/issues/241">#241</a>) (<a href="https://github.com/zemirco/json2csv/commit/6cb407c">6cb407c</a>)</li>\n' +
        '<li>Combine EOL and newLine parameters (<a href="https://github.com/zemirco/json2csv/issues/219">#219</a>) (<a href="https://github.com/zemirco/json2csv/commit/4668a8b">4668a8b</a>)</li>\n' +
        '<li>header flag (<a href="https://github.com/zemirco/json2csv/issues/221">#221</a>) (<a href="https://github.com/zemirco/json2csv/commit/7f7338f">7f7338f</a>)</li>\n' +
        '<li>outdated jsdoc (<a href="https://github.com/zemirco/json2csv/issues/243">#243</a>) (<a href="https://github.com/zemirco/json2csv/commit/efe9888">efe9888</a>)</li>\n' +
        '<li>pretty print issues (<a href="https://github.com/zemirco/json2csv/issues/242">#242</a>) (<a href="https://github.com/zemirco/json2csv/commit/3bd9655">3bd9655</a>)</li>\n' +
        '<li>Process header cells as any other cell (<a href="https://github.com/zemirco/json2csv/issues/244">#244</a>) (<a href="https://github.com/zemirco/json2csv/commit/1fcde13">1fcde13</a>)</li>\n' +
        '<li>Remove callback support (<a href="https://github.com/zemirco/json2csv/commit/2096ade">2096ade</a>)</li>\n' +
        '<li>Remove fieldNames (<a href="https://github.com/zemirco/json2csv/issues/232">#232</a>) (<a href="https://github.com/zemirco/json2csv/commit/6cc74b2">6cc74b2</a>)</li>\n' +
        '<li>Remove path-is-absolute dependency (<a href="https://github.com/zemirco/json2csv/issues/225">#225</a>) (<a href="https://github.com/zemirco/json2csv/commit/f71a3df">f71a3df</a>)</li>\n' +
        '<li>Rename hasCSVColumnTitle to noHeader (<a href="https://github.com/zemirco/json2csv/issues/216">#216</a>) (<a href="https://github.com/zemirco/json2csv/commit/f053c8b">f053c8b</a>)</li>\n' +
        '<li>Rename ld-json to ndjson (<a href="https://github.com/zemirco/json2csv/issues/240">#240</a>) (<a href="https://github.com/zemirco/json2csv/commit/24a7893">24a7893</a>)</li>\n' +
        '<li>Rename unwindPath to unwind (<a href="https://github.com/zemirco/json2csv/issues/230">#230</a>) (<a href="https://github.com/zemirco/json2csv/commit/7143bc7">7143bc7</a>)</li>\n' +
        '<li>Streamify pretty print (<a href="https://github.com/zemirco/json2csv/issues/248">#248</a>) (<a href="https://github.com/zemirco/json2csv/commit/fb7ad53">fb7ad53</a>)</li>\n' +
        "</ul>\n" +
        '<h3 id="chores">Chores</h3>\n' +
        "<ul>\n" +
        '<li>Refactor the entire library to ES6 (<a href="https://github.com/zemirco/json2csv/issues/233">#233</a>) (<a href="https://github.com/zemirco/json2csv/commit/dce4d33">dce4d33</a>)</li>\n' +
        "</ul>\n" +
        '<h3 id="features">Features</h3>\n' +
        "<ul>\n" +
        '<li>add doubleQuote to cli, rename other options to line up with the cli (<a href="https://github.com/zemirco/json2csv/commit/5e402dc">5e402dc</a>)</li>\n' +
        '<li>Add fields config option to CLI (<a href="https://github.com/zemirco/json2csv/issues/245">#245</a>) (<a href="https://github.com/zemirco/json2csv/commit/74ef666">74ef666</a>)</li>\n' +
        '<li>Add streaming API (<a href="https://github.com/zemirco/json2csv/issues/235">#235</a>) (<a href="https://github.com/zemirco/json2csv/commit/01ca93e">01ca93e</a>)</li>\n' +
        '<li>Split tests in multiple files (<a href="https://github.com/zemirco/json2csv/issues/246">#246</a>) (<a href="https://github.com/zemirco/json2csv/commit/839de77">839de77</a>)</li>\n' +
        "</ul>\n" +
        '<h3 id="breaking-changes">BREAKING CHANGES</h3>\n' +
        "<ul>\n" +
        "<li><p>Replaces field-list with field-config</p>\n" +
        "</li>\n" +
        "<li><p>Remove <code>preserveNewLinesInValues</code> option, preserve by default</p>\n" +
        "</li>\n" +
        "<li><p>Refactor the entire library to ES6</p>\n" +
        "</li>\n" +
        "<li><p>Fix PR issues</p>\n" +
        "</li>\n" +
        "<li><p>Add strict mode for node 4.X</p>\n" +
        "</li>\n" +
        "<li><p>Remove fieldNames</p>\n" +
        "</li>\n" +
        "<li><p>Increase coverage back to 100%</p>\n" +
        "</li>\n" +
        "<li><p>callback is no longer available, just return the csv from the json2csv.</p>\n" +
        "</li>\n" +
        "</ul>\n" +
        "<ul>\n" +
        "<li>updated tests</li>\n" +
        "<li>updated readme</li>\n" +
        "</ul>\n" +
        "<ul>\n" +
        "<li><ul>\n" +
        "<li>Rename unwindPath to unwind</li>\n" +
        "</ul>\n" +
        "</li>\n" +
        "<li><p>Fix field-list in CLI</p>\n" +
        "</li>\n" +
        "<li><p>newLine removed, eol kept.</p>\n" +
        "</li>\n" +
        "<li><p>Rename del to delimiter to match the cli flag</p>\n" +
        "</li>\n" +
        "<li><p>Rename quotes to quote to match the cli flag</p>\n" +
        "</li>\n" +
        "<li><p>Remove unused double quotes comment</p>\n" +
        "</li>\n" +
        "<li><p>Fix noHeader in CLI</p>\n" +
        "</li>\n" +
        "<li><p>Revert &quot;Remove unused double quotes comment&quot;</p>\n" +
        "</li>\n" +
        "</ul>\n" +
        "<p>This reverts commit 250d3e6ddf3062cbdc1e0174493a37fa21197d8e.</p>\n" +
        "<ul>\n" +
        "<li>Add doubleQuote to CLI</li>\n" +
        "<li>Rename hasCSVColumnTitle to noHeader to keep in line with the CLI</li>\n" +
        "</ul>\n" +
        '<p><a name="3.11.5"></a></p>\n' +
        '<h2 id="3115-2017-10-23"><a href="https://github.com/zemirco/json2csv/compare/v3.11.4...v3.11.5">3.11.5</a> (2017-10-23)</h2>\n' +
        '<h3 id="bug-fixes-1">Bug Fixes</h3>\n' +
        "<ul>\n" +
        '<li>backslash value not escaped properly (<a href="https://github.com/zemirco/json2csv/issues/202">#202</a>) (<a href="https://github.com/zemirco/json2csv/issues/204">#204</a>) (<a href="https://github.com/zemirco/json2csv/commit/2cf50f1">2cf50f1</a>)</li>\n' +
        "</ul>\n",
    },
  },
  {
    version: "2.0.0",
    changes: {
      breaking:
        "<ul>\n" +
        "<li>err in callback function</li>\n" +
        "</ul>\n" +
        '<h2 id="131--2013-02-20">1.3.1 / 2013-02-20</h2>\n' +
        "<ul>\n" +
        "<li>fix stdin encoding</li>\n" +
        "</ul>\n" +
        '<h2 id="130--2013-02-20">1.3.0 / 2013-02-20</h2>\n' +
        "<ul>\n" +
        '<li>support reading from stdin <a href="https://github.com/zeMirco/json2csv/pull/9">#9</a></li>\n' +
        "</ul>\n" +
        '<h2 id="120--2013-02-20">1.2.0 / 2013-02-20</h2>\n' +
        "<ul>\n" +
        '<li>support custom field names <a href="https://github.com/zeMirco/json2csv/pull/8">#8</a></li>\n' +
        "</ul>\n" +
        '<h2 id="110--2013-01-19">1.1.0 / 2013-01-19</h2>\n' +
        "<ul>\n" +
        "<li>add optional custom delimiter</li>\n" +
        "</ul>\n",
    },
  },
]
