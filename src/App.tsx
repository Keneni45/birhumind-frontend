import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Test from "./pages/Test";
import Register from "./pages/Register";
import Tutorial from "./pages/Tutorial";
import TutorialDetail from "./pages/TutorialDetail";
import News from "./pages/News";
import Consultancy from "./pages/Consultancy";
import ForConsultancy from "./pages/ForConsultancy";
import Document from "./pages/Document";
import FinanceLinkage from "./pages/FinanceLInkage";
import ForCard from "./pages/ForCard";
import ThankYou from "./pages/ThankYou";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/tutorial/:id" element={<TutorialDetail />} />
          <Route path="/news" element={<News />} />
          <Route path="/consultancy" element={<Consultancy />} />
          <Route path="/for-consultancy" element={<ForConsultancy />} />
          <Route path="/document" element={<Document />} />
          <Route path="/finance-linkage" element={<FinanceLinkage />} />
          <Route path="/for-finance-linkage" element={<ForCard />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/test" element={<Test />} />
          <Route path="/admin" element={""} />
        </Routes>
      </Layout>
    </React.Fragment>
  );
}
export default App;
