// const apis = [
//   "https://jsonplaceholder.typicode.com/posts/1",
//   "https://jsonplaceholder.typicode.com/posts/2",
//   "https://jsonplaceholder.typicode.com/posts/3",
// ];
// function test(url: string): Promise<void> {
//   console.log(`url look: ${url}`);
//   return fetch(url)
//     .then((res) => {
//       if (!res.ok) {
//         console.log("xatolik bor");
//       }
//       return res.json();
//     })
//     .then((data) => {
//       console.log(`Res:`, data);
//     })
//     .catch((error) => {
//       console.log(`Error ${url}:`, error.message);
//     });
// }
// function test1(apis: string[]) {
//   let promise = Promise.resolve();

//   apis.forEach((url) => {
//     promise = promise.then(() => test(url));
//   });
//   return promise;
// }
// test1(apis);
// 2------------
// const api1 = "https://jsonplaceholder.typicode.com/users";
// const api2 = "https://jsonplaceholder.typicode.com/posts";
// function fechData(url: string): Promise<any> {
//   return fetch(url)
//     .then((res) => {
//       if (!res.ok) {
//         console.log("error");
//         return null;
//       }
//       return res.json();
//     })
//     .catch((error) => {
//       console.log(`Error${url}:`, error.message);
//       return null;
//     });
// }
// Promise.all([fechData(api1), fechData(api2)]).then((results) => {
//   console.log(results);
// });

// as/aw
// 3--------------
// const api1 = "https://jsonplaceholder.typicode.com/photos";
// const api2 = "https://jsonplaceholder.typicode.com/todos";
// const api3 = "https://jsonplaceholder.typicode.com/comments";
// function pract(url: string): Promise<any> {
//   return fetch(url)
//   .then((response) => (response.ok ? response.json() : null))
//   .catch(() => null);
// }
// Promise.race([pract(api1), pract(api2), pract(api3)])
//   .then(result =>{
//         console.log(result);
// })
// 1---------------
// const apis = [
//     "https://jsonplaceholder.typicode.com/posts/1",
//     "https://jsonplaceholder.typicode.com/posts/2",
//     "https://jsonplaceholder.typicode.com/posts/3",
//   ];

//   async function fechData(url: string) {
//     try {
//       const res = await fetch(url);
//       if (!res.ok) {
//         throw new Error(`Error ${res.status}`);
//       }
//       const data = await res.json();
//       console.log(`Res${url}:`, data);
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   async function test(apis: string[]) {
//     for (const url of apis) {
//       await fechData(url);
//     }
//   }

//   test(apis);

// 2-------------
// const api1 = "https://jsonplaceholder.typicode.com/users";
// const api2 = "https://jsonplaceholder.typicode.com/posts";

// async function fetchData(url: string) {
//   const response = await fetch(url);
//   if (!response.ok) {
//     throw new Error("Error");
//   }
//   return response.json();
// }
// async function asfech() {
//   try {
//     const [users, posts] = await Promise.all([fetchData(api1), fetchData(api2)]);
//     console.log("asfech:", [users, posts]);
//   } catch (error) {
//     console.log(error);
//   }
// }
// asfech();

// 3--------------
// interface Todo {
//   id: number;
//   title: string;
//   url: string;
// }
// interface Photo {
//   id: number;
//   title: string;
//   completed: boolean;
// }
// interface Node {
//   id: number;
//   name: string;
//   body: string;
// }
// const api1 = "https://jsonplaceholder.typicode.com/photos";
// const api2 = "https://jsonplaceholder.typicode.com/todos";
// const api3 = "https://jsonplaceholder.typicode.com/node";
// async function fetchData(url: string): Promise<any> {
//   const res = await fetch(url);
//   if (!res.ok) {
//     throw new Error("Error");
//   }
//   return res.json();
// }
// async function fetchFirstSuccess() {
//   const urls = [api1, api2, api3];
//   for (let i = 0; i < urls.length; i++) {
//     try {
//       const result = await fetchData(urls[i]);
//       return;
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   console.log("Error All Api");
// }
// fetchFirstSuccess();

// ---------------------------------------

// 1-------
// function Data<T>(data: T): { status: string; data: T } {
//     return {
//       status: "success",
//       data ,
//     };
//   }

//   const SString = Data("Assalamu alekim");
//   console.log(SString);

//   const wrapObject = Data({ name: "Abdujamol", age: 19 });
//   console.log(wrapObject);

//   const NNumber = Data(99);
//   console.log(NNumber);

// 2---------
// function prac<T>(arr1: T[], arr2: T[]): T[] {
//     return arr1.filter(element => arr2.includes(element));
// }
// const string1 = ["AMG", "BMW", "GM"];
// const string2 = ["BYD", "TOYOTA", "RR"];

// const commonStrings = prac(string1, string2);
// console.log(commonStrings);

// const number1 = [1, 2, 3, 4];
// const number2 = [3, 4, 5, 6];

// const commonNumbers = prac(number1, number2);
// console.log(commonNumbers);
