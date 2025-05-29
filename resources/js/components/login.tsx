import React from 'react';

export default function Login() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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

          <form onSubmit={handleSubmit} className="space-y-6" autoComplete="off">
            <div>
              <input
                type="email"
                name="email"
                placeholder="E-mail @"
                className="w-full p-4 text-lg border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                autoComplete="off"
              />
            </div>

            <div>
              <input
                type="password"
                name="password"
                placeholder="Hasło"
                className="w-full p-4 text-lg border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                autoComplete="new-password"
              />
            </div>

            <div className="flex justify-between items-center">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="remember"
                  className="mr-2 w-5 h-5 text-primary border-gray-300 focus:ring-primary rounded"
                />
                <span className="text-base text-gray-600">Zapamiętaj mnie</span>
              </label>
              <a href="#" className="text-base text-primary hover:text-primary/80">
                Nie pamiętasz hasła?
              </a>
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
