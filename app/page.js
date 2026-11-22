
"use client";

import { useEffect, useRef, useState } from "react";
import { Gowun_Dodum, Cormorant_Garamond, Inter } from "next/font/google";

const korean = Gowun_Dodum({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-korean",
});

const serif = Cormorant_Garamond({
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
});

const sans = Inter({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-sans",
});

const youtubeUrl =
  "https://www.youtube.com/@%EC%8B%9C%EC%95%A0%ED%8B%80%EB%A8%BC%EC%A0%80%EC%82%AC%EB%9E%91%EA%B5%90%ED%9A%8C";

const logoUrl =
  "https://static.wixstatic.com/media/ec098b_abbd8d72f55848bc8d7e42f54b04c291~mv2.png/v1/fill/w_774%2Ch_112%2Cal_c%2Cq_85%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/logo_001.png";

const familyUrl =
  "https://static.wixstatic.com/media/ec098b_c2d3faacba07405ebbce37ea05203d9b~mv2.jpeg/v1/crop/x_281%2Cy_131%2Cw_1569%2Ch_1176/fill/w_375%2Ch_281%2Cal_c%2Cq_80%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/%EA%B0%80%EC%A1%B1%EC%82%AC%EC%A7%84.jpeg";

const content = {
  en: {
    nav: ["About", "Mission", "Journey", "Worship", "Videos", "Pastor", "Visit"],
    heroEyebrow: "FIRST LOVE CHURCH · SEATTLE",
    heroTitle: "We love because\nHe first loved us.",
    heroSub: "1 JOHN 4:19",
    heroButton: "DISCOVER OUR CHURCH",
    introEyebrow: "WELCOME",
    introTitle: "A church rooted in His love.",
    introText:
      "First Love Church exists to share the love of Jesus Christ and serve the Korean community in the greater Seattle area.",
    missionEyebrow: "OUR HEART",
    missionTitle: "Growing together in the love of Christ.",
    missionText:
      "We seek to worship God, grow as disciples, love our neighbors, and share the Gospel with the world.",
    purposes: [
      {
        number: "01",
        title: "Worship",
        text: "Love God through worship in spirit and truth.",
      },
      {
        number: "02",
        title: "Discipleship",
        text: "Grow as disciples of Jesus Christ through training in the Word.",
      },
      {
        number: "03",
        title: "Community",
        text: "Love our neighbors by proclaiming the Gospel to the world.",
      },
      {
        number: "04",
        title: "Church Planting",
        text: "Expand God's kingdom by planting another healthy church.",
      },
    ],
    journeyEyebrow: "A JOURNEY THROUGH SCRIPTURE",
    journeyTitle: "A promise that carries us.",
    journeyDescription:
      "Through every storm, God's promises remain. Follow the journey of Noah's Ark and remember the faithfulness of God.",
    journeySteps: [
      {
        title: "The Storm",
        text: "Even when the world feels uncertain, God is with us.",
      },
      {
        title: "The Journey",
        text: "Noah trusted God's direction and continued forward in faith.",
      },
      {
        title: "A New Beginning",
        text: "The dove returned with a sign of hope and new life.",
      },
      {
        title: "The Promise",
        text: "The rainbow reminds us of God's everlasting promise.",
      },
    ],
    journeyVerse: "Your word is a lamp to my feet and a light to my path.",
    journeyReference: "PSALM 119:105",
    worshipEyebrow: "JOIN US",
    worshipTitle: "Worship with us.",
    worshipText:
      "We would love to welcome you to our Sunday worship service.",
    worshipTime: "Sunday Worship",
    worshipHour: "11:30 AM",
    worshipPlace: "Covington, Washington",
    youtubeEyebrow: "STAY CONNECTED",
    youtubeTitle: "Watch and worship with us.",
    youtubeText:
      "Find our church services, sermons, and other videos on our YouTube channel. Stay connected and worship with us wherever you are.",
    youtubeButton: "VISIT OUR YOUTUBE CHANNEL",
    pastorEyebrow: "OUR PASTOR",
    pastorTitle: "Pastor Donghyeok Kim",
    pastorText:
      "Born into a family of faith, Pastor Donghyeok Kim encountered Jesus personally during middle school. In obedience to God's calling, he pursued pastoral ministry and developed a vision for building healthy churches that grow God's Kingdom.",
    pastorText2:
      "After planting and serving a church in Cincinnati, Ohio, for four and a half years, he now serves the Seattle community through First Love Church.",
    pastorEducation: "EDUCATION & MINISTRY",
    pastorDetails: [
      "B.A. in Theology, Korea Baptist Theological University",
      "M.Div., Korea Baptist Theological Seminary",
      "M.A. in Missions, The Southern Baptist Theological Seminary",
      "Former Pastor, Dreaming Church, Cincinnati, Ohio",
      "Pastor, First Love Church, Seattle",
      "Staff Chaplain, Good Samaritan Hospital",
    ],
    familyCaption: "Pastor Kim and family",
    logoEyebrow: "OUR IDENTITY",
    logoTitle: "The meaning behind our logo.",
    logoText:
      "Each color represents an important part of our faith and the vision of First Love Church.",
    logoMeanings: [
      ["Blue", "The Sea of Mission"],
      ["Yellow", "The Kingdom of God"],
      ["Green", "Spiritual Growth of Believers"],
      ["Red", "The Precious Blood of Jesus"],
      ["The Cross", "The image of the ascending Cross of Jesus"],
    ],
    visitEyebrow: "COME VISIT",
    visitTitle: "There is a place for you here.",
    visitText:
      "Whether you are new to faith, visiting the area, or looking for a church family, we would love to meet you.",
    addressLabel: "ADDRESS",
    address: "18615 SE 272nd St., Covington, WA 98042",
    phoneLabel: "PHONE",
    emailLabel: "EMAIL",
    visitButton: "GET DIRECTIONS",
    footerLine: "We love because He first loved us.",
  },

  ko: {
    nav: ["교회소개", "목회비전", "말씀의 여정", "예배안내", "유튜브", "담임목사", "오시는 길"],
    heroEyebrow: "시애틀 먼저사랑교회",
    heroTitle: "우리가 사랑함은\n그가 먼저 우리를 사랑하셨음이라",
    heroSub: "요한일서 4:19",
    heroButton: "교회 알아보기",
    introEyebrow: "환영합니다",
    introTitle: "하나님의 사랑 위에 세워진 교회",
    introText:
      "먼저사랑 교회는 예수 그리스도의 사랑을 나누며 시애틀 지역의 한인들을 영적으로 섬기기 위해 세워진 교회입니다.",
    missionEyebrow: "우리의 마음",
    missionTitle: "그리스도의 사랑 안에서 함께 자라갑니다.",
    missionText:
      "하나님을 예배하고, 예수님의 제자로 성장하며, 이웃을 사랑하고, 세상에 복음을 전하는 교회가 되기를 소망합니다.",
    purposes: [
      {
        number: "01",
        title: "예배",
        text: "영과 진리로 하나님을 예배하며 사랑합니다.",
      },
      {
        number: "02",
        title: "제자훈련",
        text: "말씀 훈련을 통해 예수 그리스도의 제자로 성장합니다.",
      },
      {
        number: "03",
        title: "이웃사랑",
        text: "세상에 복음을 전하며 이웃을 사랑합니다.",
      },
      {
        number: "04",
        title: "교회개척",
        text: "건강한 교회를 세워 하나님의 나라를 확장합니다.",
      },
    ],
    journeyEyebrow: "말씀으로 떠나는 여정",
    journeyTitle: "우리를 인도하시는 하나님의 약속",
    journeyDescription:
      "어떤 폭풍 속에서도 하나님의 약속은 변하지 않습니다. 노아의 방주 이야기를 통해 하나님의 신실하심을 기억합니다.",
    journeySteps: [
      {
        title: "폭풍 속에서",
        text: "세상이 불확실하게 느껴질 때에도 하나님은 우리와 함께하십니다.",
      },
      {
        title: "믿음의 여정",
        text: "노아는 하나님의 말씀을 믿고 믿음으로 나아갔습니다.",
      },
      {
        title: "새로운 시작",
        text: "비둘기는 희망과 새로운 생명의 소식을 전했습니다.",
      },
      {
        title: "하나님의 약속",
        text: "무지개는 하나님의 영원한 약속을 기억하게 합니다.",
      },
    ],
    journeyVerse: "주의 말씀은 내 발에 등이요 내 길에 빛이니이다.",
    journeyReference: "시편 119:105",
    worshipEyebrow: "함께 예배해요",
    worshipTitle: "예배의 자리로 초대합니다.",
    worshipText:
      "먼저사랑 교회의 주일예배에 여러분을 초대합니다.",
    worshipTime: "주일예배",
    worshipHour: "오전 11:30",
    worshipPlace: "워싱턴주 코빙턴",
    youtubeEyebrow: "함께 연결되어요",
    youtubeTitle: "온라인에서도 함께 예배해요.",
    youtubeText:
      "교회의 예배와 설교, 다양한 영상을 유튜브 채널에서 만나보세요. 어디에 있든 함께 예배하며 소통할 수 있습니다.",
    youtubeButton: "유튜브 채널 방문하기",
    pastorEyebrow: "담임목사",
    pastorTitle: "김동혁 목사",
    pastorText:
      "신앙의 가정에서 태어나 중학교 시절 예수님을 인격적으로 만났으며, 하나님의 부르심에 순종하여 목회의 길을 걷게 되었습니다. 사역 가운데 성도들과 신앙과 교회의 방향에 대해 고민하며 건강한 교회를 세워 하나님 나라를 확장하고자 하는 비전을 품게 되었습니다.",
    pastorText2:
      "미국 오하이오주 신시내티에서 4년 6개월 동안 교회를 개척하고 섬겼으며, 현재는 시애틀 지역에서 먼저사랑 교회를 세워가고 있습니다.",
    pastorEducation: "학력 및 사역",
    pastorDetails: [
      "침례신학대학교 신학과 졸업",
      "침례신학대학원 신학전공 (M.Div.)",
      "미국 남침례신학대학원 선교학 전공 (M.A.)",
      "전) 신시내티 꿈꾸는 교회 목사 (개척)",
      "현) 시애틀 먼저사랑 교회 목사",
      "현) Good Samaritan Hospital Staff Chaplain",
    ],
    familyCaption: "김동혁 목사 가정",
    logoEyebrow: "교회의 정체성",
    logoTitle: "로고에 담긴 의미",
    logoText:
      "먼저사랑 교회의 로고에는 우리의 믿음과 교회의 비전이 담겨 있습니다.",
    logoMeanings: [
      ["파란색", "선교의 바다"],
      ["노란색", "하나님의 나라"],
      ["초록색", "성도들의 영적 성장"],
      ["빨간색", "예수님의 보혈"],
      ["십자가", "예수님의 올라가는 십자가 형상"],
    ],
    visitEyebrow: "오시는 길",
    visitTitle: "여러분을 기다립니다.",
    visitText:
      "신앙을 처음 시작하시는 분도, 새로운 교회를 찾으시는 분도 모두 환영합니다. 함께 예배하고 교제하기를 소망합니다.",
    addressLabel: "주소",
    address: "18615 SE 272nd St., Covington, WA 98042",
    phoneLabel: "전화",
    emailLabel: "이메일",
    visitButton: "길찾기",
    footerLine: "우리가 사랑함은 그가 먼저 우리를 사랑하셨음이라.",
  },
};

function Reveal({ children, className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("visible");
          observer.unobserve(element);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

function ArkIllustration({ progress }) {
  const p = Math.max(0, Math.min(1, progress));
  const arkX = 5 + p * 90;
  const arkY = Math.sin(p * Math.PI * 5) * 5;
  const doveOpacity = p > 0.47 ? Math.min(1, (p - 0.47) * 5) : 0;
  const rainbowOpacity = p > 0.72 ? Math.min(1, (p - 0.72) * 5) : 0;
  const rainOpacity = Math.max(0, 1 - p * 2.1);
  const sunOpacity = Math.max(0, (p - 0.55) * 2.2);

  return (
    <svg
      className="ark-svg"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="skyGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7e9aa3" />
          <stop offset="55%" stopColor="#b9c8c3" />
          <stop offset="100%" stopColor="#e5d9c2" />
        </linearGradient>

        <linearGradient id="waterGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#718f91" />
          <stop offset="100%" stopColor="#314e5b" />
        </linearGradient>

        <linearGradient id="arkWood" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#a77d55" />
          <stop offset="100%" stopColor="#694c39" />
        </linearGradient>

        <filter id="softGlow">
          <feGaussianBlur stdDeviation="24" />
        </filter>
      </defs>

      {/* Sky */}
      <rect width="1440" height="900" fill="url(#skyGradient)" />

      {/* Sunlight */}
      <circle
        cx="1110"
        cy="235"
        r="130"
        fill="#fff0c9"
        opacity={sunOpacity * 0.55}
        filter="url(#softGlow)"
      />
      <circle
        cx="1110"
        cy="235"
        r="64"
        fill="#fff0c9"
        opacity={sunOpacity * 0.7}
      />

      {/* Clouds */}
      <g fill="#edf0e8" opacity="0.72">
        <path d="M-80 250 Q-40 180 25 220 Q55 130 140 180 Q210 125 270 205 Q340 190 365 255Z" />
        <path d="M850 185 Q900 110 975 150 Q1030 75 1105 140 Q1180 100 1235 175 Q1310 145 1370 210Z" />
        <path d="M430 300 Q475 235 530 270 Q580 200 655 250 Q720 210 765 290Z" />
      </g>

      {/* Rain */}
      <g opacity={rainOpacity * 0.48} stroke="#e9f0ee" strokeWidth="2">
        {Array.from({ length: 55 }).map((_, i) => (
          <line
            key={i}
            x1={(i * 97) % 1440}
            y1={(i * 53) % 480}
            x2={(i * 97) % 1440 - 18}
            y2={(i * 53) % 480 + 65}
          />
        ))}
      </g>

      {/* Rainbow */}
      <g
        opacity={rainbowOpacity * 0.7}
        fill="none"
        strokeWidth="13"
        strokeLinecap="round"
      >
        <path d="M420 470 A300 300 0 0 1 1020 470" stroke="#d77d72" />
        <path d="M445 470 A275 275 0 0 1 995 470" stroke="#e6bd79" />
        <path d="M470 470 A250 250 0 0 1 970 470" stroke="#9eae8b" />
        <path d="M495 470 A225 225 0 0 1 945 470" stroke="#8caab0" />
      </g>

      {/* Distant hills */}
      <path
        d="M0 500 Q180 390 350 490 Q520 385 720 485 Q930 360 1120 485 Q1290 410 1440 490 V900 H0Z"
        fill="#a9b6a3"
        opacity="0.52"
      />

      {/* Ocean */}
      <path
        d="M0 535 Q180 500 360 540 T720 535 T1080 540 T1440 530 V900 H0Z"
        fill="url(#waterGradient)"
      />

      {/* Water wave details */}
      <g fill="none" stroke="#d2dfd8" strokeWidth="3" opacity="0.32">
        {Array.from({ length: 12 }).map((_, i) => (
          <path
            key={i}
            d={`M${i * 140 - 50} ${610 + (i % 3) * 55} q70 -18 140 0`}
          />
        ))}
      </g>

      <g fill="none" stroke="#c3d5ce" strokeWidth="2" opacity="0.25">
        {Array.from({ length: 10 }).map((_, i) => (
          <path
            key={i}
            d={`M${i * 170} ${740 + (i % 2) * 42} q85 -12 170 0`}
          />
        ))}
      </g>

      {/* Ark */}
      <g
        transform={`translate(${arkX * 8 - 60} ${530 + arkY})`}
        style={{ transition: "transform 0.12s linear" }}
      >
        {/* Hull */}
        <path
          d="M-175 15 L175 15 L140 90 Q0 130 -140 90Z"
          fill="url(#arkWood)"
          stroke="#533d30"
          strokeWidth="5"
        />

        {/* Hull details */}
        <path
          d="M-135 54 Q0 78 135 54"
          stroke="#d1a477"
          strokeWidth="5"
          fill="none"
          opacity="0.7"
        />

        {/* Main body */}
        <path
          d="M-125 12 L-125 -80 L125 -80 L125 12Z"
          fill="#a77d55"
          stroke="#634a36"
          strokeWidth="5"
        />

        {/* Roof */}
        <path
          d="M-145 -80 L-105 -125 L105 -125 L145 -80Z"
          fill="#76543b"
          stroke="#533d30"
          strokeWidth="5"
        />

        {/* Windows */}
        {[-80, -28, 28, 80].map((x) => (
          <rect
            key={x}
            x={x - 12}
            y="-65"
            width="24"
            height="27"
            rx="8"
            fill="#e7c99a"
            stroke="#684b35"
            strokeWidth="4"
          />
        ))}

        {/* Door */}
        <rect
          x="-25"
          y="-8"
          width="50"
          height="20"
          rx="4"
          fill="#634832"
        />

        {/* Roof window */}
        <rect
          x="-20"
          y="-112"
          width="40"
          height="20"
          rx="5"
          fill="#d9bd91"
        />
      </g>

      {/* Dove and olive branch */}
      <g
        transform={`translate(${350 + p * 570} ${280 - Math.sin(p * Math.PI * 2) * 45})`}
        opacity={doveOpacity}
        style={{ transition: "opacity 0.5s ease" }}
      >
        <path
          d="M0 0 Q-35 -30 -55 -12 Q-35 -8 -22 8 Q-5 20 15 7 Q38 -5 55 8 Q35 -25 10 -18Z"
          fill="#f9f7ed"
          stroke="#a6aaa0"
          strokeWidth="3"
        />
        <path
          d="M-5 -2 Q-25 -48 -48 -40 Q-30 -22 -17 4"
          fill="#fffdf4"
          stroke="#a6aaa0"
          strokeWidth="2"
        />
        <path
          d="M15 4 Q38 -20 55 -8 Q39 -3 28 12"
          fill="#fffdf4"
          stroke="#a6aaa0"
          strokeWidth="2"
        />
        <path
          d="M40 10 Q65 5 78 -8"
          fill="none"
          stroke="#667d50"
          strokeWidth="3"
        />
        <ellipse cx="57" cy="1" rx="9" ry="4" fill="#829b67" transform="rotate(-25 57 1)" />
        <ellipse cx="69" cy="-6" rx="8" ry="4" fill="#829b67" transform="rotate(25 69 -6)" />
      </g>
    </svg>
  );
}

export default function Home() {
  const [language, setLanguage] = useState("ko");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [pageProgress, setPageProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(false);

  const journeyRef = useRef(null);
  const data = content[language];

  useEffect(() => {
    let hideTimeout;

    const updateScroll = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;

      const overall = scrollable > 0 ? window.scrollY / scrollable : 0;
      setPageProgress(overall);

      const section = journeyRef.current;

      if (section) {
        const rect = section.getBoundingClientRect();
        const sectionHeight = section.offsetHeight - window.innerHeight;
        const progress =
          sectionHeight > 0
            ? Math.max(0, Math.min(1, -rect.top / sectionHeight))
            : 0;

        setScrollProgress(progress);
      }

      setShowBubble(true);
      clearTimeout(hideTimeout);
      hideTimeout = setTimeout(() => setShowBubble(false), 1500);
    };

    window.addEventListener("scroll", updateScroll, { passive: true });
    updateScroll();

    return () => {
      window.removeEventListener("scroll", updateScroll);
      clearTimeout(hideTimeout);
    };
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const navIds = [
    "about",
    "mission",
    "journey",
    "worship",
    "youtube",
    "pastor",
    "visit",
  ];

  return (
    <main className={`${korean.variable} ${serif.variable} ${sans.variable}`}>
      {/* NAVIGATION */}
      <header className="navbar">
        <a className="brand" href="#home" onClick={() => setMenuOpen(false)}>
          <img src={logoUrl} alt="First Love Church logo" />
        </a>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {data.nav.map((item, index) => (
            <button
              key={item}
              onClick={() => scrollTo(navIds[index])}
              className="nav-link"
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            className="language-button"
            onClick={() => setLanguage(language === "ko" ? "en" : "ko")}
          >
            {language === "ko" ? "EN" : "한국어"}
          </button>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <Reveal>
            <p className="eyebrow light">{data.heroEyebrow}</p>
            <h1 className="hero-title">{data.heroTitle}</h1>
            <p className="hero-reference">{data.heroSub}</p>
            <button className="outline-button light-button" onClick={() => scrollTo("about")}>
              {data.heroButton} <span>↘</span>
            </button>
          </Reveal>
        </div>
        <div className="hero-bottom">
          <span>SEATTLE · WASHINGTON</span>
          <span>EST. FIRST LOVE CHURCH</span>
        </div>
      </section>

      {/* INTRO */}
      <section id="about" className="intro section-pad">
        <Reveal>
          <p className="eyebrow">{data.introEyebrow}</p>
          <h2 className="large-heading">{data.introTitle}</h2>
          <p className="intro-text">{data.introText}</p>
          <div className="small-rule" />
        </Reveal>
      </section>

      {/* MISSION */}
      <section id="mission" className="mission section-pad">
        <div className="mission-heading">
          <Reveal>
            <p className="eyebrow">{data.missionEyebrow}</p>
            <h2 className="section-heading">{data.missionTitle}</h2>
            <p className="body-text">{data.missionText}</p>
          </Reveal>
        </div>

        <div className="purpose-grid">
          {data.purposes.map((item) => (
            <Reveal key={item.number} className="purpose-card">
              <span className="purpose-number">{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* NOAH'S ARK JOURNEY */}
      <section id="journey" className="journey-section" ref={journeyRef}>
        <div className="journey-sticky">
          <div className="ark-background">
            <ArkIllustration progress={scrollProgress} />
            <div className="ark-background-shade" />
          </div>

          <div className="journey-heading">
            <p className="eyebrow light">{data.journeyEyebrow}</p>
            <h2>{data.journeyTitle}</h2>
            <p>{data.journeyDescription}</p>
          </div>

          <div className="journey-step">
            <span className="journey-step-number">
              0{Math.min(4, Math.floor(scrollProgress * 4) + 1)}
            </span>
            <h3>
              {data.journeySteps[Math.min(3, Math.floor(scrollProgress * 4))].title}
            </h3>
            <p>
              {data.journeySteps[Math.min(3, Math.floor(scrollProgress * 4))].text}
            </p>
          </div>

          <div className="journey-bottom">
            <p className="journey-verse">“{data.journeyVerse}”</p>
            <span>{data.journeyReference}</span>
          </div>

          <div className="journey-scroll">
            <span>SCROLL TO CONTINUE</span>
            <div className="scroll-line" />
          </div>
        </div>
      </section>

      {/* WORSHIP */}
      <section id="worship" className="worship section-pad">
        <Reveal>
          <p className="eyebrow">{data.worshipEyebrow}</p>
          <h2 className="section-heading">{data.worshipTitle}</h2>
          <p className="body-text">{data.worshipText}</p>

          <div className="worship-details">
            <div>
              <span className="detail-label">{data.worshipTime}</span>
              <h3>{data.worshipHour}</h3>
            </div>
            <div>
              <span className="detail-label">LOCATION</span>
              <h3>{data.worshipPlace}</h3>
            </div>
          </div>
        </Reveal>
      </section>

      {/* YOUTUBE */}
      <section id="youtube" className="youtube-section section-pad">
        <Reveal>
          <div className="youtube-mark">
            <span className="youtube-play">▶</span>
          </div>
          <p className="eyebrow">{data.youtubeEyebrow}</p>
          <h2 className="section-heading">{data.youtubeTitle}</h2>
          <p className="body-text youtube-description">{data.youtubeText}</p>

          <a
            className="youtube-button"
            href={youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="youtube-button-icon">▶</span>
            {data.youtubeButton}
            <span>↗</span>
          </a>
          <p className="youtube-channel">시애틀 먼저사랑교회</p>
        </Reveal>
      </section>

      {/* PASTOR */}
      <section id="pastor" className="pastor section-pad">
        <div className="pastor-layout">
          <Reveal className="pastor-photo-wrap">
            <img
              className="pastor-photo"
              src={familyUrl}
              alt={data.familyCaption}
            />
            <p className="photo-caption">{data.familyCaption}</p>
          </Reveal>

          <Reveal className="pastor-copy">
            <p className="eyebrow">{data.pastorEyebrow}</p>
            <h2 className="section-heading">{data.pastorTitle}</h2>
            <p className="body-text">{data.pastorText}</p>
            <p className="body-text">{data.pastorText2}</p>

            <h4 className="education-heading">{data.pastorEducation}</h4>
            <ul className="education-list">
              {data.pastorDetails.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* LOGO MEANING */}
      <section className="logo-section section-pad">
        <Reveal>
          <p className="eyebrow">{data.logoEyebrow}</p>
          <h2 className="section-heading">{data.logoTitle}</h2>
          <p className="body-text">{data.logoText}</p>

          <img className="meaning-logo" src={logoUrl} alt="First Love Church logo" />

          <div className="logo-meaning-grid">
            {data.logoMeanings.map(([name, meaning], index) => (
              <div className="logo-meaning" key={name}>
                <span className={`color-dot color-${index}`} />
                <div>
                  <h3>{name}</h3>
                  <p>{meaning}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* VISIT */}
      <section id="visit" className="visit section-pad">
        <Reveal>
          <p className="eyebrow light">{data.visitEyebrow}</p>
          <h2>{data.visitTitle}</h2>
          <p className="visit-description">{data.visitText}</p>

          <div className="contact-grid">
            <div>
              <span>{data.addressLabel}</span>
              <p>{data.address}</p>
            </div>
            <div>
              <span>{data.phoneLabel}</span>
              <a href="tel:2533650876">253-365-0876</a>
            </div>
            <div>
              <span>{data.emailLabel}</span>
              <a href="mailto:dkim015@gmail.com">dkim015@gmail.com</a>
            </div>
          </div>

          <a
            className="outline-button light-button directions-button"
            href="https://www.google.com/maps/search/?api=1&query=18615+SE+272nd+St+Covington+WA+98042"
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.visitButton} ↗
          </a>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <img src={logoUrl} alt="First Love Church" />
        <p>{data.footerLine}</p>
        <div className="footer-links">
          <a href={youtubeUrl} target="_blank" rel="noopener noreferrer">
            YOUTUBE ↗
          </a>
          <a href="mailto:dkim015@gmail.com">EMAIL ↗</a>
        </div>
        <span>© {new Date().getFullYear()} FIRST LOVE CHURCH</span>
      </footer>

      {/* FLOATING SCROLL INDICATOR */}
      <div
        className={`scroll-bubble ${showBubble ? "active" : ""}`}
        style={{ top: `${8 + pageProgress * 82}%` }}
      >
        <span />
      </div>

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
          scroll-padding-top: 90px;
        }

        body {
          margin: 0;
          background: #f8f6f0;
          color: #33332f;
          font-family: var(--font-sans), Arial, sans-serif;
        }

        main {
          overflow: clip;
        }

        button,
        a {
          -webkit-tap-highlight-color: transparent;
        }

        button {
          font: inherit;
        }

        .navbar {
          position: fixed;
          z-index: 100;
          top: 0;
          left: 0;
          width: 100%;
          height: 88px;
          padding: 0 6%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(248, 246, 240, 0.88);
          backdrop-filter: blur(18px);
          border-bottom: 1px solid rgba(80, 75, 60, 0.08);
        }

        .brand img {
          display: block;
          width: 150px;
          max-height: 45px;
          object-fit: contain;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .nav-link,
        .language-button,
        .menu-button {
          border: 0;
          background: none;
          color: #55534c;
          cursor: pointer;
        }

        .nav-link {
          font-size: 11px;
          letter-spacing: 0.06em;
          transition: color 0.25s;
        }

        .nav-link:hover {
          color: #a78b60;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .language-button {
          border: 1px solid #d6cbb9;
          padding: 9px 13px;
          border-radius: 30px;
          font-size: 10px;
          letter-spacing: 0.1em;
        }

        .menu-button {
          display: none;
          font-size: 23px;
        }

        .hero {
          min-height: 100svh;
          position: relative;
          display: flex;
          align-items: center;
          padding: 150px 10% 110px;
          color: #fffdf7;
          background:
            linear-gradient(110deg, rgba(28, 39, 41, 0.75), rgba(28, 39, 41, 0.18)),
            url("https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=2200&q=85")
              center / cover;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            0deg,
            rgba(20, 28, 29, 0.25),
            transparent 70%
          );
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 850px;
        }

        .eyebrow {
          margin: 0 0 25px;
          color: #9b8462;
          font-size: 10px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
        }

        .eyebrow.light {
          color: #f0dcb6;
        }

        .hero-title {
          white-space: pre-line;
          margin: 0;
          font-family: var(--font-serif), Georgia, serif;
          font-size: clamp(54px, 8vw, 108px);
          line-height: 0.99;
          font-weight: 400;
          letter-spacing: -0.045em;
        }

        main:has(.language-button) .hero-title,
        main:has(.language-button) .large-heading,
        main:has(.language-button) .section-heading,
        main:has(.language-button) .journey-heading h2,
        main:has(.language-button) .visit h2 {
          font-family: var(--font-serif), var(--font-korean), Georgia, serif;
        }

        main:has(.language-button) .intro,
        main:has(.language-button) .mission,
        main:has(.language-button) .journey-section,
        main:has(.language-button) .worship,
        main:has(.language-button) .youtube-section,
        main:has(.language-button) .pastor,
        main:has(.language-button) .logo-section,
        main:has(.language-button) .visit {
          font-family: var(--font-korean), var(--font-sans), sans-serif;
        }

        .hero-reference {
          margin: 35px 0;
          font-size: 11px;
          letter-spacing: 0.25em;
        }

        .outline-button {
          display: inline-flex;
          align-items: center;
          gap: 35px;
          padding: 16px 20px;
          border: 1px solid #c9b99e;
          text-decoration: none;
          font-size: 10px;
          letter-spacing: 0.13em;
          transition: background 0.3s, color 0.3s;
          cursor: pointer;
        }

        .light-button {
          color: #fffdf7;
          border-color: rgba(255, 255, 255, 0.65);
          background: transparent;
        }

        .light-button:hover {
          background: #fffdf7;
          color: #353a36;
        }

        .hero-bottom {
          position: absolute;
          bottom: 35px;
          left: 6%;
          right: 6%;
          display: flex;
          justify-content: space-between;
          color: rgba(255, 255, 255, 0.7);
          font-size: 9px;
          letter-spacing: 0.18em;
        }

        .section-pad {
          padding: 125px 10%;
        }

        .intro {
          text-align: center;
          background: #f8f6f0;
        }

        .large-heading {
          max-width: 800px;
          margin: 0 auto;
          font-size: clamp(38px, 5vw, 65px);
          font-weight: 400;
          line-height: 1.2;
          letter-spacing: -0.035em;
        }

        .intro-text {
          max-width: 570px;
          margin: 30px auto;
          color: #77746c;
          font-size: 14px;
          line-height: 2;
        }

        .small-rule {
          width: 42px;
          height: 1px;
          margin: 45px auto 0;
          background: #b9a27f;
        }

        .mission {
          background: #eeece4;
        }

        .mission-heading {
          max-width: 700px;
          margin: 0 auto 65px;
          text-align: center;
        }

        .section-heading {
          margin: 0 0 25px;
          font-size: clamp(37px, 5vw, 60px);
          line-height: 1.15;
          font-weight: 400;
          letter-spacing: -0.035em;
        }

        .body-text {
          color: #77746c;
          font-size: 13px;
          line-height: 2.1;
        }

        .purpose-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
        }

        .purpose-card {
          border-top: 1px solid #c8bda9;
          padding-top: 24px;
        }

        .purpose-number {
          color: #a48d6a;
          font-family: var(--font-serif), serif;
          font-size: 23px;
        }

        .purpose-card h3 {
          margin: 28px 0 12px;
          font-family: var(--font-serif), var(--font-korean), serif;
          font-size: 27px;
          font-weight: 500;
        }

        .purpose-card p {
          color: #77746c;
          font-size: 12px;
          line-height: 1.9;
        }

        /* FULL-SCREEN NOAH'S ARK JOURNEY */

        .journey-section {
          position: relative;
          height: 360vh;
          background: #8ca5a5;
          color: #fffdf7;
        }

        .journey-sticky {
          position: sticky;
          top: 0;
          height: 100svh;
          min-height: 650px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 110px 8% 75px;
          isolation: isolate;
        }

        .ark-background {
          position: absolute;
          inset: 0;
          z-index: -2;
          overflow: hidden;
        }

        .ark-svg {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .ark-background-shade {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(35, 48, 48, 0.38) 0%,
            rgba(35, 48, 48, 0.08) 48%,
            rgba(24, 44, 49, 0.45) 100%
          );
        }

        .journey-heading {
          position: relative;
          z-index: 2;
          width: min(720px, 100%);
          text-align: center;
          margin-top: -15px;
          text-shadow: 0 2px 22px rgba(30, 40, 38, 0.3);
        }

        .journey-heading h2 {
          margin: 0 0 20px;
          font-family: var(--font-serif), var(--font-korean), serif;
          font-size: clamp(42px, 6vw, 76px);
          line-height: 1.1;
          font-weight: 400;
        }

        .journey-heading p:last-child {
          max-width: 550px;
          margin: 0 auto;
          color: rgba(255, 255, 255, 0.9);
          font-size: 13px;
          line-height: 2;
        }

        .journey-step {
          position: absolute;
          z-index: 3;
          left: 10%;
          bottom: 18%;
          max-width: 330px;
          text-shadow: 0 2px 15px rgba(20, 35, 35, 0.45);
        }

        .journey-step-number {
          color: #f0dcb6;
          font-family: var(--font-serif), serif;
          font-size: 19px;
          letter-spacing: 0.15em;
        }

        .journey-step h3 {
          margin: 12px 0;
          font-family: var(--font-serif), var(--font-korean), serif;
          font-size: 38px;
          font-weight: 400;
        }

        .journey-step p {
          color: rgba(255, 255, 255, 0.92);
          font-size: 12px;
          line-height: 1.9;
        }

        .journey-bottom {
          position: absolute;
          z-index: 3;
          right: 9%;
          bottom: 9%;
          max-width: 380px;
          text-align: right;
          text-shadow: 0 2px 15px rgba(20, 35, 35, 0.45);
        }

        .journey-verse {
          font-family: var(--font-serif), var(--font-korean), serif;
          font-size: 22px;
          line-height: 1.5;
        }

        .journey-bottom span {
          color: #f0dcb6;
          font-size: 9px;
          letter-spacing: 0.2em;
        }

        .journey-scroll {
          position: absolute;
          z-index: 3;
          bottom: 35px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 12px;
          color: rgba(255, 255, 255, 0.75);
          font-size: 8px;
          letter-spacing: 0.2em;
        }

        .scroll-line {
          width: 35px;
          height: 1px;
          background: rgba(255, 255, 255, 0.8);
        }

        .worship {
          text-align: center;
          background: #f8f6f0;
        }

        .worship .body-text {
          max-width: 500px;
          margin: 0 auto;
        }

        .worship-details {
          max-width: 650px;
          margin: 65px auto 0;
          padding: 35px 0;
          border-top: 1px solid #d9d1c3;
          border-bottom: 1px solid #d9d1c3;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }

        .detail-label {
          color: #9b8462;
          font-size: 9px;
          letter-spacing: 0.2em;
        }

        .worship-details h3 {
          margin: 15px 0 0;
          font-family: var(--font-serif), var(--font-korean), serif;
          font-size: 27px;
          font-weight: 400;
        }

        /* YOUTUBE */

        .youtube-section {
          text-align: center;
          background: #eeece4;
        }

        .youtube-mark {
          width: 68px;
          height: 48px;
          margin: 0 auto 32px;
          border-radius: 13px;
          background: #d9534f;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 25px rgba(150, 65, 55, 0.16);
        }

        .youtube-play {
          color: white;
          font-size: 20px;
          margin-left: 3px;
        }

        .youtube-description {
          max-width: 510px;
          margin: 0 auto;
        }

        .youtube-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-top: 35px;
          padding: 17px 24px;
          color: #fffdf7;
          background: #b45a50;
          text-decoration: none;
          font-size: 10px;
          letter-spacing: 0.12em;
          transition: background 0.3s, transform 0.3s;
        }

        .youtube-button:hover {
          background: #8f463f;
          transform: translateY(-3px);
        }

        .youtube-button-icon {
          font-size: 12px;
        }

        .youtube-channel {
          margin-top: 18px;
          color: #8c877c;
          font-size: 11px;
        }

        /* PASTOR */

        .pastor {
          background: #f8f6f0;
        }

        .pastor-layout {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 9%;
          align-items: center;
        }

        .pastor-photo-wrap {
          margin: 0;
        }

        .pastor-photo {
          display: block;
          width: 100%;
          aspect-ratio: 4 / 5;
          object-fit: cover;
          object-position: center;
        }

        .photo-caption {
          color: #918b7f;
          font-size: 10px;
          margin-top: 14px;
          letter-spacing: 0.08em;
        }

        .pastor-copy .section-heading {
          font-size: clamp(37px, 4vw, 52px);
        }

        .education-heading {
          margin: 35px 0 15px;
          color: #9b8462;
          font-size: 9px;
          letter-spacing: 0.2em;
          font-weight: 500;
        }

        .education-list {
          padding-left: 16px;
          color: #77746c;
          font-size: 11px;
          line-height: 2.2;
        }

        /* LOGO MEANING */

        .logo-section {
          background: #eeece4;
          text-align: center;
        }

        .logo-section > div {
          max-width: 850px;
          margin: 0 auto;
        }

        .logo-section .body-text {
          max-width: 500px;
          margin: 0 auto;
        }

        .meaning-logo {
          display: block;
          width: min(400px, 80%);
          height: auto;
          margin: 55px auto;
          object-fit: contain;
        }

        .logo-meaning-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px 45px;
          text-align: left;
        }

        .logo-meaning {
          display: flex;
          align-items: center;
          gap: 16px;
          border-top: 1px solid #d3cbbb;
          padding-top: 18px;
        }

        .color-dot {
          flex: 0 0 13px;
          width: 13px;
          height: 13px;
          border-radius: 50%;
        }

        .color-0 {
          background: #456b91;
        }

        .color-1 {
          background: #d9b84f;
        }

        .color-2 {
          background: #77916b;
        }

        .color-3 {
          background: #a84f49;
        }

        .color-4 {
          background: #88765d;
        }

        .logo-meaning h3 {
          margin: 0 0 5px;
          font-family: var(--font-serif), var(--font-korean), serif;
          font-size: 19px;
          font-weight: 500;
        }

        .logo-meaning p {
          margin: 0;
          color: #77746c;
          font-size: 11px;
        }

        /* VISIT */

        .visit {
          background: #333d3c;
          color: #fffdf7;
          text-align: center;
        }

        .visit h2 {
          max-width: 750px;
          margin: 0 auto;
          font-family: var(--font-serif), var(--font-korean), serif;
          font-size: clamp(42px, 6vw, 70px);
          font-weight: 400;
          line-height: 1.15;
        }

        .visit-description {
          max-width: 500px;
          margin: 25px auto 55px;
          color: rgba(255, 255, 255, 0.72);
          font-size: 13px;
          line-height: 2;
        }

        .contact-grid {
          max-width: 850px;
          margin: 0 auto 45px;
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr;
          gap: 30px;
          text-align: left;
        }

        .contact-grid div {
          border-top: 1px solid rgba(255, 255, 255, 0.25);
          padding-top: 18px;
        }

        .contact-grid span {
          color: #d4bd98;
          font-size: 9px;
          letter-spacing: 0.17em;
        }

        .contact-grid p,
        .contact-grid a {
          display: block;
          margin: 12px 0 0;
          color: #fffdf7;
          font-size: 12px;
          line-height: 1.8;
          text-decoration: none;
        }

        .directions-button {
          margin-top: 10px;
        }

        /* FOOTER */

        .footer {
          padding: 55px 8%;
          background: #f0eee7;
          text-align: center;
        }

        .footer img {
          width: 155px;
          max-height: 45px;
          object-fit: contain;
        }

        .footer p {
          margin: 20px 0;
          color: #77746c;
          font-family: var(--font-serif), var(--font-korean), serif;
          font-size: 20px;
        }

        .footer-links {
          display: flex;
          justify-content: center;
          gap: 25px;
          margin: 25px 0;
        }

        .footer-links a {
          color: #8b785c;
          font-size: 9px;
          letter-spacing: 0.15em;
          text-decoration: none;
        }

        .footer > span {
          color: #aaa397;
          font-size: 8px;
          letter-spacing: 0.15em;
        }

        /* SCROLL BUBBLE */

        .scroll-bubble {
          position: fixed;
          z-index: 120;
          right: 22px;
          width: 13px;
          height: 13px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.95);
          box-shadow:
            0 0 8px rgba(255, 255, 255, 0.95),
            0 0 22px rgba(255, 255, 255, 0.75),
            0 0 38px rgba(255, 255, 255, 0.45);
          opacity: 0;
          transform: scale(0.7);
          transition: opacity 0.5s, transform 0.4s;
          pointer-events: none;
        }

        .scroll-bubble.active {
          opacity: 1;
          transform: scale(1);
        }

        .scroll-bubble span {
          position: absolute;
          inset: -5px;
          border: 1px solid rgba(255, 255, 255, 0.55);
          border-radius: 50%;
          animation: bubblePulse 2s ease-out infinite;
        }

        @keyframes bubblePulse {
          0% {
            transform: scale(0.7);
            opacity: 0.8;
          }
          100% {
            transform: scale(2.1);
            opacity: 0;
          }
        }

        /* REVEAL ANIMATIONS */

        .reveal {
          opacity: 0;
          transform: translateY(35px);
          transition:
            opacity 0.9s ease,
            transform 0.9s cubic-bezier(0.2, 0.7, 0.2, 1);
        }

        .reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            scroll-behavior: auto !important;
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }

          .reveal {
            opacity: 1;
            transform: none;
          }
        }

        /* RESPONSIVE */

        @media (max-width: 1000px) {
          .navbar {
            padding: 0 4%;
          }

          .nav-links {
            gap: 13px;
          }

          .nav-link {
            font-size: 10px;
          }

          .purpose-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .pastor-layout {
            gap: 6%;
          }
        }

        @media (max-width: 760px) {
          .navbar {
            height: 75px;
          }

          .brand img {
            width: 125px;
          }

          .menu-button {
            display: block;
          }

          .nav-links {
            position: absolute;
            top: 75px;
            left: 0;
            right: 0;
            display: none;
            flex-direction: column;
            align-items: stretch;
            gap: 0;
            padding: 12px 6% 22px;
            background: rgba(248, 246, 240, 0.98);
            border-bottom: 1px solid #e3ddd2;
          }

          .nav-links.open {
            display: flex;
          }

          .nav-link {
            padding: 14px 0;
            text-align: left;
            font-size: 12px;
            border-bottom: 1px solid #e8e3da;
          }

          .hero {
            min-height: 90svh;
            padding: 140px 8% 100px;
          }

          .hero-title {
            font-size: clamp(48px, 12vw, 75px);
          }

          .hero-bottom {
            font-size: 7px;
          }

          .section-pad {
            padding: 90px 7%;
          }

          .purpose-grid {
            gap: 30px 20px;
          }

          .purpose-card h3 {
            font-size: 23px;
          }

          .journey-section {
            height: 300vh;
          }

          .journey-sticky {
            min-height: 620px;
            padding: 100px 7% 70px;
          }

          .ark-svg {
            width: 150%;
            max-width: none;
            margin-left: -25%;
          }

          .journey-heading {
            margin-top: -65px;
          }

          .journey-heading h2 {
            font-size: 43px;
          }

          .journey-heading p:last-child {
            font-size: 11px;
          }

          .journey-step {
            left: 7%;
            bottom: 18%;
            max-width: 250px;
          }

          .journey-step h3 {
            font-size: 30px;
          }

          .journey-step p {
            font-size: 11px;
          }

          .journey-bottom {
            right: 7%;
            bottom: 8%;
            max-width: 230px;
          }

          .journey-verse {
            font-size: 16px;
          }

          .journey-scroll {
            bottom: 23px;
          }

          .worship-details {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .pastor-layout {
            grid-template-columns: 1fr;
            gap: 50px;
          }

          .pastor-photo {
            max-height: 520px;
          }

          .logo-meaning-grid {
            grid-template-columns: 1fr;
          }

          .contact-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .contact-grid div {
            text-align: center;
          }

          .scroll-bubble {
            right: 12px;
            width: 10px;
            height: 10px;
          }
        }

        @media (max-width: 420px) {
          .purpose-grid {
            grid-template-columns: 1fr;
          }

          .hero-bottom span:last-child {
            display: none;
          }

          .journey-heading h2 {
            font-size: 36px;
          }

          .journey-step {
            bottom: 19%;
          }

          .journey-bottom {
            max-width: 190px;
          }
        }
      `}</style>
    </main>
  );
}
