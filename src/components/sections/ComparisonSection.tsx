"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedElement from "../AnimatedElement";
import SlideLayout from "../SlideLayout";

const coreComparison = [
  {
    item: "視覺設計",
    template: "固定模板，可換顏色和圖片",
    custom: "完全依品牌調性設計，獨一無二",
  },
  {
    item: "品牌辨識度",
    template: "容易跟其他品牌撞版",
    custom: "從配色到排版都是品牌專屬",
  },
  {
    item: "功能彈性",
    template: "平台提供什麼就用什麼",
    custom: "需要什麼功能就做什麼功能",
  },
  {
    item: "設計自由度",
    template: "受限於模板結構",
    custom: "想要什麼風格就做什麼風格",
  },
  {
    item: "使用體驗",
    template: "平台統一的操作流程",
    custom: "可針對客群優化購物動線",
  },
];

const longTermComparison = [
  {
    item: "初期費用",
    template: "較低（月費制，幾千元起）",
    custom: "較高（一次性開發費用）",
  },
  {
    item: "長期費用",
    template: "月費持續累積，加購另計",
    custom: "一次開發，後續僅主機費",
  },
  {
    item: "資料所有權",
    template: "資料在平台上，搬家困難",
    custom: "資料完全屬於你",
  },
  {
    item: "擴充性",
    template: "受限於平台規劃",
    custom: "未來要加什麼都可以",
  },
  {
    item: "SEO 掌控",
    template: "受限於平台架構",
    custom: "完整掌控，有利搜尋排名",
  },
];

export default function ComparisonSection() {
  const [showLongTerm, setShowLongTerm] = useState(false);
  const data = showLongTerm ? longTermComparison : coreComparison;

  return (
    <SlideLayout>
        {/* Header */}
        <AnimatedElement delay={0.1}>
          <p className="section-label mb-3">Comparison</p>
        </AnimatedElement>
        <AnimatedElement delay={0.2}>
          <h1
            className="text-4xl md:text-5xl font-light leading-tight mb-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            套版 <span className="text-brand-gold">vs</span> 客製化
          </h1>
        </AnimatedElement>
        <AnimatedElement delay={0.3}>
          <p className="text-text-secondary text-lg font-light max-w-2xl mb-4">
            就像買衣服 — 套版是成衣，客製化是量身訂做。
            <br />
            不是誰比較好，而是哪個更適合你的品牌。
          </p>
        </AnimatedElement>

        {/* Toggle */}
        <AnimatedElement delay={0.35}>
          <div className="flex gap-4 mb-10">
            <button
              onClick={() => setShowLongTerm(false)}
              className={`px-5 py-2 text-sm tracking-wide border transition-all duration-300 ${
                !showLongTerm
                  ? "border-brand-gold text-brand-gold bg-brand-gold/5"
                  : "border-border-subtle text-text-secondary hover:border-border-strong"
              }`}
            >
              核心差異
            </button>
            <button
              onClick={() => setShowLongTerm(true)}
              className={`px-5 py-2 text-sm tracking-wide border transition-all duration-300 ${
                showLongTerm
                  ? "border-brand-gold text-brand-gold bg-brand-gold/5"
                  : "border-border-subtle text-text-secondary hover:border-border-strong"
              }`}
            >
              長期經營
            </button>
          </div>
        </AnimatedElement>

        {/* Comparison table */}
        <AnimatedElement delay={0.4}>
          <div className="overflow-hidden border border-border-subtle mb-10">
            {/* Table header */}
            <div className="grid grid-cols-3 bg-bg-secondary border-b border-border-subtle">
              <div className="p-4 text-sm text-text-muted tracking-wide">
                比較項目
              </div>
              <div className="p-4 text-sm text-text-muted tracking-wide text-center">
                套版方案
              </div>
              <div className="p-4 text-sm text-brand-gold tracking-wide text-center">
                客製化
              </div>
            </div>

            {/* Table rows */}
            {data.map((row, i) => (
              <motion.div
                key={`${showLongTerm}-${i}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                className={`grid grid-cols-3 ${
                  i < data.length - 1
                    ? "border-b border-border-subtle"
                    : ""
                } hover:bg-bg-secondary/50 transition-colors duration-300`}
              >
                <div className="p-4 text-sm font-medium">{row.item}</div>
                <div className="p-4 text-sm text-text-secondary font-light text-center">
                  {row.template}
                </div>
                <div className="p-4 text-sm text-text-primary text-center">
                  {row.custom}
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedElement>

        {/* Cost reference */}
        <AnimatedElement delay={0.5}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="p-6 border border-border-subtle">
              <p className="text-text-muted text-xs tracking-widest mb-3">
                套版方案 3 年參考
              </p>
              <p
                className="text-2xl text-text-secondary mb-2"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                NT$ 72,000 ~ 180,000
              </p>
              <p className="text-text-muted text-xs">
                月費 2,000~5,000 x 36 個月，進階功能另計
              </p>
            </div>
            <div className="p-6 border border-brand-gold/30 bg-brand-gold/3">
              <p className="text-brand-gold text-xs tracking-widest mb-3">
                客製化方案
              </p>
              <p
                className="text-2xl text-text-primary mb-2"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                一次性投資
              </p>
              <p className="text-text-secondary text-xs">
                依功能規模報價，後續僅主機費 3,000~6,000/年
              </p>
            </div>
          </div>
        </AnimatedElement>

        {/* Key message */}
        <AnimatedElement delay={0.6}>
          <div className="p-6 border-l-2 border-brand-gold/30 bg-bg-secondary">
            <p className="text-text-secondary text-sm font-light leading-relaxed">
              重視品牌形象、想要獨特設計風格、有長期經營打算 —
              <br />
              <span className="text-brand-earth text-base">
                客製化能給你最大的設計自由度和長期彈性。
              </span>
            </p>
          </div>
        </AnimatedElement>

        <div className="h-16" />
    </SlideLayout>
  );
}
