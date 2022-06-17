const style = document.createElement("style");
style.innerHTML = `
      .note {
        background-color: yellow;
        color:red;
      }
    `;
document.head.appendChild(style);

const circle_NA = document.querySelector(".circle_NA");
const circle_EU = document.querySelector(".circle_EU");
const circle_AS = document.querySelector(".circle_AS");
const circle_SA = document.querySelector(".circle_SA");
const circle_AF = document.querySelector(".circle_AF");
const circle_OC = document.querySelector(".circle_OC");

const text_NA = document.querySelector(".text_NA");
const text_EU = document.querySelector(".text_EU");
const text_AS = document.querySelector(".text_AS");
const text_SA = document.querySelector(".text_SA");
const text_AF = document.querySelector(".text_AF");
const text_OC = document.querySelector(".text_OC");

const text_year = document.querySelector(".year");

// circle_NA.setAttribute("cx", "10%");f

const identifierElements = {
  NA: { circle: circle_NA, text: text_NA },
  EU: { circle: circle_EU, text: text_EU },
  AS: { circle: circle_AS, text: text_AS },
  SA: { circle: circle_SA, text: text_SA },
  AF: { circle: circle_AF, text: text_AF },
  OC: { circle: circle_OC, text: text_OC },
};

const dataMap = {
  1955: {
    NA: { value: 2, cx: 36 },
    EU: { value: 140 },
    AS: { value: 0 },
    SA: { value: 0, cx: 36 },
    AF: { value: 0 },
    OC: { value: 0 },
  },
  1959: {
    NA: { value: 40, cx: 25 },
    EU: { value: 284 },
    AS: { value: 4 },
    SA: { value: 1, cx: 25 },
    AF: { value: 0 },
    OC: { value: 0 },
  },
  1964: {
    NA: { value: 39, cx: 25 },
    EU: { value: 298 },
    AS: { value: 9, cx: 72 },
    SA: { value: 0, cx: 25 },
    AF: { value: 0 },
    OC: { value: 0, cx: 72 },
  },
  1968: {
    NA: { value: 53, cx: 32 },
    EU: { value: 90 },
    AS: { value: 1, cx: 62 },
    SA: { value: 3, cx: 32 },
    AF: { value: 0 },
    OC: { value: 0, cx: 62 },
  },
  1972: {
    NA: { value: 93, cx: 28 },
    EU: { value: 106 },
    AS: { value: 0 },
    SA: { value: 1, cx: 28 },
    AF: { value: 0 },
    OC: { value: 0 },
  },
  1977: {
    NA: { value: 190, cx: 14 },
    EU: { value: 410 },
    AS: { value: 10, cx: 75 },
    SA: { value: 2, cx: 14 },
    AF: { value: 1 },
    OC: { value: 0, cx: 75 },
  },
  1982: {
    NA: { value: 60, cx: 30 },
    EU: { value: 117 },
    AS: { value: 0 },
    SA: { value: 0 },
    AF: { value: 0 },
    OC: { value: 2 },
  },
  1987: {
    NA: { value: 63, cx: 27 },
    EU: { value: 189 },
    AS: { value: 14, cx: 69 },
    SA: { value: 0, cx: 27 },
    AF: { value: 0 },
    OC: { value: 0, cx: 69 },
  },
  1992: {
    NA: { value: 60, cx: 30 },
    EU: { value: 116 },
    AS: { value: 9, cx: 65 },
    SA: { value: 6, cx: 30 },
    AF: { value: 1 },
    OC: { value: 3, cx: 65 },
  },
  1997: {
    NA: { value: 21, cx: 35 },
    EU: { value: 81 },
    AS: { value: 8, cx: 63 },
    SA: { value: 5, cx: 35 },
    AF: { value: 1 },
    OC: { value: 1, cx: 63 },
  },
  2002: {
    NA: { value: 33, cx: 35 },
    EU: { value: 56 },
    AS: { value: 8, cx: 62 },
    SA: { value: 6, cx: 35 },
    AF: { value: 9 },
    OC: { value: 1, cx: 62 },
  },
  2007: {
    NA: { value: 16, cx: 38 },
    EU: { value: 47 },
    AS: { value: 24, cx: 63 },
    SA: { value: 9, cx: 38 },
    AF: { value: 10 },
    OC: { value: 2, cx: 63 },
  },
  2012: {
    NA: { value: 16, cx: 38 },
    EU: { value: 47 },
    AS: { value: 24, cx: 63 },
    SA: { value: 11, cx: 38 },
    AF: { value: 10 },
    OC: { value: 2, cx: 63 },
  },
  2017: {
    NA: { value: 29, cx: 32 },
    EU: { value: 132 },
    AS: { value: 27, cx: 68 },
    SA: { value: 20, cx: 32 },
    AF: { value: 18 },
    OC: { value: 5, cx: 68 },
  },
  2022: {
    NA: { value: 6, cx: 42 },
    EU: { value: 19 },
    AS: { value: 19, cx: 60 },
    SA: { value: 3, cx: 42 },
    AF: { value: 12 },
    OC: { value: 2, cx: 60 },
  },
};

const years = Object.keys(dataMap);
const identifiers = Object.keys(dataMap[years[0]]);

// years.forEach((year, index) => {
//   identifiers.forEach((identifier) => {
//     // set initial radius
//     if (index === 14) {
//       identifierElements[identifier].circle.setAttribute(
//         "r",
//         Math.sqrt(dataMap[year][identifier].value)
//       );
//     }
//   });
// });

// GENERATING THE STYLES.
years.forEach((year, index) => {
  identifiers.forEach((identifier) => {
    const keyframeNameAnimateCircleRadius = `circleTransition${identifier}-${index}`;
    if (index + 1 < years.length) {
      style.innerHTML = `${style.innerHTML}
      @keyframes ${keyframeNameAnimateCircleRadius} {
        from {
          r: ${Math.sqrt(dataMap[year][identifier].value)};
          cx: ${dataMap[year][identifier].cx};
         }
         to {
          r: ${Math.sqrt(dataMap[years[index + 1]][identifier].value)};
          cx: ${dataMap[years[index + 1]][identifier].cx};
         }
       }
       .animateCircleRadius${identifier}${index} {
         animation-duration: 2s;
         animation-fill-mode: forwards;
         animation-name: ${keyframeNameAnimateCircleRadius};
       }

       `;
    }
  });
});

// ADDING CLASSNAMES EVERY 2 SECONDS TO TRIGGER NEW ANIMATION
let counter = 0;
const interval = setInterval(function () {
  if (counter < years.length) {
    text_year.innerHTML = years[counter];
    identifiers.forEach((identifier) => {
      // ADD CLASSNAME FOR RADIUS ANIMATION
      identifierElements[identifier].circle.classList.add(
        `animateCircleRadius${identifier}${counter}`
      );
      // CHANGE THE VALUE IN THE CIRCLE
      identifierElements[identifier].text.innerHTML =
        dataMap[years[counter + 1]][identifier].value;
    });

    counter++;
  }
  if (counter === years.length) {
    clearInterval(interval);
  }
}, 2000);
