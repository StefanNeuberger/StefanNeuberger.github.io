const rightElem = document.getElementById("right");

// // BACKUP SVG
// {
//   /* <svg
//   width="18"
//   height="18"
//   viewBox="0 0 18 18"
//   fill="none"
//   xmlns="http://www.w3.org/2000/svg"
// >
// <path
//   class="wineLeft"
//   d="M8.86491 17.9667C7.16768 17.9667 7.5 18 6 17.8523L3.38886 17.4403L2.1999 16.9607L1.85161 16.6819L1.6521 16.3085C1.6521 16.3085 1.65209 16.8613 2.9533 17.3034C2.9533 17.3034 4.53738 17.9667 8.89359 17.9667H8.95017C10.308 17.9667 11.3829 17.9114 12.2315 17.8009C11.7804 17.8523 12.2551 17.8897 11.3499 17.8897L8.86491 17.9667Z"
//   fill="#FC1A1C"
// />
//   <path
//     class="wineRight"
//     d="M16.3048 16.2533C16.2222 16.5343 16.3048 16.2139 16.3048 16.2533C16.2222 16.5343 16.0604 16.7368 16.0604 16.7368C15.8107 16.9572 15.2864 17.2482 14.8904 17.2482C14.947 17.2482 15.0619 17.219 15.0619 17.219C16.3631 16.8873 16.3048 16.2533 16.3048 16.2533Z"
//     fill="#FC1A1C"
//   />
//   <path
//     class="wineMiddle"
//     d="M12.288 17.801C13.8155 17.6351 14.6076 17.4141 14.8904 17.3035C14 17.5432 12.288 17.801 12.288 17.801Z"
//     fill="#FB8D76"
//   />
// </svg>; */
// }

// console.log("working");

// const theSVG = document.getElementById("test");
// const right = document.getElementsByClassName("wineRight");
// theSVG.addEventListener("click", () => {
//   console.log("click");
//   console.log(right);
//   const timeline = anime.timeline({
//     duration: 500,
//     easing: "easeOutQuad",
//   });
//   // timeline.add({
//   //   targets: ".wineRight",
//   //   d: [{ value: wineRightPath }],
//   // });
//   timeline.add({
//     targets: ".wineMiddle",
//     d: [{ value: wineMiddlePath }],
//   });
//   // timeline.add({
//   //   targets: ".wineLeft",
//   //   d: [{ value: wineLeftPath }],
//   // });
// });

// const wineLeftPath =
//   "M9.61072 4.66669C7.9135 4.66669 3.72701 4.72196 1.57719 4.88777C1.57719 4.88777 1.23774 4.88776 1.12459 5.05358C1.63376 10.1386 2.59552 19.9769 2.6521 20.3085C2.6521 20.3085 2.65209 20.8613 3.9533 21.3034C3.9533 21.3034 5.53738 21.9667 9.89359 21.9667H9.95017C11.308 21.9667 12.3829 21.9114 13.2315 21.8009C13.5144 19.6453 13.5144 19.6453 13.5144 19.6453L14.6458 4.77722C12.9486 4.72195 11.1948 4.72196 10.2896 4.72196H9.61072V4.66669Z";
// const wineRightPath =
//   "M17.3048 20.2533C17.3614 19.9216 18.3231 10.1386 18.8323 4.99831C18.7757 4.8325 18.3797 4.83249 18.3797 4.83249C18.0403 4.83249 17.6442 4.77721 17.2482 4.77721L16.1167 19.59C16.1167 19.59 16.1167 19.59 15.8904 21.2482C15.947 21.2482 16.0036 21.1929 16.0036 21.1929C17.3048 20.8612 17.3048 20.2533 17.3048 20.2533Z";
// const wineMiddlePath =
//   "M13.5709 19.6454C13.5709 19.6454 13.5709 19.6454 13.288 21.801C14.8155 21.6351 15.6076 21.4141 15.8904 21.3035C16.1167 19.6454 16.1167 19.6454 16.1167 19.6454L17.2482 4.83249C16.4562 4.77722 15.6076 4.77721 14.7024 4.77721L13.5709 19.6454Z";