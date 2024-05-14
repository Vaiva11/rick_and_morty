# Rock and Morty project

_This project uses the Yarn package manager. Please install it if you don't already have it on your computer. Installation guide: https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable_
_NOTE: Node version: 20_

### To start frontend dev mode

```
cp .env.example .env
yarn install
yarn start
```

Frontend will start on `http://localhost:3000`

_NOTE: I understand that environment variables should be saved in GitHub/GitLab variables, but for testing purposes only, I left them in .env.example._

### To start End-to-End tests

```
yarn e2e
```

_NOTE: I created end-to-end tests (e2e) only for few cases to showcase the syntax. I understand that similar tests should be applied to all logic._
