import { useForm } from '@inertiajs/react';
import React, { FormEventHandler } from 'react';

type LoginForm = {
    email: string;
    password: string;
    remember: boolean;
};

export default function Login() {
  const { data, setData, post, processing, errors, reset } = useForm<Required<LoginForm>>({
    email: '',
    password: '',
    remember: false,
});

const submit: FormEventHandler = (e) => {
    e.preventDefault();
    post(route('login'), {
        onFinish: () => reset('password'),
    });
};
  

  return (
    <div className="flex h-screen w-screen">
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center px-14 xl:px-24">
        <div className="w-full h-full flex items-center">
          <img src="/loginpageimage.jpg" alt="loginpageimage" className="w-full h-auto rounded-2xl object-contain" />
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center px-8 md:px-16 lg:px-24 xl:px-32">
        <div className="w-full max-w-xl">
          <div className="mb-12">
            <h1 className="headline-1 font-bold">Witaj z powrotem</h1>
            <p className="text-muted text-3">Wpisz swoje dane aby się zalogować</p>
          </div>

          <form onSubmit={submit} className="space-y-6" autoComplete="off">
            <div>
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={(e) => setData('email', e.target.value)}
                disabled={processing}
                placeholder="E-mail @"
                className="w-full p-4 text-lg border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                autoComplete="off"
              />
            </div>

            <div>
              <input
                type="password"
                name="password" 
                value={data.password}
                onChange={(e) => setData('password', e.target.value)}
                disabled={processing}
                placeholder="Hasło"
                className="w-full p-4 text-lg border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                autoComplete="new-password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-4 px-6 rounded-xl text-lg font-semibold hover:bg-primary/60 transition-colors cursor-pointer"
            >
              Zaloguj się
            </button>

            <p className="text-center text-base text-gray-600">
              Nie masz konta?{' '}
              <a href="/registerpage" className="text-primary hover:text-primary/80 font-medium">
                Zarejestruj się
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
