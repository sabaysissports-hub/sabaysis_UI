import { Route, Routes, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Maintenance } from './pages/Maintenance';
import { ContactUs } from './pages/ContactUs';
import { ServiceDetail } from './pages/ServiceDetail';
import { ProductDetail } from './pages/ProductDetail';
import { ProductCatalog } from './pages/ProductCatalog'; 
import { PadelCourts } from './pages/PadelCourts';
import { NotFound } from './pages/NotFound';
import { NavBar } from './components/navbar/NavBar';
import { Footer } from './components/layout/Footer';
import { useSmoothScroll } from './hooks/useSmoothScroll';

import { Login } from './pages/admin/Login';
import { Messages } from './pages/admin/Messages';
import { Products } from './pages/admin/Products';
import Services from './pages/admin/Services';
import { Testimonials } from './pages/admin/Testimonials';
import { Dashboard } from './pages/admin/Dashboard';
import { AdminLayout, ProtectedRoute } from './components/admin/AdminLayout';

import { ScrollToTop } from './components/layout/ScrollToTop';
import { ThemeProvider } from './components/theme-provider';
import FloatingSocialLinks from './components/layout/FloatingSocialLinks';

function App() {
  useSmoothScroll();

  return (
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <div className="min-h-screen bg-white font-sans text-slate-900 dark:bg-slate-950 dark:text-slate-50">
          <ScrollToTop />
          <FloatingSocialLinks />
          <Routes>
              <Route
              path="/*"
              element={
                <>
                  <NavBar />
                  <div className="pt-16 lg:pt-20">
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/maintenance" element={<Maintenance />} />
                      <Route path="/contact-us" element={<ContactUs />} />
                      <Route path="/padel-courts" element={<PadelCourts />} />
                      <Route path="/services/:slug" element={<ServiceDetail />} />
                      <Route path="/products" element={<ProductCatalog />} /> 
                      <Route path="/products/:slug" element={<ProductDetail />} />
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                    <Footer />
                  </div>
                </>
              }
            />
            <Route path="/admin/login" element={<Login />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<Navigate to="dashboard" replace />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="messages" element={<Messages />} />
                <Route path="products" element={<Products />} />
                <Route path="services" element={<Services />} />
                <Route path="testimonials" element={<Testimonials />} />
              </Route>
            </Route>
          </Routes>
        </div>
      </ThemeProvider>
  );
}

export default App;
