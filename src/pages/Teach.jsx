import React from "react"

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
      "以苹果式的细腻体验，帮你快速建立正确观念，并完成第一笔投资的每一步。内容覆盖心态准备、境内开户到全球投资渠道。",
    groups: [
      {
        id: "mindset",
        kicker: "01",
        title: "投资前的心态与准备",
        summary:
          "建立长期主义的思维与科学的资产配置观念，是所有行动的起点。我们用浅显易懂的语言和可视化图解，帮你厘清风险、收益与资金安排。",
        body: (
          <>
            <p className="text-base leading-7 text-[color:var(--text-secondary)]">
              投资是一场和时间合作的旅程。正确的心态意味着认可市场波动的常态，把注意力放在“风险承受能力、目标收益率、资金使用周期”三个维度上。
              下列内容将帮助你完成启动前的关键检查表。
            </p>
            <div className="mt-6 grid gap-6 rounded-[28px] border border-[color:var(--stroke-soft)] bg-[color:var(--bg-elevated)] p-8 shadow-[var(--shadow-soft)]">
              <div>
                <h4 className="text-lg font-semibold text-[color:var(--text-primary)]">树立正确的投资观</h4>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-[color:var(--text-secondary)]">
                  <li>
                    • 理解收益来自承担风险，历史数据显示全球股市年化收益的 70% 以上来自长期持有，而非择时。
                  </li>
                  <li>• 市场存在周期：经济扩张—过热—收缩—复苏的节奏，会在资产价格中体现。</li>
                  <li>• 设定“亏得起”的金额，并建立应急现金，避免在情绪上做出被动决策。</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-[color:var(--brand-soft)]/60 p-6">
                <h5 className="text-base font-semibold text-[color:var(--brand-strong)]">资产配置图解</h5>
                <p className="mt-2 text-sm leading-6 text-[color:var(--text-secondary)]">
                  资产配置决定收益波动的 80% 以上。核心逻辑是把资金分散到现金、债券、股票与另类资产，匹配不同周期下的表现。
                  查看下方信息图，将根据风险偏好给出 3 种经典模型。
                </p>
                <div className="mt-4 grid gap-3 text-xs text-[color:var(--text-secondary)] sm:grid-cols-3">
                  <div className="rounded-xl border border-[color:var(--stroke-soft)] bg-white/70 p-4 shadow-sm">
                    <h6 className="font-semibold text-[color:var(--text-primary)]">保守型</h6>
                    <p className="mt-2 leading-5">现金 35% · 债券 45% · 股票 20%。适合三年内有大额支出的稳健型用户。</p>
                  </div>
                  <div className="rounded-xl border border-[color:var(--stroke-soft)] bg-white/70 p-4 shadow-sm">
                    <h6 className="font-semibold text-[color:var(--text-primary)]">均衡型</h6>
                    <p className="mt-2 leading-5">现金 20% · 债券 35% · 股票 40% · 另类 5%。适合有 5 年以上投资周期的投资者。</p>
                  </div>
                  <div className="rounded-xl border border-[color:var(--stroke-soft)] bg-white/70 p-4 shadow-sm">
                    <h6 className="font-semibold text-[color:var(--text-primary)]">进取型</h6>
                    <p className="mt-2 leading-5">现金 10% · 债券 20% · 股票 60% · 另类 10%。适合风险承受力强、目标是长期增值的用户。</p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[color:var(--text-primary)]">第一笔投资资金</h4>
                <p className="mt-3 text-sm leading-6 text-[color:var(--text-secondary)]">
                  推荐从“闲钱”开始：至少保留 6 个月生活开支作为应急现金，其余资金可分批投入。
                  采用“定投”能够降低一次性建仓的择时风险，配合每季度复盘一次资金状况。
                </p>
              </div>
            </div>
          </>
        ),
        resources: [
          {
            label: "先锋领航：资产配置为何重要 (Vanguard)",
            url: "https://www.vanguard.com.hk/portal/articles/what-is-asset-allocation/",
          },
          {
            label: "Investopedia：如何分配你的第一笔投资资金",
            url: "https://www.investopedia.com/articles/basics/06/invest1000.asp",
          },
          {
            label: "中国证监会投资者保护局：投资者教育专栏",
            url: "https://www.csrc.gov.cn/csrc/c101907/investor_edu.shtml",
          },
        ],
      },
      {
        id: "domestic",
        kicker: "02",
        title: "境内投资实操（A 股、基金）",
        summary:
          "从券商甄选到开户流程、基金平台选择与定投实战，提供逐步拆解的操作指南，并搭配视频教程。",
        body: (
          <>
            <div className="grid gap-6 lg:grid-cols-2">
              <article className="rounded-[28px] border border-[color:var(--stroke-soft)] bg-[color:var(--bg-elevated)] p-7 shadow-[var(--shadow-soft)]">
                <h4 className="text-lg font-semibold text-[color:var(--text-primary)]">A 股券商选择要点</h4>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-[color:var(--text-secondary)]">
                  <li>• 手续费：主流券商标准佣金为万 2.5-万 3，可申请调至万 1-万 1.5，留意是否另收平台费。</li>
                  <li>• 交易系统与移动端体验：关注行情更新速度、下单流程是否支持条件单。</li>
                  <li>• 境外投资扩展：部分券商（如中信证券、华泰证券）支持港股、美股业务，省去二次开户。</li>
                </ul>
                <p className="mt-4 rounded-2xl bg-white/70 p-4 text-xs leading-6 text-[color:var(--text-secondary)]">
                  温馨提示：在中国证券业协会官网可以查询券商资质与服务评价，避免选择无牌照平台。
                </p>
              </article>
              <article className="rounded-[28px] border border-[color:var(--stroke-soft)] bg-[color:var(--bg-elevated)] p-7 shadow-[var(--shadow-soft)]">
                <h4 className="text-lg font-semibold text-[color:var(--text-primary)]">A 股开户流程详解</h4>
                <ol className="mt-3 space-y-3 text-sm leading-6 text-[color:var(--text-secondary)]">
                  <li>1. 准备材料：身份证原件、银行卡、手机号码、工作/收入信息。</li>
                  <li>2. 下载券商 APP，进入“极速开户/线上开户”，根据提示录入身份信息并完成人脸识别。</li>
                  <li>3. 选择普通账户或融资融券账户，设置交易密码，提交风险测评问卷。</li>
                  <li>4. 等待审核通过（通常 1-2 个工作日），收到短信后开通沪深 A 股交易权限。</li>
                  <li>5. 绑定三方存管银行，进行入金测试并学习交易规则。</li>
                </ol>
              </article>
            </div>
            <div className="mt-6 rounded-[28px] border border-[color:var(--stroke-soft)] bg-[color:var(--bg-elevated)] p-8 shadow-[var(--shadow-soft)]">
              <h4 className="text-lg font-semibold text-[color:var(--text-primary)]">基金平台与定投执行</h4>
              <p className="mt-3 text-sm leading-6 text-[color:var(--text-secondary)]">
                主流基金销售平台包括支付宝、天天基金、蚂蚁财富与蛋卷基金。对比平台费率、基金品类与自动投教内容，选择界面与提醒机制符合个人习惯的应用。
              </p>
              <div className="mt-4 grid gap-5 lg:grid-cols-3">
                <div className="rounded-2xl bg-white/70 p-5 text-sm leading-6 text-[color:var(--text-secondary)]">
                  <h5 className="font-semibold text-[color:var(--text-primary)]">定投设定</h5>
                  <p className="mt-2">确定金额（如每月 2000 元）、扣款日期（发薪日后 1-3 天）、指数或基金标的。</p>
                </div>
                <div className="rounded-2xl bg-white/70 p-5 text-sm leading-6 text-[color:var(--text-secondary)]">
                  <h5 className="font-semibold text-[color:var(--text-primary)]">执行</h5>
                  <p className="mt-2">在基金平台选择“智能定投/自定义定投”，设置扣款卡片与周期，开启收益再投入。</p>
                </div>
                <div className="rounded-2xl bg-white/70 p-5 text-sm leading-6 text-[color:var(--text-secondary)]">
                  <h5 className="font-semibold text-[color:var(--text-primary)]">复盘</h5>
                  <p className="mt-2">每季度查看收益率、夏普比率与回撤情况，根据目标资产配置进行再平衡。</p>
                </div>
              </div>
            </div>
          </>
        ),
        resources: [
          {
            label: "中国证券业协会：证券公司信息公示",
            url: "https://www.sac.net.cn/xbzx/public/",
          },
          {
            label: "中信证券：A 股线上开户流程视频",
            url: "https://www.youtube.com/watch?v=tGBiP5hF5a4",
          },
          {
            label: "蚂蚁财富学院：基金定投实操课",
            url: "https://www.antfortune.com/m/college/article.htm?articleId=202210110002",
          },
        ],
      },
      {
        id: "global",
        kicker: "03",
        title: "全球投资渠道（港美股）",
        summary:
          "针对高频需求的境外投资，提供证件、银行卡、券商开户与资金出入金的全链路攻略，并配合流程图与对比表格。",
        body: (
          <>
            <div className="grid gap-6">
              <div className="rounded-[28px] border border-[color:var(--stroke-soft)] bg-[color:var(--bg-elevated)] p-8 shadow-[var(--shadow-soft)]">
                <h4 className="text-lg font-semibold text-[color:var(--text-primary)]">证件准备</h4>
                <div className="mt-4 grid gap-5 lg:grid-cols-2">
                  <div className="rounded-2xl bg-white/70 p-6 text-sm leading-6 text-[color:var(--text-secondary)]">
                    <h5 className="font-semibold text-[color:var(--text-primary)]">港澳通行证</h5>
                    <p className="mt-2">
                      前往户籍所在地出入境管理部门预约办理，提交身份证、户口簿，现场采集指纹并缴费 80 元。
                      受理后 7-10 个工作日取证，记得加办商务/个人游签注，在线申办可通过“移民局”APP 完成续签。
                    </p>
                    <a
                      href="https://www.nia.gov.cn/n741435/n741604/c1674870/content.html"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex text-xs font-medium text-[color:var(--brand-strong)]"
                    >
                      国家移民管理局：证件办理指南
                    </a>
                  </div>
                  <div className="rounded-2xl bg-white/70 p-6 text-sm leading-6 text-[color:var(--text-secondary)]">
                    <h5 className="font-semibold text-[color:var(--text-primary)]">护照</h5>
                    <p className="mt-2">
                      首次申请需提交身份证、户口簿并填写《中国公民出入境证件申请表》。办理周期 7-15 个工作日，可通过“出入境”窗口或公安 APP 预约排号。
                    </p>
                    <a
                      href="https://www.nia.gov.cn/n741435/n741604/c1354587/content.html"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex text-xs font-medium text-[color:var(--brand-strong)]"
                    >
                      官方护照申请流程说明
                    </a>
                  </div>
                </div>
              </div>
              <div className="rounded-[28px] border border-[color:var(--stroke-soft)] bg-[color:var(--bg-elevated)] p-8 shadow-[var(--shadow-soft)]">
                <h4 className="text-lg font-semibold text-[color:var(--text-primary)]">境外银行卡</h4>
                <p className="mt-3 text-sm leading-6 text-[color:var(--text-secondary)]">
                  香港银行卡是连接境内资金与海外券商的关键。多数银行要求申请人持有港澳通行证并现场面谈，部分机构支持视频见证。
                </p>
                <div className="mt-5 grid gap-5 lg:grid-cols-3">
                  <div className="rounded-2xl bg-white/70 p-5 text-xs leading-6 text-[color:var(--text-secondary)]">
                    <h5 className="text-sm font-semibold text-[color:var(--text-primary)]">中银香港</h5>
                    <p className="mt-2">开立“中银 e-账户”免月费，支持 FPS 与快速转账，内地见证点覆盖 30+ 城市。</p>
                    <p className="mt-2 text-[color:var(--text-tertiary)]">材料：通行证、身份证、地址证明（三个月内水电煤或银行账单）。</p>
                  </div>
                  <div className="rounded-2xl bg-white/70 p-5 text-xs leading-6 text-[color:var(--text-secondary)]">
                    <h5 className="text-sm font-semibold text-[color:var(--text-primary)]">汇丰香港</h5>
                    <p className="mt-2">提供 Premier 优惠，全球转账费用低，APP 支持实时汇率换汇，需存款 5 万港币或购买理财维持。</p>
                    <p className="mt-2 text-[color:var(--text-tertiary)]">可在深圳、广州等地通过“汇丰卓越理财中心”视频开户。</p>
                  </div>
                  <div className="rounded-2xl bg-white/70 p-5 text-xs leading-6 text-[color:var(--text-secondary)]">
                    <h5 className="text-sm font-semibold text-[color:var(--text-primary)]">渣打香港</h5>
                    <p className="mt-2">主打一站式证券与银行服务，提供美元、港币多币种账户，月费条件友好。</p>
                    <p className="mt-2 text-[color:var(--text-tertiary)]">与富途、老虎等券商合作，可直接绑定入金。</p>
                  </div>
                </div>
                <div className="mt-5 rounded-2xl border border-dashed border-[color:var(--stroke-soft)] bg-white/60 p-5 text-xs leading-6 text-[color:var(--text-secondary)]">
                  <h6 className="text-sm font-semibold text-[color:var(--text-primary)]">其他地区选择</h6>
                  <p className="mt-2">新加坡华侨银行（OCBC）支持线上开户并提供全球 ATM 免费取现；美国银行 (Bank of America) 适合未来申请美股融资，需预约面签并提供 W-8BEN 表格。</p>
                </div>
              </div>
              <div className="rounded-[28px] border border-[color:var(--stroke-soft)] bg-[color:var(--bg-elevated)] p-8 shadow-[var(--shadow-soft)]">
                <h4 className="text-lg font-semibold text-[color:var(--text-primary)]">券商对比与开户</h4>
                <div className="mt-4 overflow-hidden rounded-3xl border border-[color:var(--stroke-soft)] bg-white/70">
                  <table className="w-full text-left text-sm text-[color:var(--text-secondary)]">
                    <thead className="bg-white/80 text-xs uppercase tracking-wide text-[color:var(--text-tertiary)]">
                      <tr>
                        <th className="px-6 py-4">券商</th>
                        <th className="px-6 py-4">佣金结构</th>
                        <th className="px-6 py-4">交易品种</th>
                        <th className="px-6 py-4">特点</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-[color:var(--stroke-soft)]">
                        <td className="px-6 py-5 font-semibold text-[color:var(--text-primary)]">富途牛牛</td>
                        <td className="px-6 py-5">港股 0.03%+15 港币/笔；美股 0.0049 美元/股，最低 0.99 美元。</td>
                        <td className="px-6 py-5">港股、美股、A 股通、基金</td>
                        <td className="px-6 py-5">界面友好，支持 Level-2 行情与 IPO 申购。</td>
                      </tr>
                      <tr className="border-t border-[color:var(--stroke-soft)]">
                        <td className="px-6 py-5 font-semibold text-[color:var(--text-primary)]">老虎证券</td>
                        <td className="px-6 py-5">美股 0.0039 美元/股（最低 0.99 美元）；港股 0.03%+15 港币。</td>
                        <td className="px-6 py-5">全球股票、ETF、期权</td>
                        <td className="px-6 py-5">低门槛开通期权交易，提供 24 小时客服。</td>
                      </tr>
                      <tr className="border-t border-[color:var(--stroke-soft)]">
                        <td className="px-6 py-5 font-semibold text-[color:var(--text-primary)]">盈透证券 (IBKR)</td>
                        <td className="px-6 py-5">分级费率，美股 0.0035 美元/股；港股 0.12%（最低 18 港币）。</td>
                        <td className="px-6 py-5">全球 150+ 市场，含期货、外汇、债券</td>
                        <td className="px-6 py-5">专业级工具，支持自动化交易与多币种账户。</td>
                      </tr>
                      <tr className="border-t border-[color:var(--stroke-soft)]">
                        <td className="px-6 py-5 font-semibold text-[color:var(--text-primary)]">嘉信理财 (Schwab)</td>
                        <td className="px-6 py-5">美股 ETF 零佣金；期权 0.65 美元/张。</td>
                        <td className="px-6 py-5">美股、ETF、共同基金</td>
                        <td className="px-6 py-5">强大的研究报告与退休账户服务。</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 rounded-2xl bg-white/70 p-6 text-sm leading-6 text-[color:var(--text-secondary)]">
                  <h5 className="font-semibold text-[color:var(--text-primary)]">在线开户步骤</h5>
                  <ol className="mt-2 space-y-2">
                    <li>1. 在线提交身份资料与 W-8BEN 表格（针对美股）。</li>
                    <li>2. 上传住址证明：水电煤账单、信用卡账单或国内银行对账单（英文）。</li>
                    <li>3. 完成视频见证或英文电话确认，确保了解风险提示。</li>
                    <li>4. 账户获批后，获取入金账号（SWIFT/BIC）与银行信息。</li>
                  </ol>
                </div>
              </div>
              <div className="rounded-[28px] border border-[color:var(--stroke-soft)] bg-[color:var(--bg-elevated)] p-8 shadow-[var(--shadow-soft)]">
                <h4 className="text-lg font-semibold text-[color:var(--text-primary)]">资金出入金流程</h4>
                <p className="mt-3 text-sm leading-6 text-[color:var(--text-secondary)]">
                  资金跨境的关键在于合规购汇与路径顺畅。以下流程图总结了“内地银行卡 → 香港银行卡 → 券商账户”的标准步骤。
                </p>
                <div className="mt-5 rounded-3xl border border-dashed border-[color:var(--stroke-soft)] bg-white/70 p-6 text-xs leading-6 text-[color:var(--text-secondary)]">
                  <ol className="space-y-2">
                    <li>
                      1. 于银行 APP 预约结汇，每人每年 5 万美元额度。选择“个人用汇-境外投资”，填写券商账户信息。
                    </li>
                    <li>
                      2. 通过跨境汇款把资金转入香港银行卡，附言写明“self investment”。部分银行提供秒级 FPS 转账。
                    </li>
                    <li>
                      3. 登录券商平台提交入金申请，选择银行渠道，上传水单并等待到账（港股约 T+0，美股 T+1）。
                    </li>
                    <li>
                      4. 出金时在券商提交提现至香港银行卡，再转回内地并进行结汇即可。
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </>
        ),
        resources: [
          {
            label: "富途牛牛：开户指引与最新优惠",
            url: "https://www.futunn.com/support/topic?tid=10001805",
          },
          {
            label: "盈透证券中国官网：开户材料清单",
            url: "https://www.interactivebrokers.com.cn/cn/pricing/fees.php",
          },
          {
            label: "香港金管局：银行账户与跨境转账常见问题",
            url: "https://www.hkma.gov.hk/chi/consumer-information/consumer-protection/",
          },
          {
            label: "国家外汇管理局：个人结售汇政策解读",
            url: "http://www.safe.gov.cn/safe/2020/0120/15192.html",
          },
        ],
      },
    ],
  },
  {
    id: "knowledge",
    title: "金融知识库",
    subtitle: "The \"What & Why\"",
    description:
      "用最通俗的语言解释关键概念、理论与模型，让学习者理解背后的逻辑与原因，真正做到知其然更知其所以然。",
    groups: [
      {
        id: "glossary",
        kicker: "01",
        title: "金融词典 (Concepts)",
        summary: "一到三分钟即可读懂的核心术语，以卡片 + 短视频形式呈现。",
        body: (
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-[26px] border border-[color:var(--stroke-soft)] bg-[color:var(--bg-elevated)] p-6 shadow-[var(--shadow-soft)]">
              <h4 className="text-lg font-semibold text-[color:var(--text-primary)]">股票指标速查</h4>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-[color:var(--text-secondary)]">
                <li>
                  <strong className="text-[color:var(--text-primary)]">P/E（市盈率）</strong>
                  ：股价 ÷ 每股收益，衡量市场对公司未来盈利的预期。
                </li>
                <li>
                  <strong className="text-[color:var(--text-primary)]">P/B（市净率）</strong>
                  ：股价 ÷ 每股净资产，反映资产安全边际。
                </li>
                <li>
                  <strong className="text-[color:var(--text-primary)]">ROE</strong>
                  ：净利润 ÷ 净资产，衡量资本的盈利效率。
                </li>
                <li>
                  <strong className="text-[color:var(--text-primary)]">EPS</strong>
                  ：公司的每股收益，是衡量盈利增长的基础数据。
                </li>
                <li>
                  <strong className="text-[color:var(--text-primary)]">分红/派息</strong>
                  ：企业将利润回馈给股东，长期稳定的分红体现公司现金流健康程度。
                </li>
              </ul>
            </div>
            <div className="rounded-[26px] border border-[color:var(--stroke-soft)] bg-[color:var(--bg-elevated)] p-6 shadow-[var(--shadow-soft)]">
              <h4 className="text-lg font-semibold text-[color:var(--text-primary)]">基金产品分类</h4>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-[color:var(--text-secondary)]">
                <li>
                  <strong className="text-[color:var(--text-primary)]">ETF</strong>
                  ：在交易所上市的指数基金，实时交易、费率低。
                </li>
                <li>
                  <strong className="text-[color:var(--text-primary)]">LOF</strong>
                  ：可上市交易的开放式基金，既能场内买卖，也能场外申赎。
                </li>
                <li>
                  <strong className="text-[color:var(--text-primary)]">FOF</strong>
                  ：基金中的基金，通过挑选基金经理实现分散投资。
                </li>
                <li>
                  <strong className="text-[color:var(--text-primary)]">QDII</strong>
                  ：合格境内机构投资者发行的境外资产基金，为中国投资者提供全球配置通道。
                </li>
                <li>
                  <strong className="text-[color:var(--text-primary)]">主动/被动</strong>
                  ：主动型基金依赖基金经理择时选股，被动指数基金跟踪特定指数以低成本复制市场表现。
                </li>
              </ul>
            </div>
            <div className="rounded-[26px] border border-[color:var(--stroke-soft)] bg-[color:var(--bg-elevated)] p-6 shadow-[var(--shadow-soft)]">
              <h4 className="text-lg font-semibold text-[color:var(--text-primary)]">宏观经济读秒</h4>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-[color:var(--text-secondary)]">
                <li>
                  <strong className="text-[color:var(--text-primary)]">CPI/PPI</strong>
                  ：消费/生产者物价指数，监测通胀对居民与企业的影响。
                </li>
                <li>
                  <strong className="text-[color:var(--text-primary)]">GDP</strong>
                  ：一个国家在一定时期内生产的全部最终产品和服务价值。
                </li>
                <li>
                  <strong className="text-[color:var(--text-primary)]">降息/加息</strong>
                  ：央行调整货币政策工具影响市场利率，从而影响消费、投资与资产价格。
                </li>
                <li>
                  <strong className="text-[color:var(--text-primary)]">降准</strong>
                  ：下调存款准备金率，释放银行流动性，支持实体经济。
                </li>
                <li>
                  <strong className="text-[color:var(--text-primary)]">通胀/通缩</strong>
                  ：价格持续上涨/下降，影响货币购买力，是宏观分析的核心变量。
                </li>
              </ul>
            </div>
            <div className="rounded-[26px] border border-[color:var(--stroke-soft)] bg-[color:var(--bg-elevated)] p-6 shadow-[var(--shadow-soft)]">
              <h4 className="text-lg font-semibold text-[color:var(--text-primary)]">衍生工具速览</h4>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-[color:var(--text-secondary)]">
                <li>
                  <strong className="text-[color:var(--text-primary)]">债券</strong>
                  ：固定收益类资产，关注票息、信用评级与久期。
                </li>
                <li>
                  <strong className="text-[color:var(--text-primary)]">期货</strong>
                  ：以保证金方式交易的标准化合约，可做多也可做空，适合对冲风险。
                </li>
                <li>
                  <strong className="text-[color:var(--text-primary)]">期权</strong>
                  ：赋予买方在未来以特定价格买/卖资产的权利，策略组合多样。
                </li>
                <li>
                  <strong className="text-[color:var(--text-primary)]">可转债</strong>
                  ：兼具债性与股性，利息固定，到期可赎回或转换为股票。
                </li>
              </ul>
            </div>
          </div>
        ),
        resources: [
          {
            label: "Investopedia：Financial Dictionary 视频合集",
            url: "https://www.investopedia.com/financial-term-dictionary-4769738",
          },
          {
            label: "晨星中国：基金类型与费用科普",
            url: "https://www.morningstar.cn/quicktake/fundcategory",
          },
          {
            label: "国家统计局：宏观经济数据解读",
            url: "https://www.stats.gov.cn/",
          },
        ],
      },
      {
        id: "theory",
        kicker: "02",
        title: "投资理论 (Theories)",
        summary: "用深度文章与图解长图拆解投资方法论，并配套系列讲座视频。",
        body: (
          <div className="space-y-6">
            <article className="rounded-[30px] border border-[color:var(--stroke-soft)] bg-[color:var(--bg-elevated)] p-8 shadow-[var(--shadow-soft)]">
              <h4 className="text-xl font-semibold text-[color:var(--text-primary)]">价值投资</h4>
              <p className="mt-3 text-sm leading-6 text-[color:var(--text-secondary)]">
                核心理念：寻找拥有护城河的公司，并在价格低于内在价值时买入，长期持有获取股息与增长收益。
                关注指标包括自由现金流、ROE 与经营现金转化率。
              </p>
              <div className="mt-4 rounded-2xl bg-white/70 p-5 text-xs leading-6 text-[color:var(--text-secondary)]">
                <strong className="text-[color:var(--text-primary)]">护城河</strong>
                ：品牌力、规模效应、网络效应与高转换成本等结构性优势，能够帮助企业抵御竞争。
                <br />
                <strong className="text-[color:var(--text-primary)]">安全边际</strong>
                ：当估值低于企业内在价值一定比例时才买入，以抵御不可预期的风险。
              </div>
            </article>
            <article className="rounded-[30px] border border-[color:var(--stroke-soft)] bg-[color:var(--bg-elevated)] p-8 shadow-[var(--shadow-soft)]">
              <h4 className="text-xl font-semibold text-[color:var(--text-primary)]">成长投资</h4>
              <p className="mt-3 text-sm leading-6 text-[color:var(--text-secondary)]">
                聚焦高增长行业中的佼佼者。需要建立“增长飞轮”分析框架：市场空间 (TAM)、产品优势、用户增长质量、盈利模式与管理层执行力。
              </p>
              <ul className="mt-4 space-y-2 rounded-2xl bg-white/70 p-5 text-xs leading-6 text-[color:var(--text-secondary)]">
                <li>• 观察收入增速与毛利率是否双升。</li>
                <li>• 关注研发投入占比与留存率，判断持续创新能力。</li>
                <li>• 评估现金流量表中的经营现金净额是否为正。</li>
              </ul>
            </article>
            <article className="rounded-[30px] border border-[color:var(--stroke-soft)] bg-[color:var(--bg-elevated)] p-8 shadow-[var(--shadow-soft)]">
              <h4 className="text-xl font-semibold text-[color:var(--text-primary)]">技术分析</h4>
              <p className="mt-3 text-sm leading-6 text-[color:var(--text-secondary)]">
                使用 K 线形态、成交量与趋势线识别市场情绪。初学者可以从「均线系统（MA）」与「道氏理论」入手。
              </p>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl bg-white/70 p-5 text-xs leading-6 text-[color:var(--text-secondary)]">
                  <strong className="text-[color:var(--text-primary)]">K 线图</strong>
                  ：每根 K 线包含开盘、收盘、最高、最低价。组合形态（如吞没、锤子线）用于判断趋势反转。
                </div>
                <div className="rounded-2xl bg-white/70 p-5 text-xs leading-6 text-[color:var(--text-secondary)]">
                  <strong className="text-[color:var(--text-primary)]">移动平均线</strong>
                  ：MA5、MA20、MA60 等均线可识别短中长期趋势，金叉/死叉是常见信号。
                </div>
              </div>
            </article>
            <article className="rounded-[30px] border border-[color:var(--stroke-soft)] bg-[color:var(--bg-elevated)] p-8 shadow-[var(--shadow-soft)]">
              <h4 className="text-xl font-semibold text-[color:var(--text-primary)]">经典理论</h4>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl bg-white/70 p-5 text-xs leading-6 text-[color:var(--text-secondary)]">
                  <strong className="text-[color:var(--text-primary)]">有效市场假说 (EMH)</strong>
                  ：认为所有公开信息已反映在价格中，超额收益难以持续。
                </div>
                <div className="rounded-2xl bg-white/70 p-5 text-xs leading-6 text-[color:var(--text-secondary)]">
                  <strong className="text-[color:var(--text-primary)]">现代投资组合理论 (MPT)</strong>
                  ：通过均值-方差优化，在给定风险下最大化预期收益，强调分散化。
                </div>
                <div className="rounded-2xl bg-white/70 p-5 text-xs leading-6 text-[color:var(--text-secondary)]">
                  <strong className="text-[color:var(--text-primary)]">资本资产定价模型 (CAPM)</strong>
                  ：利用无风险利率、市场收益率与 β 值估算资产的合理收益。
                </div>
              </div>
            </article>
          </div>
        ),
        resources: [
          {
            label: "CFA Institute Investment Foundations® 课程",
            url: "https://www.cfainstitute.org/en/programs/investment-foundations/overview",
          },
          {
            label: "晨星：价值投资系列讲座",
            url: "https://www.morningstar.cn/quicktake/valueinvesting",
          },
          {
            label: "Investopedia Academy：Technical Analysis",
            url: "https://academy.investopedia.com/products/technical-analysis-bundle",
          },
        ],
      },
      {
        id: "models",
        kicker: "03",
        title: "金融模型 (Models)",
        summary: "提供估值模型教程、案例拆解与可下载的工具模板。",
        body: (
          <div className="space-y-6">
            <div className="rounded-[30px] border border-[color:var(--stroke-soft)] bg-[color:var(--bg-elevated)] p-8 shadow-[var(--shadow-soft)]">
              <h4 className="text-xl font-semibold text-[color:var(--text-primary)]">公司估值入门</h4>
              <p className="mt-3 text-sm leading-6 text-[color:var(--text-secondary)]">
                估值的本质是预测未来现金流并折现到今天。我们提供可操作的 Excel 模板，涵盖财报数据整理、假设输入与敏感性分析。
              </p>
              <a
                href="https://static-assets.oss-cn-hangzhou.aliyuncs.com/valuation-template.xlsx"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-[color:var(--brand)] px-4 py-2 text-xs font-semibold text-white shadow-[var(--shadow-soft)] transition-transform duration-200 hover:-translate-y-[1px]"
              >
                下载估值模板（Excel）
              </a>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <article className="rounded-[28px] border border-[color:var(--stroke-soft)] bg-[color:var(--bg-elevated)] p-7 shadow-[var(--shadow-soft)]">
                <h4 className="text-lg font-semibold text-[color:var(--text-primary)]">DCF 模型</h4>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-[color:var(--text-secondary)]">
                  <li>• 预测未来 5-10 年自由现金流 (FCF)。</li>
                  <li>• 选择折现率（通常基于 WACC）。</li>
                  <li>• 估算终值（永续增长模型或退出倍数法）。</li>
                  <li>• 把现金流折现到现值并求和，得到企业价值。</li>
                </ul>
              </article>
              <article className="rounded-[28px] border border-[color:var(--stroke-soft)] bg-[color:var(--bg-elevated)] p-7 shadow-[var(--shadow-soft)]">
                <h4 className="text-lg font-semibold text-[color:var(--text-primary)]">相对估值</h4>
                <p className="mt-3 text-sm leading-6 text-[color:var(--text-secondary)]">
                  通过对比同行业的 P/E、P/B、EV/EBITDA 等倍数，评估公司当前定价是否合理。适用于盈利稳定、行业可比性强的企业。
                </p>
              </article>
            </div>
            <article className="rounded-[28px] border border-[color:var(--stroke-soft)] bg-[color:var(--bg-elevated)] p-7 shadow-[var(--shadow-soft)]">
              <h4 className="text-lg font-semibold text-[color:var(--text-primary)]">期权定价 (Black-Scholes)</h4>
              <p className="mt-3 text-sm leading-6 text-[color:var(--text-secondary)]">
                Black-Scholes 模型基于无套利假设推导出欧式期权的理论价格。核心变量包括标的价格、执行价、无风险利率、波动率与剩余期限。
                我们提供 Python Notebook 示例，演示如何调用 SciPy 计算期权价值。
              </p>
              <a
                href="https://colab.research.google.com/drive/1jmaBoBNgYxr7FqfErEFlV0caZzVz6XzM?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-soft)] px-4 py-2 text-xs font-semibold text-[color:var(--brand-strong)] shadow-[var(--shadow-soft)]"
              >
                在线演示：Black-Scholes 计算器
              </a>
            </article>
          </div>
        ),
        resources: [
          {
            label: "麦肯锡：企业价值评估指南",
            url: "https://www.mckinsey.com/capabilities/strategy-and-corporate-finance/our-insights/valuing-company",
          },
          {
            label: "NYU Stern：估值数据库 (Aswath Damodaran)",
            url: "https://pages.stern.nyu.edu/~adamodar/",
          },
          {
            label: "CME Group：期权定价教育中心",
            url: "https://www.cmegroup.com/education/courses/introduction-to-options/black-scholes-model.html",
          },
        ],
      },
    ],
  },
  {
    id: "masters",
    title: "投资大师说",
    subtitle: "Wisdom from Masters",
    description: "站在巨人的肩膀上回看投资理念，提炼可执行的思维模型与读书清单。",
    groups: [
      {
        id: "principles",
        kicker: "01",
        title: "大师理念",
        summary: "精炼大师的投资哲学，以图文与短视频总结他们如何看待风险、时间与决策。",
        body: (
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-[30px] border border-[color:var(--stroke-soft)] bg-[color:var(--bg-elevated)] p-7 shadow-[var(--shadow-soft)]">
              <h4 className="text-xl font-semibold text-[color:var(--text-primary)]">巴菲特 & 芒格</h4>
              <p className="mt-3 text-sm leading-6 text-[color:var(--text-secondary)]">
                价值投资倡导“买一家好公司，并长期持有”。巴菲特强调能力圈与安全边际，芒格补充多元思维模型与逆向思考。
              </p>
              <div className="mt-4 rounded-2xl bg-white/70 p-5 text-xs leading-6 text-[color:var(--text-secondary)]">
                <p>核心语录：“如果你不打算持有一只股票 10 年，就不要持有 10 分钟。”</p>
                <p className="mt-2">延伸阅读：伯克希尔·哈撒韦致股东的信。</p>
              </div>
            </article>
            <article className="rounded-[30px] border border-[color:var(--stroke-soft)] bg-[color:var(--bg-elevated)] p-7 shadow-[var(--shadow-soft)]">
              <h4 className="text-xl font-semibold text-[color:var(--text-primary)]">彼得·林奇</h4>
              <p className="mt-3 text-sm leading-6 text-[color:var(--text-secondary)]">
                提倡“投资你所了解的”。通过实地观察消费习惯、门店客流等非财务指标，捕捉成长股。
              </p>
              <div className="mt-4 rounded-2xl bg-white/70 p-5 text-xs leading-6 text-[color:var(--text-secondary)]">
                <p>技巧：“十倍股”早期往往具备独特产品和快速扩张的零售网络。</p>
                <p className="mt-2">建议每季度跟踪经营数据与库存水平，避免被短期波动干扰。</p>
              </div>
            </article>
            <article className="rounded-[30px] border border-[color:var(--stroke-soft)] bg-[color:var(--bg-elevated)] p-7 shadow-[var(--shadow-soft)]">
              <h4 className="text-xl font-semibold text-[color:var(--text-primary)]">瑞·达利欧</h4>
              <p className="mt-3 text-sm leading-6 text-[color:var(--text-secondary)]">
                “全天候策略”通过组合低相关资产，实现在不同经济环境下的稳健收益。达利欧强调理解经济机器，运用数据驱动决策。
              </p>
              <div className="mt-4 rounded-2xl bg-white/70 p-5 text-xs leading-6 text-[color:var(--text-secondary)]">
                <p>核心框架：通胀与增长的四象限，决定债券、股票、大宗商品的权重分布。</p>
                <p className="mt-2">推荐观看《原则 (Principles)》动画短片。</p>
              </div>
            </article>
            <article className="rounded-[30px] border border-[color:var(--stroke-soft)] bg-[color:var(--bg-elevated)] p-7 shadow-[var(--shadow-soft)]">
              <h4 className="text-xl font-semibold text-[color:var(--text-primary)]">霍华德·马克斯</h4>
              <p className="mt-3 text-sm leading-6 text-[color:var(--text-secondary)]">
                《周期》和《投资最重要的事》强调“第二层思维”：除了判断结果，还要预测别人会怎样看待结果。
              </p>
              <div className="mt-4 rounded-2xl bg-white/70 p-5 text-xs leading-6 text-[color:var(--text-secondary)]">
                <p>要点：在市场极度乐观或悲观时保持冷静，重视风险控制。</p>
                <p className="mt-2">实践建议：建立投资日记，记录当下的市场情绪与估值水平。</p>
              </div>
            </article>
          </div>
        ),
        resources: [
          {
            label: "伯克希尔·哈撒韦致股东信 PDF",
            url: "https://www.berkshirehathaway.com/letters/letters.html",
          },
          {
            label: "彼得·林奇《战胜华尔街》访谈合集",
            url: "https://www.morningstar.com/articles/1128080/peter-lynch-on-investing-in-2024",
          },
          {
            label: "桥水基金：经济机器是怎样运行的",
            url: "https://www.principles.com/the-changing-world/",
          },
          {
            label: "橡树资本：霍华德·马克斯备忘录",
            url: "https://www.oaktreecapital.com/insights/memo",
          },
        ],
      },
      {
        id: "books",
        kicker: "02",
        title: "经典导读",
        summary: "精选投资书单与导读，帮助你迅速抓住作者的核心论点与操作方法。",
        body: (
          <div className="space-y-6">
            <article className="rounded-[30px] border border-[color:var(--stroke-soft)] bg-[color:var(--bg-elevated)] p-8 shadow-[var(--shadow-soft)]">
              <h4 className="text-xl font-semibold text-[color:var(--text-primary)]">必读书单</h4>
              <ul className="mt-3 grid gap-3 text-sm leading-6 text-[color:var(--text-secondary)] sm:grid-cols-2">
                <li>• 《聪明的投资者》— 价值投资的基石，强调防守型策略。</li>
                <li>• 《证券分析》— 深入解析财报与估值，巴菲特的终生教材。</li>
                <li>• 《漫步华尔街》— 介绍有效市场理论与指数化投资。</li>
                <li>• 《原则》— 瑞·达利欧的决策体系与公司文化。</li>
                <li>• 《投资最重要的事》— 风险控制与周期判断的实战笔记。</li>
              </ul>
            </article>
            <article className="rounded-[30px] border border-[color:var(--stroke-soft)] bg-[color:var(--bg-elevated)] p-8 shadow-[var(--shadow-soft)]">
              <h4 className="text-xl font-semibold text-[color:var(--text-primary)]">《聪明的投资者》精读</h4>
              <p className="mt-3 text-sm leading-6 text-[color:var(--text-secondary)]">
                采用系列文章 + 视频形式拆解“市场先生”“安全边际”等核心章节。我们将提供章节摘要、现代案例，以及如何在 A 股与港美股市场落地的操作建议。
              </p>
              <a
                href="https://www.youtube.com/playlist?list=PLcFHZqR06P-zpYlXwE1fKCIw1YPrNkB4N"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-soft)] px-4 py-2 text-xs font-semibold text-[color:var(--brand-strong)] shadow-[var(--shadow-soft)]"
              >
                精读视频播放列表
              </a>
            </article>
            <article className="rounded-[30px] border border-[color:var(--stroke-soft)] bg-[color:var(--bg-elevated)] p-8 shadow-[var(--shadow-soft)]">
              <h4 className="text-xl font-semibold text-[color:var(--text-primary)]">《证券分析》导读</h4>
              <p className="mt-3 text-sm leading-6 text-[color:var(--text-secondary)]">
                本导读聚焦财务报表解析、债券投资原则与普通股分析，结合现代案例（如苹果、贵州茅台）展示框架如何应用。
                附赠电子笔记，提炼每一章的估值公式与风险提示。
              </p>
              <a
                href="https://www.valuewalk.com/security-analysis-book-summary/"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-[color:var(--brand)] px-4 py-2 text-xs font-semibold text-white shadow-[var(--shadow-soft)]"
              >
                下载章节导读 PDF
              </a>
            </article>
          </div>
        ),
        resources: [
          {
            label: "Value Investing World：经典书籍资源",
            url: "https://www.valueinvestingworld.com/p/book-summaries.html",
          },
          {
            label: "Columbia Business School：本杰明·格雷厄姆资料库",
            url: "https://www0.gsb.columbia.edu/library/guide/BenjaminGraham",
          },
        ],
      },
    ],
  },
  {
    id: "research",
    title: "深度投研与资源",
    subtitle: "In-depth Research",
    description: "链接专业机构的研究报告、数据源与工具，帮助进阶投资者迅速搭建研究体系。",
    groups: [
      {
        id: "reports",
        kicker: "01",
        title: "研报精读",
        summary: "学习如何拆读券商研报，并精选热点行业的核心观点。",
        body: (
          <div className="space-y-6">
            <article className="rounded-[30px] border border-[color:var(--stroke-soft)] bg-[color:var(--bg-elevated)] p-8 shadow-[var(--shadow-soft)]">
              <h4 className="text-xl font-semibold text-[color:var(--text-primary)]">如何阅读券商研报</h4>
              <ol className="mt-3 space-y-3 text-sm leading-6 text-[color:var(--text-secondary)]">
                <li>1. 先看投资评级与目标价，判断研究范围和结论。</li>
                <li>2. 阅读行业/公司逻辑，找出驱动因素与关键假设。</li>
                <li>3. 关注财务预测与敏感性分析，验证假设是否合理。</li>
                <li>4. 对照风险提示，思考哪些情景会导致结论失效。</li>
              </ol>
            </article>
            <div className="grid gap-6 md:grid-cols-2">
              <article className="rounded-[30px] border border-[color:var(--stroke-soft)] bg-[color:var(--bg-elevated)] p-7 shadow-[var(--shadow-soft)]">
                <h4 className="text-lg font-semibold text-[color:var(--text-primary)]">AI 行业精选</h4>
                <p className="mt-3 text-sm leading-6 text-[color:var(--text-secondary)]">
                  集成中金、花旗与摩根士丹利关于人工智能基础设施的最新观点，涵盖算力需求、GPU 供应链与应用落地案例。
                </p>
                <a
                  href="https://www.goldmansachs.com/intelligence/pages/ai-investment-industry-report.html"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-soft)] px-4 py-2 text-xs font-semibold text-[color:var(--brand-strong)] shadow-[var(--shadow-soft)]"
                >
                  Goldman Sachs：AI 投资地图
                </a>
              </article>
              <article className="rounded-[30px] border border-[color:var(--stroke-soft)] bg-[color:var(--bg-elevated)] p-7 shadow-[var(--shadow-soft)]">
                <h4 className="text-lg font-semibold text-[color:var(--text-primary)]">新能源专题</h4>
                <p className="mt-3 text-sm leading-6 text-[color:var(--text-secondary)]">
                  提炼中信证券、彭博新能源财经关于光伏与储能的核心数据，帮助你理解成本曲线与政策驱动。
                </p>
                <a
                  href="https://about.bnef.com/new-energy-outlook/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-[color:var(--brand)] px-4 py-2 text-xs font-semibold text-white shadow-[var(--shadow-soft)]"
                >
                  BNEF：全球新能源展望
                </a>
              </article>
              <article className="rounded-[30px] border border-[color:var(--stroke-soft)] bg-[color:var(--bg-elevated)] p-7 shadow-[var(--shadow-soft)]">
                <h4 className="text-lg font-semibold text-[color:var(--text-primary)]">生物医药速览</h4>
                <p className="mt-3 text-sm leading-6 text-[color:var(--text-secondary)]">
                  汇总麦肯锡与 IQVIA 发布的创新药市场趋势，关注研发管线、临床试验阶段与支付政策。
                </p>
                <a
                  href="https://www.mckinsey.com/industries/life-sciences/our-insights/biopharma-report"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-soft)] px-4 py-2 text-xs font-semibold text-[color:var(--brand-strong)] shadow-[var(--shadow-soft)]"
                >
                  McKinsey：Global Biopharma Outlook
                </a>
              </article>
              <article className="rounded-[30px] border border-[color:var(--stroke-soft)] bg-[color:var(--bg-elevated)] p-7 shadow-[var(--shadow-soft)]">
                <h4 className="text-lg font-semibold text-[color:var(--text-primary)]">宏观数据追踪</h4>
                <p className="mt-3 text-sm leading-6 text-[color:var(--text-secondary)]">
                  定期梳理央行货币政策、就业与通胀数据，配套可视化仪表板，让宏观变化一目了然。
                </p>
                <a
                  href="https://www.imf.org/en/Publications/WEO"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-soft)] px-4 py-2 text-xs font-semibold text-[color:var(--brand-strong)] shadow-[var(--shadow-soft)]"
                >
                  IMF：世界经济展望数据库
                </a>
              </article>
            </div>
          </div>
        ),
        resources: [
          {
            label: "Wind 终端：行业与公司数据库",
            url: "https://www.wind.com.cn/",
          },
          {
            label: "东方财富 Choice 数据：研报下载",
            url: "https://data.eastmoney.com/report/",
          },
          {
            label: "IMF Data：宏观经济数据中心",
            url: "https://www.imf.org/en/Data",
          },
        ],
      },
      {
        id: "resources",
        kicker: "02",
        title: "资源导航",
        summary: "一站式收藏核心数据网站、监管机构入口与权威媒体。",
        body: (
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-[30px] border border-[color:var(--stroke-soft)] bg-[color:var(--bg-elevated)] p-8 shadow-[var(--shadow-soft)]">
              <h4 className="text-xl font-semibold text-[color:var(--text-primary)]">数据网站</h4>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-[color:var(--text-secondary)]">
                <li>
                  <a
                    href="https://quote.eastmoney.com/center/"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-[color:var(--brand-strong)]"
                  >
                    东方财富行情中心
                  </a>
                  ：覆盖 A 股、港股、美股与基金的实时行情。
                </li>
                <li>
                  <a
                    href="https://cn.investing.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-[color:var(--brand-strong)]"
                  >
                    Investing.com 中文站
                  </a>
                  ：提供全球指数、期货、外汇和大宗商品数据。
                </li>
                <li>
                  <a
                    href="https://www.wind.com.cn/portal/zh/Products/financialdata.html"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-[color:var(--brand-strong)]"
                  >
                    Wind 金融终端在线版
                  </a>
                  ：提供宏观、行业、上市公司等全量数据库。
                </li>
              </ul>
            </article>
            <article className="rounded-[30px] border border-[color:var(--stroke-soft)] bg-[color:var(--bg-elevated)] p-8 shadow-[var(--shadow-soft)]">
              <h4 className="text-xl font-semibold text-[color:var(--text-primary)]">监管机构</h4>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-[color:var(--text-secondary)]">
                <li>
                  <a
                    href="https://www.csrc.gov.cn/"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-[color:var(--brand-strong)]"
                  >
                    中国证监会
                  </a>
                  ：查阅上市公司公告、监管规则与投资者教育材料。
                </li>
                <li>
                  <a
                    href="https://www.hkex.com.hk/?sc_lang=zh-HK"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-[color:var(--brand-strong)]"
                  >
                    香港交易所
                  </a>
                  ：获取港股上市文件、公告与上市规则。
                </li>
                <li>
                  <a
                    href="https://www.sec.gov/"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-[color:var(--brand-strong)]"
                  >
                    美国 SEC EDGAR
                  </a>
                  ：搜索美股上市公司的 10-K、10-Q 等财报。
                </li>
              </ul>
            </article>
            <article className="rounded-[30px] border border-[color:var(--stroke-soft)] bg-[color:var(--bg-elevated)] p-8 shadow-[var(--shadow-soft)]">
              <h4 className="text-xl font-semibold text-[color:var(--text-primary)]">专业媒体</h4>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-[color:var(--text-secondary)]">
                <li>
                  <a
                    href="https://www.caixin.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-[color:var(--brand-strong)]"
                  >
                    财新网
                  </a>
                  ：深度财经报道，聚焦政策解读与行业洞察。
                </li>
                <li>
                  <a
                    href="https://www.bloomberg.com/asia"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-[color:var(--brand-strong)]"
                  >
                    Bloomberg Asia
                  </a>
                  ：全球市场新闻、数据与研究评论。
                </li>
                <li>
                  <a
                    href="https://www.wsj.com/asia"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-[color:var(--brand-strong)]"
                  >
                    华尔街日报亚洲版
                  </a>
                  ：追踪国际市场、政策与企业动态。
                </li>
              </ul>
            </article>
            <article className="rounded-[30px] border border-[color:var(--stroke-soft)] bg-[color:var(--bg-elevated)] p-8 shadow-[var(--shadow-soft)]">
              <h4 className="text-xl font-semibold text-[color:var(--text-primary)]">工具 & 社区</h4>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-[color:var(--text-secondary)]">
                <li>
                  <a
                    href="https://simu.to/"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-[color:var(--brand-strong)]"
                  >
                    思慕研报搜索
                  </a>
                  ：整合券商、买方、智库的公开研报，支持关键词筛选。
                </li>
                <li>
                  <a
                    href="https://www.joinquant.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-[color:var(--brand-strong)]"
                  >
                    聚宽量化社区
                  </a>
                  ：提供量化策略回测、数据接口与社区讨论。
                </li>
                <li>
                  <a
                    href="https://www.researchgate.net/"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-[color:var(--brand-strong)]"
                  >
                    ResearchGate
                  </a>
                  ：查找学术论文与跨学科研究，补充行业分析视角。
                </li>
              </ul>
            </article>
          </div>
        ),
        resources: [
          {
            label: "世界银行 DataBank：发展指标",
            url: "https://databank.worldbank.org/",
          },
          {
            label: "OECD Data：全球经济数据库",
            url: "https://data.oecd.org/",
          },
          {
            label: "Reuters Breakingviews：全球评论",
            url: "https://www.reuters.com/breakingviews/",
          },
        ],
      },
    ],
  },
]

function SectionGroup({ section }) {
  return (
    <section id={section.id} className="scroll-mt-28">
      <header className="max-w-3xl">
        <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--stroke-soft)] bg-white/60 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--text-tertiary)]">
          <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[color:var(--brand)]" />
          {section.subtitle}
        </span>
        <h2 className="mt-5 text-3xl font-semibold text-[color:var(--text-primary)]">{section.title}</h2>
        <p className="mt-4 text-base leading-7 text-[color:var(--text-secondary)]">{section.description}</p>
      </header>
      <div className="mt-12 space-y-16">
        {section.groups.map((group) => (
          <article key={group.id} id={`${section.id}-${group.id}`} className="scroll-mt-28">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--brand-soft)] text-sm font-semibold text-[color:var(--brand-strong)]">
                {group.kicker}
              </span>
              <div>
                <h3 className="text-2xl font-semibold text-[color:var(--text-primary)]">{group.title}</h3>
                <p className="mt-1 text-sm leading-6 text-[color:var(--text-secondary)]">{group.summary}</p>
              </div>
            </div>
            <div className="mt-6 space-y-6 text-[color:var(--text-secondary)]">{group.body}</div>
            <div className="mt-8 rounded-[24px] border border-[color:var(--stroke-soft)] bg-white/70 p-6 shadow-[var(--shadow-soft)]">
              <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--text-tertiary)]">精选资源</h4>
              <ul className="mt-3 space-y-2 text-sm leading-6">
                {group.resources.map((resource) => (
                  <li key={resource.url}>
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold text-[color:var(--brand-strong)] transition-colors duration-200 hover:text-[color:var(--brand)]"
                    >
                      {resource.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default function Teach() {
  return (
    <div className="relative isolate px-4 pb-24 pt-20" data-track-view="page_teach">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-gradient-to-b from-white/70 to-transparent blur-3xl" />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 lg:flex-row">
        <aside className="lg:w-64">
          <nav className="sticky top-28 hidden lg:block">
            <div className="rounded-[32px] border border-[color:var(--stroke-soft)] bg-[color:var(--bg-elevated)]/90 p-6 shadow-[var(--shadow-soft)] backdrop-blur-xl">
              <h2 className="text-sm font-semibold uppercase tracking-[0.32em] text-[color:var(--text-tertiary)]">内容导航</h2>
              <ul className="mt-5 space-y-4 text-sm">
                {menuItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="group block rounded-[18px] px-4 py-3 transition-all duration-200 hover:bg-[color:var(--brand-soft)]/60"
                    >
                      <span className="text-xs uppercase tracking-[0.3em] text-[color:var(--text-tertiary)] group-hover:text-[color:var(--brand-strong)]">
                        {item.subtitle}
                      </span>
                      <span className="mt-1 block text-lg font-semibold text-[color:var(--text-primary)] group-hover:text-[color:var(--brand-strong)]">
                        {item.title}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </aside>
        <main className="flex-1 space-y-24">
          <header className="rounded-[36px] border border-[color:var(--stroke-soft)] bg-[color:var(--bg-elevated)] px-8 py-12 shadow-[var(--shadow-strong)]">
            <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--stroke-soft)] bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-[color:var(--text-tertiary)]">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[color:var(--brand)]" />
              The Apple Way to Learn Finance
            </span>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-[color:var(--text-primary)] sm:text-5xl">
              金融教学中心
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[color:var(--text-secondary)]">
              我们以乔布斯时代苹果的设计哲学——极致简洁、沉浸体验与人文关怀——打造这套金融学习路径。
              四大板块覆盖从零开始到专业进阶的所有阶段，每一部分都提供真实可用的资料与操作指引。
            </p>
          </header>
          {sections.map((section) => (
            <SectionGroup key={section.id} section={section} />
          ))}
        </main>
      </div>
      <div className="mt-16 rounded-[32px] border border-[color:var(--stroke-soft)] bg-[color:var(--bg-elevated)] px-8 py-10 text-center shadow-[var(--shadow-soft)]">
        <h2 className="text-2xl font-semibold text-[color:var(--text-primary)]">持续更新 · 共建金融知识宇宙</h2>
        <p className="mt-4 text-sm leading-6 text-[color:var(--text-secondary)]">
          我们将每月同步更新最新的投教视频、研报精读与模型工具包。欢迎在社区提出你的学习需求，帮助我们把产品做得更好。
        </p>
        <a
          href="https://forms.office.com/r/finance-edu-feedback"
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[color:var(--brand)] px-6 py-3 text-sm font-semibold text-white shadow-[var(--shadow-soft)] transition-transform duration-200 hover:-translate-y-[1px]"
        >
          提交课程建议
        </a>
      </div>
    </div>
  )
}
