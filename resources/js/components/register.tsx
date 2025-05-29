import React from 'react';

export default function Register() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="flex h-screen w-screen">
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center px-14 xl:px-24">
        <div className="w-full h-full flex items-center">
          <img src="/registerpageimage.jpg" alt="registerpageimage" className="w-full h-auto rounded-2xl object-contain" />
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center px-8 md:px-16 lg:px-24 xl:px-32">
        <div className="w-full max-w-xl">
          <div className="mb-12">
            <h1 className="headline-1 font-bold">Dołącz do nas</h1>
            <p className="text-muted text-3">Wypełnij formularz aby utworzyć konto</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6" autoComplete="off">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Imię"
                  className="w-full p-4 text-lg border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  autoComplete="off"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Nazwisko"
                  className="w-full p-4 text-lg border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  autoComplete="off"
                />
              </div>
            </div>

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
                type="tel"
                name="phone"
                placeholder="Numer telefonu"
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

            <div>
              <input
                type="password"
                name="passwordConfirmation"
                placeholder="Potwierdź hasło"
                className="w-full p-4 text-lg border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                autoComplete="new-password"
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                name="terms"
                id="terms"
                className="mr-2 w-5 h-5 text-primary border-gray-300 focus:ring-primary rounded"
              />
              <label htmlFor="terms" className="text-base text-muted">
                Akceptuję <a href="/terms" className="text-primary hover:text-primary/80">regulamin</a> i 
                <a href="/terms" className="text-primary hover:text-primary/80"> warunki wynajmu</a>
               
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-4 px-6 rounded-xl text-lg font-semibold hover:bg-primary/60 transition-colors cursor-pointer"
            >
              Zarejestruj się
            </button>

            <p className="text-center text-base text-muted">
              Masz już konto?{' '}
              <a href="/loginpage" className="text-primary hover:text-primary/80 font-medium">
                Zaloguj się
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
