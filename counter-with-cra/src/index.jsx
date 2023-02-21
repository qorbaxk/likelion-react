import { StrictMode } from "react";
// React v18 부터 서버사이드 지원
// 리액트돔의 server / client 구분
import ReactDOM from "react-dom/client";
// Webpack 모듈 번들러
// 스크립트 파일 확장자 생략 (.js, .jsx, .ts, .tsx, .json, .wasm)
import './styles/global.css';
import App from "./app/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);