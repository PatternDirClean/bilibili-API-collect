import{_ as o,r as p,o as l,c as i,a as t,b as n,d as a,w as e,e as d}from"./app-e3ccf108.js";const c="/bilibili-API-collect/assets/aiSummary-a0a0fc86.svg",u={},r=d('<h1 id="视频ai总结" tabindex="-1"><a class="header-anchor" href="#视频ai总结" aria-hidden="true">#</a> 视频AI总结</h1><img src="'+c+'" width="100" height="100"><h2 id="获取ai总结内容" tabindex="-1"><a class="header-anchor" href="#获取ai总结内容" aria-hidden="true">#</a> 获取AI总结内容</h2><blockquote><p>https://api.bilibili.com/x/web-interface/view/conclusion/get</p></blockquote><p><em>请求方式: GET</em></p>',5),b=t("p",null,[t("strong",null,"url参数：")],-1),m=t("thead",null,[t("tr",null,[t("th",null,"参数名"),t("th",null,"类型"),t("th",null,"内容"),t("th",null,"必要性"),t("th",null,"备注")])],-1),k=t("tr",null,[t("td",null,"aid"),t("td",null,"num"),t("td",null,"稿件 avid"),t("td",null,"必要(可选)"),t("td",null,"avid与bvid任选一个")],-1),v=t("tr",null,[t("td",null,"bvid"),t("td",null,"str"),t("td",null,"稿件 bvid"),t("td",null,"必要(可选)"),t("td",null,"avid与bvid任选一个")],-1),h=t("tr",null,[t("td",null,"cid"),t("td",null,"num"),t("td",null,"视频 cid"),t("td",null,"必要"),t("td")],-1),_=t("tr",null,[t("td",null,"up_mid"),t("td",null,"num"),t("td",null,"UP主 mid"),t("td",null,"必要"),t("td")],-1),q=t("td",null,"w_rid",-1),y=t("td",null,"str",-1),g=t("td",null,"Wbi 签名",-1),f=t("td",null,"必要",-1),w=t("td",null,"wts",-1),x=t("td",null,"num",-1),j=t("td",null,"当前时间戳",-1),V=t("td",null,"必要",-1),S=d(`<p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0: 成功<br>-400：请求错误<br> -403: 访问权限不足</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>数据本体</td><td></td></tr></tbody></table><p><code>data</code>对象:</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>-1: 不支持AI摘要（敏感内容等）或其他因素导致请求异常<br>0: 有摘要<br>1：无摘要（未识别到语音）</td></tr><tr><td>model_result</td><td>obj</td><td>摘要内容</td><td></td></tr><tr><td>stid</td><td>str</td><td>摘要 id</td><td>如<code>code=1</code>且该字段为<code>0</code>时，则未进行 AI 总结，即添加总结队列<br>如<code>code=1</code>且该字段为空时未识别到语音</td></tr><tr><td>status</td><td>num</td><td>(?)</td><td></td></tr><tr><td>like_num</td><td>num</td><td>点赞数</td><td>默认为<code>0</code></td></tr><tr><td>dislike_num</td><td>num</td><td>点踩数</td><td>默认为<code>0</code></td></tr></tbody></table><p><code>data</code>中的<code>model_result</code>对象:</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>result_type</td><td>num</td><td>数据类型</td><td>0: 没有摘要<br>1：仅存着摘要总结<br>2：存着摘要以及提纲</td></tr><tr><td>summary</td><td>str</td><td>视频摘要</td><td>通常为一段概括整个视频内容的文本</td></tr><tr><td>outline</td><td>有数据时：array<br>无数据时：null</td><td>分段提纲</td><td>通常为视频中叙述的各部分及其要点</td></tr></tbody></table><p><code>model_result</code>对象中的<code>outline</code>数组:</p><table><thead><tr><th>项</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>0</td><td>obj</td><td>总结分段1</td><td></td></tr><tr><td>n</td><td>obj</td><td>总结分段(n+1)</td><td></td></tr><tr><td>……</td><td>obj</td><td>……</td><td>……</td></tr></tbody></table><p><code>outline</code>数组中的对象:</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>title</td><td>str</td><td>分段标题</td><td>段落内容的概括</td></tr><tr><td>part_outline</td><td>array</td><td>分段要点</td><td>当前分段中多个提到的细节</td></tr><tr><td>timestamp</td><td>num</td><td>分段起始时间</td><td>单位为秒</td></tr></tbody></table><p><code>outline</code>数组中的对象中的<code>part_outline</code>数组:</p><table><thead><tr><th>项</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>0</td><td>obj</td><td>分段要点1</td><td></td></tr><tr><td>n</td><td>obj</td><td>分段要点(n+1)</td><td></td></tr><tr><td>……</td><td>obj</td><td>……</td><td>……</td></tr></tbody></table><p><code>part_outline</code>数组中的对象:</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>timestamp</td><td>num</td><td>要点起始时间</td><td>单位为秒</td></tr><tr><td>content</td><td>str</td><td>小结内容</td><td>其中一个分段的要点</td></tr></tbody></table><p><strong>示例：</strong></p><p>得到视频<code>BV1L94y1H7CV</code>（<code>cid=1335073288</code>）的摘要</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&#39;https://api.bilibili.com/x/web-interface/view/conclusion/get&#39;</span> <span class="token punctuation">\\</span>
  --data-urlencode <span class="token string">&#39;bvid=BV1L94y1H7CV&#39;</span> <span class="token punctuation">\\</span>
  --data-urlencode <span class="token string">&#39;cid=1335073288&#39;</span> <span class="token punctuation">\\</span>
  --data-urlencode <span class="token string">&#39;up_mid=297242063&#39;</span> <span class="token punctuation">\\</span>
  --data-urlencode <span class="token string">&#39;wts=1701546363&#39;</span> <span class="token punctuation">\\</span>
  --data-urlencode <span class="token string">&#39;w_rid=1073871926b3ccd99bd790f0162af634&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;model_result&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;result_type&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token property">&quot;summary&quot;</span><span class="token operator">:</span> <span class="token string">&quot;在网上阅读时遇到错别字和语言梗的烦恼,以及正确使用语言的重要性。作者认为,我们每个人都应该有包容心,不掉渣,不纠正别人的错误,同时也需要明辨是非,规范使用语言。视频还提到了一些常见的语言梗和错误用法,呼吁大家不要过分使用网络词汇,而应该注重语言的艺术性和深度。最后,作者欢迎大家关注他的微信公众号。&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;outline&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;现代人使用中文时面临的困境,包括错别字、用法不正确等问题,并呼吁大家规范使用中文。&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;part_outline&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token property">&quot;timestamp&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
              <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;网友评论有错别字，勉强能看懂，但难受。&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token property">&quot;timestamp&quot;</span><span class="token operator">:</span> <span class="token number">39</span><span class="token punctuation">,</span>
              <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;重来一次，明辨是非。&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token property">&quot;timestamp&quot;</span><span class="token operator">:</span> <span class="token number">167</span><span class="token punctuation">,</span>
              <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;粉墨登场是贬义词，形容坏人打扮好老登场。&quot;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token property">&quot;timestamp&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;网络词汇的过度使用导致语言生硬,以及对流行语言梗的短暂使用感到厌倦。&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;part_outline&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token property">&quot;timestamp&quot;</span><span class="token operator">:</span> <span class="token number">241</span><span class="token punctuation">,</span>
              <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;网络词汇过分使用会误导别人，使规范词汇生硬&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token property">&quot;timestamp&quot;</span><span class="token operator">:</span> <span class="token number">270</span><span class="token punctuation">,</span>
              <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;以前的语言梗有深度，现在的流行梗很短命&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token property">&quot;timestamp&quot;</span><span class="token operator">:</span> <span class="token number">338</span><span class="token punctuation">,</span>
              <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;巨星之间需要化学反应的过程，前几场发挥欠佳&quot;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token property">&quot;timestamp&quot;</span><span class="token operator">:</span> <span class="token number">241</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;stid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5117037934391059183&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;like_num&quot;</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
    <span class="token property">&quot;dislike_num&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="点赞-点踩摘要" tabindex="-1"><a class="header-anchor" href="#点赞-点踩摘要" aria-hidden="true">#</a> 点赞&amp;点踩摘要</h2><blockquote><p>https://api.bilibili.com/x/web-interface/view/conclusion/set</p></blockquote><p><em>请求方式：POST</em></p><p>认证方式：Cookie(SESSDATA)</p>`,23),A=t("p",null,[t("strong",null,"url参数:")],-1),C=t("thead",null,[t("tr",null,[t("th",null,"参数名"),t("th",null,"类型"),t("th",null,"内容"),t("th",null,"必要性"),t("th",null,"备注")])],-1),W=t("td",null,"w_rid",-1),B=t("td",null,"str",-1),L=t("td",null,"Wbi 签名",-1),T=t("td",null,"必要",-1),I=t("td",null,"wts",-1),E=t("td",null,"num",-1),H=t("td",null,"当前时间戳",-1),N=t("td",null,"必要",-1),P=d(`<p><strong>正文参数( application/x-www-form-urlencoded ):</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>aid</td><td>num</td><td>稿件 avid</td><td>必要(可选)</td><td>avid与bvid任选一个</td></tr><tr><td>bvid</td><td>str</td><td>稿件 bvid</td><td>必要(可选)</td><td>avid与bvid任选一个</td></tr><tr><td>cid</td><td>num</td><td>稿件 cid</td><td>必要</td><td></td></tr><tr><td>up_mid</td><td>num</td><td>UP主 mid</td><td>非必要</td><td></td></tr><tr><td>stid</td><td>num</td><td>摘要 id</td><td>必要</td><td></td></tr><tr><td>like_state</td><td>num</td><td>执行操作</td><td>必要</td><td>1: 点赞<br>2: 取消点赞<br>3: 点踩<br>4: 取消点踩</td></tr><tr><td>csrf</td><td>str</td><td>CSRF Token（位于cookie）</td><td>必要</td><td></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0: 成功 <br>-400: 请求错误<br>65002：origin id 错误<br>65004：取消赞失败 未点赞过<br>65005：取消踩失败 未点踩过<br>65006: 已赞过<br> 65007：已踩过</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr></tbody></table><p><strong>示例：</strong></p><p>为视频<code>BV1L94y1H7CV</code>（<code>cid=1335073288</code>）的摘要点赞</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://api.bilibili.com/x/web-interface/view/conclusion/set?w_rid=edb471fc926646ef3889a80488166b66&amp;wts=1700358953&#39;</span> <span class="token punctuation">\\</span>
  --data-urlencode <span class="token string">&#39;bvid=BV1L94y1H7CV&#39;</span> <span class="token punctuation">\\</span>
  --data-urlencode <span class="token string">&#39;cid=1335073288&#39;</span> <span class="token punctuation">\\</span>
  --data-urlencode <span class="token string">&#39;up_mid=297242063&#39;</span> <span class="token punctuation">\\</span>
  --data-urlencode <span class="token string">&#39;stid=5117037934391059183&#39;</span> <span class="token punctuation">\\</span>
  --data-urlencode <span class="token string">&#39;&amp;like_state=1&#39;</span> <span class="token punctuation">\\</span>
  --data-urlencode <span class="token string">&#39;csrf=xxx&#39;</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,9);function R(D,G){const s=p("RouterLink");return l(),i("div",null,[r,t("p",null,[n("鉴权方式："),a(s,{to:"/docs/misc/sign/wbi.html"},{default:e(()=>[n("Wbi 签名")]),_:1})]),b,t("table",null,[m,t("tbody",null,[k,v,h,_,t("tr",null,[q,y,g,f,t("td",null,[n("详见 "),a(s,{to:"/docs/misc/sign/wbi.html"},{default:e(()=>[n("Wbi 签名")]),_:1})])]),t("tr",null,[w,x,j,V,t("td",null,[n("详见 "),a(s,{to:"/docs/misc/sign/wbi.html"},{default:e(()=>[n("Wbi 签名")]),_:1})])])])]),S,t("p",null,[n("鉴权方式："),a(s,{to:"/docs/misc/sign/wbi.html"},{default:e(()=>[n("Wbi 签名")]),_:1})]),A,t("table",null,[C,t("tbody",null,[t("tr",null,[W,B,L,T,t("td",null,[n("详见 "),a(s,{to:"/docs/misc/sign/wbi.html"},{default:e(()=>[n("Wbi 签名")]),_:1})])]),t("tr",null,[I,E,H,N,t("td",null,[n("详见 "),a(s,{to:"/docs/misc/sign/wbi.html"},{default:e(()=>[n("Wbi 签名")]),_:1})])])])]),P])}const F=o(u,[["render",R],["__file","summary.html.vue"]]);export{F as default};
