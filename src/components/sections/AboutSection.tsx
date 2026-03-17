"use client";

import AnimatedElement from "../AnimatedElement";
import SlideLayout from "../SlideLayout";

const stats = [
  { number: "28+", label: "年業界經驗", sublabel: "Since 1996" },
  { number: "6,000", label: "家合作客戶", sublabel: "Clients" },
  { number: "32", label: "位專業團隊", sublabel: "Team Members" },
  { number: "3", label: "大服務據點", sublabel: "Offices" },
];

const departments = [
  { name: "業務部", desc: "需求訪談、專案管理" },
  { name: "設計部", desc: "視覺設計、UI/UX 規劃" },
  { name: "程式部", desc: "前後端開發、系統整合" },
  { name: "系統部", desc: "主機管理、資安防護" },
  { name: "行銷部", desc: "SEO 優化、數位行銷" },
  { name: "客服部", desc: "售後服務、技術支援" },
];

const philosophy = [
  { step: "01", title: "聆聽", desc: "深入了解品牌核心與需求" },
  { step: "02", title: "溝通", desc: "確認目標、釐清方向" },
  { step: "03", title: "觀察", desc: "研究市場趨勢與競品" },
  { step: "04", title: "設計", desc: "打造獨一無二的品牌網站" },
];

export default function AboutSection() {
  return (
    <SlideLayout>
        {/* Header */}
        <AnimatedElement delay={0.1}>
          <p className="section-label mb-3">About iWare</p>
        </AnimatedElement>
        <AnimatedElement delay={0.2}>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            <span className="text-brand-gold">馬亞科技</span>
          </h1>
        </AnimatedElement>
        <AnimatedElement delay={0.3}>
          <p className="text-text-secondary text-lg md:text-xl font-light max-w-2xl mb-12">
            自 1996 年成立以來，專注於客製化網站設計與開發。
            <br />
            我們相信好的網站，來自深入理解每個品牌的故事。
          </p>
        </AnimatedElement>

        {/* Stats */}
        <AnimatedElement delay={0.4}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <p
                  className="text-3xl md:text-4xl text-brand-gold font-light mb-1"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {stat.number}
                </p>
                <p className="text-text-primary text-sm">{stat.label}</p>
                <p className="text-text-muted text-xs tracking-wider">
                  {stat.sublabel}
                </p>
              </div>
            ))}
          </div>
        </AnimatedElement>

        {/* Philosophy */}
        <AnimatedElement delay={0.5}>
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="gold-line-long" />
              <h2
                className="text-2xl font-light text-text-primary"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Design Philosophy
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {philosophy.map((item, i) => (
                <div
                  key={i}
                  className="group p-6 border border-border-subtle hover:border-brand-gold transition-all duration-500"
                >
                  <p className="text-brand-gold text-xs tracking-widest mb-3">
                    {item.step}
                  </p>
                  <p
                    className="text-xl mb-2"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {item.title}
                  </p>
                  <p className="text-text-secondary text-sm font-light">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedElement>

        {/* Departments */}
        <AnimatedElement delay={0.6}>
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="gold-line-long" />
              <h2
                className="text-2xl font-light text-text-primary"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Professional Team
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {departments.map((dept, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 border-l border-brand-gold/30 hover:border-brand-gold transition-colors duration-300"
                >
                  <div>
                    <p className="text-text-primary text-sm font-medium">
                      {dept.name}
                    </p>
                    <p className="text-text-muted text-xs">{dept.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedElement>

        {/* Credentials */}
        <AnimatedElement delay={0.7}>
          <div className="flex flex-wrap gap-6 items-center text-sm text-text-secondary">
            <div className="flex items-center gap-2 px-4 py-2 border border-border-subtle">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-brand-gold">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              ISO 27001:2022
            </div>
            <div className="flex items-center gap-2 px-4 py-2 border border-border-subtle">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-brand-gold">
                <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              台北 / 台中 / 台南
            </div>
            <div className="flex items-center gap-2 px-4 py-2 border border-border-subtle">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-brand-gold">
                <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              政府機關 / 醫療 / 學術合作
            </div>
          </div>
        </AnimatedElement>

        {/* Bottom spacer for slide indicators */}
        <div className="h-16" />
    </SlideLayout>
  );
}
