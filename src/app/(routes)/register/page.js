import { lazy, Suspense } from 'react';
const SignForm = lazy(() => import('@/components/SignupForm.jsx'));
export default function SignupHome() {
  return (
    <Suspense fallback={<div>Loading........</div>}>
      <SignForm />
    </Suspense>
  );
}
