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

export const reactMajorChangeLogs = [
  {
    version: "18.0.0",
    changes: {
      breaking:
        '<h2 id="breaking-changes">Breaking Changes</h2>\n' +
        '<h3 id="react">React</h3>\n' +
        "<ul>\n" +
        '<li><strong>Automatic batching:</strong> This release introduces a performance improvement that changes to the way React batches updates to do more batching automatically. See <a href="https://github.com/reactwg/react-18/discussions/21">Automatic batching for fewer renders in React 18</a> for more info. In the rare case that you need to opt out, wrap the state update in <code>flushSync</code>.</li>\n' +
        "<li><strong>Stricter Strict Mode</strong>: In the future, React will provide a feature that lets components preserve state between unmounts. To prepare for it, React 18 introduces a new development-only check to Strict Mode. React will automatically unmount and remount every component, whenever a component mounts for the first time, restoring the previous state on the second mount. If this breaks your app, consider removing Strict Mode until you can fix the components to be resilient to remounting with existing state.</li>\n" +
        "<li><strong>Consistent useEffect timing</strong>: React now always synchronously flushes effect functions if the update was triggered during a discrete user input event such as a click or a keydown event. Previously, the behavior wasn&#39;t always predictable or consistent.</li>\n" +
        "<li><strong>Stricter hydration errors</strong>: Hydration mismatches due to missing or extra text content are now treated like errors instead of warnings. React will no longer attempt to &quot;patch up&quot; individual nodes by inserting or deleting a node on the client in an attempt to match the server markup, and will revert to client rendering up to the closest <code>&lt;Suspense&gt;</code> boundary in the tree. This ensures the hydrated tree is consistent and avoids potential privacy and security holes that can be caused by hydration mismatches.</li>\n" +
        "<li><strong>Suspense trees are always consistent:</strong> If a component suspends before it&#39;s fully added to the tree, React will not add it to the tree in an incomplete state or fire its effects. Instead, React will throw away the new tree completely, wait for the asynchronous operation to finish, and then retry rendering again from scratch. React will render the retry attempt concurrently, and without blocking the browser.</li>\n" +
        "<li><strong>Layout Effects with Suspense</strong>: When a tree re-suspends and reverts to a fallback, React will now clean up layout effects, and then re-create them when the content inside the boundary is shown again. This fixes an issue which prevented component libraries from correctly measuring layout when used with Suspense.</li>\n" +
        "<li><strong>New JS Environment Requirements</strong>: React now depends on modern browsers features including <code>Promise</code>, <code>Symbol</code>, and <code>Object.assign</code>. If you support older browsers and devices such as Internet Explorer which do not provide modern browser features natively or have non-compliant implementations, consider including a global polyfill in your bundled application.</li>\n" +
        "</ul>\n",
    },
  },
  {
    version: "17.0.0",
    changes: {
      breaking:
        "<p>Today, we are releasing React 17!</p>\n" +
        '<p><strong><a href="https://reactjs.org/blog/2020/10/20/react-v17.html">Learn more about React 17 and how to update to it on the official React blog.</a></strong></p>\n' +
        '<h3 id="react">React</h3>\n' +
        "<ul>\n" +
        '<li>Add <code>react/jsx-runtime</code> and <code>react/jsx-dev-runtime</code> for the <a href="https://babeljs.io/blog/2020/03/16/7.9.0#a-new-jsx-transform-11154-https-githubcom-babel-babel-pull-11154">new JSX transform</a>. (<a href="https://github.com/lunaruan">@lunaruan</a> in <a href="https://github.com/facebook/react/pull/18299">#18299</a>)</li>\n' +
        '<li>Build component stacks from native error frames. (<a href="https://github.com/sebmarkbage">@sebmarkbage</a> in <a href="https://github.com/facebook/react/pull/18561">#18561</a>)</li>\n' +
        '<li>Allow to specify <code>displayName</code> on context for improved stacks. (<a href="https://github.com/eps1lon">@eps1lon</a> in <a href="https://github.com/facebook/react/pull/18224">#18224</a>)</li>\n' +
        '<li>Prevent <code>&#39;use strict&#39;</code> from leaking in the UMD bundles. (<a href="https://github.com/koba04">@koba04</a> in <a href="https://github.com/facebook/react/pull/19614">#19614</a>)</li>\n' +
        '<li>Stop using <code>fb.me</code> for redirects. (<a href="https://github.com/cylim">@cylim</a> in <a href="https://github.com/facebook/react/pull/19598">#19598</a>)</li>\n' +
        "</ul>\n" +
        '<h3 id="react-dom">React DOM</h3>\n' +
        "<ul>\n" +
        '<li>Delegate events to roots instead of <code>document</code>. (<a href="https://github.com/trueadm">@trueadm</a> in <a href="https://github.com/facebook/react/pull/18195">#18195</a> and <a href="https://github.com/facebook/react/pulls?q=is%3Apr+author%3Atrueadm+modern+event+is%3Amerged">others</a>)</li>\n' +
        '<li>Clean up all effects before running any next effects. (<a href="https://github.com/bvaughn">@bvaughn</a> in <a href="https://github.com/facebook/react/pull/17947">#17947</a>)</li>\n' +
        '<li>Run <code>useEffect</code> cleanup functions asynchronously. (<a href="https://github.com/bvaughn">@bvaughn</a> in <a href="https://github.com/facebook/react/pull/17925">#17925</a>)</li>\n' +
        '<li>Use browser <code>focusin</code> and <code>focusout</code> for <code>onFocus</code> and <code>onBlur</code>. (<a href="https://github.com/trueadm">@trueadm</a> in <a href="https://github.com/facebook/react/pull/19186">#19186</a>)</li>\n' +
        '<li>Make all <code>Capture</code> events use the browser capture phase. (<a href="https://github.com/trueadm">@trueadm</a> in <a href="https://github.com/facebook/react/pull/19221">#19221</a>)</li>\n' +
        '<li>Don&#39;t emulate bubbling of the <code>onScroll</code> event. (<a href="https://github.com/gaearon">@gaearon</a> in <a href="https://github.com/facebook/react/pull/19464">#19464</a>)</li>\n' +
        '<li>Throw if <code>forwardRef</code> or <code>memo</code> component returns <code>undefined</code>. (<a href="https://github.com/gaearon">@gaearon</a> in <a href="https://github.com/facebook/react/pull/19550">#19550</a>)</li>\n' +
        '<li>Remove event pooling. (<a href="https://github.com/trueadm">@trueadm</a> in <a href="https://github.com/facebook/react/pull/18969">#18969</a>)</li>\n' +
        '<li>Stop exposing internals that won’t be needed by React Native Web. (<a href="https://github.com/necolas">@necolas</a> in <a href="https://github.com/facebook/react/pull/18483">#18483</a>)</li>\n' +
        '<li>Attach all known event listeners when the root mounts. (<a href="https://github.com/gaearon">@gaearon</a> in <a href="https://github.com/facebook/react/pull/19659">#19659</a>)</li>\n' +
        '<li>Disable <code>console</code> in the second render pass of DEV mode double render. (<a href="https://github.com/sebmarkbage">@sebmarkbage</a> in <a href="https://github.com/facebook/react/pull/18547">#18547</a>)</li>\n' +
        '<li>Deprecate the undocumented and misleading <code>ReactTestUtils.SimulateNative</code> API. (<a href="https://github.com/gaearon">@gaearon</a> in <a href="https://github.com/facebook/react/pull/13407">#13407</a>)</li>\n' +
        '<li>Rename private field names used in the internals. (<a href="https://github.com/gaearon">@gaearon</a> in <a href="https://github.com/facebook/react/pull/18377">#18377</a>)</li>\n' +
        '<li>Don&#39;t call User Timing API in development. (<a href="https://github.com/gaearon">@gaearon</a> in <a href="https://github.com/facebook/react/pull/18417">#18417</a>)</li>\n' +
        '<li>Disable console during the repeated render in Strict Mode. (<a href="https://github.com/sebmarkbage">@sebmarkbage</a> in <a href="https://github.com/facebook/react/pull/18547">#18547</a>)</li>\n' +
        '<li>In Strict Mode, double-render components without Hooks too. (<a href="https://github.com/eps1lon">@eps1lon</a> in <a href="https://github.com/facebook/react/pull/18430">#18430</a>)</li>\n' +
        '<li>Allow calling <code>ReactDOM.flushSync</code> during lifecycle methods (but warn). (<a href="https://github.com/sebmarkbage">@sebmarkbage</a> in <a href="https://github.com/facebook/react/pull/18759">#18759</a>)</li>\n' +
        '<li>Add the <code>code</code> property to the keyboard event objects. (<a href="https://github.com/bl00mber">@bl00mber</a> in <a href="https://github.com/facebook/react/pull/18287">#18287</a>)</li>\n' +
        '<li>Add the <code>disableRemotePlayback</code> property for <code>video</code> elements. (<a href="https://github.com/tombrowndev">@tombrowndev</a> in <a href="https://github.com/facebook/react/pull/18619">#18619</a>)</li>\n' +
        '<li>Add the <code>enterKeyHint</code> property for <code>input</code> elements. (<a href="https://github.com/eps1lon">@eps1lon</a> in <a href="https://github.com/facebook/react/pull/18634">#18634</a>)</li>\n' +
        '<li>Warn when no <code>value</code> is provided to <code>&lt;Context.Provider&gt;</code>. (<a href="https://github.com/charlie1404">@charlie1404</a> in <a href="https://github.com/facebook/react/pull/19054">#19054</a>)</li>\n' +
        '<li>Warn when <code>memo</code> or <code>forwardRef</code> components return <code>undefined</code>. (<a href="https://github.com/bvaughn">@bvaughn</a> in <a href="https://github.com/facebook/react/pull/19550">#19550</a>)</li>\n' +
        '<li>Improve the error message for invalid updates. (<a href="https://github.com/JoviDeCroock">@JoviDeCroock</a> in <a href="https://github.com/facebook/react/pull/18316">#18316</a>)</li>\n' +
        '<li>Exclude forwardRef and memo from stack frames. (<a href="https://github.com/sebmarkbage">@sebmarkbage</a> in <a href="https://github.com/facebook/react/pull/18559">#18559</a>)</li>\n' +
        '<li>Improve the error message when switching between controlled and uncontrolled inputs. (<a href="https://github.com/vcarl">@vcarl</a> in <a href="https://github.com/facebook/react/pull/17070">#17070</a>)</li>\n' +
        '<li>Keep <code>onTouchStart</code>, <code>onTouchMove</code>, and <code>onWheel</code> passive. (<a href="https://github.com/gaearon">@gaearon</a> in <a href="https://github.com/facebook/react/pull/19654">#19654</a>)</li>\n' +
        '<li>Fix <code>setState</code> hanging in development inside a closed iframe. (<a href="https://github.com/gaearon">@gaearon</a> in <a href="https://github.com/facebook/react/pull/19220">#19220</a>)</li>\n' +
        '<li>Fix rendering bailout for lazy components with <code>defaultProps</code>. (<a href="https://github.com/jddxf">@jddxf</a> in <a href="https://github.com/facebook/react/pull/18539">#18539</a>)</li>\n' +
        '<li>Fix a false positive warning when <code>dangerouslySetInnerHTML</code> is <code>undefined</code>. (<a href="https://github.com/eps1lon">@eps1lon</a> in <a href="https://github.com/facebook/react/pull/18676">#18676</a>)</li>\n' +
        '<li>Fix Test Utils with non-standard <code>require</code> implementation. (<a href="https://github.com/just-boris">@just-boris</a> in <a href="https://github.com/facebook/react/pull/18632">#18632</a>)</li>\n' +
        '<li>Fix <code>onBeforeInput</code> reporting an incorrect <code>event.type</code>. (<a href="https://github.com/eps1lon">@eps1lon</a> in <a href="https://github.com/facebook/react/pull/19561">#19561</a>)</li>\n' +
        '<li>Fix <code>event.relatedTarget</code> reported as <code>undefined</code> in Firefox. (<a href="https://github.com/claytercek">@claytercek</a> in <a href="https://github.com/facebook/react/pull/19607">#19607</a>)</li>\n' +
        '<li>Fix &quot;unspecified error&quot; in IE11. (<a href="https://github.com/hemakshis">@hemakshis</a> in <a href="https://github.com/facebook/react/pull/19664">#19664</a>)</li>\n' +
        '<li>Fix rendering into a shadow root. (<a href="https://github.com/Jack-Works">@Jack-Works</a> in <a href="https://github.com/facebook/react/pull/15894">#15894</a>)</li>\n' +
        '<li>Fix <code>movementX/Y</code> polyfill with capture events. (<a href="https://github.com/gaearon">@gaearon</a> in <a href="https://github.com/facebook/react/pull/19672">#19672</a>)</li>\n' +
        '<li>Use delegation for <code>onSubmit</code> and <code>onReset</code> events. (<a href="https://github.com/gaearon">@gaearon</a> in <a href="https://github.com/facebook/react/pull/19333">#19333</a>)</li>\n' +
        '<li>Improve memory usage. (<a href="https://github.com/trueadm">@trueadm</a> in <a href="https://github.com/facebook/react/pull/18970">#18970</a>)</li>\n' +
        "</ul>\n" +
        '<h3 id="react-dom-server">React DOM Server</h3>\n' +
        "<ul>\n" +
        '<li>Make <code>useCallback</code> behavior consistent with <code>useMemo</code> for the server renderer. (<a href="https://github.com/alexmckenley">@alexmckenley</a> in <a href="https://github.com/facebook/react/pull/18783">#18783</a>)</li>\n' +
        '<li>Fix state leaking when a function component throws. (<a href="https://github.com/pmaccart">@pmaccart</a> in <a href="https://github.com/facebook/react/pull/19212">#19212</a>)</li>\n' +
        "</ul>\n" +
        '<h3 id="react-test-renderer">React Test Renderer</h3>\n' +
        "<ul>\n" +
        '<li>Improve <code>findByType</code> error message. (<a href="https://github.com/henryqdineen">@henryqdineen</a> in <a href="https://github.com/facebook/react/pull/17439">#17439</a>)</li>\n' +
        "</ul>\n" +
        '<h3 id="concurrent-mode-experimental">Concurrent Mode (Experimental)</h3>\n' +
        "<ul>\n" +
        '<li>Revamp the priority batching heuristics. (<a href="https://github.com/acdlite">@acdlite</a> in <a href="https://github.com/facebook/react/pull/18796">#18796</a>)</li>\n' +
        '<li>Add the <code>unstable_</code> prefix before the experimental APIs. (<a href="https://github.com/acdlite">@acdlite</a> in <a href="https://github.com/facebook/react/pull/18825">#18825</a>)</li>\n' +
        '<li>Remove <code>unstable_discreteUpdates</code> and <code>unstable_flushDiscreteUpdates</code>. (<a href="https://github.com/trueadm">@trueadm</a> in <a href="https://github.com/facebook/react/pull/18825">#18825</a>)</li>\n' +
        '<li>Remove the <code>timeoutMs</code> argument. (<a href="https://github.com/acdlite">@acdlite</a> in <a href="https://github.com/facebook/react/pull/19703">#19703</a>)</li>\n' +
        '<li>Disable <code>&lt;div hidden /&gt;</code> prerendering in favor of a different future API. (<a href="https://github.com/acdlite">@acdlite</a> in <a href="https://github.com/facebook/react/pull/18917">#18917</a>)</li>\n' +
        '<li>Add <code>unstable_expectedLoadTime</code> to Suspense for CPU-bound trees. (<a href="https://github.com/acdlite">@acdlite</a> in <a href="https://github.com/facebook/react/pull/19936">#19936</a>)</li>\n' +
        '<li>Add an experimental <code>unstable_useOpaqueIdentifier</code> Hook. (<a href="https://github.com/lunaruan">@lunaruan</a> in <a href="https://github.com/facebook/react/pull/17322">#17322</a>)</li>\n' +
        '<li>Add an experimental <code>unstable_startTransition</code> API. (<a href="https://github.com/rickhanlonii">@rickhanlonii</a> in <a href="https://github.com/facebook/react/pull/19696">#19696</a>)</li>\n' +
        '<li>Using <code>act</code> in the test renderer no longer flushes Suspense fallbacks. (<a href="https://github.com/acdlite">@acdlite</a> in <a href="https://github.com/facebook/react/pull/18596">#18596</a>)</li>\n' +
        '<li>Use global render timeout for CPU Suspense. (<a href="https://github.com/sebmarkbage">@sebmarkbage</a> in <a href="https://github.com/facebook/react/pull/19643">#19643</a>)</li>\n' +
        '<li>Clear the existing root content before mounting. (<a href="https://github.com/bvaughn">@bvaughn</a> in <a href="https://github.com/facebook/react/pull/18730">#18730</a>)</li>\n' +
        '<li>Fix a bug with error boundaries. (<a href="https://github.com/acdlite">@acdlite</a> in <a href="https://github.com/facebook/react/pull/18265">#18265</a>)</li>\n' +
        '<li>Fix a bug causing dropped updates in a suspended tree. (<a href="https://github.com/acdlite">@acdlite</a> in <a href="https://github.com/facebook/react/pull/18384">#18384</a> and <a href="https://github.com/facebook/react/pull/18457">#18457</a>)</li>\n' +
        '<li>Fix a bug causing dropped render phase updates. (<a href="https://github.com/acdlite">@acdlite</a> in <a href="https://github.com/facebook/react/pull/18537">#18537</a>)</li>\n' +
        '<li>Fix a bug in SuspenseList. (<a href="https://github.com/sebmarkbage">@sebmarkbage</a> in <a href="https://github.com/facebook/react/pull/18412">#18412</a>)</li>\n' +
        '<li>Fix a bug causing Suspense fallback to show too early. (<a href="https://github.com/acdlite">@acdlite</a> in <a href="https://github.com/facebook/react/pull/18411">#18411</a>)</li>\n' +
        '<li>Fix a bug with class components inside SuspenseList. (<a href="https://github.com/sebmarkbage">@sebmarkbage</a> in <a href="https://github.com/facebook/react/pull/18448">#18448</a>)</li>\n' +
        '<li>Fix a bug with inputs that may cause updates to be dropped. (<a href="https://github.com/jddxf">@jddxf</a> in <a href="https://github.com/facebook/react/pull/18515">#18515</a> and <a href="https://github.com/acdlite">@acdlite</a> in <a href="https://github.com/facebook/react/pull/18535">#18535</a>)</li>\n' +
        '<li>Fix a bug causing Suspense fallback to get stuck.  (<a href="https://github.com/acdlite">@acdlite</a> in <a href="https://github.com/facebook/react/pull/18663">#18663</a>)</li>\n' +
        '<li>Don&#39;t cut off the tail of a SuspenseList if hydrating. (<a href="https://github.com/sebmarkbage">@sebmarkbage</a> in <a href="https://github.com/facebook/react/pull/18854">#18854</a>)</li>\n' +
        '<li>Fix a bug in <code>useMutableSource</code> that may happen when <code>getSnapshot</code> changes. (<a href="https://github.com/bvaughn">@bvaughn</a> in <a href="https://github.com/facebook/react/pull/18297">#18297</a>)</li>\n' +
        '<li>Fix a tearing bug in <code>useMutableSource</code>. (<a href="https://github.com/bvaughn">@bvaughn</a> in <a href="https://github.com/facebook/react/pull/18912">#18912</a>)</li>\n' +
        '<li>Warn if calling setState outside of render but before commit. (<a href="https://github.com/sebmarkbage">@sebmarkbage</a> in <a href="https://github.com/facebook/react/pull/18838">#18838</a>)</li>\n' +
        "</ul>\n",
    },
  },
  {
    version: "16.0.0",
    changes: {
      breaking:
        '<h3 id="breaking-changes">Breaking Changes</h3>\n' +
        "<ul>\n" +
        "<li>There are several changes to the behavior of scheduling and lifecycle methods:<ul>\n" +
        "<li><code>ReactDOM.render()</code> and <code>ReactDOM.unstable_renderIntoContainer()</code> now return <code>null</code> if called from inside a lifecycle method.<ul>\n" +
        '<li>To work around this, you can either use <a href="https://github.com/facebook/react/issues/10309#issuecomment-318433235">the new portal API</a> or <a href="https://github.com/facebook/react/issues/10309#issuecomment-318434635">refs</a>.</li>\n' +
        "</ul>\n" +
        "</li>\n" +
        "<li>Minor changes to <code>setState</code> behavior:<ul>\n" +
        "<li>Calling <code>setState</code> with null no longer triggers an update. This allows you to decide in an updater function if you want to re-render.</li>\n" +
        "<li>Calling <code>setState</code> directly in render always causes an update. This was not previously the case. Regardless, you should not be calling <code>setState</code> from render.</li>\n" +
        "<li><code>setState</code> callback (second argument) now fires immediately after <code>componentDidMount</code> / <code>componentDidUpdate</code> instead of after all components have rendered.</li>\n" +
        "</ul>\n" +
        "</li>\n" +
        "<li>When replacing <code>&lt;A /&gt;</code> with <code>&lt;B /&gt;</code>,  <code>B.componentWillMount</code> now always happens before  <code>A.componentWillUnmount</code>. Previously, <code>A.componentWillUnmount</code> could fire first in some cases.</li>\n" +
        "<li>Previously, changing the <code>ref</code> to a component would always detach the ref before that component&#39;s render is called. Now, we change the <code>ref</code> later, when applying the changes to the DOM.</li>\n" +
        '<li>It is not safe to re-render into a container that was modified by something other than React. This worked previously in some cases but was never supported. We now emit a warning in this case. Instead you should clean up your component trees using <code>ReactDOM.unmountComponentAtNode</code>. <a href="https://github.com/facebook/react/issues/10294#issuecomment-318820987">See this example.</a></li>\n' +
        '<li><code>componentDidUpdate</code> lifecycle no longer receives <code>prevContext</code> param. (<a href="https://github.com/bvaughn">@bvaughn</a> in <a href="https://github.com/facebook/react/pull/8631">#8631</a>)</li>\n' +
        "<li>Non-unique keys may now cause children to be duplicated and/or omitted. Using non-unique keys is not (and has never been) supported, but previously it was a hard error.</li>\n" +
        "<li>Shallow renderer no longer calls <code>componentDidUpdate()</code> because DOM refs are not available. This also makes it consistent with <code>componentDidMount()</code> (which does not get called in previous versions either).</li>\n" +
        "<li>Shallow renderer does not implement <code>unstable_batchedUpdates()</code> anymore.</li>\n" +
        "<li><code>ReactDOM.unstable_batchedUpdates</code> now only takes one extra argument after the callback.</li>\n" +
        "</ul>\n" +
        "</li>\n" +
        "<li>The names and paths to the single-file browser builds have changed to emphasize the difference between development and production builds. For example:<ul>\n" +
        "<li><code>react/dist/react.js</code> → <code>react/umd/react.development.js</code></li>\n" +
        "<li><code>react/dist/react.min.js</code> → <code>react/umd/react.production.min.js</code></li>\n" +
        "<li><code>react-dom/dist/react-dom.js</code> → <code>react-dom/umd/react-dom.development.js</code></li>\n" +
        "<li><code>react-dom/dist/react-dom.min.js</code> → <code>react-dom/umd/react-dom.production.min.js</code></li>\n" +
        "</ul>\n" +
        "</li>\n" +
        "</ul>\n" +
        "<ul>\n" +
        "<li>The server renderer has been completely rewritten, with some improvements:<ul>\n" +
        "<li>Server rendering does not use markup validation anymore, and instead tries its best to attach to existing DOM, warning about inconsistencies. It also doesn&#39;t use comments for empty components and data-reactid attributes on each node anymore.</li>\n" +
        "<li>Hydrating a server rendered container now has an explicit API. Use <code>ReactDOM.hydrate</code> instead of <code>ReactDOM.render</code> if you&#39;re reviving server rendered HTML. Keep using <code>ReactDOM.render</code> if you&#39;re just doing client-side rendering.</li>\n" +
        "</ul>\n" +
        "</li>\n" +
        '<li>When &quot;unknown&quot; props are passed to DOM components, for valid values, React will now render them in the DOM. <a href="https://reactjs.org/blog/2017/09/08/dom-attributes-in-react-16.html">See this post for more details.</a> (<a href="https://github.com/nhunzaker">@nhunzaker</a> in <a href="https://github.com/facebook/react/pull/10385">#10385</a>, <a href="https://github.com/facebook/react/pull/10564">10564</a>, <a href="https://github.com/facebook/react/pull/10495">#10495</a> and others)</li>\n' +
        '<li>Errors in the render and lifecycle methods now unmount the component tree by default. To prevent this, add <a href="https://reactjs.org/blog/2017/07/26/error-handling-in-react-16.html">error boundaries</a> to the appropriate places in the UI.</li>\n' +
        "</ul>\n",
    },
  },
  {
    version: "15.0.0",
    changes: {
      breaking:
        '<h3 id="major-changes">Major changes</h3>\n' +
        "<ul>\n" +
        '<li><strong>Initial render now uses <code>document.createElement</code> instead of generating HTML.</strong> Previously we would generate a large string of HTML and then set <code>node.innerHTML</code>. At the time, this was decided to be faster than using <code>document.createElement</code> for the majority of cases and browsers that we supported. Browsers have continued to improve and so overwhelmingly this is no longer true. By using <code>createElement</code> we can make other parts of React faster. (<a href="https://github.com/sophiebits">@sophiebits</a> in <a href="https://github.com/facebook/react/pull/5205">#5205</a>)</li>\n' +
        '<li><strong><code>data-reactid</code> is no longer on every node.</strong> As a result of using <code>document.createElement</code>, we can prime the node cache as we create DOM nodes, allowing us to skip a potential lookup (which used the <code>data-reactid</code> attribute). Root nodes will have a <code>data-reactroot</code> attribute and server generated markup will still contain <code>data-reactid</code>. (<a href="https://github.com/sophiebits">@sophiebits</a> in <a href="https://github.com/facebook/react/pull/5205">#5205</a>)</li>\n' +
        '<li><strong>No more extra <code>&lt;span&gt;</code>s.</strong> ReactDOM will now render plain text nodes interspersed with comment nodes that are used for demarcation. This gives us the same ability to update individual pieces of text, without creating extra nested nodes. If you were targeting these <code>&lt;span&gt;</code>s in your CSS, you will need to adjust accordingly. You can always render them explicitly in your components. (<a href="https://github.com/mwiencek">@mwiencek</a> in <a href="https://github.com/facebook/react/pull/5753">#5753</a>)</li>\n' +
        '<li><strong>Rendering <code>null</code> now uses comment nodes.</strong> Previously <code>null</code> would render to <code>&lt;noscript&gt;</code> elements. We now use comment nodes. This may cause issues if making use of <code>:nth-child</code> CSS selectors. While we consider this rendering behavior an implementation detail of React, it&#39;s worth noting the potential problem. (<a href="https://github.com/sophiebits">@sophiebits</a> in <a href="https://github.com/facebook/react/pull/5451">#5451</a>)</li>\n' +
        "<li><strong>Functional components can now return <code>null</code>.</strong> We added support for [defining stateless components as functions](/react/blog/2015/09/10/react-v0.14-rc1.html</li>\n" +
        "</ul>\n",
    },
  },
]
