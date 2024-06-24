// const elementsToTrack = document.getElementById('note__content');
// let headers = [];
// if (elementsToTrack) {
//   headers = document.querySelectorAll('h2, h3, h4, h5, h6');
//   console.log('headers', headers);
// }

// // Callback function for Intersection Observer
// const callback = (entries, observer) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       console.log('entry intersecting', entry.target);
//     }
//     // console.log('entry', entry);
//     // if (entry.intersectionRatio > 0) {
//     //   console.log('entry', entry.target);
//     // } else {
//     //   console.log('out', entry.target);
//     // }
//     // if (
//     //   entry.intersectionRatio > 0 &&
//     //   entry.intersectionRatio <= 0.2 &&
//     //   entry.boundingClientRect.top >= 0
//     // ) {
//     //   // entry.target.classList.add('bold');
//     //   console.log('entry intersecting', entry.target);
//     // } else {
//     //   // entry.target.classList.remove('bold');
//     //   console.log('entry not intersecting', entry.target);
//     // }
//     // if (entry.isIntersecting) {
//     //   //   entry.target.classList.add('bold');
//     //   console.log('entry intersecting', entry.target);
//     // } else {
//     //   console.log('entry not intersecting', entry.target);
//     //   //   entry.target.classList.remove('bold');
//     // }
//   });
// };

// // Options for the observer (optional)
// const topMargin = window.innerHeight;
// // console.log('topMargin', topMargin);
// const options = {
//   root: null, // Use the viewport as the root
//   rootMargin: `0px 0px -${topMargin - 50}px 0px`,
//   threshold: 0.1,
// };

// // Create the observer
// const observer = new IntersectionObserver(callback, options);

// // Observe each element
// headers.forEach((element) => {
//   observer.observe(element);
// });

// document.addEventListener('scroll', (event) => {
//   console.log('Scroll', event);
// });
