// // src/components/PageWrapper.jsx
// // import React from 'react';
// import { Helmet } from 'react-helmet-async';
// import { useTranslation } from 'react-i18next';

// const PageWrapper = ({ children }) => { 
//   const { i18n } = useTranslation();
//   const currentLang = i18n.language;
//   const siteName = 'Word of Worlds';

//   return (
//     <>
//       <Helmet>
//         <html lang={currentLang} />
//         <title>{currentLang === 'en' ? `${siteName} - Discover New Worlds` : `${siteName} - Исследуй Новые Миры`}</title>
//         <meta name="description" content={currentLang === 'en' ? 'Explore books and knowledge across multiple languages on Word of Worlds.' : 'Изучайте книги и знания на разных языках с Word of Worlds.'} />
//         <meta name="keywords" content="books, languages, Word of Worlds, explore, knowledge" />
//         <meta property="og:title" content={`${siteName}`} />
//         <meta property="og:description" content={currentLang === 'en' ? 'Discover amazing content on Word of Worlds.' : 'Откройте удивительный контент на Word of Worlds.'} />
//         <meta property="og:url" content="https://wordofworlds.com" />
//         <meta property="og:type" content="website" />
//         <link rel="alternate" hrefLang="en" href="https://wordofworlds.com/en" />
//         <link rel="alternate" hrefLang="ru" href="https://wordofworlds.com/ru" />
//         <link rel="alternate" hrefLang="x-default" href="https://wordofworlds.com" />
//         <link rel="canonical" href="https://wordofworlds.com" />
//       </Helmet>
//       {children}
//     </>
//   );
// };

// export default PageWrapper;
