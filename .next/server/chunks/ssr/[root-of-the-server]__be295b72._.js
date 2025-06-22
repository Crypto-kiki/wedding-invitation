module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/src/contexts/LanguageContext.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "LanguageProvider": (()=>LanguageProvider),
    "useLanguage": (()=>useLanguage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
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
        coupleMessage1: "소중한 분들을 모시고",
        coupleMessage2: "새로운 시작을 함께하고자 합니다",
        // Countdown
        specialDay: "우리의 특별한 날까지",
        // Date & Location
        weddingInfo: "예식 안내",
        ceremonyDate: "2025년 9월 14일 (일) 오전 11시 30분",
        venueLocation: "서울특별시 성북구 동소문로 47, 포레스트원웨딩 4층 포레스트 홀",
        venueAddress: "서울특별시 성북구 동소문로 47",
        mapButton: "지도로 보기",
        // Gallery
        ourMoments: "우리의 순간들",
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
        // RSVP
        attendanceConfirmation: "참석 여부 확인",
        attendanceMessage: "소중한 자리에 함께해 주실 수 있는지 알려주세요",
        name: "성함",
        phoneNumber: "연락처",
        willAttend: "참석합니다",
        cannotAttend: "참석이 어렵습니다",
        numberOfGuests: "동반 인원",
        includeYourself: "본인 포함",
        submitRSVP: "참석 여부 제출",
        // Footer
        thankYou: "감사합니다",
        preciousBeginning: "두 사람의 아름다운 시작을",
        thankYouForBeing: "함께 축복해 주셔서 감사합니다"
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
        coupleMessage1: "邀請珍貴的各位",
        coupleMessage2: "一同見證我們的新開始",
        // Countdown
        specialDay: "直到我們的特別日子",
        // Date & Location
        weddingInfo: "婚禮資訊",
        ceremonyDate: "2025年9月14日（日）上午11時30分",
        venueLocation: "首爾特別市城北區東小門路47, 森林園婚禮會館 4樓 森林廳",
        venueAddress: "首爾特別市城北區東小門路47",
        mapButton: "地圖查看",
        // Gallery
        ourMoments: "我們的時光",
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
        // RSVP
        attendanceConfirmation: "出席確認",
        attendanceMessage: "請告訴我們您是否能參加這個重要的時刻",
        name: "姓名",
        phoneNumber: "聯絡電話",
        willAttend: "我會出席",
        cannotAttend: "無法出席",
        numberOfGuests: "同行人數",
        includeYourself: "包含本人",
        submitRSVP: "提交出席確認",
        // Footer
        thankYou: "謝謝您",
        preciousBeginning: "兩人美麗的開始",
        thankYouForBeing: "感謝您一同祝福"
    }
};
function LanguageProvider({ children }) {
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('ko');
    const t = (key)=>{
        return translations[language][key] || key;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: {
            language,
            setLanguage,
            t
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/contexts/LanguageContext.tsx",
        lineNumber: 169,
        columnNumber: 5
    }, this);
}
function useLanguage() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__be295b72._.js.map