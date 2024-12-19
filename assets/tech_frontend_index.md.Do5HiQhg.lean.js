import{_ as s,c as i,a1 as l,o as e}from"./chunks/framework.DpGibytC.js";const k=JSON.parse('{"title":"NocoBase 使用指南","description":"","frontmatter":{},"headers":[],"relativePath":"tech/frontend/index.md","filePath":"tech/frontend/index.md"}'),n={name:"tech/frontend/index.md"};function t(h,a,o,p,r,d){return e(),i("div",null,a[0]||(a[0]=[l(`<h1 id="nocobase-使用指南" tabindex="-1">NocoBase 使用指南 <a class="header-anchor" href="#nocobase-使用指南" aria-label="Permalink to &quot;NocoBase 使用指南&quot;">​</a></h1><p>NocoBase 是一个强大的开源低代码平台，致力于为用户提供高度灵活的应用程序开发和数据管理解决方案。通过可视化的拖拽界面和插件化的架构，用户可以快速搭建自定义的应用程序，而无需深厚的编程知识。本文将从 NocoBase 的核心功能、源码分析以及使用方法三方面展开，帮助您全面了解并高效使用 NocoBase。</p><hr><h2 id="目录" tabindex="-1">目录 <a class="header-anchor" href="#目录" aria-label="Permalink to &quot;目录&quot;">​</a></h2><ol><li><a href="#核心功能概述">核心功能概述</a></li><li><a href="#源码结构分析">源码结构分析</a></li><li><a href="#安装与快速开始">安装与快速开始</a></li><li><a href="#基础使用方法">基础使用方法</a><ul><li><a href="#创建数据表">创建数据表</a></li><li><a href="#定义模型字段">定义模型字段</a></li><li><a href="#配置权限">配置权限</a></li><li><a href="#设计工作流">设计工作流</a></li></ul></li><li><a href="#进阶功能使用">进阶功能使用</a><ul><li><a href="#插件系统">插件系统</a></li><li><a href="#自定义界面">自定义界面</a></li><li><a href="#集成第三方服务">集成第三方服务</a></li></ul></li><li><a href="#最佳实践与案例分享">最佳实践与案例分享</a></li></ol><hr><h2 id="核心功能概述" tabindex="-1">核心功能概述 <a class="header-anchor" href="#核心功能概述" aria-label="Permalink to &quot;核心功能概述&quot;">​</a></h2><p>NocoBase 提供了一整套简化开发的核心功能，以下是主要功能模块：</p><h3 id="_1-数据管理" tabindex="-1">1. 数据管理 <a class="header-anchor" href="#_1-数据管理" aria-label="Permalink to &quot;1. 数据管理&quot;">​</a></h3><p>NocoBase 的数据管理功能基于关系型数据库设计，用户可以通过界面直接创建、修改和管理数据表及其关联关系。常见功能包括：</p><ul><li>表结构设计：支持定义字段类型（文本、数字、日期、JSON 等）。</li><li>数据操作：支持 CRUD 操作。</li><li>关联关系：支持一对一、一对多和多对多的关联。</li></ul><h3 id="_2-权限管理" tabindex="-1">2. 权限管理 <a class="header-anchor" href="#_2-权限管理" aria-label="Permalink to &quot;2. 权限管理&quot;">​</a></h3><p>内置灵活的权限管理模块，用户可以通过规则定义：</p><ul><li>不同用户角色的访问权限。</li><li>数据级权限控制（如行级权限）。</li><li>字段级权限控制。</li></ul><h3 id="_3-工作流自动化" tabindex="-1">3. 工作流自动化 <a class="header-anchor" href="#_3-工作流自动化" aria-label="Permalink to &quot;3. 工作流自动化&quot;">​</a></h3><p>NocoBase 提供了强大的工作流设计工具，支持事件驱动的自动化操作，例如：</p><ul><li>数据创建后触发通知。</li><li>定时任务的执行。</li><li>条件判断分支处理。</li></ul><h3 id="_4-插件架构" tabindex="-1">4. 插件架构 <a class="header-anchor" href="#_4-插件架构" aria-label="Permalink to &quot;4. 插件架构&quot;">​</a></h3><p>NocoBase 的核心设计之一是插件架构，功能可以通过插件扩展，无需对核心代码进行修改。目前社区提供了丰富的插件库，例如：</p><ul><li>文件管理插件</li><li>用户认证插件</li><li>数据分析插件</li></ul><h3 id="_5-前端界面自定义" tabindex="-1">5. 前端界面自定义 <a class="header-anchor" href="#_5-前端界面自定义" aria-label="Permalink to &quot;5. 前端界面自定义&quot;">​</a></h3><p>通过拖拽式设计器，用户可以自定义前端界面，快速生成交互友好的管理后台或用户端页面。</p><hr><h2 id="源码结构分析" tabindex="-1">源码结构分析 <a class="header-anchor" href="#源码结构分析" aria-label="Permalink to &quot;源码结构分析&quot;">​</a></h2><p>NocoBase 的源码结构清晰，主要分为以下几个部分：</p><div class="language-plaintext vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plaintext</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>NocoBase/</span></span>
<span class="line"><span>├── packages/          # 核心功能模块和插件</span></span>
<span class="line"><span>│   ├── core/          # 核心功能实现</span></span>
<span class="line"><span>│   ├── plugins/       # 插件功能</span></span>
<span class="line"><span>│   ├── database/      # 数据库相关模块</span></span>
<span class="line"><span>│   └── utils/         # 通用工具函数</span></span>
<span class="line"><span>├── examples/          # 示例项目</span></span>
<span class="line"><span>├── scripts/           # 构建和发布脚本</span></span>
<span class="line"><span>├── docs/              # 文档资源</span></span>
<span class="line"><span>└── tests/             # 单元测试和集成测试</span></span></code></pre></div><h3 id="核心模块" tabindex="-1">核心模块 <a class="header-anchor" href="#核心模块" aria-label="Permalink to &quot;核心模块&quot;">​</a></h3><ol><li><strong>core/</strong>：实现了 NocoBase 的核心框架逻辑，包括启动流程、插件加载机制等。</li><li><strong>database/</strong>：封装了数据库操作的抽象层，支持多种数据库（默认支持 SQLite 和 MySQL）。</li><li><strong>plugins/</strong>：内置了一些基础插件，比如用户认证和文件管理。</li></ol><h3 id="插件机制" tabindex="-1">插件机制 <a class="header-anchor" href="#插件机制" aria-label="Permalink to &quot;插件机制&quot;">​</a></h3><p>插件采用模块化设计，开发者可以通过 <code>@nocobase/plugin-xxx</code> 快速创建自定义插件，并通过配置文件加载到系统中。</p><hr><h2 id="安装与快速开始" tabindex="-1">安装与快速开始 <a class="header-anchor" href="#安装与快速开始" aria-label="Permalink to &quot;安装与快速开始&quot;">​</a></h2><p>以下是 NocoBase 的安装和快速使用步骤：</p><h3 id="_1-安装-nocobase" tabindex="-1">1. 安装 NocoBase <a class="header-anchor" href="#_1-安装-nocobase" aria-label="Permalink to &quot;1. 安装 NocoBase&quot;">​</a></h3><h4 id="环境要求" tabindex="-1">环境要求 <a class="header-anchor" href="#环境要求" aria-label="Permalink to &quot;环境要求&quot;">​</a></h4><ul><li>Node.js &gt;= 14.0.0</li><li>npm &gt;= 6.0.0 或 Yarn</li><li>数据库（MySQL 或 SQLite）</li></ul><h4 id="安装步骤" tabindex="-1">安装步骤 <a class="header-anchor" href="#安装步骤" aria-label="Permalink to &quot;安装步骤&quot;">​</a></h4><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 克隆代码库</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/nocobase/nocobase.git</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 进入项目目录</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nocobase</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装依赖</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 启动服务</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span></span></code></pre></div><p>服务启动后，访问 <code>http://localhost:13000</code> 即可进入管理后台。</p><h3 id="_2-配置数据库" tabindex="-1">2. 配置数据库 <a class="header-anchor" href="#_2-配置数据库" aria-label="Permalink to &quot;2. 配置数据库&quot;">​</a></h3><p>默认使用 SQLite 数据库，可以通过配置文件切换到 MySQL：</p><p>在 <code>config/database.js</code> 中修改：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  dialect: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;mysql&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  host: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;localhost&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  username: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;root&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  password: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;password&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  database: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;nocobase&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><hr><h2 id="基础使用方法" tabindex="-1">基础使用方法 <a class="header-anchor" href="#基础使用方法" aria-label="Permalink to &quot;基础使用方法&quot;">​</a></h2><h3 id="创建数据表" tabindex="-1">创建数据表 <a class="header-anchor" href="#创建数据表" aria-label="Permalink to &quot;创建数据表&quot;">​</a></h3><ol><li>登录后台，进入 &quot;模型管理&quot;。</li><li>点击 &quot;新建表&quot;。</li><li>定义表名和字段： <ul><li>字段类型支持文本、数字、日期、布尔等。</li><li>可以设置字段是否必填，是否唯一。</li></ul></li></ol><h3 id="定义模型字段" tabindex="-1">定义模型字段 <a class="header-anchor" href="#定义模型字段" aria-label="Permalink to &quot;定义模型字段&quot;">​</a></h3><p>在创建数据表时，可以为字段添加验证规则和默认值。例如：</p><ul><li>字符串字段可以限制长度。</li><li>数值字段可以设置最小值和最大值。</li></ul><h3 id="配置权限" tabindex="-1">配置权限 <a class="header-anchor" href="#配置权限" aria-label="Permalink to &quot;配置权限&quot;">​</a></h3><ol><li>进入 &quot;权限管理&quot; 模块。</li><li>创建角色，并为角色分配权限： <ul><li>数据访问权限：允许访问哪些表或字段。</li><li>操作权限：允许执行哪些操作（如新增、删除、修改）。</li></ul></li></ol><h3 id="设计工作流" tabindex="-1">设计工作流 <a class="header-anchor" href="#设计工作流" aria-label="Permalink to &quot;设计工作流&quot;">​</a></h3><ol><li>进入 &quot;工作流设计器&quot;。</li><li>添加事件触发器，例如 &quot;当数据新增时&quot;。</li><li>添加任务节点，例如 &quot;发送邮件&quot; 或 &quot;调用接口&quot;。</li><li>配置条件判断分支。</li></ol><hr><h2 id="进阶功能使用" tabindex="-1">进阶功能使用 <a class="header-anchor" href="#进阶功能使用" aria-label="Permalink to &quot;进阶功能使用&quot;">​</a></h2><h3 id="插件系统" tabindex="-1">插件系统 <a class="header-anchor" href="#插件系统" aria-label="Permalink to &quot;插件系统&quot;">​</a></h3><p>NocoBase 的插件可以扩展平台功能。以下是安装和使用插件的步骤：</p><h4 id="安装插件" tabindex="-1">安装插件 <a class="header-anchor" href="#安装插件" aria-label="Permalink to &quot;安装插件&quot;">​</a></h4><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @nocobase/plugin-xxx</span></span></code></pre></div><h4 id="加载插件" tabindex="-1">加载插件 <a class="header-anchor" href="#加载插件" aria-label="Permalink to &quot;加载插件&quot;">​</a></h4><p>在 <code>config/plugins.js</code> 中添加：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &#39;@nocobase/plugin-xxx&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span></code></pre></div><h4 id="常用插件" tabindex="-1">常用插件 <a class="header-anchor" href="#常用插件" aria-label="Permalink to &quot;常用插件&quot;">​</a></h4><ul><li><code>@nocobase/plugin-file-manager</code>：文件上传和管理。</li><li><code>@nocobase/plugin-charts</code>：数据可视化。</li></ul><h3 id="自定义界面" tabindex="-1">自定义界面 <a class="header-anchor" href="#自定义界面" aria-label="Permalink to &quot;自定义界面&quot;">​</a></h3><p>通过拖拽式界面设计器，您可以：</p><ol><li>自定义表单布局。</li><li>定制图表和数据展示。</li><li>定义按钮和交互逻辑。</li></ol><h3 id="集成第三方服务" tabindex="-1">集成第三方服务 <a class="header-anchor" href="#集成第三方服务" aria-label="Permalink to &quot;集成第三方服务&quot;">​</a></h3><p>通过 REST API 或 Webhook，NocoBase 可以与外部系统对接。例如：</p><ul><li>发送 HTTP 请求到外部服务。</li><li>接收第三方系统的 Webhook 请求。</li></ul><hr><h2 id="最佳实践与案例分享" tabindex="-1">最佳实践与案例分享 <a class="header-anchor" href="#最佳实践与案例分享" aria-label="Permalink to &quot;最佳实践与案例分享&quot;">​</a></h2><ol><li><p><strong>中小企业管理系统</strong></p><ul><li>功能：订单管理、客户管理、库存管理。</li><li>实现：结合 NocoBase 的表关联功能和权限管理模块。</li></ul></li><li><p><strong>教育培训机构管理系统</strong></p><ul><li>功能：课程安排、学生管理、成绩统计。</li><li>实现：通过工作流实现自动化提醒功能。</li></ul></li><li><p><strong>数据可视化平台</strong></p><ul><li>功能：实时展示业务数据。</li><li>实现：使用数据分析插件和自定义图表界面。</li></ul></li></ol><hr><p>通过本文的介绍，您应该能够快速上手 NocoBase 并搭建高效的应用程序。如果需要深入了解其源码或扩展功能，可以参考 <a href="https://www.nocobase.com/docs" target="_blank" rel="noreferrer">NocoBase 官方文档</a>。</p>`,76)]))}const u=s(n,[["render",t]]);export{k as __pageData,u as default};
