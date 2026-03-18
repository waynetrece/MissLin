"use client";

import { ComponentType } from "react";
import { motion } from "framer-motion";
import {
  CenterSlide,
  ContentSlide,
  DenseSlide,
  SplitSlide,
  FadeIn,
  Label,
  Heading,
  Subtext,
  GoldLine,
  GoldLineCentered,
} from "./Slide";

export const navSections = [
  { id: "about", label: "關於馬亞" },
  { id: "portfolio", label: "作品案例" },
  { id: "market", label: "市場參考" },
  { id: "comparison", label: "套版 vs 客製" },
  { id: "architecture", label: "網站架構" },
  { id: "features", label: "平台功能" },
];

// ==========================================
// SLIDE COMPONENTS
// ==========================================

function AboutHero() {
  return (
    <CenterSlide>
      <FadeIn>
        <Label>About iWare</Label>
      </FadeIn>
      <FadeIn delay={0.15}>
        <Heading size="large">
          <span style={{ color: "#9A8866" }}>馬亞科技</span>
        </Heading>
      </FadeIn>
      <FadeIn delay={0.3}>
        <GoldLineCentered />
      </FadeIn>
      <FadeIn delay={0.45}>
        <p style={{ fontSize: 22, color: "#2C2C2C", fontWeight: 300, lineHeight: 2 }}>
          自 1996 年成立以來，專注客製化網站設計與開發
          <br />
          我們相信好的網站，來自深入理解每個品牌的故事
        </p>
      </FadeIn>
      <FadeIn delay={0.6}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 48,
            marginTop: 48,
          }}
        >
          {[
            { n: "30+", l: "年經驗", sub: "Since 1996" },
            { n: "6,000", l: "家客戶", sub: "Clients" },
            { n: "32", l: "位團隊", sub: "Team Members" },
            { n: "3", l: "處據點", sub: "Offices" },
          ].map((s, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: 42,
                  color: "#9A8866",
                  fontWeight: 300,
                }}
              >
                {s.n}
              </p>
              <p style={{ fontSize: 14, color: "#2C2C2C", marginBottom: 2 }}>
                {s.l}
              </p>
              <p style={{ fontSize: 12, color: "#444444", letterSpacing: "0.05em" }}>
                {s.sub}
              </p>
            </div>
          ))}
        </div>
      </FadeIn>
    </CenterSlide>
  );
}

// ===== About Slide 2: Design Philosophy =====
function AboutPhilosophy() {
  return (
    <ContentSlide>
      <FadeIn>
        <Label>Design Philosophy</Label>
      </FadeIn>
      <FadeIn delay={0.1}>
        <Heading size="medium">聆聽、溝通、觀察、設計</Heading>
      </FadeIn>
      <FadeIn delay={0.15}>
        <p style={{ fontSize: 18, color: "#2C2C2C", fontWeight: 300, marginBottom: 40 }}>
          每個專案都從理解你的品牌開始，不套公式、不走捷徑
        </p>
      </FadeIn>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
        {[
          { step: "01", title: "聆聽", desc: "深入了解品牌核心與需求", icon: "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" },
          { step: "02", title: "溝通", desc: "確認目標、釐清方向", icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" },
          { step: "03", title: "觀察", desc: "研究市場趨勢與競品", icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" },
          { step: "04", title: "設計", desc: "打造獨一無二的品牌網站", icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" },
        ].map((item, i) => (
          <FadeIn key={i} delay={0.25 + i * 0.1}>
            <div
              style={{
                position: "relative",
                padding: 28,
                background: "linear-gradient(135deg, #FFFFFF 0%, #F8F7F4 50%, #FFFFFF 100%)",
                border: "1px solid #D8D6D0", borderRadius: 10,
                boxShadow: "0 4px 12px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.9)",
                transition: "all 0.4s ease",
                cursor: "default",
                overflow: "hidden",
                height: "100%",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#9A8866";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(154,136,102,0.18), inset 0 1px 0 rgba(255,255,255,0.9)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#D8D6D0";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.9)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "50%", background: "linear-gradient(180deg, rgba(255,255,255,0.5) 0%, transparent 100%)", pointerEvents: "none" }} />
              <div style={{
                width: 44, height: 44, borderRadius: "50%",
                background: "radial-gradient(circle, rgba(154,136,102,0.15) 0%, rgba(154,136,102,0.03) 70%, transparent 100%)",
                display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16,
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#9A8866" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d={item.icon} />
                </svg>
              </div>
              <p style={{ color: "#9A8866", fontSize: 18, fontWeight: 600, letterSpacing: "0.1em", marginBottom: 10, position: "relative" }}>
                {item.step}
              </p>
              <p style={{ fontFamily: "var(--font-serif)", fontSize: 28, marginBottom: 10, position: "relative" }}>
                {item.title}
              </p>
              <p style={{ color: "#2C2C2C", fontSize: 15, fontWeight: 300, position: "relative" }}>
                {item.desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </ContentSlide>
  );
}

// ===== About Slide 3: Team + Credentials =====
function AboutTeam() {
  return (
    <ContentSlide>
      <FadeIn>
        <Label>Professional Team</Label>
      </FadeIn>
      <FadeIn delay={0.1}>
        <Heading size="medium">專業團隊</Heading>
      </FadeIn>
      <FadeIn delay={0.15}>
        <p style={{ fontSize: 18, color: "#2C2C2C", fontWeight: 300, marginBottom: 36 }}>
          六大部門分工協作，從設計到上線一條龍服務
        </p>
      </FadeIn>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
        {[
          { name: "業務部", desc: "需求訪談、專案管理", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" },
          { name: "設計部", desc: "視覺設計、UI/UX 規劃", icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" },
          { name: "程式部", desc: "前後端開發、系統整合", icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" },
          { name: "系統部", desc: "主機管理、資安防護", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
          { name: "行銷部", desc: "SEO 優化、數位行銷", icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" },
          { name: "客服部", desc: "售後服務、技術支援", icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" },
        ].map((dept, i) => (
          <FadeIn key={i} delay={0.2 + i * 0.08}>
            <div style={{
              position: "relative",
              padding: "22px 24px",
              borderLeft: "3px solid #9A8866", borderRadius: "0 10px 10px 0",
              background: "linear-gradient(135deg, #FFFFFF 0%, #F9F8F5 50%, #FFFFFF 100%)",
              boxShadow: "0 3px 12px rgba(0,0,0,0.07), inset 0 1px 0 rgba(255,255,255,0.8)",
              overflow: "hidden",
              transition: "all 0.3s ease",
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(154,136,102,0.14), inset 0 1px 0 rgba(255,255,255,0.8)";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 3px 12px rgba(0,0,0,0.07), inset 0 1px 0 rgba(255,255,255,0.8)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "45%", background: "linear-gradient(180deg, rgba(255,255,255,0.6) 0%, transparent 100%)", pointerEvents: "none" }} />
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9A8866" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d={dept.icon} />
                </svg>
                <p style={{ fontSize: 17, fontWeight: 600 }}>{dept.name}</p>
              </div>
              <p style={{ fontSize: 15, color: "#444444", fontWeight: 300 }}>{dept.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Credentials */}
      <FadeIn delay={0.7}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 36 }}>
          {[
            "ISO 27001:2022 資安認證",
            "30 年品牌歷史",
            "6,000+ 企業客戶",
            "台北 / 台中 / 台南",
            "政府機關 / 醫療 / 學術合作",
            "自建機房 24/7 監控",
          ].map((t, i) => (
            <span
              key={i}
              style={{
                padding: "10px 20px",
                background: "#FFFFFF",
                border: "1px solid #D8D8D4",
                borderRadius: 6,
                boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
                fontSize: 14,
                color: "#2C2C2C",
                fontWeight: 400,
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </FadeIn>
    </ContentSlide>
  );
}

function PortfolioGrid() {
  const items = [
    {
      name: "大和酵素", url: "yamatoem.com.tw", fullUrl: "https://www.yamatoem.com.tw",
      type: "保健食品", style: "日式極簡，米白 + 自然色調",
      features: ["卡片式排版", "電商功能完整", "品牌形象鮮明"],
      screenshot: "/screenshots/yamatoem.jpg",
    },
    {
      name: "桂冠食品", url: "laurel.com.tw", fullUrl: "https://www.laurel.com.tw",
      type: "冷凍食品 / 線上商城", style: "清爽現代，白底 + 高品質產品照",
      features: ["食譜內容整合", "線上購物", "品牌活動專區"],
      screenshot: "/screenshots/laurel.jpg",
    },
    {
      name: "寵愛女人", url: "lovetowoman.com", fullUrl: "https://www.lovetowoman.com",
      type: "精品二手交易", style: "白底 + 紫色系，分類極細",
      features: ["直購 + 競標雙模式", "精品鑑定", "會員系統"],
      screenshot: "/screenshots/lovetowoman.jpg",
    },
    {
      name: "荃贏全美", url: "allwealth.iware.com.tw", fullUrl: "https://allwealth.iware.com.tw/html/",
      type: "保健食品", style: "白底清爽，強調信任感",
      features: ["數字動畫", "顧客見證", "產品線完整"],
      screenshot: "/screenshots/allwealth.jpg",
    },
  ];
  return (
    <DenseSlide>
      <FadeIn>
        <Label>Portfolio</Label>
      </FadeIn>
      <FadeIn delay={0.1}>
        <Heading size="medium">作品案例</Heading>
      </FadeIn>
      <FadeIn delay={0.15}>
        <p style={{ fontSize: 18, color: "#2C2C2C", fontWeight: 300, marginBottom: 24 }}>
          每個作品都是根據客戶的品牌定位量身打造，風格完全依客戶的想法調整
        </p>
      </FadeIn>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 20,
        }}
      >
        {items.map((item, i) => (
          <FadeIn key={i} delay={0.2 + i * 0.08}>
            <a
              href={item.fullUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                border: "1px solid #ECECEA",
                background: "#FFFFFF",
                transition: "border-color 0.5s",
                textDecoration: "none",
                color: "inherit",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#9A8866")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#ECECEA")}
            >
              {item.screenshot && (
                <img
                  src={item.screenshot}
                  alt={item.name}
                  style={{ width: "100%", height: 140, objectFit: "cover", objectPosition: "top", display: "block" }}
                />
              )}
              <div style={{ padding: "16px 24px 20px" }}>
                <p style={{ color: "#9A8866", fontSize: 12, letterSpacing: "0.1em", marginBottom: 8 }}>
                  {item.url}
                </p>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: 24, marginBottom: 4 }}>
                  {item.name}
                </p>
                <p style={{ color: "#444444", fontSize: 13, marginBottom: 6 }}>{item.type}</p>
                <p style={{ color: "#2C2C2C", fontSize: 14, fontWeight: 300, marginBottom: 10 }}>{item.style}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {item.features.map((f, j) => (
                    <span key={j} style={{ padding: "4px 10px", fontSize: 12, color: "#2C2C2C", border: "1px solid #ECECEA" }}>
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          </FadeIn>
        ))}
      </div>
      <FadeIn delay={0.6}>
        <p
          style={{
            marginTop: 24,
            padding: "14px 20px",
            borderLeft: "2px solid rgba(154,136,102,0.3)",
            background: "#F5F5F0",
            fontSize: 15,
            color: "#2C2C2C",
            fontWeight: 300,
          }}
        >
          設計風格配合客戶品牌調性與接受度 —{" "}
          <span style={{ color: "#8B7355" }}>
            客製化的核心價值在於風格完全依客戶的想法調整
          </span>
        </p>
      </FadeIn>
    </DenseSlide>
  );
}

function MarketTaiwan() {
  return (
    <SplitSlide
      left={
        <>
          <FadeIn>
            <Label>Market Reference</Label>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Heading size="medium">台灣品牌</Heading>
          </FadeIn>
          <FadeIn delay={0.2}>
            <GoldLine />
          </FadeIn>
          <FadeIn delay={0.3}>
            <Subtext>
              先讓你看看台灣目前品牌購物網站常見的風格
            </Subtext>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p
              style={{
                marginTop: 32,
                padding: "16px 24px",
                borderLeft: "2px solid rgba(154,136,102,0.3)",
                background: "#F5F5F0",
                fontSize: 15,
                color: "#8B7355",
                fontWeight: 300,
                lineHeight: 1.8,
              }}
            >
              台灣品牌網站偏同質化 — 設計乾淨但少了獨特性。
              <br />
              這是目前市場的基準線。
            </p>
          </FadeIn>
        </>
      }
      right={
        <FadeIn delay={0.2}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { name: "綠藤生機", url: "greenvines.com.tw", fullUrl: "https://www.greenvines.com.tw", desc: "綠白色調，強調成分透明，內容行銷做得好", screenshot: "/screenshots/greenvines.jpg" },
              { name: "茶籽堂", url: "chatzutang.com", fullUrl: "https://www.chatzutang.com", desc: "東方美學，插畫風格獨特，品牌故事頁有質感", screenshot: "/screenshots/chatzutang.jpg" },
              { name: "vacanza", url: "vacanza.com.tw", fullUrl: "https://www.vacanza.com.tw", desc: "粉嫩色調，商品分類清楚，購物流程完整", screenshot: "/screenshots/vacanza.jpg" },
            ].map((b, i) => (
              <FadeIn key={i} delay={0.3 + i * 0.1}>
                <a
                  href={b.fullUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "block",
                    border: "1px solid #ECECEA",
                    background: "#FFFFFF",
                    textDecoration: "none",
                    color: "inherit",
                    transition: "border-color 0.5s",
                    overflow: "hidden",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#9A8866")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#ECECEA")}
                >
                  {b.screenshot && (
                    <img src={b.screenshot} alt={b.name} style={{ width: "100%", height: 100, objectFit: "cover", objectPosition: "top", display: "block" }} />
                  )}
                  <div style={{ padding: b.screenshot ? "10px 16px 14px" : "16px 20px" }}>
                    <p style={{ color: "#9A8866", fontSize: 12, letterSpacing: "0.1em", marginBottom: 6 }}>
                      {b.url}
                    </p>
                    <p style={{ fontFamily: "var(--font-serif)", fontSize: 18, marginBottom: 4 }}>
                      {b.name}
                    </p>
                    <p style={{ fontSize: 13, color: "#2C2C2C", fontWeight: 300 }}>
                      {b.desc}
                    </p>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      }
    />
  );
}

function MarketKoreanSkincare() {
  return (
    <SplitSlide
      left={
        <>
          <FadeIn>
            <Label>Market Reference</Label>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Heading size="medium">韓系保養品牌</Heading>
          </FadeIn>
          <FadeIn delay={0.2}>
            <GoldLine />
          </FadeIn>
          <FadeIn delay={0.3}>
            <Subtext>
              如果你想要的是這種感覺，客製化就能做到
            </Subtext>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p
              style={{
                marginTop: 32,
                padding: "16px 24px",
                borderLeft: "2px solid rgba(154,136,102,0.3)",
                background: "#F5F5F0",
                fontSize: 15,
                color: "#8B7355",
                fontWeight: 300,
                lineHeight: 1.8,
              }}
            >
              TAMBURINS 示範了什麼叫「呼吸感」— 大量留白讓產品像藝術品。
              <br />
              這種設計自由度，是套版做不到的。
            </p>
          </FadeIn>
        </>
      }
      right={
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <FadeIn delay={0.2}>
            <a href="https://www.tamburins.com" target="_blank" rel="noopener noreferrer"
              style={{ display: "block", border: "1px solid #ECECEA", background: "#FFFFFF", textDecoration: "none", color: "inherit", transition: "border-color 0.5s", overflow: "hidden" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#9A8866")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#ECECEA")}
            >
              <img src="/screenshots/tamburins.jpg" alt="TAMBURINS" style={{ width: "100%", height: 120, objectFit: "cover", objectPosition: "top", display: "block" }} />
              <div style={{ padding: "12px 16px 16px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                  <p style={{ color: "#9A8866", fontSize: 12, letterSpacing: "0.1em" }}>tamburins.com</p>
                  <span style={{ fontSize: 11, color: "#9A8866", padding: "3px 8px", border: "1px solid rgba(154,136,102,0.3)" }}>
                    質感標竿
                  </span>
                </div>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: 22, marginBottom: 4 }}>TAMBURINS</p>
                <p style={{ fontSize: 13, color: "#2C2C2C", fontWeight: 300 }}>
                  極簡藝術風，大量留白，產品攝影像藝術品
                </p>
              </div>
            </a>
          </FadeIn>
          <FadeIn delay={0.35}>
            <a href="https://nonfiction.kr" target="_blank" rel="noopener noreferrer"
              style={{ display: "block", border: "1px solid #ECECEA", background: "#FFFFFF", textDecoration: "none", color: "inherit", transition: "border-color 0.5s", overflow: "hidden" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#9A8866")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#ECECEA")}
            >
              <img src="/screenshots/nonfiction.jpg" alt="NONFICTION" style={{ width: "100%", height: 120, objectFit: "cover", objectPosition: "top", display: "block" }} />
              <div style={{ padding: "12px 16px 16px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                  <p style={{ color: "#9A8866", fontSize: 12, letterSpacing: "0.1em" }}>nonfiction.kr</p>
                  <span style={{ fontSize: 11, color: "#9A8866", padding: "3px 8px", border: "1px solid rgba(154,136,102,0.3)" }}>
                    呼吸感
                  </span>
                </div>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: 22, marginBottom: 4 }}>NONFICTION</p>
                <p style={{ fontSize: 13, color: "#2C2C2C", fontWeight: 300 }}>
                  乾淨俐落，米白 + 深棕色調，文青質感
                </p>
              </div>
            </a>
          </FadeIn>
        </div>
      }
    />
  );
}

function MarketKoreanJewelry() {
  return (
    <SplitSlide
      left={
        <>
          <FadeIn>
            <Label>Market Reference</Label>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Heading size="medium">韓系飾品品牌</Heading>
          </FadeIn>
          <FadeIn delay={0.2}>
            <GoldLine />
          </FadeIn>
          <FadeIn delay={0.3}>
            <Subtext>
              你想要什麼風格就能做什麼風格
            </Subtext>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p
              style={{
                marginTop: 32,
                padding: "16px 24px",
                borderLeft: "2px solid rgba(154,136,102,0.3)",
                background: "#F5F5F0",
                fontSize: 15,
                color: "#8B7355",
                fontWeight: 300,
                lineHeight: 1.8,
              }}
            >
              HEI 偏創新，DIDIER DUBOT 偏精品穩重。
              <br />
              兩家搭配展示，可以測出你的風格偏好方向。
            </p>
          </FadeIn>
        </>
      }
      right={
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <FadeIn delay={0.2}>
            <a href="https://heii.co.kr" target="_blank" rel="noopener noreferrer"
              style={{ display: "block", border: "1px solid #ECECEA", background: "#FFFFFF", textDecoration: "none", color: "inherit", transition: "border-color 0.5s", overflow: "hidden" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#9A8866")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#ECECEA")}
            >
              <div style={{ width: "100%", height: 140, overflow: "hidden" }}>
                <img src="/screenshots/hei-jewelry.jpg" alt="HEI" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
              </div>
              <div style={{ padding: "14px 20px 16px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                  <p style={{ color: "#9A8866", fontSize: 12, letterSpacing: "0.1em" }}>heii.co.kr</p>
                  <span style={{ fontSize: 11, color: "#9A8866", padding: "3px 8px", border: "1px solid rgba(154,136,102,0.3)" }}>
                    創新設計
                  </span>
                </div>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: 22, marginBottom: 4 }}>HEI</p>
                <p style={{ fontSize: 13, color: "#2C2C2C", fontWeight: 300, marginBottom: 4 }}>
                  排版有創意，柔和色調，模特兒穿搭照多
                </p>
                <p style={{ fontSize: 13, color: "#8B7355" }}>創新設計排版，可測試客戶接受度</p>
              </div>
            </a>
          </FadeIn>
          <FadeIn delay={0.35}>
            <a href="https://www.didierdubot.com" target="_blank" rel="noopener noreferrer"
              style={{ display: "block", border: "1px solid #ECECEA", background: "#FFFFFF", textDecoration: "none", color: "inherit", transition: "border-color 0.5s", overflow: "hidden" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#9A8866")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#ECECEA")}
            >
              <div style={{ width: "100%", height: 140, overflow: "hidden" }}>
                <img src="/screenshots/didierdubot.jpg" alt="DIDIER DUBOT" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
              </div>
              <div style={{ padding: "14px 20px 16px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                  <p style={{ color: "#9A8866", fontSize: 12, letterSpacing: "0.1em" }}>didierdubot.com</p>
                  <span style={{ fontSize: 11, color: "#9A8866", padding: "3px 8px", border: "1px solid rgba(154,136,102,0.3)" }}>
                    精品穩重
                  </span>
                </div>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: 22, marginBottom: 4 }}>DIDIER DUBOT</p>
                <p style={{ fontSize: 13, color: "#2C2C2C", fontWeight: 300, marginBottom: 4 }}>
                  精品珠寶路線，深色背景 + 金色點綴
                </p>
                <p style={{ fontSize: 13, color: "#8B7355" }}>精品穩重風格，與 HEI 做風格對照</p>
              </div>
            </a>
          </FadeIn>
        </div>
      }
    />
  );
}

function ComparisonSlide() {
  const rows = [
    { item: "視覺設計", t: "固定模板，可換顏色和圖片", c: "完全依品牌調性設計，獨一無二" },
    { item: "品牌辨識度", t: "容易跟其他品牌撞版", c: "從配色到排版都是品牌專屬" },
    { item: "功能彈性", t: "平台提供什麼就用什麼", c: "需要什麼功能就做什麼功能" },
    { item: "設計自由度", t: "受限於模板結構", c: "想要什麼風格就做什麼風格" },
    { item: "使用體驗", t: "平台統一的操作流程", c: "可針對客群優化購物動線" },
    { item: "資料所有權", t: "資料存在平台，搬家成本高", c: "資料完全屬於你，隨時可遷移" },
    { item: "SEO 掌控", t: "受限平台架構，優化空間有限", c: "完整掌控 URL 結構與 meta 標籤" },
    { item: "技術自主性", t: "依賴平台更新與存續", c: "獨立運作，不受平台政策影響" },
  ];
  return (
    <ContentSlide>
      <FadeIn>
        <Label>Comparison</Label>
      </FadeIn>
      <FadeIn delay={0.1}>
        <Heading size="medium">
          套版 <span style={{ color: "#9A8866" }}>vs</span> 客製化
        </Heading>
      </FadeIn>
      <FadeIn delay={0.2}>
        <div style={{ borderRadius: 8, overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
          {/* Header */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "150px 1fr 1fr",
              background: "#2C2C2C",
            }}
          >
            <div style={{ padding: "14px 24px", fontSize: 14, color: "#FFFFFF", letterSpacing: "0.05em", fontWeight: 500 }}>比較項目</div>
            <div style={{ padding: "14px 24px", fontSize: 14, color: "#FFFFFF", textAlign: "center", letterSpacing: "0.05em", fontWeight: 500 }}>套版方案</div>
            <div style={{ padding: "14px 24px", fontSize: 14, color: "#E8D5A8", textAlign: "center", letterSpacing: "0.05em", fontWeight: 600 }}>客製化</div>
          </div>
          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "150px 1fr 1fr",
                borderBottom: i < rows.length - 1 ? "1px solid #ECECEA" : "none",
                background: i % 2 === 0 ? "#FFFFFF" : "#FAFAF8",
              }}
            >
              <div style={{ padding: "14px 24px", fontSize: 14, fontWeight: 600, color: "#2C2C2C", display: "flex", alignItems: "center" }}>{row.item}</div>
              <div style={{ padding: "14px 24px", fontSize: 14, color: "#666666", fontWeight: 300, textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center" }}>{row.t}</div>
              <div style={{ padding: "14px 24px", fontSize: 14, color: "#2C2C2C", fontWeight: 400, textAlign: "center", background: i % 2 === 0 ? "rgba(154,136,102,0.06)" : "rgba(154,136,102,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>{row.c}</div>
            </div>
          ))}
        </div>
      </FadeIn>
    </ContentSlide>
  );
}

// SVG icon paths for architecture modules
const archIcons: Record<string, string> = {
  home: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  book: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  cube: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
  cart: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z",
  user: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  chat: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
};

function ArchitectureSlide() {
  const modules = [
    { icon: "home", name: "首頁", items: ["主視覺 Banner", "精選商品", "品牌理念區", "分類入口"] },
    { icon: "book", name: "品牌故事", items: ["品牌理念", "創辦人故事", "產品堅持"] },
    { icon: "cube", name: "商品系統", items: ["商品分類頁", "商品列表頁", "商品詳細頁", "篩選 + 排序"] },
    { icon: "cart", name: "購物流程", items: ["購物車", "結帳頁", "金流 + 物流", "訂單完成"] },
    { icon: "user", name: "會員中心", items: ["註冊 / 登入", "訂單查詢", "收藏清單", "常用地址"] },
    { icon: "chat", name: "內容客服", items: ["最新消息", "FAQ", "聯絡我們", "社群連結"] },
  ];
  return (
    <DenseSlide>
      <FadeIn>
        <Label>Architecture</Label>
      </FadeIn>
      <FadeIn delay={0.1}>
        <Heading size="medium">網站架構規劃</Heading>
      </FadeIn>
      <FadeIn delay={0.15}>
        <p style={{ fontSize: 16, color: "#2C2C2C", fontWeight: 300, marginBottom: 24 }}>
          針對飾品 / 保養品質感品牌的購物網站，整理常見架構。實際功能依需求調整。
        </p>
      </FadeIn>

      {/* Root Node */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        style={{ textAlign: "center" }}
      >
        <div
          style={{
            display: "inline-block",
            padding: "14px 48px",
            background: "linear-gradient(135deg, #9A8866 0%, #B5A07A 100%)",
            color: "#FFFFFF",
            fontFamily: "var(--font-serif)",
            fontSize: 18,
            letterSpacing: "0.08em",
            borderRadius: 6,
            boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
          }}
        >
          購物網站
        </div>
      </motion.div>

      {/* Animated connection lines */}
      <div style={{ position: "relative", height: 32 }}>
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.3, delay: 0.6 }}
          style={{
            position: "absolute",
            left: "50%",
            top: 0,
            width: 2,
            height: "100%",
            background: "linear-gradient(180deg, #9A8866, #C4B48A)",
            transform: "translateX(-1px)",
            transformOrigin: "top",
          }}
        />
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          style={{
            position: "absolute",
            left: "8.33%",
            right: "8.33%",
            bottom: 0,
            height: 2,
            background: "linear-gradient(90deg, #C4B48A, #9A8866, #C4B48A)",
            transformOrigin: "center",
          }}
        />
      </div>

      {/* Module columns — staggered entry */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 8 }}>
        {modules.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 + i * 0.12 }}
            style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
          >
            {/* Animated vertical connector */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.2, delay: 0.9 + i * 0.1 }}
              style={{ width: 2, height: 16, background: "linear-gradient(180deg, #C4B48A, #9A8866)", transformOrigin: "top" }}
            />

            {/* Module header — glossy card with icon glow */}
            <div
              style={{
                position: "relative",
                width: "100%",
                padding: "14px 6px",
                background: "linear-gradient(135deg, #FFFFFF 0%, #F8F7F4 50%, #FFFFFF 100%)",
                border: "1px solid #C4B48A",
                borderRadius: "6px 6px 0 0",
                textAlign: "center",
                boxShadow: "0 2px 8px rgba(154,136,102,0.12), inset 0 1px 0 rgba(255,255,255,0.9)",
                overflow: "hidden",
                cursor: "default",
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(154,136,102,0.2), inset 0 1px 0 rgba(255,255,255,0.9)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 2px 8px rgba(154,136,102,0.12), inset 0 1px 0 rgba(255,255,255,0.9)";
              }}
            >
              {/* Shimmer overlay */}
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: "50%",
                background: "linear-gradient(180deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 100%)",
                pointerEvents: "none",
              }} />
              {/* Icon with gold glow */}
              <div style={{
                width: 36, height: 36, borderRadius: "50%",
                background: "radial-gradient(circle, rgba(154,136,102,0.15) 0%, rgba(154,136,102,0.03) 70%, transparent 100%)",
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 6px",
              }}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#9A8866"
                  strokeWidth="1.5"
                >
                  <path d={archIcons[m.icon]} />
                </svg>
              </div>
              <p style={{ fontFamily: "var(--font-serif)", fontSize: 15, position: "relative" }}>{m.name}</p>
            </div>

            {/* Sub-items — glossy */}
            <div
              style={{
                width: "100%",
                background: "linear-gradient(180deg, #FFFFFF 0%, #FAFAF8 100%)",
                border: "1px solid #E8E6E0",
                borderTop: "none",
                borderRadius: "0 0 6px 6px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                overflow: "hidden",
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.04)";
              }}
            >
              {m.items.map((item, j) => (
                <div
                  key={j}
                  style={{
                    padding: "7px 8px",
                    fontSize: 13,
                    color: "#2C2C2C",
                    fontWeight: 300,
                    textAlign: "center",
                    borderBottom: j < m.items.length - 1 ? "1px solid #F0EEEA" : "none",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(154,136,102,0.06)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2.0 }}
        style={{ marginTop: 20, fontSize: 13, color: "#444444" }}
      >
        * 以上是通用架構，實際功能依客戶需求和預算調整
      </motion.p>
    </DenseSlide>
  );
}

function ArchitectureKeyPages() {
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
  return (
    <ContentSlide>
      <FadeIn>
        <Label>Key Pages</Label>
      </FadeIn>
      <FadeIn delay={0.1}>
        <Heading size="medium">關鍵頁面設計</Heading>
      </FadeIn>
      <FadeIn delay={0.15}>
        <p style={{ fontSize: 16, color: "#2C2C2C", fontWeight: 300, marginBottom: 32 }}>
          購物網站的轉換率，取決於這兩個頁面的體驗設計
        </p>
      </FadeIn>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}>
        {keyPages.map((page, i) => (
          <FadeIn key={i} delay={0.25 + i * 0.1}>
            <div style={{
              position: "relative", padding: "32px 28px",
              background: "linear-gradient(135deg, #FFFFFF 0%, #F8F7F4 50%, #FFFFFF 100%)",
              border: "1px solid #D8D6D0", borderRadius: 12,
              boxShadow: "0 4px 16px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.9)",
              overflow: "hidden", transition: "transform 0.3s, box-shadow 0.3s",
            }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 30px rgba(154,136,102,0.18)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.9)"; }}
            >
              {/* Glossy overlay */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "50%", background: "linear-gradient(180deg, rgba(255,255,255,0.5) 0%, transparent 100%)", pointerEvents: "none" }} />
              {/* Gold top accent line */}
              <div style={{ position: "absolute", top: 0, left: 24, right: 24, height: 2, background: "linear-gradient(90deg, transparent, #9A8866, transparent)" }} />
              <div style={{ position: "relative", display: "flex", alignItems: "center", gap: 12, marginBottom: 22 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: "50%",
                  background: "linear-gradient(135deg, rgba(154,136,102,0.12), rgba(154,136,102,0.04))",
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9A8866" strokeWidth="1.5">
                    <path d={i === 0 ? "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" : "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"} />
                  </svg>
                </div>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: 24 }}>{page.title}</h3>
                <span style={{ fontSize: 11, color: "#9A8866", padding: "4px 12px", background: "rgba(154,136,102,0.08)", border: "1px solid rgba(154,136,102,0.2)", borderRadius: 20, letterSpacing: "0.05em" }}>
                  {page.subtitle}
                </span>
              </div>
              <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 14 }}>
                {page.features.map((feature, j) => (
                  <div key={j} style={{ display: "flex", alignItems: "start", gap: 12 }}>
                    <div style={{ width: 20, height: 20, borderRadius: "50%", background: "rgba(154,136,102,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                      <div style={{ width: 6, height: 6, borderRadius: 3, background: "#9A8866" }} />
                    </div>
                    <p style={{ fontSize: 15, color: "#2C2C2C", fontWeight: 300, lineHeight: 1.5 }}>{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </ContentSlide>
  );
}

// ===== Features Slide 1: Project Flow =====
function FeaturesFlow() {
  const steps = [
    { step: "01", title: "瞭解需求", desc: "深入了解品牌定位、目標客群、商品特性與競爭分析", icon: "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" },
    { step: "02", title: "規劃確認", desc: "網站架構規劃、功能清單確認、報價簽約", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" },
    { step: "03", title: "設計製作", desc: "UI 視覺設計、前後端程式開發、響應式切版", icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" },
    { step: "04", title: "測試驗收", desc: "功能測試、內容上稿、教育訓練、正式上線", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
  ];
  return (
    <ContentSlide>
      <FadeIn>
        <Label>Project Flow</Label>
      </FadeIn>
      <FadeIn delay={0.1}>
        <Heading size="medium">專案合作流程</Heading>
      </FadeIn>
      <FadeIn delay={0.15}>
        <p style={{ fontSize: 18, color: "#2C2C2C", fontWeight: 300, marginBottom: 40 }}>
          從需求到上線，每個階段都有清楚的交付與確認點
        </p>
      </FadeIn>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
        {steps.map((item, i) => (
          <FadeIn key={i} delay={0.25 + i * 0.1}>
            <div style={{
              position: "relative", padding: "28px 24px",
              background: "linear-gradient(135deg, #FFFFFF 0%, #F8F7F4 50%, #FFFFFF 100%)",
              border: "1px solid #D8D6D0", borderRadius: 10,
              boxShadow: "0 4px 14px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.9)",
              overflow: "hidden", transition: "transform 0.3s, box-shadow 0.3s", height: "100%",
            }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 10px 28px rgba(154,136,102,0.18)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 14px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.9)"; }}
            >
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "50%", background: "linear-gradient(180deg, rgba(255,255,255,0.5) 0%, transparent 100%)", pointerEvents: "none" }} />
              <div style={{
                width: 44, height: 44, borderRadius: "50%",
                background: "radial-gradient(circle, rgba(154,136,102,0.15) 0%, rgba(154,136,102,0.03) 70%, transparent 100%)",
                display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16,
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#9A8866" strokeWidth="1.5"><path d={item.icon} /></svg>
              </div>
              <p style={{ color: "#9A8866", fontSize: 18, fontWeight: 600, letterSpacing: "0.1em", marginBottom: 8, position: "relative" }}>{item.step}</p>
              <p style={{ fontFamily: "var(--font-serif)", fontSize: 20, marginBottom: 8, position: "relative" }}>{item.title}</p>
              <p style={{ color: "#444444", fontSize: 14, fontWeight: 300, lineHeight: 1.6, position: "relative" }}>{item.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </ContentSlide>
  );
}

// ===== Features Slide 2: SEO + Security =====
function FeaturesTech() {
  const categories = [
    { title: "SEO Optimization", subtitle: "搜尋引擎優化", icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z", items: [
      { name: "每頁獨立 Meta", desc: "Title / Keywords / Description 可個別設定" },
      { name: "自訂 URL 結構", desc: "三層結構：類別 / 子類 / 商品" },
      { name: "Canonical URL", desc: "防重複內容，集中權重" },
      { name: "GA + Search Console", desc: "Google 分析工具完整整合" },
      { name: "FB 像素追蹤", desc: "再行銷廣告精準投放" },
    ]},
    { title: "Security", subtitle: "資安防護", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", items: [
      { name: "ISO 27001:2022", desc: "國際資安管理認證" },
      { name: "SSL 加密", desc: "全站 HTTPS 安全傳輸" },
      { name: "WAF 防火牆", desc: "網站應用程式防火牆" },
      { name: "每日自動備份", desc: "可快速還原，資料不遺失" },
      { name: "後台權限分級", desc: "依角色設定存取權限" },
    ]},
  ];
  return (
    <ContentSlide>
      <FadeIn>
        <Label>Platform</Label>
      </FadeIn>
      <FadeIn delay={0.1}>
        <Heading size="medium">技術與資安</Heading>
      </FadeIn>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginTop: 8 }}>
        {categories.map((cat, ci) => (
          <FadeIn key={ci} delay={0.2 + ci * 0.15}>
            <div style={{
              padding: "28px 28px",
              background: "linear-gradient(135deg, #FFFFFF 0%, #FAFAF8 100%)",
              border: "1px solid #E8E6E0", borderRadius: 12,
              boxShadow: "0 4px 16px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.8)",
              transition: "transform 0.3s, box-shadow 0.3s", height: "100%",
            }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 10px 28px rgba(154,136,102,0.12)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.8)"; }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 8 }}>
                <div style={{
                  width: 42, height: 42, borderRadius: 10,
                  background: "linear-gradient(135deg, rgba(154,136,102,0.15) 0%, rgba(154,136,102,0.04) 100%)",
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9A8866" strokeWidth="1.5"><path d={cat.icon} /></svg>
                </div>
                <div>
                  <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 20, fontWeight: 400 }}>{cat.title}</h2>
                  <p style={{ fontSize: 13, color: "#9A8866", fontWeight: 300 }}>{cat.subtitle}</p>
                </div>
              </div>
              <div style={{ width: "100%", height: 1, background: "linear-gradient(90deg, #D8D0C0, transparent)", margin: "14px 0 18px" }} />
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {cat.items.map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                    <div style={{ width: 6, height: 6, borderRadius: 3, background: "linear-gradient(135deg, #9A8866, #C4B48A)", flexShrink: 0, marginTop: 7 }} />
                    <div>
                      <p style={{ fontSize: 15, color: "#2C2C2C", fontWeight: 500, marginBottom: 2 }}>{item.name}</p>
                      <p style={{ fontSize: 13, color: "#666666", fontWeight: 300 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </ContentSlide>
  );
}

// ===== Features Slide 3: Project Management =====
function FeaturesService() {
  return (
    <ContentSlide>
      <FadeIn>
        <Label>Project Management</Label>
      </FadeIn>
      <FadeIn delay={0.1}>
        <Heading size="medium">專案管理</Heading>
      </FadeIn>
      <FadeIn delay={0.15}>
        <p style={{ fontSize: 18, color: "#2C2C2C", fontWeight: 300, marginBottom: 36 }}>
          使用 Notion 作為專案管理工具，每個階段都有透明的追蹤記錄
        </p>
      </FadeIn>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        {[
          { name: "Notion 進度追蹤", desc: "透明的專案管理，隨時掌握狀態", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" },
          { name: "標準流程", desc: "需求確認 → 設計 → 開發 → 驗收", icon: "M13 5l7 7-7 7M5 5l7 7-7 7" },
          { name: "設計稿校對", desc: "線上即時校對，減少來回溝通", icon: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" },
          { name: "溝通記錄", desc: "即時溝通與修改歷程完整保留", icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" },
        ].map((item, i) => (
          <FadeIn key={i} delay={0.25 + i * 0.1}>
            <div style={{
              padding: "28px 28px",
              background: "linear-gradient(135deg, #FFFFFF 0%, #FAFAF8 100%)",
              border: "1px solid #E8E6E0", borderRadius: 12,
              boxShadow: "0 4px 16px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.8)",
              transition: "transform 0.3s, box-shadow 0.3s", height: "100%",
            }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 10px 28px rgba(154,136,102,0.12)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.8)"; }}
            >
              <div style={{
                width: 44, height: 44, borderRadius: 10,
                background: "linear-gradient(135deg, rgba(154,136,102,0.15) 0%, rgba(154,136,102,0.04) 100%)",
                display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16,
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#9A8866" strokeWidth="1.5"><path d={item.icon} /></svg>
              </div>
              <p style={{ fontSize: 18, color: "#2C2C2C", fontWeight: 500, marginBottom: 6 }}>{item.name}</p>
              <p style={{ fontSize: 14, color: "#666666", fontWeight: 300, lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </ContentSlide>
  );
}

function ClosingSlide() {
  return (
    <CenterSlide dark>
      <FadeIn>
        <p style={{ fontSize: 14, letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "#C4A77D", marginBottom: 24 }}>
          Let&apos;s Create Together
        </p>
      </FadeIn>
      <FadeIn delay={0.15}>
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: 48,
            fontWeight: 300,
            lineHeight: 1.3,
            marginBottom: 24,
          }}
        >
          你想要什麼風格
          <br />
          <span style={{ color: "#9A8866" }}>我們就往那個方向做</span>
        </h1>
      </FadeIn>
      <FadeIn delay={0.3}>
        <div style={{ width: 64, height: 1, background: "#9A8866", margin: "32px auto" }} />
      </FadeIn>
      <FadeIn delay={0.45}>
        <p style={{ fontSize: 18, color: "rgba(255,255,255,0.6)", fontWeight: 300 }}>
          馬亞科技 iWare
        </p>
      </FadeIn>
    </CenterSlide>
  );
}

// ==========================================
// SLIDE REGISTRY
// ==========================================

export interface SlideConfig {
  section: string;
  component: ComponentType;
}

export const slides: SlideConfig[] = [
  { section: "about", component: AboutHero },
  { section: "about", component: AboutPhilosophy },
  { section: "about", component: AboutTeam },
  { section: "portfolio", component: PortfolioGrid },
  { section: "market", component: MarketTaiwan },
  { section: "market", component: MarketKoreanSkincare },
  { section: "market", component: MarketKoreanJewelry },
  { section: "comparison", component: ComparisonSlide },
  { section: "architecture", component: ArchitectureSlide },
  { section: "architecture", component: ArchitectureKeyPages },
  { section: "features", component: FeaturesFlow },
  { section: "features", component: FeaturesTech },
  { section: "features", component: FeaturesService },
  { section: "features", component: ClosingSlide },
];
