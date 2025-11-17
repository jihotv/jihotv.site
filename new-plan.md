# 📖 **jihotv 웹매거진 종합 기획서**

## 1. **프로젝트 개요**

### 1.1 프로젝트 정보
- **매거진명**: jihotv
- **도메인**: jihotv.site
- **배포 방식**: GitHub Pages 기반 정적 사이트
- **콘텐츠 관리**: GitHub Repository + Markdown 파일
- **타겟 오디언스**: 라이프스타일과 문화 콘텐츠에 관심 있는 디지털 네이티브 세대

### 1.2 핵심 가치
- **미니멀리즘**: 콘텐츠에 집중할 수 있는 깔끔한 디자인
- **접근성**: 모든 디바이스에서 최적화된 경험
- **확장성**: GitHub 기반으로 쉬운 콘텐츠 관리와 협업

## 2. **기술 아키텍처**

### 2.1 기술 스택
```javascript
// Frontend Framework
- Next.js 14 (Static Site Generation)
- React 18
- TypeScript

// Styling
- Tailwind CSS
- CSS Modules
- Framer Motion (애니메이션)

// Content Management
- GitHub Repository
- Markdown + Front Matter
- Sharp (이미지 최적화)

// SEO & Performance
- Next SEO
- Sitemap Generator
- PWA Support
```

### 2.2 폴더 구조
```
jihotv/
├── public/
│   ├── images/
│   │   ├── hero/           # 풀스크린 이미지
│   │   │   ├── main-hero.jpg
│   │   │   └── ...
│   │   └── og/             # Open Graph 이미지
│   └── favicon.ico
├── content/
│   ├── posts/              # 콘텐츠 마크다운 파일
│   │   ├── 2024-01-lifestyle-trend/
│   │   │   ├── index.md
│   │   │   ├── featured.jpg
│   │   │   └── images/
│   │   │       ├── img1.jpg
│   │   │       └── img2.jpg
│   │   └── ...
│   └── tags.json           # 태그 정의 파일
├── src/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   └── utils/
└── package.json
```

### 2.3 Markdown Front Matter 구조
```yaml
---
title: "2024년 라이프스타일 트렌드"
date: "2024-01-15"
tags: ["라이프스타일", "트렌드"]
featured_image: "./featured.jpg"
excerpt: "올해 주목해야 할 라이프스타일 트렌드를 소개합니다"
author: "jiho"
reading_time: 5
---
```

## 3. **디자인 시스템**

### 3.1 색상 팔레트
```scss
// Primary Colors
$warm-beige: #EFECE3;      // 메인 배경
$soft-blue: #8FABD4;       // 서브 컬러, 호버 효과
$deep-blue: #4A70A9;       // CTA, 강조 요소
$pure-black: #000000;      // 메인 텍스트

// Secondary Colors
$gray-900: #1A1A1A;        // 헤드라인
$gray-700: #4A4A4A;        // 본문 텍스트
$gray-500: #767676;        // 메타 정보
$gray-300: #D4D4D4;        // 구분선
$white: #FFFFFF;           // 카드 배경

// Semantic Colors
$success: #10B981;         // 성공 메시지
$warning: #F59E0B;         // 경고
$error: #EF4444;           // 에러
```

### 3.2 타이포그래피
```css
/* Typography Scale */
--font-display: 'Pretendard Variable', 'Inter', sans-serif;
--font-body: 'Noto Sans KR', -apple-system, sans-serif;

/* Heading Sizes */
--h1: clamp(2.5rem, 5vw, 3.5rem);    /* 40px - 56px */
--h2: clamp(1.875rem, 4vw, 2.25rem); /* 30px - 36px */
--h3: clamp(1.5rem, 3vw, 1.875rem);  /* 24px - 30px */
--h4: 1.25rem;                       /* 20px */

/* Body Text */
--body-large: 1.125rem;               /* 18px */
--body-regular: 1rem;                 /* 16px */
--body-small: 0.875rem;               /* 14px */
--caption: 0.75rem;                   /* 12px */

/* Line Heights */
--line-height-tight: 1.2;
--line-height-normal: 1.6;
--line-height-relaxed: 1.8;
```

### 3.3 Spacing System
```css
/* 8px Grid System */
--space-xs: 0.5rem;   /* 8px */
--space-sm: 1rem;     /* 16px */
--space-md: 1.5rem;   /* 24px */
--space-lg: 2rem;     /* 32px */
--space-xl: 3rem;     /* 48px */
--space-2xl: 4rem;    /* 64px */
--space-3xl: 6rem;    /* 96px */
```

## 4. **페이지별 상세 설계**

### 4.1 메인 페이지

#### 4.1.1 헤더 섹션
```html
<header class="header">
  <div class="header-container">
    <h1 class="logo">
      <a href="/" aria-label="jihotv 홈">jihotv</a>
    </h1>
    <div class="header-actions">
      <button class="search-trigger" aria-label="검색">
        <svg><!-- 검색 아이콘 --></svg>
      </button>
    </div>
  </div>
  
  <!-- 검색 오버레이 -->
  <div class="search-overlay" role="dialog" aria-modal="true">
    <div class="search-container">
      <input 
        type="search" 
        placeholder="검색어를 입력하세요"
        aria-label="콘텐츠 검색"
      />
      <button class="search-close">닫기</button>
    </div>
    <div class="search-results">
      <!-- 실시간 검색 결과 -->
    </div>
  </div>
</header>
```

#### 4.1.2 히어로 섹션
```html
<section class="hero" role="banner">
  <picture>
    <source 
      media="(max-width: 768px)" 
      srcset="/images/hero/main-hero-mobile.webp"
    />
    <source 
      media="(min-width: 769px)" 
      srcset="/images/hero/main-hero-desktop.webp"
    />
    <img 
      src="/images/hero/main-hero.jpg" 
      alt="jihotv 메인 비주얼"
      loading="eager"
      fetchpriority="high"
    />
  </picture>
  <div class="hero-overlay">
    <h2 class="hero-title">당신의 일상을 특별하게</h2>
  </div>
</section>
```

#### 4.1.3 네비게이션 (태그 필터)
```html
<nav class="tag-navigation" role="navigation" aria-label="콘텐츠 필터">
  <div class="tag-container">
    <button 
      class="tag-button active" 
      data-tag="all"
      aria-pressed="true"
    >
      전체
    </button>
    <button 
      class="tag-button" 
      data-tag="lifestyle"
      aria-pressed="false"
    >
      라이프스타일
    </button>
    <button 
      class="tag-button" 
      data-tag="tech"
      aria-pressed="false"
    >
      테크
    </button>
    <button 
      class="tag-button" 
      data-tag="culture"
      aria-pressed="false"
    >
      문화
    </button>
  </div>
</nav>
```

#### 4.1.4 콘텐츠 그리드
```html
<main class="content-grid" role="main">
  <div class="grid-container">
    <article class="content-card" data-tags="lifestyle">
      <a href="/posts/article-slug" class="card-link">
        <div class="card-image-wrapper">
          <img 
            src="/content/posts/article/featured.jpg" 
            alt="아티클 제목"
            loading="lazy"
          />
        </div>
        <div class="card-content">
          <div class="card-meta">
            <span class="card-tag">라이프스타일</span>
            <time datetime="2024-01-15">2024.01.15</time>
          </div>
          <h3 class="card-title">아티클 제목이 들어갑니다</h3>
          <p class="card-excerpt">
            콘텐츠의 요약 내용이 들어갑니다...
          </p>
        </div>
      </a>
    </article>
    <!-- 더 많은 카드들... -->
  </div>
  
  <!-- 인피니트 스크롤 로더 -->
  <div class="infinite-loader" aria-hidden="true">
    <div class="loader-spinner"></div>
  </div>
</main>
```

### 4.2 콘텐츠 상세 페이지

#### 4.2.1 페이지 구조
```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <!-- SEO 메타 태그 -->
  <title>아티클 제목 | jihotv</title>
  <meta name="description" content="콘텐츠 요약">
  <meta property="og:title" content="아티클 제목">
  <meta property="og:description" content="콘텐츠 요약">
  <meta property="og:image" content="https://jihotv.site/images/og/article.jpg">
  <meta property="og:url" content="https://jihotv.site/posts/article-slug">
  <meta property="og:type" content="article">
  
  <!-- Twitter Cards -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="아티클 제목">
  <meta name="twitter:description" content="콘텐츠 요약">
  <meta name="twitter:image" content="https://jihotv.site/images/og/article.jpg">
  
  <!-- JSON-LD 구조화 데이터 -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "아티클 제목",
    "description": "콘텐츠 요약",
    "image": "https://jihotv.site/images/article.jpg",
    "datePublished": "2024-01-15",
    "dateModified": "2024-01-15",
    "author": {
      "@type": "Person",
      "name": "jiho"
    },
    "publisher": {
      "@type": "Organization",
      "name": "jihotv",
      "logo": {
        "@type": "ImageObject",
        "url": "https://jihotv.site/logo.png"
      }
    }
  }
  </script>
</head>
<body>
  <!-- 헤더 -->
  <header class="article-header">
    <div class="header-container">
      <a href="/" class="back-button" aria-label="홈으로">
        <svg><!-- 뒤로가기 아이콘 --></svg>
      </a>
      <h1 class="article-title-header">아티클 제목</h1>
      <button class="share-button" aria-label="공유">
        <svg><!-- 공유 아이콘 --></svg>
      </button>
    </div>
  </header>

  <!-- 히어로 이미지 -->
  <section class="article-hero">
    <img 
      src="/content/posts/article/featured.jpg" 
      alt="아티클 대표 이미지"
      loading="eager"
    />
  </section>

  <!-- 아티클 콘텐츠 -->
  <article class="article-content">
    <header class="article-meta">
      <time datetime="2024-01-15">2024년 1월 15일</time>
      <span class="reading-time">5분 읽기</span>
      <div class="article-tags">
        <span class="tag">라이프스타일</span>
        <span class="tag">트렌드</span>
      </div>
    </header>

    <div class="article-body">
      <!-- Markdown 렌더링 콘텐츠 -->
      <p>본문 내용...</p>
      <h2>소제목</h2>
      <p>추가 내용...</p>
      <figure>
        <img src="/content/posts/article/images/img1.jpg" alt="이미지 설명">
        <figcaption>이미지 캡션</figcaption>
      </figure>
    </div>

    <!-- 공유 버튼 섹션 -->
    <div class="share-section">
      <h3>이 글 공유하기</h3>
      <div class="share-buttons">
        <button class="share-btn share-kakao" data-url="">카카오톡</button>
        <button class="share-btn share-twitter" data-url="">트위터</button>
        <button class="share-btn share-facebook" data-url="">페이스북</button>
        <button class="share-btn share-link" data-url="">링크 복사</button>
      </div>
    </div>
  </article>

  <!-- 이전/다음 네비게이션 -->
  <nav class="article-navigation">
    <a href="/posts/previous-article" class="nav-prev">
      <span class="nav-label">이전 글</span>
      <span class="nav-title">이전 글 제목</span>
    </a>
    <a href="/posts/next-article" class="nav-next">
      <span class="nav-label">다음 글</span>
      <span class="nav-title">다음 글 제목</span>
    </a>
  </nav>
</body>
</html>
```

## 5. **핵심 기능 구현**

### 5.1 검색 기능
```javascript
// components/Search.tsx
import { useState, useEffect, useCallback } from 'react';
import { debounce } from 'lodash';

interface SearchResult {
  title: string;
  slug: string;
  excerpt: string;
  tags: string[];
}

export const Search: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // 검색 인덱스 생성 (빌드 타임)
  const searchIndex = useMemo(() => {
    return posts.map(post => ({
      title: post.title.toLowerCase(),
      content: post.content.toLowerCase(),
      tags: post.tags,
      slug: post.slug,
      excerpt: post.excerpt
    }));
  }, [posts]);

  // 디바운스된 검색 함수
  const debouncedSearch = useCallback(
    debounce((searchQuery: string) => {
      if (searchQuery.length < 2) {
        setResults([]);
        return;
      }

      const query = searchQuery.toLowerCase();
      const searchResults = searchIndex
        .filter(item => 
          item.title.includes(query) ||
          item.content.includes(query) ||
          item.tags.some(tag => tag.includes(query))
        )
        .slice(0, 10)
        .map(item => ({
          title: item.title,
          slug: item.slug,
          excerpt: item.excerpt,
          tags: item.tags
        }));

      setResults(searchResults);
      setIsLoading(false);
    }, 300),
    [searchIndex]
  );

  useEffect(() => {
    if (query) {
      setIsLoading(true);
      debouncedSearch(query);
    } else {
      setResults([]);
    }
  }, [query, debouncedSearch]);

  return (
    <div className="search-container">
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="검색어를 입력하세요"
        className="search-input"
      />
      
      {isLoading && <div className="search-loading">검색 중...</div>}
      
      {results.length > 0 && (
        <div className="search-results">
          {results.map((result) => (
            
              key={result.slug}
              href={`/posts/${result.slug}`}
              className="search-result-item"
            >
              <h4>{result.title}</h4>
              <p>{result.excerpt}</p>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};
```

### 5.2 태그 필터링 애니메이션
```javascript
// components/TagFilter.tsx
import { motion, AnimatePresence } from 'framer-motion';

export const TagFilter: React.FC = () => {
  const [activeTag, setActiveTag] = useState('all');
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const handleTagClick = (tag: string) => {
    setActiveTag(tag);
    
    if (tag === 'all') {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(posts.filter(post => 
        post.tags.includes(tag)
      ));
    }
  };

  return (
    <>
      <nav className="tag-navigation">
        {['all', ...uniqueTags].map((tag) => (
          <motion.button
            key={tag}
            onClick={() => handleTagClick(tag)}
            className={`tag-button ${activeTag === tag ? 'active' : ''}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {tag === 'all' ? '전체' : tag}
          </motion.button>
        ))}
      </nav>

      <motion.div className="content-grid" layout>
        <AnimatePresence mode="popLayout">
          {filteredPosts.map((post) => (
            <motion.article
              key={post.slug}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{
                opacity: { duration: 0.3 },
                layout: { duration: 0.3, type: "spring" }
              }}
              className="content-card"
            >
              {/* 카드 내용 */}
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
};
```

### 5.3 공유 기능
```javascript
// utils/share.ts
export const shareUtils = {
  // 카카오톡 공유
  kakao: (url: string, title: string) => {
    if (window.Kakao) {
      window.Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
          title: title,
          description: document.querySelector('meta[name="description"]')?.content,
          imageUrl: document.querySelector('meta[property="og:image"]')?.content,
          link: {
            mobileWebUrl: url,
            webUrl: url
          }
        }
      });
    }
  },

  // 트위터 공유
  twitter: (url: string, title: string) => {
    const text = encodeURIComponent(title);
    const shareUrl = encodeURIComponent(url);
    window.open(
      `https://twitter.com/intent/tweet?text=${text}&url=${shareUrl}`,
      'twitter-share',
      'width=550,height=450'
    );
  },

  // 페이스북 공유
  facebook: (url: string) => {
    const shareUrl = encodeURIComponent(url);
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
      'facebook-share',
      'width=550,height=450'
    );
  },

  // 링크 복사
  copyLink: async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      // 토스트 알림 표시
      showToast('링크가 복사되었습니다');
    } catch (err) {
      console.error('링크 복사 실패:', err);
    }
  }
};
```

### 5.4 인피니트 스크롤
```javascript
// hooks/useInfiniteScroll.ts
import { useEffect, useCallback, useRef } from 'react';

export const useInfiniteScroll = (callback: () => void) => {
  const observer = useRef<IntersectionObserver | null>(null);
  
  const lastElementRef = useCallback((node: HTMLElement | null) => {
    if (observer.current) observer.current.disconnect();
    
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        callback();
      }
    }, {
      root: null,
      rootMargin: '100px',
      threshold: 0
    });
    
    if (node) observer.current.observe(node);
  }, [callback]);

  return lastElementRef;
};

// 사용 예시
const HomePage = () => {
  const [posts, setPosts] = useState(initialPosts);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const loadMorePosts = useCallback(async () => {
    if (!hasMore) return;

    const newPosts = await fetchPosts(page + 1);
    if (newPosts.length === 0) {
      setHasMore(false);
    } else {
      setPosts(prev => [...prev, ...newPosts]);
      setPage(prev => prev + 1);
    }
  }, [page, hasMore]);

  const lastPostRef = useInfiniteScroll(loadMorePosts);

  return (
    <div className="content-grid">
      {posts.map((post, index) => (
        <article
          key={post.id}
          ref={index === posts.length - 1 ? lastPostRef : null}
          className="content-card"
        >
          {/* 카드 내용 */}
        </article>
      ))}
    </div>
  );
};
```

## 6. **SEO 최적화 전략**

### 6.1 메타 태그 관리
```javascript
// components/SEO.tsx
import Head from 'next/head';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  author?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  image = '/images/og/default.jpg',
  url,
  type = 'website',
  publishedTime,
  author = 'jiho'
}) => {
  const siteName = 'jihotv';
  const fullTitle = `${title} | ${siteName}`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      {publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {author && <meta property="article:author" content={author} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
};
```

### 6.2 Sitemap 생성
```javascript
// scripts/generate-sitemap.js
const fs = require('fs');
const path = require('path');
const glob = require('glob');

const SITE_URL = 'https://jihotv.site';

function generateSitemap() {
  const posts = glob.sync('content/posts/**/index.md');
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_URL}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <priority>1.0</priority>
  </url>
  ${posts.map(post => {
    const slug = path.dirname(post).split('/').pop();
    return `
  <url>
    <loc>${SITE_URL}/posts/${slug}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <priority>0.8</priority>
  </url>`;
  }).join('')}
</urlset>`;

  fs.writeFileSync('public/sitemap.xml', sitemap);
}

generateSitemap();
```

## 7. **성능 최적화**

### 7.1 이미지 최적화
```javascript
// next.config.js
module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // 이미지 최적화 로더
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(jpe?g|png|webp|avif)$/i,
      use: [
        {
          loader: 'responsive-loader',
          options: {
            adapter: require('responsive-loader/sharp'),
            sizes: [320, 640, 960, 1200, 1800],
            placeholder: true,
            placeholderSize: 20
          }
        }
      ]
    });
    return config;
  }
};
```

### 7.2 코드 분할 및 번들 최적화
```javascript
// pages/_app.tsx
import dynamic from 'next/dynamic';

// 동적 임포트로 초기 번들 크기 감소
const Search = dynamic(() => import('../components/Search'), {
  loading: () => <div>Loading...</div>,
  ssr: false
});

const ShareButtons = dynamic(() => import('../components/ShareButtons'), {
  ssr: false
});
```

## 8. **반응형 디자인 상세**

### 8.1 브레이크포인트
```scss
// styles/variables.scss
$breakpoints: (
  'mobile': 320px,
  'tablet': 768px,
  'desktop': 1024px,
  'wide': 1440px
);

// Mixins
@mixin mobile {
  @media (max-width: 767px) {
    @content;
  }
}

@mixin tablet {
  @media (min-width: 768px) and (max-width: 1023px) {
    @content;
  }
}

@mixin desktop {
  @media (min-width: 1024px) {
    @content;
  }
}
```

### 8.2 그리드 시스템
```scss
// 콘텐츠 그리드 반응형
.content-grid {
  display: grid;
  gap: 1.5rem;
  padding: 2rem;

  // 모바일: 1열
  @include mobile {
    grid-template-columns: 1fr;
    padding: 1rem;
  }

  // 태블릿: 2열
  @include tablet {
    grid-template-columns: repeat(2, 1fr);
  }

  // 데스크톱: 3열
  @media (min-width: 1024px) and (max-width: 1439px) {
    grid-template-columns: repeat(3, 1fr);
  }

  // 와이드: 4열
  @media (min-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
    max-width: 1440px;
    margin: 0 auto;
  }
}
```

## 9. **배포 및 운영**

### 9.1 GitHub Actions 워크플로우
```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
        env:
          NEXT_PUBLIC_SITE_URL: https://jihotv.site
      
      - name: Export
        run: npm run export
      
      - name: Add .nojekyll
        run: touch ./out/.nojekyll
      
      - name: Deploy to GitHub Pages
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          branch: gh-pages
          folder: out
          clean: true
```

### 9.2 콘텐츠 관리 워크플로우

#### 새 콘텐츠 추가 절차
1. `content/posts/` 폴더에 새 폴더 생성
2. `index.md` 파일 작성 (Front Matter 포함)
3. 이미지 파일을 같은 폴더의 `images/` 하위 폴더에 추가
4. Git commit & push
5. GitHub Actions가 자동으로 빌드 및 배포

#### 히어로 이미지 업데이트
1. `public/images/hero/` 폴더에 새 이미지 업로드
2. `config.json` 파일에서 히어로 이미지 경로 수정
3. Git commit & push

### 9.3 도메인 설정
```bash
# CNAME 파일 (public 폴더)
jihotv.site
(이미 해당 깃헙 리포가 jihotv.site와 연결되어 있음음)

## 10. **유지보수 가이드**

### 10.1 정기 업데이트
- **주간**: 새 콘텐츠 업로드, 태그 관리
- **월간**: 의존성 업데이트, 성능 모니터링
- **분기별**: 디자인 개선, 새 기능 추가

### 10.2 모니터링
- Google Analytics 4 설정
- Google Search Console 연동
- Lighthouse CI 자동화
- 에러 트래킹 (Sentry)

### 10.3 백업 전략
- GitHub 자체 버전 관리
- 정기적인 로컬 백업
- 이미지 파일 별도 백업 (Google Drive/S3)

## 11. **확장 가능성**

### 11.1 추후 추가 가능한 기능
- 댓글 시스템 (Giscus/Disqus)
- 뉴스레터 구독
- 다크모드
- 다국어 지원
- RSS 피드
- PWA 기능

### 11.2 성장 전략
- SEO 최적화 지속
- 소셜 미디어 연동 강화
- 구글 애드센스 통합
- 애널리틱스 기반 콘텐츠 전략