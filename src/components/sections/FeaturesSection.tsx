"use client";

import AnimatedElement from "../AnimatedElement";
import SlideLayout from "../SlideLayout";

const seoFeatures = [
  {
    title: "基礎 SEO",
    items: [
      "每頁獨立 Title / Keywords / Description",
      "SEO 圖片優化（自動壓縮 + Alt 標籤）",
      "Sitemap 自動產生",
    ],
  },
  {
    title: "進階 SEO",
    items: [
      "自訂三層 URL 結構（類別/子類/商品）",
      "Canonical URL 防重複內容",
      "麵包屑導航 + 結構化資料",
    ],
  },
  {
    title: "分析工具",
    items: [
      "Google Analytics 整合",
      "Search Console 對接",
      "FB 像素追蹤（再行銷）",
    ],
  },
];

const projectFlow = [
  { step: "01", title: "瞭解需求", desc: "需求訪談、功能確認" },
  { step: "02", title: "規劃確認", desc: "架構規劃、報價簽約" },
  { step: "03", title: "設計製作", desc: "視覺設計、程式開發" },
  { step: "04", title: "測試驗收", desc: "功能測試、內容上稿、上線" },
];

const securityFeatures = [
  { name: "ISO 27001:2022", desc: "國際資安管理認證" },
  { name: "SSL 加密", desc: "全站 HTTPS 安全傳輸" },
  { name: "WAF 防火牆", desc: "網站應用程式防火牆" },
  { name: "定期備份", desc: "每日自動備份，可快速還原" },
  { name: "主機管理", desc: "24/7 主機監控與維護" },
  { name: "存取控制", desc: "後台權限分級管理" },
];

const marketingFeatures = [
  { name: "優惠活動", desc: "滿額折扣、限時特價、滿額免運" },
  { name: "優惠碼系統", desc: "折扣碼管理與套用" },
  { name: "電子報", desc: "收集 Email，定期發送活動通知" },
  { name: "LINE 串接", desc: "官方帳號訂單通知、客服推播" },
];

export default function FeaturesSection() {
  return (
    <SlideLayout>
        {/* Header */}
        <AnimatedElement delay={0.1}>
          <p className="section-label mb-3">Platform</p>
        </AnimatedElement>
        <AnimatedElement delay={0.2}>
          <h1
            className="text-4xl md:text-5xl font-light leading-tight mb-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            平台功能
          </h1>
        </AnimatedElement>
        <AnimatedElement delay={0.3}>
          <p className="text-text-secondary text-lg font-light max-w-2xl mb-12">
            從 SEO 到資安，從專案管理到行銷工具，
            提供完整的技術支援與服務。
          </p>
        </AnimatedElement>

        {/* Project flow */}
        <AnimatedElement delay={0.35}>
          <div className="flex items-center gap-4 mb-6">
            <div className="gold-line-long" />
            <h2
              className="text-xl font-light"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Project Flow
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
            {projectFlow.map((item, i) => (
              <div
                key={i}
                className="relative p-5 border border-border-subtle group hover:border-brand-gold/50 transition-all duration-500"
              >
                <p className="text-brand-gold text-xs tracking-widest mb-2">
                  {item.step}
                </p>
                <p
                  className="text-base mb-1"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {item.title}
                </p>
                <p className="text-text-muted text-xs">{item.desc}</p>
                {i < projectFlow.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-2 h-px bg-border-strong" />
                )}
              </div>
            ))}
          </div>
        </AnimatedElement>

        {/* SEO */}
        <AnimatedElement delay={0.4}>
          <div className="flex items-center gap-4 mb-6">
            <div className="gold-line-long" />
            <h2
              className="text-xl font-light"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              SEO Optimization
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14">
            {seoFeatures.map((group, i) => (
              <div key={i} className="p-5 border border-border-subtle">
                <h3 className="text-sm font-medium mb-3 text-brand-earth">
                  {group.title}
                </h3>
                <ul className="space-y-2">
                  {group.items.map((item, j) => (
                    <li
                      key={j}
                      className="text-text-secondary text-xs font-light flex items-start gap-2"
                    >
                      <span className="w-1 h-1 bg-brand-gold/50 rounded-full mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </AnimatedElement>

        {/* Security + Marketing side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Security */}
          <AnimatedElement delay={0.5}>
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="gold-line-long" />
                <h2
                  className="text-xl font-light"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Security
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {securityFeatures.map((item, i) => (
                  <div
                    key={i}
                    className="p-3 border-l border-brand-gold/30"
                  >
                    <p className="text-xs font-medium mb-0.5">{item.name}</p>
                    <p className="text-text-muted text-[11px]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedElement>

          {/* Marketing */}
          <AnimatedElement delay={0.55}>
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="gold-line-long" />
                <h2
                  className="text-xl font-light"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Marketing Tools
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {marketingFeatures.map((item, i) => (
                  <div
                    key={i}
                    className="p-3 border-l border-brand-gold/30"
                  >
                    <p className="text-xs font-medium mb-0.5">{item.name}</p>
                    <p className="text-text-muted text-[11px]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedElement>
        </div>

        {/* Notion management */}
        <AnimatedElement delay={0.6}>
          <div className="p-6 border border-border-subtle bg-bg-secondary mb-6">
            <div className="flex items-center gap-3 mb-3">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-brand-gold"
              >
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <h3
                className="text-base"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Notion 專案管理
              </h3>
            </div>
            <p className="text-text-secondary text-sm font-light leading-relaxed">
              使用 Notion 作為專案管理工具，從需求確認、設計交付到開發進度，
              每個階段都有透明的追蹤記錄，讓你隨時掌握專案狀態。
            </p>
          </div>
        </AnimatedElement>

        {/* Core values */}
        <AnimatedElement delay={0.65}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "提升能見度", desc: "透過 SEO 讓更多人找到你的品牌" },
              {
                title: "建立品牌權威",
                desc: "專業的網站設計建立消費者信任",
              },
              {
                title: "長期投資效益",
                desc: "一次投資，持續為品牌帶來價值",
              },
            ].map((item, i) => (
              <div key={i} className="p-5 bg-bg-dark text-text-inverse">
                <p
                  className="text-brand-accent text-lg mb-2"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {item.title}
                </p>
                <p className="text-sm font-light opacity-80">{item.desc}</p>
              </div>
            ))}
          </div>
        </AnimatedElement>

        <div className="h-16" />
    </SlideLayout>
  );
}
