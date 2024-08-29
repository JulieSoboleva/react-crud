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

export default function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path={'/'} element={<Layout />} >
        <Route index path={'/'} element={<Posts />} loader={postsLoader} />
        <Route path={'/posts/:id'} element={<Post />} loader={postLoader} />
        <Route path={'/posts/new'} element={<AddPost />} />
        <Route path={'/posts/edit/:id'} element={<EditPost />} loader={postLoader}/>
      </Route>
    ), { basename: '/react-crud', }
  );
  return (
    <RouterProvider router={routes} />
  );
}