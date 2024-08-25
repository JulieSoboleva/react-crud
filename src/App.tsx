import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

import { postsLoader, postLoader } from './loaders';
import { Layout } from './components/Layout';
import { Posts } from './pages/Posts';
import { AddPost } from './pages/AddPost';
import { Post } from './pages/Post';
import { EditPost } from './pages/EditPost';

import './App.css';

export const baseURL = '/react-crud';

export default function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path={`${baseURL}/`} element={<Layout />}>
        <Route index path={`${baseURL}/`} element={<Posts />} loader={postsLoader} />
        <Route path={`${baseURL}/posts/:id`} element={<Post />} loader={postLoader} />
        <Route path={`${baseURL}/posts/new`} element={<AddPost />} />
        <Route path={`${baseURL}/posts/edit/:id`} element={<EditPost />} loader={postLoader}/>
      </Route>
    )
  );
  return (
    <RouterProvider router={routes} />
  );
}