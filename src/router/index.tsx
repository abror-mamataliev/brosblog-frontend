import { Routes, Route } from "react-router-dom"
import { lazy, Suspense } from "react";

const Layout = lazy(() => import("../pages/Layout"));
const Index = lazy(() => import("../pages/Index"));
const Categories = lazy(() => import("../pages/Categories"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));
const Login = lazy(() => import("../pages/Login"));

const Router = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Index />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/auth/login" element={<Login />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default Router;
