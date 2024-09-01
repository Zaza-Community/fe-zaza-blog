# fe-zaza-blog
##### zaza 기술 블로그 front 부분

#### 사용 기술

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

#### 폴더 구조
```jsx
├── utils // 공통 함수
│   └── calculateTime.ts
├── types // 공통 타입
│   └── User.ts
│   └── TodoItem.ts
├── constants // 공통 상수
|   └── buttonNameList.ts
├── components // 공용 컴포넌트
│   └── Button  // Button 컴포넌트 관련 요소들
│       └── Button.tsx // 컴포넌트
├── api
│   └── useFetch.ts // api 호출
├── app
│   └── (home) // home 도메인
│       └── layout.tsx // 공통 레이아웃
│       └── page.tsx   // '/'
│   └── (mypage) // mypage 도메인
│       └── mypage //
│           └── _components // mypage 컴포넌트
│           └── _utils // mypage 함수
│           └── _types // mypage 타입
│           └── _constants // mypage 상수
│           └── layout.tsx // mypage 레이아웃
│           └── page.tsx // '/mypage'
├── tailwind.config.ts // 애니메이션 및 여러군데 공통으로 사용되는 스타일 정의
├── assets
│   └── images
│   └── svgs
└── styles
    └── global.css
