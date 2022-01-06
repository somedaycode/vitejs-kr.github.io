import{_ as n,c as s,o as a,d as t}from"./app.4812af81.js";const v='{"title":"JavaScript API","description":"","frontmatter":{"title":"JavaScript API"},"headers":[{"level":2,"title":"createServer","slug":"createserver"},{"level":2,"title":"InlineConfig","slug":"inline-config"},{"level":2,"title":"ViteDevServer","slug":"vitedevserver"},{"level":2,"title":"build","slug":"build"},{"level":2,"title":"preview","slug":"preview"},{"level":2,"title":"resolveConfig","slug":"resolveconfig"},{"level":2,"title":"transformWithEsbuild","slug":"transformwithesbuild"}],"relativePath":"guide/api-javascript.md","lastUpdated":1641481896199}',e={},o=t(`__VP_STATIC_START__<h1 id="javascript-api" tabindex="-1">JavaScript API <a class="header-anchor" href="#javascript-api" aria-hidden="true">#</a></h1><p>Vite&#39;s JavaScript APIs are fully typed, and it&#39;s recommended to use TypeScript or enable JS type checking in VSCode to leverage the intellisense and validation.</p><h2 id="createserver" tabindex="-1"><code>createServer</code> <a class="header-anchor" href="#createserver" aria-hidden="true">#</a></h2><p><strong>Type Signature:</strong></p><div class="language-ts"><pre><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">createServer</span><span class="token punctuation">(</span>inlineConfig<span class="token operator">?</span><span class="token operator">:</span> InlineConfig<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>ViteDevServer<span class="token operator">&gt;</span>
</code></pre></div><p><strong>Example Usage:</strong></p><div class="language-js"><pre><code><span class="token keyword">const</span> <span class="token punctuation">{</span> createServer <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;vite&#39;</span><span class="token punctuation">)</span>

<span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> server <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// any valid user config options, plus \`mode\` and \`configFile\`</span>
    configFile<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    root<span class="token operator">:</span> __dirname<span class="token punctuation">,</span>
    server<span class="token operator">:</span> <span class="token punctuation">{</span>
      port<span class="token operator">:</span> <span class="token number">1337</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">await</span> server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  server<span class="token punctuation">.</span><span class="token function">printUrls</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="inline-config" tabindex="-1"><code>InlineConfig</code> <a class="header-anchor" href="#inline-config" aria-hidden="true">#</a></h2><p>The <code>InlineConfig</code> interface extends <code>UserConfig</code> with additional properties:</p><ul><li><code>configFile</code>: specify config file to use. If not set, Vite will try to automatically resolve one from project root. Set to <code>false</code> to disable auto resolving.</li><li><code>envFile</code>: Set to <code>false</code> to disable <code>.env</code> files.</li></ul><h2 id="vitedevserver" tabindex="-1"><code>ViteDevServer</code> <a class="header-anchor" href="#vitedevserver" aria-hidden="true">#</a></h2><div class="language-ts"><pre><code><span class="token keyword">interface</span> <span class="token class-name">ViteDevServer</span> <span class="token punctuation">{</span>
  <span class="token comment">/**
   * The resolved Vite config object.
   */</span>
  config<span class="token operator">:</span> ResolvedConfig
  <span class="token comment">/**
   * A connect app instance
   * - Can be used to attach custom middlewares to the dev server.
   * - Can also be used as the handler function of a custom http server
   *   or as a middleware in any connect-style Node.js frameworks.
   *
   * https://github.com/senchalabs/connect#use-middleware
   */</span>
  middlewares<span class="token operator">:</span> Connect<span class="token punctuation">.</span>Server
  <span class="token comment">/**
   * Native Node http server instance.
   * Will be null in middleware mode.
   */</span>
  httpServer<span class="token operator">:</span> http<span class="token punctuation">.</span>Server <span class="token operator">|</span> <span class="token keyword">null</span>
  <span class="token comment">/**
   * Chokidar watcher instance.
   * https://github.com/paulmillr/chokidar#api
   */</span>
  watcher<span class="token operator">:</span> FSWatcher
  <span class="token comment">/**
   * Web socket server with \`send(payload)\` method.
   */</span>
  ws<span class="token operator">:</span> WebSocketServer
  <span class="token comment">/**
   * Rollup plugin container that can run plugin hooks on a given file.
   */</span>
  pluginContainer<span class="token operator">:</span> PluginContainer
  <span class="token comment">/**
   * Module graph that tracks the import relationships, url to file mapping
   * and hmr state.
   */</span>
  moduleGraph<span class="token operator">:</span> ModuleGraph
  <span class="token comment">/**
   * Programmatically resolve, load and transform a URL and get the result
   * without going through the http request pipeline.
   */</span>
  <span class="token function">transformRequest</span><span class="token punctuation">(</span>
    url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
    options<span class="token operator">?</span><span class="token operator">:</span> TransformOptions
  <span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>TransformResult <span class="token operator">|</span> <span class="token keyword">null</span><span class="token operator">&gt;</span>
  <span class="token comment">/**
   * Apply Vite built-in HTML transforms and any plugin HTML transforms.
   */</span>
  <span class="token function">transformIndexHtml</span><span class="token punctuation">(</span>url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> html<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span>
  <span class="token comment">/**
   * Load a given URL as an instantiated module for SSR.
   */</span>
  <span class="token function">ssrLoadModule</span><span class="token punctuation">(</span>
    url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
    options<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span> isolated<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">}</span>
  <span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">&gt;&gt;</span>
  <span class="token comment">/**
   * Fix ssr error stacktrace.
   */</span>
  <span class="token function">ssrFixStacktrace</span><span class="token punctuation">(</span>e<span class="token operator">:</span> Error<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
  <span class="token comment">/**
   * Start the server.
   */</span>
  <span class="token function">listen</span><span class="token punctuation">(</span>port<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> isRestart<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>ViteDevServer<span class="token operator">&gt;</span>
  <span class="token comment">/**
   * Restart the server.
   *
   * @param forceOptimize - force the optimizer to re-bundle, same as --force cli flag
   */</span>
  <span class="token function">restart</span><span class="token punctuation">(</span>forceOptimize<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">&gt;</span>
  <span class="token comment">/**
   * Stop the server.
   */</span>
  <span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">&gt;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="build" tabindex="-1"><code>build</code> <a class="header-anchor" href="#build" aria-hidden="true">#</a></h2><p><strong>Type Signature:</strong></p><div class="language-ts"><pre><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">build</span><span class="token punctuation">(</span>
  inlineConfig<span class="token operator">?</span><span class="token operator">:</span> InlineConfig
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>RollupOutput <span class="token operator">|</span> RollupOutput<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span>
</code></pre></div><p><strong>Example Usage:</strong></p><div class="language-js"><pre><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> build <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;vite&#39;</span><span class="token punctuation">)</span>

<span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    root<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./project&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    base<span class="token operator">:</span> <span class="token string">&#39;/foo/&#39;</span><span class="token punctuation">,</span>
    build<span class="token operator">:</span> <span class="token punctuation">{</span>
      rollupOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="preview" tabindex="-1"><code>preview</code> <a class="header-anchor" href="#preview" aria-hidden="true">#</a></h2><p><strong>Experimental</strong></p><p><strong>Type Signature:</strong></p><div class="language-ts"><pre><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">preview</span><span class="token punctuation">(</span>inlineConfig<span class="token operator">?</span><span class="token operator">:</span> InlineConfig<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>PreviewServer<span class="token operator">&gt;</span>
</code></pre></div><p><strong>Example Usage:</strong></p><div class="language-js"><pre><code><span class="token keyword">const</span> <span class="token punctuation">{</span> preview <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;vite&#39;</span><span class="token punctuation">)</span>

<span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> previewServer <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">preview</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// any valid user config options, plus \`mode\` and \`configFile\`</span>
    preview<span class="token operator">:</span> <span class="token punctuation">{</span>
      port<span class="token operator">:</span> <span class="token number">8080</span><span class="token punctuation">,</span>
      open<span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  previewServer<span class="token punctuation">.</span><span class="token function">printUrls</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="resolveconfig" tabindex="-1"><code>resolveConfig</code> <a class="header-anchor" href="#resolveconfig" aria-hidden="true">#</a></h2><p><strong>Type Signature:</strong></p><div class="language-ts"><pre><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">resolveConfig</span><span class="token punctuation">(</span>
  inlineConfig<span class="token operator">:</span> InlineConfig<span class="token punctuation">,</span>
  command<span class="token operator">:</span> <span class="token string">&#39;build&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;serve&#39;</span><span class="token punctuation">,</span>
  defaultMode<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>ResolvedConfig<span class="token operator">&gt;</span>
</code></pre></div><p>The <code>command</code> value is <code>serve</code> in dev (in the cli <code>vite</code>, <code>vite dev</code>, and <code>vite serve</code> are aliases).</p><h2 id="transformwithesbuild" tabindex="-1"><code>transformWithEsbuild</code> <a class="header-anchor" href="#transformwithesbuild" aria-hidden="true">#</a></h2><p><strong>Type Signature:</strong></p><div class="language-ts"><pre><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">transformWithEsbuild</span><span class="token punctuation">(</span>
  code<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  filename<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  options<span class="token operator">?</span><span class="token operator">:</span> EsbuildTransformOptions<span class="token punctuation">,</span>
  inMap<span class="token operator">?</span><span class="token operator">:</span> object
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>ESBuildTransformResult<span class="token operator">&gt;</span>
</code></pre></div>__VP_STATIC_END__`,30),p=[o];function c(r,l,i,u,k,d){return a(),s("div",null,p)}var f=n(e,[["render",c]]);export{v as __pageData,f as default};
