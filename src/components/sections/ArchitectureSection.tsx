"use client";

import AnimatedElement from "../AnimatedElement";
import SlideLayout from "../SlideLayout";

const siteMap = [
  {
    name: "首頁",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    items: ["主視覺 Banner", "精選商品", "品牌理念區", "分類入口"],
  },
  {
    name: "品牌故事",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    items: ["品牌理念", "創辦人故事", "產品堅持"],
  },
  {
    name: "商品系統",
    icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
    items: ["商品分類頁", "商品列表頁", "商品詳細頁", "篩選 + 排序"],
  },
  {
    name: "購物流程",
    icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z",
    items: ["購物車", "結帳頁", "金流 + 物流", "訂單完成"],
  },
  {
    name: "會員中心",
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
    items: ["註冊 / 登入", "訂單查詢", "收藏清單", "常用地址"],
  },
  {
    name: "內容 + 客服",
    icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
    items: ["最新消息", "FAQ", "聯絡我們", "社群連結"],
  },
];

const keyPages = [
  {
    title: "商品詳細頁",
    subtitle: "最重要的頁面",
    features: [
      "多張高品質商品照，可放大檢視",
      "規格選擇（顏色 / 尺寸 / 容量）",
      "商品詳細說明（成分、使用方式）",
      "相關商品推薦，增加客單價",
    ],
  },
  {
    title: "結帳頁",
    subtitle: "轉換關鍵",
    features: [
      "收件資訊（會員可帶入常用地址）",
      "金流：信用卡 / ATM / 超商 / LINE Pay",
      "物流：宅配 / 超商取貨",
      "電子發票 / 捐贈 / 公司戶",
    ],
  },
];

export default function ArchitectureSection() {
  return (
    <SlideLayout>
        {/* Header */}
        <AnimatedElement delay={0.1}>
          <p className="section-label mb-3">Architecture</p>
        </AnimatedElement>
        <AnimatedElement delay={0.2}>
          <h1
            className="text-4xl md:text-5xl font-light leading-tight mb-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            網站架構規劃
          </h1>
        </AnimatedElement>
        <AnimatedElement delay={0.3}>
          <p className="text-text-secondary text-lg font-light max-w-2xl mb-12">
            針對飾品 / 保養品質感品牌的購物網站，整理常見架構。
            實際功能依需求調整。
          </p>
        </AnimatedElement>

        {/* Site map grid */}
        <AnimatedElement delay={0.4}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-14">
            {siteMap.map((section, i) => (
              <div
                key={i}
                className="group p-5 border border-border-subtle hover:border-brand-gold/50 transition-all duration-500"
              >
                <div className="flex items-center gap-3 mb-3">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-brand-gold shrink-0"
                  >
                    <path d={section.icon} />
                  </svg>
                  <h3
                    className="text-base"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {section.name}
                  </h3>
                </div>
                <ul className="space-y-1.5">
                  {section.items.map((item, j) => (
                    <li
                      key={j}
                      className="text-text-secondary text-xs font-light flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-brand-gold/40 rounded-full shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </AnimatedElement>

        {/* Key pages detail */}
        <AnimatedElement delay={0.5}>
          <div className="flex items-center gap-4 mb-6">
            <div className="gold-line-long" />
            <h2
              className="text-xl font-light"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Key Pages
            </h2>
          </div>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {keyPages.map((page, i) => (
            <AnimatedElement key={i} delay={0.55 + i * 0.1}>
              <div className="p-6 border border-border-subtle">
                <div className="flex items-center gap-3 mb-1">
                  <h3
                    className="text-lg"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {page.title}
                  </h3>
                  <span className="text-brand-gold text-[10px] tracking-widest px-2 py-0.5 border border-brand-gold/30">
                    {page.subtitle}
                  </span>
                </div>
                <ul className="space-y-2 mt-4">
                  {page.features.map((feature, j) => (
                    <li
                      key={j}
                      className="text-text-secondary text-sm font-light flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-brand-gold/50 rounded-full mt-1.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedElement>
          ))}
        </div>

        <AnimatedElement delay={0.7}>
          <p className="text-text-muted text-xs tracking-wide">
            * 以上是通用架構，實際功能依客戶需求和預算調整
          </p>
        </AnimatedElement>

        <div className="h-16" />
    </SlideLayout>
  );
}
