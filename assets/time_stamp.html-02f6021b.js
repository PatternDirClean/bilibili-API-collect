import{_ as n,o as t,c as a,g as e,e as s}from"./app-e3ccf108.js";const p={},o=s(`<h1 id="获取当前时间戳" tabindex="-1"><a class="header-anchor" href="#获取当前时间戳" aria-hidden="true">#</a> 获取当前时间戳</h1><h2 id="获取当前时间戳-1" tabindex="-1"><a class="header-anchor" href="#获取当前时间戳-1" aria-hidden="true">#</a> 获取当前时间戳</h2><blockquote><p>https://api.bilibili.com/x/report/click/now<br> https://api.bilibili.com/x/click-interface/click/now</p></blockquote><p><em>请求方式：GET</em></p><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>now</td><td>num</td><td>当前的时间戳</td><td></td></tr></tbody></table><p><strong>示例：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://api.bilibili.com/x/report/click/now&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;now&quot;</span><span class="token operator">:</span> <span class="token number">1592666471</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="获取适用于-rtc-的时间戳" tabindex="-1"><a class="header-anchor" href="#获取适用于-rtc-的时间戳" aria-hidden="true">#</a> 获取适用于 RTC 的时间戳</h2><blockquote><p>https://api.live.bilibili.com/xlive/open-interface/v1/rtc/getTimestamp</p></blockquote><p><em>请求方法: GET</em></p>`,15),d=s(`<p><strong>JSON回复:</strong></p><p>根对象:</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0:成功</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为 0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code> 对象:</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>timestamp</td><td>num</td><td>服务器端UTC时间戳</td><td></td></tr><tr><td>microtime</td><td>num</td><td>服务器端UTC时间戳 (毫秒)</td><td></td></tr></tbody></table><p><strong>示例:</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://api.live.bilibili.com/xlive/open-interface/v1/rtc/getTimestamp&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><details><summary>查看响应示例:</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;timestamp&quot;</span><span class="token operator">:</span> <span class="token number">1723899823</span><span class="token punctuation">,</span>
    <span class="token property">&quot;microtime&quot;</span><span class="token operator">:</span> <span class="token number">1723899823683</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="获取服务器端utc时间" tabindex="-1"><a class="header-anchor" href="#获取服务器端utc时间" aria-hidden="true">#</a> 获取服务器端UTC时间</h2><blockquote><p>https://interface.bilibili.com/serverdate.js</p></blockquote><p><em>请求方式：GET</em></p><p><strong>js回复：</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>window<span class="token punctuation">.</span>serverdate <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token constant">UTC</span><span class="token punctuation">(</span><span class="token constant">YYYY</span><span class="token punctuation">,</span> <span class="token constant">M</span><span class="token punctuation">,</span> <span class="token constant">D</span><span class="token punctuation">,</span> h<span class="token punctuation">,</span> m<span class="token punctuation">,</span> s<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>示例：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://interface.bilibili.com/serverdate.js&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>window<span class="token punctuation">.</span>serverdate <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token constant">UTC</span><span class="token punctuation">(</span><span class="token number">2021</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">,</span> <span class="token number">17</span><span class="token punctuation">,</span> <span class="token number">31</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details>`,16);function i(c,r){return t(),a("div",null,[o,e(`{
  "from": {
    "url": "https://live.bilibili.com/9196015"
  }
}`),d])}const u=n(p,[["render",i],["__file","time_stamp.html.vue"]]);export{u as default};
