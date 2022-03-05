import{_ as n,c as s,o as a,a as p}from"./app.18df0fee.js";const v='{"title":"JavaScript API","description":"","frontmatter":{"title":"JavaScript API"},"headers":[{"level":2,"title":"createServer","slug":"createserver"},{"level":2,"title":"InlineConfig","slug":"inline-config"},{"level":2,"title":"ViteDevServer","slug":"vitedevserver"},{"level":2,"title":"build","slug":"build"},{"level":2,"title":"preview","slug":"preview"},{"level":2,"title":"resolveConfig","slug":"resolveconfig"},{"level":2,"title":"transformWithEsbuild","slug":"transformwithesbuild"}],"relativePath":"guide/api-javascript.md"}',t={},o=p(`<h1 id="javascript-api" tabindex="-1">JavaScript API <a class="header-anchor" href="#javascript-api" aria-hidden="true">#</a></h1><p>Vite\uC758 \uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8 API\uB4E4\uC740 \uC804\uBD80 \uD0C0\uC785\uC774 \uBA85\uC2DC\uB418\uC5B4 \uC788\uACE0 intellisense\uC640 \uC720\uD6A8\uC131 \uAC80\uC0AC\uB97C \uD6A8\uACFC\uC801\uC73C\uB85C \uC0AC\uC6A9\uD558\uAE30 \uC704\uD574 \uD0C0\uC785 \uC2A4\uD06C\uB9BD\uD2B8 \uB610\uB294 VSCode\uC758 JS \uD0C0\uC785 \uAC80\uC0AC \uD65C\uC131\uD654\uB97C \uCD94\uCC9C\uD569\uB2C8\uB2E4.</p><h2 id="createserver" tabindex="-1"><code>createServer</code> <a class="header-anchor" href="#createserver" aria-hidden="true">#</a></h2><p><strong>\uD0C0\uC785 \uC2DC\uADF8\uB2C8\uCC98:</strong></p><div class="language-ts"><pre><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">createServer</span><span class="token punctuation">(</span>inlineConfig<span class="token operator">?</span><span class="token operator">:</span> InlineConfig<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>ViteDevServer<span class="token operator">&gt;</span>
</code></pre></div><p><strong>\uC0AC\uC6A9 \uC608\uC81C:</strong></p><div class="language-js"><pre><code><span class="token keyword">const</span> <span class="token punctuation">{</span> createServer <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;vite&#39;</span><span class="token punctuation">)</span>

<span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> server <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// \uC720\uD6A8\uD55C \uC720\uC800 \uC124\uC815 \uC635\uC158\uB4E4, \uCD94\uAC00\uC801\uC73C\uB85C \`mode\`\uC640 \`configFile\`\uAC00 \uC788\uC2B5\uB2C8\uB2E4.</span>
    <span class="token literal-property property">configFile</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">root</span><span class="token operator">:</span> __dirname<span class="token punctuation">,</span>
    <span class="token literal-property property">server</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">1337</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">await</span> server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  server<span class="token punctuation">.</span><span class="token function">printUrls</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="inline-config" tabindex="-1"><code>InlineConfig</code> <a class="header-anchor" href="#inline-config" aria-hidden="true">#</a></h2><p><code>InlineConfig</code> \uC778\uD130\uD398\uC774\uC2A4\uB294 <code>UserConfig</code>\uC758 \uCD94\uAC00\uC801\uC778 \uC18D\uC131\uB4E4\uB85C \uD655\uC7A5\uB429\uB2C8\uB2E4:</p><ul><li><code>configFile</code>: \uD2B9\uC815 \uC124\uC815 \uD30C\uC77C\uC744 \uC9C0\uCE6D\uD560 \uB54C \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uB9CC\uC57D \uC124\uC815\uC774 \uB418\uC5B4\uC788\uC9C0 \uC54A\uB2E4\uBA74, Vite\uB294 \uC790\uB3D9\uC801\uC73C\uB85C \uD504\uB85C\uC81D\uD2B8 \uB8E8\uD2B8\uC5D0\uC11C \uACB0\uC815\uD569\uB2C8\uB2E4. <code>false</code>\uB85C \uC124\uC815\uD55C\uB2E4\uBA74 \uC790\uB3D9 \uC124\uC815\uC744 \uBE44\uD65C\uC131\uD654\uD569\uB2C8\uB2E4.</li><li><code>envFile</code>: <code>false</code> \uC77C \uB54C\uB294 <code>.env</code> \uD30C\uC77C\uB4E4\uC744 \uBE44\uD65C\uC131\uD654\uD569\uB2C8\uB2E4.</li></ul><h2 id="vitedevserver" tabindex="-1"><code>ViteDevServer</code> <a class="header-anchor" href="#vitedevserver" aria-hidden="true">#</a></h2><div class="language-ts"><pre><code><span class="token keyword">interface</span> <span class="token class-name">ViteDevServer</span> <span class="token punctuation">{</span>
  <span class="token comment">/**
   * \uC218\uC6A9\uB41C Vite \uC124\uC815 \uAC1D\uCCB4.
   */</span>
  config<span class="token operator">:</span> ResolvedConfig
  <span class="token comment">/**
   * \uC5F0\uACB0 \uC571 \uC778\uC2A4\uD134\uC2A4
   * - \uAC1C\uBC1C \uC11C\uBC84\uC5D0 \uCEE4\uC2A4\uD140 \uBBF8\uB4E4\uC6E8\uC5B4\uB4E4\uC744 \uBD99\uC774\uB294\uB370 \uC0AC\uC6A9\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.
   * - \uCEE4\uC2A4\uD140 http \uC11C\uBC84 \uC81C\uC5B4 \uD568\uC218\uB85C \uC0AC\uC6A9\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.
   *   \uB610\uB294 \uBAA8\uB4E0 \uC5F0\uACB0 \uC2A4\uD0C0\uC77C\uC758 Node.js \uD504\uB808\uC784\uC6CC\uD06C\uC5D0\uC11C \uBBF8\uB4E4\uC6E8\uC5B4\uB85C \uC0AC\uC6A9\uB429\uB2C8\uB2E4.
   *
   * https://github.com/senchalabs/connect#use-middleware
   */</span>
  middlewares<span class="token operator">:</span> Connect<span class="token punctuation">.</span>Server
  <span class="token comment">/**
   * Native Node http \uC11C\uBC84 \uC778\uC2A4\uD134\uC2A4.
   * middleware \uBAA8\uB4DC\uC5D0\uC11C\uB294 null\uC774 \uB429\uB2C8\uB2E4.
   */</span>
  httpServer<span class="token operator">:</span> http<span class="token punctuation">.</span>Server <span class="token operator">|</span> <span class="token keyword">null</span>
  <span class="token comment">/**
   * Chokidar watcher \uC778\uC2A4\uD134\uC2A4.
   * https://github.com/paulmillr/chokidar#api
   */</span>
  watcher<span class="token operator">:</span> FSWatcher
  <span class="token comment">/**
   * \`send(payload)\` \uD568\uC218\uAC00 \uC788\uB294 web socket \uC11C\uBC84
   */</span>
  ws<span class="token operator">:</span> WebSocketServer
  <span class="token comment">/**
   * \uC8FC\uC5B4\uC9C4 \uD30C\uC77C\uC5D0 \uD50C\uB7EC\uADF8\uC778 hooks\uB97C \uC2E4\uD589\uD560 \uC218 \uC788\uB294 rollup \uD50C\uB7EC\uADF8\uC778 \uCEE8\uD14C\uC774\uB108
   */</span>
  pluginContainer<span class="token operator">:</span> PluginContainer
  <span class="token comment">/**
   * Url\uB85C \uD30C\uC77C\uC774 \uB9F5\uD551\uB418\uC5B4 \uC788\uACE0 hmr \uC0C1\uD0DC\uB4E4\uC758 import \uAD00\uACC4\uB4E4\uC744 \uBCFC \uC218 \uC788\uB294 \uBAA8\uB4C8 \uADF8\uB798\uD504.
   */</span>
  moduleGraph<span class="token operator">:</span> ModuleGraph
  <span class="token comment">/**
   * \uD504\uB85C\uADF8\uB798\uBC0D \uBC29\uC2DD\uC73C\uB85C URL\uC744 \uD655\uC778, \uB85C\uB4DC \uBC0F \uBCC0\uD658\uD558\uACE0 http \uC694\uCCAD \uD30C\uC774\uD504 \uB77C\uC778\uC744 
   * \uAC70\uCE58\uC9C0 \uC54A\uACE0\uB3C4 \uACB0\uACFC\uB97C \uC5BB\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.
   */</span>
  <span class="token function">transformRequest</span><span class="token punctuation">(</span>
    url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
    options<span class="token operator">?</span><span class="token operator">:</span> TransformOptions
  <span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>TransformResult <span class="token operator">|</span> <span class="token keyword">null</span><span class="token operator">&gt;</span>
  <span class="token comment">/**
   * Vite \uBE4C\uD2B8\uC778 HTML \uBCC0\uD658 \uBC0F \uD50C\uB7EC\uADF8\uC778 HTML \uBCC0\uD658\uC744 \uC801\uC6A9\uD569\uB2C8\uB2E4.
   */</span>
  <span class="token function">transformIndexHtml</span><span class="token punctuation">(</span>url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> html<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span>
  <span class="token comment">/**
   * \uC8FC\uC5B4\uC9C4 URL\uC744 SSR\uC744 \uC704\uD574 \uC778\uC2A4\uD134\uC2A4\uD654 \uB41C \uBAA8\uB4C8\uB85C \uB85C\uB4DC\uD569\uB2C8\uB2E4.
   */</span>
  <span class="token function">ssrLoadModule</span><span class="token punctuation">(</span>
    url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
    options<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span> isolated<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">}</span>
  <span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">&gt;&gt;</span>
  <span class="token comment">/**
   * SSR \uC5D0\uB7EC stacktrace \uC218\uC815\uD558\uAE30
   */</span>
  <span class="token function">ssrFixStacktrace</span><span class="token punctuation">(</span>e<span class="token operator">:</span> Error<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
  <span class="token comment">/**
   * \uC11C\uBC84 \uC2DC\uC791\uD558\uAE30.
   */</span>
  <span class="token function">listen</span><span class="token punctuation">(</span>port<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> isRestart<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>ViteDevServer<span class="token operator">&gt;</span>
  <span class="token comment">/**
   * \uC11C\uBC84 \uC7AC\uC2DC\uC791\uD558\uAE30.
   *
   * @param forceOptimize - optimizer\uAC00 re-bundle\uB97C \uAC15\uC81C\uC2DC\uD0B5\uB2C8\uB2E4. --force cli flag\uB97C \uC4F4 \uAC83\uACFC \uB611\uAC19\uC2B5\uB2C8\uB2E4.
   */</span>
  <span class="token function">restart</span><span class="token punctuation">(</span>forceOptimize<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">&gt;</span>
  <span class="token comment">/**
   * \uC11C\uBC84 \uBA48\uCD94\uAE30.
   */</span>
  <span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">&gt;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="build" tabindex="-1"><code>build</code> <a class="header-anchor" href="#build" aria-hidden="true">#</a></h2><p><strong>\uD0C0\uC785 \uC2DC\uADF8\uB2C8\uCC98:</strong></p><div class="language-ts"><pre><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">build</span><span class="token punctuation">(</span>
  inlineConfig<span class="token operator">?</span><span class="token operator">:</span> InlineConfig
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>RollupOutput <span class="token operator">|</span> RollupOutput<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span>
</code></pre></div><p><strong>\uC0AC\uC6A9 \uC608\uC81C:</strong></p><div class="language-js"><pre><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> build <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;vite&#39;</span><span class="token punctuation">)</span>

<span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">root</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./project&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&#39;/foo/&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">build</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">rollupOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="preview" tabindex="-1"><code>preview</code> <a class="header-anchor" href="#preview" aria-hidden="true">#</a></h2><p><strong>\uC2E4\uD5D8\uC801 \uAE30\uB2A5</strong></p><p><strong>\uD0C0\uC785 \uC2DC\uADF8\uB2C8\uCC98:</strong></p><div class="language-ts"><pre><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">preview</span><span class="token punctuation">(</span>inlineConfig<span class="token operator">?</span><span class="token operator">:</span> InlineConfig<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>PreviewServer<span class="token operator">&gt;</span>
</code></pre></div><p><strong>\uC0AC\uC6A9 \uC608\uC81C:</strong></p><div class="language-js"><pre><code><span class="token keyword">const</span> <span class="token punctuation">{</span> preview <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;vite&#39;</span><span class="token punctuation">)</span>

<span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> previewServer <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">preview</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// \uC720\uD6A8\uD55C \uC720\uC800 \uC124\uC815 \uC635\uC158\uB4E4, \uCD94\uAC00\uC801\uC73C\uB85C \`mode\`\uC640 \`configFile\`\uAC00 \uC788\uC2B5\uB2C8\uB2E4.</span>
    <span class="token literal-property property">preview</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">8080</span><span class="token punctuation">,</span>
      <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  previewServer<span class="token punctuation">.</span><span class="token function">printUrls</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="resolveconfig" tabindex="-1"><code>resolveConfig</code> <a class="header-anchor" href="#resolveconfig" aria-hidden="true">#</a></h2><p><strong>\uD0C0\uC785 \uC2DC\uADF8\uB2C8\uCC98:</strong></p><div class="language-ts"><pre><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">resolveConfig</span><span class="token punctuation">(</span>
  inlineConfig<span class="token operator">:</span> InlineConfig<span class="token punctuation">,</span>
  command<span class="token operator">:</span> <span class="token string">&#39;build&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;serve&#39;</span><span class="token punctuation">,</span>
  defaultMode<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>ResolvedConfig<span class="token operator">&gt;</span>
</code></pre></div><p>\uAC1C\uBC1C \uB2E8\uACC4\uC5D0\uC11C\uC758 <code>command</code>\uC758 \uAC12\uC740 <code>serve</code>\uC785\uB2C8\uB2E4 (cli\uC5D0\uC11C\uB294 <code>vite</code>, <code>vite dev</code>, \uADF8\uB9AC\uACE0 <code>vite serve</code>\uB294 \uC804\uBD80 \uBCC4\uCE6D\uC785\uB2C8\uB2E4).</p><h2 id="transformwithesbuild" tabindex="-1"><code>transformWithEsbuild</code> <a class="header-anchor" href="#transformwithesbuild" aria-hidden="true">#</a></h2><p><strong>\uD0C0\uC785 \uC2DC\uADF8\uB2C8\uCC98:</strong></p><div class="language-ts"><pre><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">transformWithEsbuild</span><span class="token punctuation">(</span>
  code<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  filename<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  options<span class="token operator">?</span><span class="token operator">:</span> EsbuildTransformOptions<span class="token punctuation">,</span>
  inMap<span class="token operator">?</span><span class="token operator">:</span> object
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>ESBuildTransformResult<span class="token operator">&gt;</span>
</code></pre></div>`,30),e=[o];function c(r,l,i,u,k,d){return a(),s("div",null,e)}var f=n(t,[["render",c]]);export{v as __pageData,f as default};
