import { lazy } from 'react';
import { Routes, Route } from 'react-router';
import PageLoading from '@/components/PageLoading.jsx';

const AppLayout = lazy(() => import('@/components/layout/AppLayout'));
const Home = lazy(() => import('@/views/home/HomeIndex'));
const Setting = lazy(() => import('@/views/setting/SettingIndex'));
const NotFound = lazy(() => import('@/views/404/NotFound'));

export default function RouterRender() {
  return (
    <Routes>
      <Route
        element={
          <PageLoading>
            <AppLayout />
          </PageLoading>
        }
      >
        <Route
          path="/"
          element={
            <PageLoading>
              <Home />
            </PageLoading>
          }
        />
        <Route
          path="/setting"
          element={
            <PageLoading>
              <Setting />
            </PageLoading>
          }
        />
        <Route
          path="/*"
          element={
            <PageLoading>
              <NotFound />
            </PageLoading>
          }
        />
      </Route>
    </Routes>
  );
}
