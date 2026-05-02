import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/RootLayout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Products } from "./pages/Products";
import { ProductDetail } from "./pages/ProductDetail";
import { Partners } from "./pages/Partners";
import { Quote } from "./pages/Quote";
import { Contact } from "./pages/Contact";
import { Blog } from "./pages/Blog";
import { FAQ } from "./pages/FAQ";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "products", Component: Products },
      { path: "products/:productId", Component: ProductDetail },
      { path: "partners", Component: Partners },
      { path: "quote", Component: Quote },
      { path: "contact", Component: Contact },
      { path: "blog", Component: Blog },
      { path: "faq", Component: FAQ },
      { path: "*", Component: NotFound },
    ],
  },
]);
