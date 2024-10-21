import { AuthForm } from '@/components/auth/auth-form';
import { Icons } from '@/components/ui/icons';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col gap-[2.5rem] p-4 lg:p-0">
      <Icons.Logo className="mx-auto max-w-full w-[22.26375rem] h-auto" />
      <AuthForm />
    </div>
  );
}
