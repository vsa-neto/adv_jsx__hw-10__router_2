
// const pagesData = [
//   {
//     name: 'HomePage',
//     title: 'Гоночн​ое такси',
//     content: 'Гоночн​ое такси – отличная возможность насладиться скоростью и мастерством гонщика, сидя на месте штурмана, и стать свидетелем настоящего мастерства профессиональных инструкторов Сочи Автодрома, в полной мере ощутив крутые виражи на самой современной гоночной трассе России.'
//   },
//   {
//     name: 'DriftPage',
//     title: 'Дрифт-такси',
//     content: 'Только ​на Сочи Автодроме вас ждет уникальная возможность промчаться по трассе Формулы 1 на максимально возможной скорости в управляемом заносе на легендарной «королеве дрифта» Nissan Silvia!.'
//   }
// ];



// const page = (array, pageName) => {
//   const pageData = array.find(item => item.name === pageName);
//   const copyPage = pageData ? { ...pageData } : null;
//   return (
//     <article className="article">
//       <h1 className="article__title">{copyPage.title}</h1>
//       <p className="article__paragraph">
//         {copyPage.content}
//       </p>
//     </article>)
// }


// export function HomePage() {
//   return (
//     page (pagesData, "HomePage")
//   )
// }

// export function DriftPage() {
//   return (
//     page (pagesData, "DriftPage")
//   )
// }

// export function ForzaPage() {
//   return (
//     page (pagesData, "ForzaPage")
//   )
// }

// export function TimeAttackPage() {
//   return (
//     page (pagesData, "TimeAttackPage")
//   )
// }
