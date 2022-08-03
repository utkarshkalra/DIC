// Ques1) creating promise

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
  }, 4000);
});

// Ques2) using promise

const p = promise.then((data) => console.log(data));

// Ques3) using Promise.resolve() and Promise.reject()

const p2 = Promise.resolve().then(
  () =>
    setTimeout(() => {
      console.log("shorter success");
    }, 4000),
  () => {
    console.log("rejected");
  }
);
const p3 = Promise.reject().then(
  () =>
    setTimeout(() => {
      console.log("shorter success");
    }, 4000),
  () => {
    console.log("rejected");
  }
);

//Ques4) fetching using async await

const fetchUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/");
  const data = await res.json();
  console.log(data);
};

//Ques5)

const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

const getData = async () => {
  const PromisedData = await Promise.all(urls.map((url) => fetch(url)));
  const [users, posts, albums] = await Promise.all(
    PromisedData.map((res) => res.json())
  );
  console.log("users", users);
  console.log("posts", posts);
  console.log("albums", albums);

  return [users, posts, albums];
};

// Ques6) try catch block
const templateFetch = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log("oooooops", e);
  }
};
const URLs = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholdeTYPO.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

const Promises = URLs.map(async (url) => await templateFetch(url));
Promise.all(Promises).then(console.log);
