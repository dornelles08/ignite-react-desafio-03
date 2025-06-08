import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Blog } from "./pages/Blog/Index";
import { Post } from "./pages/Post";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Blog />} />
          <Route path="/post/:id" element={<Post />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
