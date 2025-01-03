import { Routes, Route, Navigate } from "react-router-dom"
import { ThemeProvider } from "./components/ui/theme-provider"
import { Toaster } from "./components/ui/toaster"
import { Home } from "./pages/Home"
import { About } from "./pages/company/About"
import { Features } from "./pages/Features"
import { Contact } from "./pages/company/Contact"
import { Blog } from "./pages/company/Blog"
import { Careers } from "./pages/company/Careers"
import { Privacy } from "./pages/legal/Privacy"
import { Terms } from "./pages/legal/Terms"
import { Security } from "./pages/legal/Security"
import { Layout } from "./components/Layout"
import { Pricing } from "./pages/products/Pricing"
import { RoleManager } from "./pages/products/RoleManager"
import { DomainGovernance } from "./pages/products/DomainGovernance"
import { TaskAutomation } from "./pages/products/TaskAutomation"
import { Compliance } from "./pages/products/Compliance"
import { StartTrial } from "./pages/StartTrial"
import { WatchDemo } from "./pages/WatchDemo"
import { ContactSales } from "./pages/ContactSales"
import { GetStarted } from "./pages/GetStarted"
import { Documentation } from "./pages/resources/Documentation"
import { Training } from "./pages/resources/Training"
import { Support } from "./pages/resources/Support"
import { CaseStudies } from "./pages/resources/CaseStudies"
import { HelmetProvider } from 'react-helmet-async'
import { useAnalytics } from './hooks/useAnalytics'

export default function App() {
  useAnalytics();

  // Log configured routes for debugging
  console.log("Configured routes:", [
    "/",
    "/solutions/role-management",
    "/solutions/data-governance",
    "/solutions/task-automation",
    "/pricing",
    "/case-studies",
    "/company/about",
    "/company/blog",
    "/company/careers",
    "/company/contact",
    "/features",
    "/products/pricing",
    "/products/role-manager",
    "/products/domain-governance",
    "/products/task-automation",
    "/products/compliance",
    "/resources/documentation",
    "/resources/training",
    "/resources/support",
    "/resources/case-studies",
    "/legal/privacy",
    "/legal/terms",
    "/legal/security",
    "/start-trial",
    "/watch-demo",
    "/contact-sales",
    "/get-started"
  ]);

  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="light" storageKey="ui-theme">
        <Routes>
          {console.log("Rendering Routes")}
          <Route path="/" element={<Layout />}>
            {console.log("Configuring Route paths")}
            <Route index element={<Home />} />
            <Route path="/solutions/role-management" element={<RoleManager />} />
            <Route path="/solutions/data-governance" element={<DomainGovernance />} />
            <Route path="/solutions/task-automation" element={<TaskAutomation />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="company/about" element={<About />} />
            <Route path="company/blog" element={<Blog />} />
            <Route path="company/careers" element={<Careers />} />
            <Route path="company/contact" element={<Contact />} />
            <Route path="features" element={<Features />} />
            <Route path="products/pricing" element={<Pricing />} />
            <Route path="products/role-manager" element={<RoleManager />} />
            <Route path="products/domain-governance" element={<DomainGovernance />} />
            <Route path="products/task-automation" element={<TaskAutomation />} />
            <Route path="products/compliance" element={<Compliance />} />
            <Route path="resources/documentation" element={<Documentation />} />
            <Route path="resources/training" element={<Training />} />
            <Route path="resources/support" element={<Support />} />
            <Route path="resources/case-studies" element={<CaseStudies />} />
            <Route path="legal/privacy" element={<Privacy />} />
            <Route path="legal/terms" element={<Terms />} />
            <Route path="legal/security" element={<Security />} />
            <Route path="start-trial" element={<StartTrial />} />
            <Route path="watch-demo" element={<WatchDemo />} />
            <Route path="contact-sales" element={<ContactSales />} />
            <Route path="get-started" element={<GetStarted />} />
          </Route>
        </Routes>
        <Toaster />
      </ThemeProvider>
    </HelmetProvider>
  )
}