// Розпорядок дня !


// function wokeUp(alarmClock, cb) {
//     setTimeout(() => {
//         if (alarmClock <= 8) {
//             cb(null, 'Good morning');
//         } else {
//             cb('Oh no overslept');
//         }
//     }, 600)
// }
//
// function brushedHisTeeth(cleaned, cb) {
//     setTimeout(() => {
//         if (cleaned) {
//             cb(null, 'Good clean teeth');
//         } else {
//             cb('Can not do it in time');
//         }
//     }, 500)
// }
//
// function drankCoffee(breakfast, cb) {
//     setTimeout(() => {
//         if (breakfast) {
//             cb(null, 'Om nom nom');
//         } else {
//             cb('I do not have time for breakfast');
//         }
//
//     }, 800)
// }
//
// function wentToWork(isJobDone, cb) {
//     setTimeout(() => {
//         if (isJobDone >= 1000) {
//             cb(null, isJobDone);
//         } else {
//             cb('Earned little');
//         }
//
//     }, 2000)
// }
//
// function wentToTheStore(products, cb) {
//     setTimeout(() => {
//         if (products > 400) {
//             cb(null, products - 400);
//         } else {
//             cb('There is not so much money');
//         }
//
//     }, 600)
// }
//
// function watchedTheLecture(lecture, cb) {
//     setTimeout(() => {
//         if (lecture) {
//             cb(null, 'I understood everything 100');
//         } else {
//             cb('I did not understand anything');
//         }
//
//     }, 1500)
// }
//
// function playedWithTheChild(play, cb) {
//     setTimeout(() => {
//         if (play) {
//             cb(null, 'How fun they fooled around');
//         } else {
//             cb('I have no strength');
//         }
//
//     }, 2000)
// }
//
// function wentToSleep(sleep, cb) {
//     setTimeout(() => {
//         if (sleep) {
//             cb(null, "Let's go to sleep");
//         } else {
//             cb("Something is wrong with me");
//         }
//
//     }, 3000)
// }
//
// wokeUp(8, (err, data) => {
//     if (!err) {
//         console.log(data);
//         brushedHisTeeth(true, (err, data) => {
//             if (!err) {
//                 console.log(data);
//                 drankCoffee(true, (err, data) => {
//                     if (!err) {
//                         console.log(data);
//                         wentToWork(1200, (err, data) => {
//                             if (!err) {
//                                 console.log(data);
//                                 wentToTheStore(data, (err, data) => {
//                                     if (!err) {
//                                         console.log(data);
//                                         watchedTheLecture(true, (err, data) => {
//                                             if (!err) {
//                                                 console.log(data);
//                                                 playedWithTheChild(true, (err, data) => {
//                                                     if (!err) {
//                                                         console.log(data);
//                                                         wentToSleep(true, (err, data) => {
//                                                             if (!err) {
//                                                                 console.log(data);
//                                                             } else {
//                                                                 console.error(err);
//                                                             }
//                                                         })
//                                                     } else {
//                                                         console.error(err);
//                                                     }
//                                                 })
//                                             } else {
//                                                 console.error(err);
//                                             }
//                                         })
//                                     } else {
//                                         console.error(err);
//                                     }
//                                 })
//                             } else {
//                                 console.error(err);
//                             }
//                         })
//                     } else {
//                         console.error(err);
//                     }
//                 })
//             } else {
//                 console.error(err);
//             }
//         })
//     } else {
//         console.error(err);
//     }
//
// })


//**********************************************************************************************************************


// function wokeUp1(alarmClock) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (alarmClock <= 8) {
//                 resolve('Good morning');
//             } else {
//                 reject('Oh no overslept');
//             }
//         }, 600)
//     })
//
// }
//
// function brushedHisTeeth1(cleaned) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (cleaned) {
//                 resolve('Good clean teeth');
//             } else {
//                 reject('Can not do it in time');
//             }
//         }, 500)
//     })
// }
//
// function drankCoffee1(breakfast) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (breakfast) {
//                 resolve('Om nom nom');
//             } else {
//                 reject('I do not have time for breakfast');
//             }
//
//         }, 800)
//     })
// }
//
// function wentToWork1(isJobDone) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isJobDone) {
//                 resolve(1800);
//             } else {
//                 reject('Earned little');
//             }
//
//         }, 2000)
//     })
// }
//
// function wentToTheStore1(products) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (products > 600) {
//                 resolve(products - 600);
//             } else {
//                 reject('There is not so much money');
//             }
//
//         }, 600)
//     })
// }
//
// function watchedTheLecture1(lecture) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (lecture) {
//                 resolve('I understood everything 100')
//             } else {
//                 reject('I did not understand anything')
//             }
//
//         }, 1500)
//     })
// }
//
// function playedWithTheChild1(play) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (play) {
//                 resolve('How fun they fooled around')
//             } else {
//                 reject('I have no strength')
//             }
//
//         }, 2000)
//     })
// }
//
// function wentToSleep1(sleep) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (sleep) {
//                 resolve("Let's go to sleep")
//             } else {
//                 reject("Something is wrong with me")
//             }
//
//         }, 3000)
//     })
// }
//
//
// wokeUp1(8)
//     .then(value => {
//         console.log(value)
//         return brushedHisTeeth1(value)
//     })
//     .then(value => {
//         console.log(value)
//         return drankCoffee1(value)
//     })
//     .then(value => {
//         console.log(value)
//         return wentToWork1(value)
//     })
//     .then(value => {
//         console.log(value)
//         return wentToTheStore1(value)
//     })
//     .then(value => {
//         console.log(value)
//         return watchedTheLecture1(value)
//     })
//     .then(value => {
//         console.log(value)
//         return playedWithTheChild1(value)
//     })
//     .then(value => {
//         console.log(value)
//         return wentToSleep1(value)
//     })
//     .then(value => {
//         console.log(value)
//     })
//     .catch(err => {
//         console.warn(err)
//     })


//**********************************************************************************************************************


// function wokeUp1(alarmClock) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (alarmClock <= 8) {
//                 resolve('Good morning');
//             } else {
//                 reject('Oh no overslept');
//             }
//         }, 600)
//     })
//
// }
//
// function brushedHisTeeth1(cleaned) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (cleaned) {
//                 resolve('Good clean teeth');
//             } else {
//                 reject('Can not do it in time');
//             }
//         }, 500)
//     })
// }
//
// function drankCoffee1(breakfast) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (breakfast) {
//                 resolve('Om nom nom');
//             } else {
//                 reject('I do not have time for breakfast');
//             }
//
//         }, 800)
//     })
// }
//
// function wentToWork1(isJobDone) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isJobDone) {
//                 resolve(1500);
//             } else {
//                 reject('Earned little');
//             }
//
//         }, 2000)
//     })
// }
//
// function wentToTheStore1(products) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (products > 800) {
//                 resolve(products - 800);
//             } else {
//                 reject('There is not so much money');
//             }
//
//         }, 600)
//     })
// }
//
// function watchedTheLecture1(lecture) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (lecture) {
//                 resolve('I understood everything 100')
//             } else {
//                 reject('I did not understand anything')
//             }
//
//         }, 1500)
//     })
// }
//
// function playedWithTheChild1(play) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (play) {
//                 resolve('How fun they fooled around')
//             } else {
//                 reject('I have no strength')
//             }
//
//         }, 2000)
//     })
// }
//
// function wentToSleep1(sleep) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (sleep) {
//                 resolve("Let's go to sleep")
//             } else {
//                 reject("Something is wrong with me")
//             }
//
//         }, 3000)
//     })
// }
//
//
// async function weekday() {
//     try {
//         let clock = await wokeUp1(8)
//         console.log(clock)
//
//         let brushed = await brushedHisTeeth1(true)
//         console.log(brushed)
//
//         let breakfast = await drankCoffee1(true)
//         console.log(breakfast)
//
//         let work = await wentToWork1(true)
//         console.log(work)
//
//         work = await wentToTheStore1(work)
//         console.log(work)
//
//         let lecture = await watchedTheLecture1(true)
//         console.log(lecture)
//
//         let child = await playedWithTheChild1(true)
//         console.log(child)
//
//         let sleep = await wentToSleep1(true)
//         console.log(sleep)
//     } catch (err) {
//         console.warn(err)
//     }
// }
//
//
// weekday()




