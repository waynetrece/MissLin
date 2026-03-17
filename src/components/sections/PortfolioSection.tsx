"use client";

import AnimatedElement from "../AnimatedElement";
import SlideLayout from "../SlideLayout";

const portfolioItems = [
  {
    name: "大和酵素",
    url: "yamatoem.com.tw",
    fullUrl: "https://www.yamatoem.com.tw",
    type: "保健食品",
    style: "日式極簡，米白 + 自然色調",
    features: ["卡片式排版", "電商功能完整", "品牌形象鮮明"],
  },
  {
    name: "桂冠食品",
    url: "laurel.com.tw",
    fullUrl: "https://www.laurel.com.tw",
    type: "冷凍食品 / 線上商城",
    style: "清爽現代，白底 + 高品質產品照",
    features: ["食譜內容整合", "線上購物", "品牌活動專區"],
  },
  {
    name: "寵愛女人",
    url: "lovetowoman.com",
    fullUrl: "https://www.lovetowoman.com",
    type: "精品二手交易",
    style: "白底 + 紫色系，分類極細",
    features: ["直購 + 競標雙模式", "精品鑑定", "會員系統"],
  },
  {
    name: "荃贏全美",
    url: "allwealth.iware.com.tw",
    fullUrl: "https://allwealth.iware.com.tw/html/",
    type: "保健食品",
    style: "白底清爽，強調信任感",
    features: ["數字動畫", "顧客見證", "產品線完整"],
  },
];

export default function PortfolioSection() {
  return (
    <SlideLayout>
        {/* Header */}
        <AnimatedElement delay={0.1}>
          <p className="section-label mb-3">Portfolio</p>
        </AnimatedElement>
        <AnimatedElement delay={0.2}>
          <h1
            className="text-4xl md:text-5xl font-light leading-tight mb-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            作品案例
          </h1>
        </AnimatedElement>
        <AnimatedElement delay={0.3}>
          <p className="text-text-secondary text-lg font-light max-w-2xl mb-12">
            每個作品都是根據客戶的品牌定位與需求量身打造，
            從視覺設計到功能規劃，展現客製化的設計實力。
          </p>
        </AnimatedElement>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {portfolioItems.map((item, i) => (
            <AnimatedElement key={i} delay={0.3 + i * 0.1}>
              <a
                href={item.fullUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-8 border border-border-subtle hover:border-brand-gold transition-all duration-500 bg-bg-elevated"
              >
                {/* URL */}
                <p className="text-brand-gold text-xs tracking-widest mb-4 flex items-center gap-2">
                  {item.url}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </p>

                {/* Name */}
                <h3
                  className="text-2xl mb-2 group-hover:text-brand-gold transition-colors duration-300"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {item.name}
                </h3>

                {/* Type */}
                <p className="text-text-muted text-sm mb-4">{item.type}</p>

                {/* Style description */}
                <p className="text-text-secondary text-sm font-light mb-6 leading-relaxed">
                  {item.style}
                </p>

                {/* Feature tags */}
                <div className="flex flex-wrap gap-2">
                  {item.features.map((feature, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 text-xs text-text-secondary border border-border-subtle"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </a>
            </AnimatedElement>
          ))}
        </div>

        {/* Note */}
        <AnimatedElement delay={0.8}>
          <div className="flex items-start gap-3 p-6 border-l-2 border-brand-gold/30 bg-bg-secondary">
            <p className="text-text-secondary text-sm font-light leading-relaxed">
              以上作品的設計風格，主要是配合各客戶的品牌調性與接受度。
              <span className="text-brand-earth">
                客製化的核心價值在於 — 風格完全依客戶的想法調整。
              </span>
            </p>
          </div>
        </AnimatedElement>

        <div className="h-16" />
    </SlideLayout>
  );
}
