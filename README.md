# Buku Harianku

> Your everyday diary writing website with paper-like styled

> [!WARNING]<br>Website is still under development

## Prerequisites

You'll need [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) installed.

## Getting Started

- Clone the repo: `git clone https://github.com/KelvinAnderson10/buku-harianku.git`
- Install dependencies: `npm install`
- Add your own following `firebase.config.js` on the root of the directory:

  ```
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  import { getAuth } from "firebase/auth"

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
      apiKey: "XXXX",
      authDomain: "XXXX",
      projectId: "XXXX",
      storageBucket: "XXXX",
      messagingSenderId: "XXXX",
      appId: "XXXX"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const firebaseAuth = getAuth(app)
  ```
- Running the project: `npm run dev`

## Built With

- [PaperCSS](https://github.com/papercss/papercss) - CSS framework
- [React/Redux](https://github.com/facebook/react) - Front-end framework
- [Firebase](https://firebase.google.com) - Backend services
- [React Quill](https://github.com/zenoamaro/react-quill) - Text editor library
