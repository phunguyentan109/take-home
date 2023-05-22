## Take-home Test
This simple web application is used to get the session data and its program with some filtering capability.  

---
### Getting Started

Install and run the development server:

```bash
yarn
```

Next, create ``.env.local`` file and copy below:
```bash
NEXT_PUBLIC_RESTURL=http://localhost:3000/api
DATABASE_URL=https://api.entrylevel.net/test
```

Finally, run command below to start the development server
```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

### Description
#### Front-end

- **Next.js** is used with **Redux** & **Redux Toolkit** for easily managing data inside redux storage and scaling to larger scale in the future 
- **Redux Toolkit Query** is applied to manage API and simplify data fetching process, this helps shortening the time for development while still providing reliability and customizable when needed. Besides, code-splitting api endpoints is also applied to trim down initial bundle size.
- **AntD** is used for building the UI, it contains a large set of components for multiple usage purposes. Besides, it comes with its own form handlers (this form can also be used with custom form item) and icons, using this UI library will really speed up the process of creating a complete and interactive UI
- **Compiled** is used for styling component, this is a zero-runtime css-in-js library which have css-in-js blocks built into styles ahead of time, so it totally avoids runtime performance issues

#### Back-end

- The backend architecture follows the serverless architecture, APIs are implemented using Next.js API Routes instead of a custom server (using ``Express.js``, etc..), therefore, serverless functions and automatic static optimization works as usual, ``Server-side Rendering`` or ``Static Site Generation`` is ready to perform if needed. Moreover, less code is written since developers only focus on writing business logic code, leading to quickly deliver the result.
- The handlers code written for handling business logic is divided following three-layer concepts:
  - `.controller` for validating the request params/body and responding with suitable data
  - `.service` for transforming data to suit the business needs
  - `.repo(sitory)` for wrapping methods used to get data from external sources or database, this reduces the time for replacement and increase reusable ability

#### Helpers

- **Plop.js** is applied to generate code directories/files based on templates to speed up the process of preparing folders/files and writing repetitive code. Moreover, using generated folders/files helps unify and preserve project structure.
- **Typescript** is written on both Frontend and Backend to make the code flow more readable and enhance the reliability.