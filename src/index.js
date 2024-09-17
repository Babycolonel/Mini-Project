import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';

import reportWebVitals from './reportWebVitals';

import Home from "./components/Home";
import About from "./components/About";
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import store from './store';
import App from './components/App';

<script src="https://unpkg.com/react-router-dom/umd/react-router-dom.min.js"></script>

function seeList(){
  console.log(store);
}

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout/>}>
//           <Route index element={<Home />} />
//           <Route path="about" element={<About />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home stories={store.getState()} onArchive={() => {}}  />
  </React.StrictMode>
);

console.log(store.getState());

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
