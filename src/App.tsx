import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ServicesPage } from "./pages/ServicesPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ProjectDetailPage } from "./pages/ProjectDetailPage";
import { ProcessPage } from "./pages/ProcessPage";
import { ContactPage } from "./pages/ContactPage";
import { ConsultationPage } from "./pages/ConsultationPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { ArrowLeft } from "lucide-react";

// 404 Fallback Page
const NotFoundPage: React.FC = () => (
  <div className="container" style={{ padding: "8rem 1.5rem", textAlign: "center" }}>
    <span className="eyebrow">404 — Page Not Found</span>
    <h1 style={{ marginBottom: "1rem" }}>The Page You Requested Does Not Exist</h1>
    <p style={{ maxWidth: "540px", margin: "0 auto 2.5rem" }}>
      The link you followed may be incorrect, or the page may have been moved.
    </p>
    <Link to="/" className="btn btn-primary">
      <ArrowLeft size={16} />
      <span>Return to Homepage</span>
    </Link>
  </div>
);

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="projects/:id" element={<ProjectDetailPage />} />
          <Route path="process" element={<ProcessPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="consultation" element={<ConsultationPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
