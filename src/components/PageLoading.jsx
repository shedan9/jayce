import { Suspense } from 'react';
import { Skeleton } from 'antd';

export default function PageLoading({ children }) {
  return <Suspense fallback={<Skeleton />}>{children}</Suspense>;
}
