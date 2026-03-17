"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedElement from "../AnimatedElement";
import SlideLayout from "../SlideLayout";

const tabs = [
  { id: "taiwan", label: "台灣品牌" },
  { id: "korean-skincare", label: "韓系保養" },
  { id: "korean-jewelry", label: "韓系飾品" },
];

const taiwanBrands = [
  {
    name: "綠藤生機",
    url: "greenvines.com.tw",
    fullUrl: "https://www.greenvines.com.tw",
    style: "綠白色調，強調成分透明，內容行銷做得好",
  },
  {
    name: "茶籽堂",
    url: "chatzutang.com",
    fullUrl: "https://www.chatzutang.com",
    style: "東方美學，插畫風格獨特，品牌故事頁有質感",
  },
  {
    name: "vacanza",
    url: "vacanza.com.tw",
    fullUrl: "https://www.vacanza.com.tw",
    style: "粉嫩色調，商品分類清楚，購物流程完整",
  },
];

const koreanSkincare = [
  {
    name: "TAMBURINS",
    url: "tamburins.com",
    fullUrl: "https://www.tamburins.com",
    style: "極簡藝術風，大量留白，黑白主色調",
    highlight: "產品攝影像藝術品，互動動態感強",
    tag: "質感標竿",
  },
  {
    name: "NONFICTION",
    url: "nonfiction.kr",
    fullUrl: "https://nonfiction.kr",
    style: "乾淨俐落，米白 + 深棕色調",
    highlight: "文青質感，排版有呼吸感",
    tag: "呼吸感",
  },
];

const koreanJewelry = [
  {
    name: "HEI",
    url: "hei-jewelry.com",
    fullUrl: "https://hei-jewelry.com",
    style: "排版有創意，柔和色調，模特兒穿搭照多",
    highlight: "創新設計排版，可測試客戶接受度",
    tag: "創新設計",
  },
  {
    name: "DIDIER DUBOT",
    url: "didierdubot.com",
    fullUrl: "https://www.didierdubot.com",
    style: "精品珠寶路線，深色背景 + 金色點綴",
    highlight: "精品穩重風格，與 HEI 做風格對照",
    tag: "精品穩重",
  },
];

function BrandCard({
  brand,
  showTag = false,
}: {
  brand: {
    name: string;
    url: string;
    fullUrl: string;
    style: string;
    highlight?: string;
    tag?: string;
  };
  showTag?: boolean;
}) {
  return (
    <a
      href={brand.fullUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-6 border border-border-subtle hover:border-brand-gold transition-all duration-500 bg-bg-elevated"
    >
      <div className="flex items-start justify-between mb-3">
        <p className="text-brand-gold text-xs tracking-widest">{brand.url}</p>
        {showTag && brand.tag && (
          <span className="px-2 py-0.5 text-[10px] tracking-wider text-brand-gold border border-brand-gold/30">
            {brand.tag}
          </span>
        )}
      </div>
      <h3
        className="text-xl mb-2 group-hover:text-brand-gold transition-colors duration-300"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        {brand.name}
      </h3>
      <p className="text-text-secondary text-sm font-light mb-2">
        {brand.style}
      </p>
      {brand.highlight && (
        <p className="text-brand-earth text-sm">{brand.highlight}</p>
      )}
    </a>
  );
}

export default function MarketSection() {
  const [activeTab, setActiveTab] = useState("taiwan");

  return (
    <SlideLayout>
        {/* Header */}
        <AnimatedElement delay={0.1}>
          <p className="section-label mb-3">Market Reference</p>
        </AnimatedElement>
        <AnimatedElement delay={0.2}>
          <h1
            className="text-4xl md:text-5xl font-light leading-tight mb-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            市場參考
          </h1>
        </AnimatedElement>
        <AnimatedElement delay={0.3}>
          <p className="text-text-secondary text-lg font-light max-w-2xl mb-10">
            從台灣品牌到韓系品牌，了解不同設計風格帶來的品牌印象差異。
          </p>
        </AnimatedElement>

        {/* Tabs */}
        <AnimatedElement delay={0.4}>
          <div className="flex gap-1 mb-10 border-b border-border-subtle">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-6 py-3 text-sm tracking-wide transition-colors duration-300 ${
                  activeTab === tab.id
                    ? "text-brand-gold"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="market-tab"
                    className="absolute bottom-0 left-0 right-0 h-px bg-brand-gold"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
            ))}
          </div>
        </AnimatedElement>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          {activeTab === "taiwan" && (
            <motion.div
              key="taiwan"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {taiwanBrands.map((brand, i) => (
                  <BrandCard key={i} brand={brand} />
                ))}
              </div>
              <div className="p-6 border-l-2 border-brand-gold/30 bg-bg-secondary">
                <p className="text-text-secondary text-sm font-light leading-relaxed">
                  台灣品牌網站的風格偏同質化 — 設計乾淨但少了獨特性。
                  <span className="text-brand-earth">
                    這是目前市場的基準線。
                  </span>
                </p>
              </div>
            </motion.div>
          )}

          {activeTab === "korean-skincare" && (
            <motion.div
              key="korean-skincare"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {koreanSkincare.map((brand, i) => (
                  <BrandCard key={i} brand={brand} showTag />
                ))}
              </div>
              <div className="p-6 border-l-2 border-brand-gold/30 bg-bg-secondary">
                <p className="text-text-secondary text-sm font-light leading-relaxed">
                  TAMBURINS 示範了什麼叫「呼吸感」 — 大量留白讓產品像藝術品。
                  <br />
                  <span className="text-brand-earth">
                    這種設計自由度，是套版做不到的。
                  </span>
                </p>
              </div>
            </motion.div>
          )}

          {activeTab === "korean-jewelry" && (
            <motion.div
              key="korean-jewelry"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {koreanJewelry.map((brand, i) => (
                  <BrandCard key={i} brand={brand} showTag />
                ))}
              </div>
              <div className="p-6 border-l-2 border-brand-gold/30 bg-bg-secondary">
                <p className="text-text-secondary text-sm font-light leading-relaxed">
                  HEI 偏創新，DIDIER DUBOT 偏精品穩重。
                  <br />
                  <span className="text-brand-earth">
                    兩家搭配展示，可以測出客戶的風格偏好方向。
                  </span>
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="h-16" />
    </SlideLayout>
  );
}
