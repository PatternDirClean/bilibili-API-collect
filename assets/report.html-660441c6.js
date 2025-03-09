import{_ as a,r as u,o,c as i,a as t,b as n,d,w as s,e}from"./app-e3ccf108.js";const r={},c=e(`<h1 id="视频观看数据上报" tabindex="-1"><a class="header-anchor" href="#视频观看数据上报" aria-hidden="true">#</a> 视频观看数据上报</h1><h2 id="上报观看进度-双端" tabindex="-1"><a class="header-anchor" href="#上报观看进度-双端" aria-hidden="true">#</a> 上报观看进度（双端）</h2><blockquote><p>https://api.bilibili.com/x/v2/history/report</p></blockquote><p><em>请求方式：POST</em></p><p>认证方式：APP或Cookie（SESSDATA）</p><p><strong>正文参数（ application/x-www-form-urlencoded ）：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>access_key</td><td>str</td><td>APP登录Token</td><td>APP方式必要</td><td></td></tr><tr><td>aid</td><td>num</td><td>稿件avid</td><td>必要</td><td></td></tr><tr><td>cid</td><td>num</td><td>视频cid</td><td>必要</td><td>用于识别分P</td></tr><tr><td>progress</td><td>num</td><td>观看进度</td><td>非必要</td><td>单位为秒<br>默认为0</td></tr><tr><td>platform</td><td>str</td><td>平台标识</td><td>非必要</td><td>可为android</td></tr><tr><td>csrf</td><td>str</td><td>CSRF Token（位于cookie）</td><td>Cookie方式必要</td><td></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功 <br>-101：账号未登录<br>-111：csrf校验失败<br>-400：请求错误</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr></tbody></table><p><strong>示例：</strong></p><p>记录视频<code>av13662970</code>（<code>cid=126654047</code>）的观看记录位于<code>1248</code>秒</p><p>Cookie方式：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://api.bilibili.com/x/v2/history/report&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;aid=13662970&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;cid=126654047&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;progress=1248&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;platform=android&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;csrf=xxx&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>APP方式：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://api.bilibili.com/x/v2/history/report&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;access_key=xxx&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;aid=13662970&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;cid=126654047&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;progress=1248&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;platform=android&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="上报视频播放心跳-web端" tabindex="-1"><a class="header-anchor" href="#上报视频播放心跳-web端" aria-hidden="true">#</a> 上报视频播放心跳（web端）</h2><blockquote><p>https://api.bilibili.com/x/click-interface/web/heartbeat</p></blockquote><p><em>请求方式：POST</em></p><p>认证方式：仅可Cookie（SESSDATA）</p><p>默认间隔15秒一次, 亦可记录播放历史</p><p>该接口较为复杂, 且参数计算方法均为推测, 实际过程不明, 可能含有错误, 若要正式使用可以把已播放的持续时间全都设为相同值</p><p><strong>URL参数:</strong></p>`,24),p=t("thead",null,[t("tr",null,[t("th",null,"参数名"),t("th",null,"类型"),t("th",null,"内容"),t("th",null,"必要性"),t("th",null,"备注")])],-1),_=t("tr",null,[t("td",null,"w_start_ts"),t("td",null,"num"),t("td",null,[n("参见请求正文同名无"),t("code",null,"w_"),n("前缀参数")]),t("td",null,"非必要"),t("td",null,"UNIX 秒级时间戳")],-1),m=t("tr",null,[t("td",null,"w_mid"),t("td",null,"num"),t("td",null,[n("参见请求正文同名无"),t("code",null,"w_"),n("前缀参数")]),t("td",null,"非必要"),t("td")],-1),h=t("tr",null,[t("td",null,"w_aid"),t("td",null,"num"),t("td",null,[n("参见请求正文同名无"),t("code",null,"w_"),n("前缀参数")]),t("td",null,"非必要"),t("td")],-1),b=t("tr",null,[t("td",null,"w_dt"),t("td",null,"num"),t("td",null,"2"),t("td",null,"非必要"),t("td")],-1),v=t("tr",null,[t("td",null,"w_realtime"),t("td",null,"num"),t("td",null,[n("参见请求正文同名无"),t("code",null,"w_"),n("前缀参数")]),t("td",null,"非必要"),t("td",null,"单位 秒")],-1),k=t("tr",null,[t("td",null,"w_playedtime"),t("td",null,"num"),t("td",null,[n("参见请求正文同名无"),t("code",null,"w_"),n("前缀参数")]),t("td",null,"非必要"),t("td",null,"单位 秒")],-1),g=t("tr",null,[t("td",null,"w_real_played_time"),t("td",null,"num"),t("td",null,[n("参见请求正文同名无"),t("code",null,"w_"),n("前缀参数")]),t("td",null,"非必要"),t("td",null,"单位 秒")],-1),w=t("tr",null,[t("td",null,"w_video_duration"),t("td",null,"num"),t("td",null,[n("参见请求正文同名无"),t("code",null,"w_"),n("前缀参数")]),t("td",null,"非必要"),t("td",null,"单位 秒")],-1),y=t("tr",null,[t("td",null,"w_last_play_progress_time"),t("td",null,"num"),t("td",null,[n("参见请求正文同名无"),t("code",null,"w_"),n("前缀参数")]),t("td",null,"非必要"),t("td",null,"单位 秒")],-1),E=t("tr",null,[t("td",null,"web_location"),t("td",null,"num"),t("td",null,"网页位置"),t("td",null,"非必要"),t("td",null,"视频详情页播放器: 1315873")],-1),A=t("td",null,"w_rid",-1),f=t("td",null,"num",-1),x=t("td",null,"WBI 签名",-1),B=t("td",null,"非必要",-1),q=t("td",null,"wts",-1),S=t("td",null,"num",-1),P=t("td",null,"UNIX 秒级时间戳",-1),j=t("td",null,"非必要",-1),D=t("p",null,[t("strong",null,"正文参数（ application/x-www-form-urlencoded ）：")],-1),I=t("thead",null,[t("tr",null,[t("th",null,"参数名"),t("th",null,"类型"),t("th",null,"内容"),t("th",null,"必要性"),t("th",null,"备注")])],-1),T=t("tr",null,[t("td",null,"aid"),t("td",null,"num"),t("td",null,"稿件avid"),t("td",null,"必要（可选）"),t("td",null,"avid与bvid任选一个(网页端请求默认仅使用aid)")],-1),U=t("tr",null,[t("td",null,"bvid"),t("td",null,"str"),t("td",null,"稿件bvid"),t("td",null,"必要（可选）"),t("td",null,"avid与bvid任选一个")],-1),C=t("tr",null,[t("td",null,"cid"),t("td",null,"num"),t("td",null,"视频cid"),t("td",null,"非必要"),t("td",null,"用于识别分P")],-1),F=t("tr",null,[t("td",null,"epid"),t("td",null,"num"),t("td",null,"番剧epid"),t("td",null,"非必要"),t("td")],-1),R=t("tr",null,[t("td",null,"sid"),t("td",null,"num"),t("td",null,"番剧ssid"),t("td",null,"非必要"),t("td")],-1),N=t("tr",null,[t("td",null,"mid"),t("td",null,"num"),t("td",null,"当前用户mid"),t("td",null,"非必要"),t("td")],-1),L=t("tr",null,[t("td",null,"played_time"),t("td",null,"num"),t("td",null,"视频播放进度"),t("td",null,"非必要"),t("td",null,[n("单位 秒"),t("br"),n("播放完成为 -1")])],-1),V=t("tr",null,[t("td",null,"realtime"),t("td",null,"num"),t("td",null,"本轮页面会话真实播放时间"),t("td",null,"非必要"),t("td",null,"单位 秒")],-1),W=t("tr",null,[t("td",null,"real_played_time"),t("td",null,"num"),t("td",null,"本轮页面会话真实视频播放持续时间"),t("td",null,"非必要"),t("td",null,"单位 秒")],-1),X=t("tr",null,[t("td",null,"refer_url"),t("td",null,"str"),t("td",null,"与请求头 Referer 字段相同"),t("td",null,"非必要"),t("td")],-1),O=t("td",null,"quality",-1),J=t("td",null,"num",-1),z=t("td",null,"视频清晰度",-1),G=t("td",null,"非必要",-1),H=t("tr",null,[t("td",null,"video_duration"),t("td",null,"num"),t("td",null,"视频时长"),t("td",null,"非必要"),t("td",null,"单位 秒")],-1),K=t("tr",null,[t("td",null,"last_play_progress_time"),t("td",null,"num"),t("td",null,"play_time 与 本轮页面会话开始时 played_time 之和"),t("td",null,"非必要"),t("td",null,"单位 秒")],-1),M=t("tr",null,[t("td",null,"max_play_progress_time"),t("td",null,"num"),t("td",null,"本轮页面会话所有最大 last_play_progress_time 与 本轮页面会话开始时 played_time 之和"),t("td",null,"非必要"),t("td",null,"单位 秒")],-1),Q=t("tr",null,[t("td",null,"start_ts"),t("td",null,"num"),t("td",null,"开始播放时刻"),t("td",null,"非必要"),t("td",null,"时间戳")],-1),Y=t("tr",null,[t("td",null,"type"),t("td",null,"num"),t("td",null,"视频类型"),t("td",null,"非必要"),t("td",null,[n("3：投稿视频"),t("br"),n("4：剧集"),t("br"),n("10：课程")])],-1),Z=t("tr",null,[t("td",null,"sub_type"),t("td",null,"num"),t("td",null,"剧集副类型"),t("td",null,"非必要"),t("td",null,[n("0: 普通投稿视频"),t("br"),n("1：番剧"),t("br"),n("2：电影"),t("br"),n("3：纪录片"),t("br"),n("4：国创"),t("br"),n("5：电视剧"),t("br"),n("7：综艺")])],-1),$=t("tr",null,[t("td",null,"dt"),t("td",null,"num"),t("td",null,"2"),t("td",null,"非必要"),t("td")],-1),tt=t("tr",null,[t("td",null,"outer"),t("td",null,"num"),t("td",null,"0"),t("td",null,"非必要"),t("td")],-1),nt=t("tr",null,[t("td",null,"spmid"),t("td",null,"str"),t("td",null,"333.788.0.0"),t("td",null,"非必要"),t("td",null,"作用尚不明确")],-1),lt=t("tr",null,[t("td",null,"from_spmid"),t("td",null,"str"),t("td",null,"播放来源?"),t("td",null,"非必要"),t("td",null,[n("也可为空, 如: "),t("code",null,"444.41.list.card_archive.click"),n(),t("code",null,"333.999.0.0")])],-1),dt=t("tr",null,[t("td",null,"session"),t("td",null,"str"),t("td",null,"会话信息?"),t("td",null,"非必要"),t("td",null,"一串无分隔小写 UUID")],-1),st=t("tr",null,[t("td",null,"extra"),t("td",null,"obj"),t("td",null,"额外信息, 如播放器版本"),t("td",null,"非必要"),t("td",null,[n("如: "),t("code",null,'{"player_version":"4.8.36"}')])],-1),et=t("tr",null,[t("td",null,"play_type"),t("td",null,"num"),t("td",null,"播放动作"),t("td",null,"非必要"),t("td",null,[n("0：播放中"),t("br"),n("1：开始播放"),t("br"),n("2：暂停"),t("br"),n("3：继续播放"),t("br"),n("4: 结束播放")])],-1),at=t("tr",null,[t("td",null,"csrf"),t("td",null,"str"),t("td",null,"CSRF Token (即 Cookie 中 bili_jct)"),t("td",null,"非必要"),t("td")],-1),ut=e(`<p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>-400：请求错误</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr></tbody></table><p><strong>示例：</strong></p><p>上报一次视频<code>av2</code>/<code>BV1xx411c7mD</code>的心跳数据</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://api.bilibili.com/x/click-interface/web/heartbeat&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;aid=2&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;bvid=BV1xx411c7mD&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;cid=62131&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;played_time=60&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;realtime=60&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;start_ts=1592720840&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;type=3&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;dt=2&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;play_type=0&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;csrf=xxx&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="开始观看视频-web端" tabindex="-1"><a class="header-anchor" href="#开始观看视频-web端" aria-hidden="true">#</a> 开始观看视频 (web端)</h2><blockquote><p>https://api.bilibili.com/x/click-interface/click/web/h5</p></blockquote><p><em>请求方式: POST</em></p><p>认证方式: Cookie (SESSDATA)</p><p>该接口亦被用于计算播放量, 播放量更新不是实时的</p><p><strong>URL参数:</strong></p>`,13),ot=t("thead",null,[t("tr",null,[t("th",null,"参数名"),t("th",null,"类型"),t("th",null,"内容"),t("th",null,"必要性"),t("th",null,"备注")])],-1),it=t("tr",null,[t("td",null,"w_aid"),t("td",null,"num"),t("td",null,"稿件 aid"),t("td",null,"不必要"),t("td")],-1),rt=t("tr",null,[t("td",null,"w_part"),t("td",null,"num"),t("td",null,"视频分 P 编号"),t("td",null,"不必要"),t("td")],-1),ct=t("tr",null,[t("td",null,"w_ftime"),t("td",null,"num"),t("td",null,"点击时间戳?"),t("td",null,"不必要"),t("td",null,"UNIX 秒级时间戳")],-1),pt=t("tr",null,[t("td",null,"w_stime"),t("td",null,"num"),t("td",null,"开始播放时间戳?"),t("td",null,"不必要"),t("td",null,"UNIX 秒级时间戳")],-1),_t=t("tr",null,[t("td",null,"w_type"),t("td",null,"num"),t("td",null,"视频类型"),t("td",null,"不必要"),t("td",null,[n("见"),t("a",{href:"#%E4%B8%8A%E6%8A%A5%E8%A7%86%E9%A2%91%E6%92%AD%E6%94%BE%E5%BF%83%E8%B7%B3web%E7%AB%AF"},"上报视频播放心跳（web端）")])],-1),mt=t("tr",null,[t("td",null,"web_location"),t("td",null,"num"),t("td",null,"网页位置?"),t("td",null,"不必要"),t("td",null,"1315873")],-1),ht=t("td",null,"w_rid",-1),bt=t("td",null,"num",-1),vt=t("td",null,"WBI 签名",-1),kt=t("td",null,"不必要",-1),gt=t("td",null,"wts",-1),wt=t("td",null,"num",-1),yt=t("td",null,"UNIX 秒级时间戳",-1),Et=t("td",null,"不必要",-1),At=e(`<p><strong>正文参数 (application/x-www-form-urlencoded):</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>mid</td><td>num</td><td>当前用户 mid</td><td>不必要</td><td></td></tr><tr><td>aid</td><td>num</td><td>稿件 aid</td><td>必要</td><td></td></tr><tr><td>cid</td><td>num</td><td>视频 cid</td><td>不必要</td><td></td></tr><tr><td>part</td><td>num</td><td>视频分 P 编号</td><td>不必要</td><td></td></tr><tr><td>lv</td><td>num</td><td>当前用户等级</td><td>不必要</td><td></td></tr><tr><td>ftime</td><td>num</td><td>同 URL 参数中带有 <code>w_</code> 前缀的同名参数</td><td>不必要</td><td></td></tr><tr><td>stime</td><td>num</td><td>同 URL 参数中带有 <code>w_</code> 前缀的同名参数</td><td>不必要</td><td></td></tr><tr><td>type</td><td>num</td><td>视频类型</td><td>不必要</td><td>见<a href="#%E4%B8%8A%E6%8A%A5%E8%A7%86%E9%A2%91%E6%92%AD%E6%94%BE%E5%BF%83%E8%B7%B3web%E7%AB%AF">上报视频播放心跳（web端）</a></td></tr><tr><td>sub_type</td><td>num</td><td>视频子类型</td><td>不必要</td><td>见<a href="#%E4%B8%8A%E6%8A%A5%E8%A7%86%E9%A2%91%E6%92%AD%E6%94%BE%E5%BF%83%E8%B7%B3web%E7%AB%AF">上报视频播放心跳（web端）</a></td></tr><tr><td>referer_url</td><td>str</td><td>与请求头 Referer 字段相同</td><td>不必要</td><td></td></tr><tr><td>outer</td><td>num</td><td>0</td><td>不必要</td><td></td></tr><tr><td>spmid</td><td>str</td><td>333.788.0.0</td><td>不必要</td><td>作用尚不明确</td></tr><tr><td>from_spmid</td><td>str</td><td>播放来源?</td><td>不必要</td><td>见<a href="#%E4%B8%8A%E6%8A%A5%E8%A7%86%E9%A2%91%E6%92%AD%E6%94%BE%E5%BF%83%E8%B7%B3web%E7%AB%AF">上报视频播放心跳（web端）</a></td></tr><tr><td>session</td><td>str</td><td>会话信息?</td><td>不必要</td><td>一串无分隔小写 UUID</td></tr><tr><td>csrf</td><td>str</td><td>CSRF Token (即 Cookie 中 bili_jct)</td><td>不必要</td><td></td></tr></tbody></table><p><strong>JSON回复:</strong></p><p>根对象:</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>-400：请求错误</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为 <code>0</code></td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr></tbody></table><p><strong>示例:</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://api.bilibili.com/x/click-interface/click/web/h5&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;aid=2&#39;</span> <span class="token punctuation">\\</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例:</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,8);function ft(xt,Bt){const l=u("RouterLink");return o(),i("div",null,[c,t("table",null,[p,t("tbody",null,[_,m,h,b,v,k,g,w,y,E,t("tr",null,[A,f,x,B,t("td",null,[n("参见"),d(l,{to:"/docs/misc/sign/wbi.html"},{default:s(()=>[n("WBI 签名")]),_:1})])]),t("tr",null,[q,S,P,j,t("td",null,[n("参见"),d(l,{to:"/docs/misc/sign/wbi.html"},{default:s(()=>[n("WBI 签名")]),_:1})])])])]),D,t("table",null,[I,t("tbody",null,[T,U,C,F,R,N,L,V,W,X,t("tr",null,[O,J,z,G,t("td",null,[n("参见"),d(l,{to:"/docs/video/videostream_url.html#qn%E8%A7%86%E9%A2%91%E6%B8%85%E6%99%B0%E5%BA%A6%E6%A0%87%E8%AF%86"},{default:s(()=>[n("qn视频清晰度标识")]),_:1})])]),H,K,M,Q,Y,Z,$,tt,nt,lt,dt,st,et,at])]),ut,t("table",null,[ot,t("tbody",null,[it,rt,ct,pt,_t,mt,t("tr",null,[ht,bt,vt,kt,t("td",null,[n("参见"),d(l,{to:"/docs/misc/sign/wbi.html"},{default:s(()=>[n("WBI 签名")]),_:1})])]),t("tr",null,[gt,wt,yt,Et,t("td",null,[n("参见"),d(l,{to:"/docs/misc/sign/wbi.html"},{default:s(()=>[n("WBI 签名")]),_:1})])])])]),At])}const St=a(r,[["render",ft],["__file","report.html.vue"]]);export{St as default};
