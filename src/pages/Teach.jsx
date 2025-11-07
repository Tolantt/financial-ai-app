import React from "react"
import "./Teach.css"

const menuItems = [
  { id: "how-to", title: "新手上路", subtitle: "The \"How-To\" Guide" },
  { id: "knowledge", title: "金融知识库", subtitle: "The \"What & Why\"" },
  { id: "masters", title: "投资大师说", subtitle: "Wisdom from Masters" },
  { id: "research", title: "深度投研与资源", subtitle: "In-depth Research" },
]

const sections = [
  {
    id: "how-to",
    title: "新手上路",
    subtitle: "The \"How-To\" Guide",
    description:
      "以苹果式的细腻体验，帮你完成第一笔投资的每一步。从心态准备到开户执行，我们把复杂事项拆解为可以即刻行动的步骤。",
    blocks: [
      {
        id: "mindset",
        kicker: "01",
        title: "投资前的心态与准备",
        summary:
          "建立长期主义的思维与科学的资产配置观念，是所有行动的起点。",
        body: (
          <>
            <p className="teach-text">
              投资是一场和时间合作的旅程。正确的心态意味着认可市场波动的常态，把注意力放在“风险承受能力、目标收益率、资金使用周期”三个维度上。
            </p>
            <div className="teach-surface">
              <h4 className="teach-surface__title">树立正确的投资观</h4>
              <ul className="teach-list">
                <li>理解收益来自承担风险，长期持有贡献了全球股市绝大部分回报。</li>
                <li>市场存在周期：扩张—过热—收缩—复苏的节奏，会在资产价格中体现。</li>
                <li>设定“亏得起”的金额，预留应急现金，避免在情绪高点做被动决策。</li>
              </ul>
            </div>
            <div className="teach-surface teach-surface--accent">
              <div className="teach-surface__title">资产配置图解</div>
              <p className="teach-text">
                把资金分散到现金、债券、股票与另类资产，匹配不同周期下的表现。以下三种经典模型，帮助你以风险偏好为轴建立组合。
              </p>
              <div className="teach-grid teach-grid--three">
                <div className="teach-tile">
                  <h5 className="teach-tile__title">保守型</h5>
                  <p className="teach-text">现金 35% · 债券 45% · 股票 20%。适合三年内有大额支出的稳健型用户。</p>
                </div>
                <div className="teach-tile">
                  <h5 className="teach-tile__title">均衡型</h5>
                  <p className="teach-text">现金 20% · 债券 35% · 股票 40% · 另类 5%。适合 5 年以上投资周期的投资者。</p>
                </div>
                <div className="teach-tile">
                  <h5 className="teach-tile__title">进取型</h5>
                  <p className="teach-text">现金 10% · 债券 20% · 股票 60% · 另类 10%。适合风险承受力强、目标是长期增值的用户。</p>
                </div>
              </div>
            </div>
            <div className="teach-surface">
              <h4 className="teach-surface__title">第一笔投资资金</h4>
              <p className="teach-text">
                推荐从“闲钱”开始：至少保留 6 个月生活开支作为应急现金，其余资金可分批投入。采用定投可以降低一次性建仓的择时风险，并在每季度复盘资金状况。
              </p>
            </div>
          </>
        ),
        resources: [
          { label: "先锋领航：资产配置为何重要", url: "https://www.vanguard.com.hk/portal/articles/what-is-asset-allocation/" },
          { label: "Investopedia：如何分配第一笔投资资金", url: "https://www.investopedia.com/articles/basics/06/invest1000.asp" },
          { label: "中国证监会投教专栏", url: "https://www.csrc.gov.cn/csrc/c101907/investor_edu.shtml" },
        ],
      },
      {
        id: "domestic",
        kicker: "02",
        title: "境内投资实操",
        summary: "从券商甄选到基金定投执行，提供逐步拆解的操作指南。",
        body: (
          <>
            <div className="teach-grid teach-grid--two">
              <article className="teach-surface">
                <h4 className="teach-surface__title">A 股券商选择要点</h4>
                <ul className="teach-list">
                  <li>手续费：主流券商标准佣金为万 2.5-3，可申请调至万 1-1.5，留意平台费。</li>
                  <li>交易系统体验：关注行情更新速度、是否支持条件单等进阶功能。</li>
                  <li>全球扩展：部分券商（如中信、华泰）支持港美股业务，省去二次开户。</li>
                </ul>
                <p className="teach-hint">温馨提示：可在中国证券业协会官网查询券商资质，避免无牌照平台。</p>
              </article>
              <article className="teach-surface">
                <h4 className="teach-surface__title">A 股开户流程</h4>
                <ol className="teach-steps">
                  <li>准备身份证、银行卡、联系方式以及工作/收入信息。</li>
                  <li>下载券商 APP，完成身份录入、人脸识别与风险测评。</li>
                  <li>选择普通或融资融券账户，设置交易密码并提交审核。</li>
                  <li>审核通过后开通沪深交易权限，绑定三方存管银行并入金测试。</li>
                </ol>
              </article>
            </div>
            <div className="teach-surface">
              <h4 className="teach-surface__title">基金平台与定投执行</h4>
              <p className="teach-text">
                主流基金平台包括支付宝、天天基金、蚂蚁财富与蛋卷基金。对比费率、基金品类与自动投教内容，选择提醒机制符合个人习惯的应用。
              </p>
              <div className="teach-grid teach-grid--three">
                <div className="teach-tile">
                  <h5 className="teach-tile__title">定投设定</h5>
                  <p className="teach-text">确定金额（如每月 2000 元）、扣款日期与指数/基金标的。</p>
                </div>
                <div className="teach-tile">
                  <h5 className="teach-tile__title">执行</h5>
                  <p className="teach-text">在平台选择智能定投或自定义定投，设置扣款卡与周期，开启收益再投入。</p>
                </div>
                <div className="teach-tile">
                  <h5 className="teach-tile__title">复盘</h5>
                  <p className="teach-text">每季度查看收益率、回撤与资产配置，必要时做再平衡。</p>
                </div>
              </div>
            </div>
          </>
        ),
        resources: [
          { label: "中国证券业协会：券商信息公示", url: "https://www.sac.net.cn/xbzx/public/" },
          { label: "中信证券：线上开户流程", url: "https://www.youtube.com/watch?v=tGBiP5hF5a4" },
          { label: "蚂蚁财富学院：基金定投实操", url: "https://www.antfortune.com/m/college/article.htm?articleId=202210110002" },
        ],
      },
      {
        id: "global",
        kicker: "03",
        title: "全球投资渠道",
        summary: "针对境外投资需求，提供证件、银行卡、券商开户与资金路径图。",
        body: (
          <>
            <div className="teach-surface">
              <h4 className="teach-surface__title">证件准备</h4>
              <div className="teach-grid teach-grid--two">
                <div className="teach-tile teach-tile--soft">
                  <h5 className="teach-tile__title">港澳通行证</h5>
                  <p className="teach-text">
                    前往户籍地出入境管理部门办理，提交身份证、户口簿并采集指纹，7-10 个工作日取证。记得加办签注或在“移民局”APP 续签。
                  </p>
                  <a className="teach-link" href="https://www.nia.gov.cn/n741435/n741604/c1674870/content.html" target="_blank" rel="noreferrer">
                    国家移民管理局：证件指南
                  </a>
                </div>
                <div className="teach-tile teach-tile--soft">
                  <h5 className="teach-tile__title">护照</h5>
                  <p className="teach-text">
                    首次申请需提交身份证、户口簿并填写《中国公民出入境证件申请表》，办理周期 7-15 个工作日，可通过公安 APP 预约排号。
                  </p>
                  <a className="teach-link" href="https://www.nia.gov.cn/n741435/n741604/c1354587/content.html" target="_blank" rel="noreferrer">
                    官方流程说明
                  </a>
                </div>
              </div>
            </div>
            <div className="teach-surface">
              <h4 className="teach-surface__title">境外银行卡</h4>
              <p className="teach-text">
                香港银行卡是连接境内资金与海外券商的关键。多数银行要求持证人现场面谈，部分机构支持视频见证。
              </p>
              <div className="teach-grid teach-grid--three">
                <div className="teach-tile">
                  <h5 className="teach-tile__title">中银香港</h5>
                  <p className="teach-text">可开立“中银 e-账户”免月费，支持 FPS 与快速转账，内地见证点覆盖 30+ 城市。</p>
                  <p className="teach-note">材料：通行证、身份证、三个月内地址证明。</p>
                </div>
                <div className="teach-tile">
                  <h5 className="teach-tile__title">汇丰香港</h5>
                  <p className="teach-text">提供 Premier 优惠与实时汇率换汇，需维持 5 万港币或购买理财。</p>
                  <p className="teach-note">可在深圳、广州等地通过卓越理财中心视频开户。</p>
                </div>
                <div className="teach-tile">
                  <h5 className="teach-tile__title">渣打香港</h5>
                  <p className="teach-text">多币种账户，月费友好，与富途、老虎等券商合作入金。</p>
                  <p className="teach-note">支持美元、港币账户自由切换。</p>
                </div>
              </div>
              <div className="teach-tip">
                其他选择：新加坡华侨银行支持线上开户并提供全球 ATM 免费取现；美国银行适合未来申请美股融资，需预约面签并提交 W-8BEN 表格。
              </div>
            </div>
            <div className="teach-surface">
              <h4 className="teach-surface__title">券商对比与开户</h4>
              <div className="teach-table-wrapper">
                <table className="teach-table">
                  <thead>
                    <tr>
                      <th>券商</th>
                      <th>佣金结构</th>
                      <th>交易品种</th>
                      <th>特点</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>富途牛牛</td>
                      <td>港股 0.03%+15 港币/笔；美股 0.0049 美元/股。</td>
                      <td>港股、美股、A 股通、基金</td>
                      <td>界面友好，支持 Level-2 行情与 IPO 申购。</td>
                    </tr>
                    <tr>
                      <td>老虎证券</td>
                      <td>美股 0.0039 美元/股（最低 0.99 美元）；港股 0.03%+15 港币。</td>
                      <td>全球股票、ETF、期权</td>
                      <td>低门槛开通期权交易，提供 24 小时客服。</td>
                    </tr>
                    <tr>
                      <td>盈透证券 (IBKR)</td>
                      <td>分级费率，美股 0.0035 美元/股；港股 0.12%（最低 18 港币）。</td>
                      <td>全球 150+ 市场，含期货、外汇、债券</td>
                      <td>专业级工具，支持自动化交易与多币种账户。</td>
                    </tr>
                    <tr>
                      <td>嘉信理财</td>
                      <td>美股 ETF 零佣金；期权 0.65 美元/张。</td>
                      <td>美股、ETF、共同基金</td>
                      <td>强大的研究报告与退休账户服务。</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <ol className="teach-steps">
                <li>在线提交身份资料与 W-8BEN 表格（针对美股）。</li>
                <li>上传住所证明：水电煤账单或银行对账单（英文）。</li>
                <li>完成视频见证或英文电话确认，确保理解风险提示。</li>
                <li>账户获批后，获取入金账号与银行信息。</li>
              </ol>
            </div>
            <div className="teach-surface">
              <h4 className="teach-surface__title">资金出入金流程</h4>
              <p className="teach-text">
                合规购汇与顺畅路径是跨境资金的关键。以下流程总结了“内地银行卡 → 香港银行卡 → 券商账户”的标准步骤。
              </p>
              <ol className="teach-steps">
                <li>在银行 APP 预约结汇，每人每年 5 万美元额度，并填写券商账户信息。</li>
                <li>通过跨境汇款把资金转入香港银行卡，附言写明 “self investment”。</li>
                <li>登录券商平台提交入金申请，上传水单等待到账（港股 T+0，美股 T+1）。</li>
                <li>出金时在券商提交提现至香港银行卡，再转回内地并进行结汇。</li>
              </ol>
            </div>
          </>
        ),
        resources: [
          { label: "富途牛牛：开户指引", url: "https://www.futunn.com/support/topic?tid=10001805" },
          { label: "盈透证券：开户材料清单", url: "https://www.interactivebrokers.com.cn/cn/pricing/fees.php" },
          { label: "香港金管局：跨境转账常见问题", url: "https://www.hkma.gov.hk/chi/consumer-information/consumer-protection/" },
          { label: "国家外汇管理局：个人结售汇政策解读", url: "http://www.safe.gov.cn/safe/2020/0120/15192.html" },
        ],
      },
    ],
  },
  {
    id: "knowledge",
    title: "金融知识库",
    subtitle: "The \"What & Why\"",
    description:
      "用最通俗的语言解释关键概念、理论与模型，让学习者理解背后的逻辑，真正做到知其然更知其所以然。",
    blocks: [
      {
        id: "glossary",
        kicker: "01",
        title: "金融词典",
        summary: "一到三分钟即可读懂的核心术语，以卡片形式呈现。",
        body: (
          <div className="teach-grid teach-grid--two">
            <div className="teach-surface">
              <h4 className="teach-surface__title">股票指标速查</h4>
              <ul className="teach-list">
                <li>
                  <strong>P/E</strong>：股价 ÷ 每股收益，衡量市场对未来盈利的预期。
                </li>
                <li>
                  <strong>P/B</strong>：股价 ÷ 每股净资产，反映资产安全边际。
                </li>
                <li>
                  <strong>ROE</strong>：净利润 ÷ 净资产，衡量资本的盈利效率。
                </li>
                <li>
                  <strong>EPS</strong>：公司的每股收益，是衡量盈利增长的基础数据。
                </li>
                <li>
                  <strong>分红/派息</strong>：长期稳定的分红体现公司现金流健康程度。
                </li>
              </ul>
            </div>
            <div className="teach-surface">
              <h4 className="teach-surface__title">基金产品分类</h4>
              <ul className="teach-list">
                <li>
                  <strong>ETF</strong>：在交易所上市的指数基金，实时交易、费率低。
                </li>
                <li>
                  <strong>LOF</strong>：可上市交易的开放式基金，既能场内买卖，也能场外申赎。
                </li>
                <li>
                  <strong>FOF</strong>：基金中的基金，通过挑选基金经理实现分散投资。
                </li>
                <li>
                  <strong>QDII</strong>：境内机构发行的境外资产基金，提供全球配置通道。
                </li>
                <li>
                  <strong>主动/被动</strong>：主动型依赖基金经理择时选股，被动型跟踪指数。
                </li>
              </ul>
            </div>
            <div className="teach-surface">
              <h4 className="teach-surface__title">宏观经济读秒</h4>
              <ul className="teach-list">
                <li>
                  <strong>CPI/PPI</strong>：监测通胀对居民与企业的影响。
                </li>
                <li>
                  <strong>GDP</strong>：一定时期内生产的全部最终产品和服务价值。
                </li>
                <li>
                  <strong>利率调整</strong>：央行加息/降息影响消费、投资与资产价格。
                </li>
                <li>
                  <strong>降准</strong>：释放银行流动性，支持实体经济。
                </li>
                <li>
                  <strong>通胀/通缩</strong>：价格持续上涨/下降，是宏观分析的核心变量。
                </li>
              </ul>
            </div>
            <div className="teach-surface">
              <h4 className="teach-surface__title">衍生工具速览</h4>
              <ul className="teach-list">
                <li>
                  <strong>债券</strong>：固定收益类资产，关注票息、信用评级与久期。
                </li>
                <li>
                  <strong>期货</strong>：以保证金方式交易的标准化合约，可做多也可做空。
                </li>
                <li>
                  <strong>期权</strong>：赋予买方在未来以特定价格买/卖资产的权利。
                </li>
                <li>
                  <strong>可转债</strong>：兼具债性与股性，到期可赎回或转换为股票。
                </li>
              </ul>
            </div>
          </div>
        ),
        resources: [
          { label: "Investopedia：Financial Dictionary", url: "https://www.investopedia.com/financial-term-dictionary-4769738" },
          { label: "华尔街见闻：金融概念课", url: "https://wallstreetcn.com/learn" },
        ],
      },
      {
        id: "models",
        kicker: "02",
        title: "金融模型",
        summary: "提供估值模型教程、案例拆解与可下载工具模板。",
        body: (
          <div className="teach-stack">
            <div className="teach-surface teach-surface--hero">
              <h4 className="teach-surface__title">公司估值入门</h4>
              <p className="teach-text">
                估值的本质是预测未来现金流并折现到今天。我们提供 Excel 模板，涵盖财报数据整理、假设输入与敏感性分析。
              </p>
              <a
                className="teach-button"
                href="https://static-assets.oss-cn-hangzhou.aliyuncs.com/valuation-template.xlsx"
                target="_blank"
                rel="noreferrer"
              >
                下载估值模板
              </a>
            </div>
            <div className="teach-grid teach-grid--two">
              <article className="teach-surface">
                <h4 className="teach-surface__title">DCF 模型</h4>
                <ul className="teach-list">
                  <li>预测未来 5-10 年自由现金流 (FCF)。</li>
                  <li>选择折现率（通常基于 WACC）。</li>
                  <li>估算终值（永续增长模型或退出倍数法）。</li>
                  <li>折现并求和，得到企业价值。</li>
                </ul>
              </article>
              <article className="teach-surface">
                <h4 className="teach-surface__title">相对估值</h4>
                <p className="teach-text">
                  对比行业的 P/E、P/B、EV/EBITDA 等倍数，评估公司当前定价是否合理，适用于盈利稳定、可比性强的企业。
                </p>
              </article>
            </div>
            <article className="teach-surface">
              <h4 className="teach-surface__title">期权定价 (Black-Scholes)</h4>
              <p className="teach-text">
                模型基于无套利假设推导欧式期权理论价格。核心变量包括标的价格、执行价、无风险利率、波动率与剩余期限。
              </p>
              <a
                className="teach-link"
                href="https://colab.research.google.com/drive/1jmaBoBNgYxr7FqfErEFlV0caZzVz6XzM?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                在线演示：Black-Scholes 计算器
              </a>
            </article>
          </div>
        ),
        resources: [
          { label: "麦肯锡：企业价值评估指南", url: "https://www.mckinsey.com/capabilities/strategy-and-corporate-finance/our-insights/valuing-company" },
          { label: "NYU Stern：估值数据库", url: "https://pages.stern.nyu.edu/~adamodar/" },
          { label: "CME Group：期权定价教育中心", url: "https://www.cmegroup.com/education/courses/introduction-to-options/black-scholes-model.html" },
        ],
      },
    ],
  },
  {
    id: "masters",
    title: "投资大师说",
    subtitle: "Wisdom from Masters",
    description: "站在巨人的肩膀上回看投资理念，提炼可执行的思维模型与读书清单。",
    blocks: [
      {
        id: "principles",
        kicker: "01",
        title: "大师理念",
        summary: "用图文和语录提炼他们如何看待风险、时间与决策。",
        body: (
          <div className="teach-grid teach-grid--two">
            <article className="teach-surface">
              <h4 className="teach-surface__title">巴菲特 & 芒格</h4>
              <p className="teach-text">
                强调能力圈与安全边际。“如果你不打算持有一只股票 10 年，就不要持有 10 分钟。”
              </p>
              <p className="teach-hint">延伸阅读：伯克希尔·哈撒韦致股东信。</p>
            </article>
            <article className="teach-surface">
              <h4 className="teach-surface__title">彼得·林奇</h4>
              <p className="teach-text">
                提倡“投资你所了解的”。通过观察消费习惯、门店客流等非财务指标捕捉成长股。
              </p>
              <p className="teach-hint">建议建立投资日记，记录市场情绪与估值水平。</p>
            </article>
            <article className="teach-surface">
              <h4 className="teach-surface__title">瑞·达利欧</h4>
              <p className="teach-text">
                “全天候策略”通过组合低相关资产实现稳健收益。核心框架是根据通胀与增长的四象限配置权重。
              </p>
              <p className="teach-hint">推荐观看《原则 (Principles)》动画短片。</p>
            </article>
            <article className="teach-surface">
              <h4 className="teach-surface__title">霍华德·马克斯</h4>
              <p className="teach-text">
                《投资最重要的事》强调“第二层思维”：除了判断结果，还要预测别人如何看待结果。
              </p>
              <p className="teach-hint">在市场极端情绪时保持冷静，重视风险控制。</p>
            </article>
          </div>
        ),
        resources: [
          { label: "伯克希尔·哈撒韦致股东信", url: "https://www.berkshirehathaway.com/letters/letters.html" },
          { label: "彼得·林奇访谈合集", url: "https://www.morningstar.com/articles/1128080/peter-lynch-on-investing-in-2024" },
          { label: "桥水基金：经济机器", url: "https://www.principles.com/the-changing-world/" },
          { label: "橡树资本备忘录", url: "https://www.oaktreecapital.com/insights/memo" },
        ],
      },
      {
        id: "books",
        kicker: "02",
        title: "经典导读",
        summary: "精选投资书单与导读，帮助你迅速抓住作者的核心论点。",
        body: (
          <div className="teach-stack">
            <article className="teach-surface">
              <h4 className="teach-surface__title">必读书单</h4>
              <ul className="teach-list teach-list--grid">
                <li>《聪明的投资者》 — 价值投资的基石，强调防守型策略。</li>
                <li>《证券分析》 — 深入解析财报与估值，是巴菲特的终生教材。</li>
                <li>《漫步华尔街》 — 介绍有效市场理论与指数化投资。</li>
                <li>《原则》 — 瑞·达利欧的决策体系与公司文化。</li>
                <li>《投资最重要的事》 — 风险控制与周期判断的实战笔记。</li>
              </ul>
            </article>
            <div className="teach-grid teach-grid--two">
              <article className="teach-surface">
                <h4 className="teach-surface__title">《聪明的投资者》精读</h4>
                <p className="teach-text">
                  用系列文章 + 视频拆解“市场先生”“安全边际”等核心章节，并给出在 A 股与港美股落地的操作建议。
                </p>
                <a
                  className="teach-link"
                  href="https://www.youtube.com/playlist?list=PLcFHZqR06P-zpYlXwE1fKCIw1YPrNkB4N"
                  target="_blank"
                  rel="noreferrer"
                >
                  精读视频播放列表
                </a>
              </article>
              <article className="teach-surface">
                <h4 className="teach-surface__title">《证券分析》导读</h4>
                <p className="teach-text">
                  聚焦财务报表解析、债券投资原则与普通股分析，结合苹果、贵州茅台等案例展示框架如何应用。
                </p>
                <a
                  className="teach-button"
                  href="https://www.valuewalk.com/security-analysis-book-summary/"
                  target="_blank"
                  rel="noreferrer"
                >
                  下载章节导读
                </a>
              </article>
            </div>
          </div>
        ),
        resources: [
          { label: "Value Investing World：经典书籍资源", url: "https://www.valueinvestingworld.com/p/book-summaries.html" },
          { label: "Columbia Business School：格雷厄姆资料库", url: "https://www0.gsb.columbia.edu/library/guide/BenjaminGraham" },
        ],
      },
    ],
  },
  {
    id: "research",
    title: "深度投研与资源",
    subtitle: "In-depth Research",
    description: "链接专业机构的研究报告、数据源与工具，帮助进阶投资者迅速搭建研究体系。",
    blocks: [
      {
        id: "reports",
        kicker: "01",
        title: "研报精读",
        summary: "学习如何拆读券商研报，并精选热点行业的核心观点。",
        body: (
          <div className="teach-stack">
            <article className="teach-surface">
              <h4 className="teach-surface__title">如何阅读券商研报</h4>
              <ol className="teach-steps">
                <li>先看投资评级与目标价，判断研究范围和结论。</li>
                <li>阅读行业/公司逻辑，找出驱动因素与关键假设。</li>
                <li>核对财务模型，关注收入、毛利率与现金流假设。</li>
                <li>结合风险提示，评估情境敏感性与反向观点。</li>
              </ol>
            </article>
            <article className="teach-surface">
              <h4 className="teach-surface__title">热点行业速读</h4>
              <div className="teach-grid teach-grid--two">
                <div className="teach-tile">
                  <h5 className="teach-tile__title">人工智能</h5>
                  <p className="teach-text">关注算力基础设施、模型服务与落地场景的商业模式。</p>
                </div>
                <div className="teach-tile">
                  <h5 className="teach-tile__title">新能源</h5>
                  <p className="teach-text">梳理电动车、电池储能与光伏全产业链的产能与成本变化。</p>
                </div>
                <div className="teach-tile">
                  <h5 className="teach-tile__title">医药创新</h5>
                  <p className="teach-text">跟踪创新药管线进度、医保谈判与国际授权合作。</p>
                </div>
                <div className="teach-tile">
                  <h5 className="teach-tile__title">消费升级</h5>
                  <p className="teach-text">洞察高端白酒、运动品牌与新茶饮的人群结构变化。</p>
                </div>
              </div>
            </article>
          </div>
        ),
        resources: [
          { label: "国泰君安研究精选", url: "https://research.gtja.com/" },
          { label: "高盛研究院", url: "https://www.goldmansachs.com/intelligence/pages/index.html" },
        ],
      },
      {
        id: "data",
        kicker: "02",
        title: "数据与工具",
        summary: "整合行情数据、监管渠道与社区工具，提升投研效率。",
        body: (
          <div className="teach-grid teach-grid--two">
            <article className="teach-surface">
              <h4 className="teach-surface__title">数据网站</h4>
              <ul className="teach-list">
                <li>
                  <a className="teach-link" href="https://quote.eastmoney.com/center/" target="_blank" rel="noreferrer">
                    东方财富行情中心
                  </a>
                  ：覆盖 A 股、港股、美股与基金的实时行情。
                </li>
                <li>
                  <a className="teach-link" href="https://cn.investing.com/" target="_blank" rel="noreferrer">
                    Investing.com 中文站
                  </a>
                  ：提供全球指数、期货、外汇和大宗商品数据。
                </li>
                <li>
                  <a className="teach-link" href="https://www.wind.com.cn/portal/zh/Products/financialdata.html" target="_blank" rel="noreferrer">
                    Wind 金融终端在线版
                  </a>
                  ：提供宏观、行业、上市公司等全量数据库。
                </li>
              </ul>
            </article>
            <article className="teach-surface">
              <h4 className="teach-surface__title">监管机构</h4>
              <ul className="teach-list">
                <li>
                  <a className="teach-link" href="https://www.csrc.gov.cn/" target="_blank" rel="noreferrer">
                    中国证监会
                  </a>
                  ：查阅上市公司公告、监管规则与投资者教育材料。
                </li>
                <li>
                  <a className="teach-link" href="https://www.hkex.com.hk/?sc_lang=zh-HK" target="_blank" rel="noreferrer">
                    香港交易所
                  </a>
                  ：获取港股上市文件、公告与上市规则。
                </li>
                <li>
                  <a className="teach-link" href="https://www.sec.gov/" target="_blank" rel="noreferrer">
                    美国 SEC EDGAR
                  </a>
                  ：搜索美股上市公司的 10-K、10-Q 等财报。
                </li>
              </ul>
            </article>
            <article className="teach-surface">
              <h4 className="teach-surface__title">专业媒体</h4>
              <ul className="teach-list">
                <li>
                  <a className="teach-link" href="https://www.caixin.com/" target="_blank" rel="noreferrer">
                    财新网
                  </a>
                  ：深度财经报道，聚焦政策解读与行业洞察。
                </li>
                <li>
                  <a className="teach-link" href="https://www.bloomberg.com/asia" target="_blank" rel="noreferrer">
                    Bloomberg Asia
                  </a>
                  ：全球市场新闻、数据与研究评论。
                </li>
                <li>
                  <a className="teach-link" href="https://www.wsj.com/asia" target="_blank" rel="noreferrer">
                    华尔街日报亚洲版
                  </a>
                  ：追踪国际市场、政策与企业动态。
                </li>
              </ul>
            </article>
            <article className="teach-surface">
              <h4 className="teach-surface__title">工具 & 社区</h4>
              <ul className="teach-list">
                <li>
                  <a className="teach-link" href="https://simu.to/" target="_blank" rel="noreferrer">
                    思慕研报搜索
                  </a>
                  ：整合券商、买方、智库的公开研报，支持关键词筛选。
                </li>
                <li>
                  <a className="teach-link" href="https://www.joinquant.com/" target="_blank" rel="noreferrer">
                    聚宽量化社区
                  </a>
                  ：提供量化策略回测、数据接口与社区讨论。
                </li>
                <li>
                  <a className="teach-link" href="https://www.researchgate.net/" target="_blank" rel="noreferrer">
                    ResearchGate
                  </a>
                  ：查找跨学科研究，补充行业分析视角。
                </li>
              </ul>
            </article>
          </div>
        ),
        resources: [
          { label: "世界银行 DataBank", url: "https://databank.worldbank.org/" },
          { label: "OECD Data", url: "https://data.oecd.org/" },
          { label: "Reuters Breakingviews", url: "https://www.reuters.com/breakingviews/" },
        ],
      },
    ],
  },
]

function SectionGroup({ section }) {
  return (
    <section id={section.id} className="teach-section">
      <header className="teach-section__header">
        <span className="teach-eyebrow">
          <span aria-hidden="true" className="teach-dot" />
          {section.subtitle}
        </span>
        <h2 className="teach-section__title">{section.title}</h2>
        <p className="teach-section__description">{section.description}</p>
      </header>
      <div className="teach-blocks">
        {section.blocks.map((block) => (
          <article key={block.id} id={`${section.id}-${block.id}`} className="teach-block">
            <div className="teach-block__meta">
              <span className="teach-kicker">{block.kicker}</span>
              <div>
                <h3 className="teach-block__title">{block.title}</h3>
                <p className="teach-block__summary">{block.summary}</p>
              </div>
            </div>
            <div className="teach-block__body">{block.body}</div>
            {block.resources && (
              <div className="teach-resources">
                <h4 className="teach-resources__title">精选资源</h4>
                <ul>
                  {block.resources.map((resource) => (
                    <li key={resource.url}>
                      <a className="teach-link" href={resource.url} target="_blank" rel="noreferrer">
                        {resource.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

export default function Teach() {
  return (
    <div className="teach-page" data-track-view="page_teach">
      <div className="teach-page__glow" aria-hidden="true" />
      <div className="teach-layout">
        <aside className="teach-nav">
          <nav>
            <h2 className="teach-nav__title">内容导航</h2>
            <ul>
              {menuItems.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="teach-nav__link">
                    <span className="teach-nav__subtitle">{item.subtitle}</span>
                    <span className="teach-nav__label">{item.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <main className="teach-main">
          <header className="teach-hero">
            <span className="teach-eyebrow teach-eyebrow--hero">
              <span aria-hidden="true" className="teach-dot" />
              The Apple Way to Learn Finance
            </span>
            <h1 className="teach-hero__title">金融教学中心</h1>
            <p className="teach-hero__description">
              我们以乔布斯时代苹果的设计哲学——极致简洁、沉浸体验与人文关怀——打造这套金融学习路径。四大板块覆盖从零开始到专业进阶的所有阶段，每一部分都提供真实可用的资料与操作指引。
            </p>
          </header>
          {sections.map((section) => (
            <SectionGroup key={section.id} section={section} />
          ))}
        </main>
      </div>
      <div className="teach-footer">
        <h2>持续更新 · 共建金融知识宇宙</h2>
        <p>
          我们将每月同步最新的投教视频、研报精读与模型工具包。欢迎在社区提出你的学习需求，帮助我们把产品做得更好。
        </p>
        <a
          className="teach-button"
          href="https://forms.office.com/r/finance-edu-feedback"
          target="_blank"
          rel="noreferrer"
        >
          提交课程建议
        </a>
      </div>
    </div>
  )
}
