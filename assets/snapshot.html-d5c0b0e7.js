import{_ as t,o as n,c as s,e as a}from"./app-e3ccf108.js";const e={},o=a(`<h1 id="弹幕快照" tabindex="-1"><a class="header-anchor" href="#弹幕快照" aria-hidden="true">#</a> 弹幕快照</h1><h2 id="获取弹幕快照" tabindex="-1"><a class="header-anchor" href="#获取弹幕快照" aria-hidden="true">#</a> 获取弹幕快照</h2><blockquote><p>https://api.bilibili.com/x/v2/dm/ajax</p></blockquote><p><em>请求方式:GET</em></p><p>最近产生的几条弹幕内容，<strong>最多20条</strong></p><p><strong>url参数：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>aid</td><td>num或str</td><td>稿件avid或稿件bvid</td><td>必要</td><td></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>-400：请求错误<br>-404：无视频</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>array</td><td>预览列表</td><td></td></tr></tbody></table><p><code>data</code>数组：</p><table><thead><tr><th>项</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>0</td><td>str</td><td>预览内容1</td><td></td></tr><tr><td>n</td><td>str</td><td>预览内容（n+1）</td><td></td></tr><tr><td>……</td><td>str</td><td>……</td><td>……</td></tr><tr><td>19</td><td>str</td><td>预览内容20</td><td>最后一条</td></tr></tbody></table><p><strong>示例：</strong></p><p>获取视频<code>av43337021</code>/<code>BV1rb411m7gE</code>的弹幕快照，总计20条</p><p>avid方式：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&#39;https://api.bilibili.com/x/v2/dm/ajax&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;aid=43337021&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>bvid方式：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&#39;https://api.bilibili.com/x/v2/dm/ajax&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;aid=BV1rb411m7gE&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
	<span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
	<span class="token string">&quot;漫画比动漫好看而且血腥&quot;</span><span class="token punctuation">,</span> 
	<span class="token string">&quot;666&quot;</span><span class="token punctuation">,</span> 
	<span class="token string">&quot;金木小天使&quot;</span><span class="token punctuation">,</span>
	<span class="token string">&quot;太喜欢了&quot;</span><span class="token punctuation">,</span> 
	<span class="token string">&quot;每天一遍防止抑郁&quot;</span><span class="token punctuation">,</span>
	<span class="token string">&quot;我还记得土豆那时候还有的看&quot;</span><span class="token punctuation">,</span>
	<span class="token string">&quot;把在给我摸摸～&quot;</span><span class="token punctuation">,</span>
	<span class="token string">&quot;突然泪目&quot;</span><span class="token punctuation">,</span>
	<span class="token string">&quot;感谢野生字幕君&quot;</span><span class="token punctuation">,</span>
	<span class="token string">&quot;993-7&quot;</span><span class="token punctuation">,</span>
	<span class="token string">&quot;刚刚出的时候小学看，现在高二了&quot;</span><span class="token punctuation">,</span>
	<span class="token string">&quot;原版op有这么长吗？搞笑，肯定做了剪辑，op会给你放全歌？&quot;</span><span class="token punctuation">,</span>
	<span class="token string">&quot;让你看个op 3 : 5 4 秒？&quot;</span><span class="token punctuation">,</span>
	<span class="token string">&quot;说原版不原版的都是弱智&quot;</span><span class="token punctuation">,</span>
	<span class="token string">&quot;樱花&quot;</span><span class="token punctuation">,</span>
	<span class="token string">&quot;请打开洗脑循环食用，请打开洗脑循环食用，请打开洗脑循环食用，请打开洗脑循环食用，请打开洗脑循环食用，&quot;</span><span class="token punctuation">,</span>
	<span class="token string">&quot;再来亿遍&quot;</span><span class="token punctuation">,</span> 
	<span class="token string">&quot;错的不是我，而是这个世界。&quot;</span><span class="token punctuation">,</span>
	<span class="token string">&quot;吃货的第一季的最后一季足以让他封神！&quot;</span><span class="token punctuation">,</span> 
	<span class="token string">&quot;+&quot;</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,19),d=[o];function p(i,l){return n(),s("div",null,d)}const u=t(e,[["render",p],["__file","snapshot.html.vue"]]);export{u as default};
