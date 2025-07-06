"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "ko" | "zh";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const translations = {
  ko: {
    // Hero Section
    weddingInvitation: "결혼합니다",
    groomBride: "김백기 ♥ 여이페",
    weddingDate: "2025년 9월 14일 일요일 오전 11시 30분",
    heroMessage1: "평생을 함께할 사람을 만났습니다",
    heroMessage2: "저희의 소중한 시작을",
    heroMessage3: "함께 축복해 주세요",
    venue: "포레스트원웨딩 4층 포레스트홀",
    viewMap: "지도보기",

    // Couple Section
    groom: "신랑",
    bride: "신부",
    coupleMessage1: "서로가 마주보며 다져온 사랑을",
    coupleMessage2: "이제 함께 한 곳을 바라보며",
    coupleMessage3: "걸어갈 수 있는 큰 사랑으로 키우고자 합니다.",
    coupleMessage4: "저희 두 사람이 사랑의 이름으로",
    coupleMessage5: "지켜나갈 수 있게 앞날을",
    coupleMessage6: "축복해 주시면 감사하겠습니다.",
    coupleMessage7: "김백기, 여이페의 결혼식에 초대합니다.",

    // Countdown
    specialDay: "D-day",

    // Date & Location
    weddingInfo: "예식 안내",
    ceremonyDate: "2025년 9월 14일 (일) 오전 11시 30분",
    venueLocation:
      "서울특별시 성북구 동소문로 47, 포레스트원웨딩 4층 포레스트 홀",
    venueAddress: "서울특별시 성북구 동소문로 47",
    mapButtonNaver: "네이버 지도",
    mapButtonGoogle: "구글 지도",

    // Gallery
    ourMoments: "Gallery",
    viewMorePhotos: "더 많은 사진 보기",
    galleryDescription1: "평범한 날을 특별하게 만들어준",
    galleryDescription2: "소중한 추억들을 담았어요.",

    // Bank
    accountInfo: "마음 전하실 곳",
    groomFamily: "신랑측",
    brideFamily: "신부측",
    fatherGroom: "아버지",
    motherGroom: "어머니",
    fatherBride: "아버지",
    motherBride: "어머니",
    copyAccount: "계좌복사",
    copied: "복사되었습니다!",

    // Message
    congratulationsMessage: "축하 메시지",
    warmWishes: "따뜻한 축하의 말씀을 남겨주세요",
    yourName: "성함",
    congratulatoryMessage: "축하 메시지",
    submitMessage: "메시지 전송",
    warmCongratulations: "따뜻한 축하 인사들",
    preciousHeart: "소중한 마음을 전해주시면 평생 간직하겠습니다",
    preciousMessageCount: "개의 소중한 메시지",
    showMore: "더 보기",
    collapse: "접기",

    // Footer
    thankYou: "감사합니다",
    preciousBeginning: "두 사람의 아름다운 시작을",
    thankYouForBeing: "함께 축복해 주셔서 감사합니다",
  },
  zh: {
    // Hero Section
    weddingInvitation: "我們要結婚了",
    groomBride: "金柏淇 ♥ 呂怡蓓",
    weddingDate: "2025年9月14日（日）上午11時30分",
    heroMessage1: "遇見了要攜手一生的人",
    heroMessage2: "我們珍貴的開始",
    heroMessage3: "請一同為我們祝福",
    venue: "森林園婚禮會館 4樓 森林廳",
    viewMap: "查看地圖",

    // Couple Section
    groom: "新郎",
    bride: "新娘",
    coupleMessage1: "我們一路走來，在彼此的陪伴中建立了穩定的感情，",
    coupleMessage2: "如今，決定攜手邁向人生的新篇章。",
    coupleMessage3: "希望未來的日子裡，能夠相互扶持、一起成長，",
    coupleMessage4: "把這份愛延續為一生的承諾。",
    coupleMessage5: "誠摯邀請您來見證我們的重要時刻，",
    coupleMessage6: "也懇請您為我們送上祝福，",
    coupleMessage7: "讓這段旅程有您的陪伴與祝福更加圓滿。",

    // Countdown
    specialDay: "D-day",

    // Date & Location
    weddingInfo: "婚禮資訊",
    ceremonyDate: "2025年9月14日（日）上午11時30分",
    venueLocation: "首爾特別市城北區東小門路47, 森林園婚禮會館 4樓 森林廳",
    venueAddress: "首爾特別市城北區東小門路47",
    mapButtonNaver: "Naver Map",
    mapButtonGoogle: "Google Map",

    // Gallery
    ourMoments: "Gallery",
    viewMorePhotos: "查看更多照片",
    galleryDescription1: "讓平凡日子變得特別的",
    galleryDescription2: "珍貴回憶都收藏在這裡。",

    // Bank
    accountInfo: "帳戶資訊",
    groomFamily: "新郎方",
    brideFamily: "新娘方",
    fatherGroom: "父親",
    motherGroom: "母親",
    fatherBride: "父親",
    motherBride: "母親",
    copyAccount: "複製帳號",
    copied: "複製完成！",

    // Message
    congratulationsMessage: "祝賀訊息",
    warmWishes: "請留下溫暖的祝福話語",
    yourName: "姓名",
    congratulatoryMessage: "祝賀訊息",
    submitMessage: "發送訊息",
    warmCongratulations: "溫暖的祝賀話語",
    preciousHeart: "您珍貴的心意我們會永遠珍藏",
    preciousMessageCount: "則珍貴訊息",
    showMore: "查看更多",
    collapse: "收起",

    // Footer
    thankYou: "謝謝您",
    preciousBeginning: "兩人美麗的開始",
    thankYouForBeing: "感謝您一同祝福",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("ko");

  const t = (key: string): string => {
    return (
      translations[language][key as keyof (typeof translations)["ko"]] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
