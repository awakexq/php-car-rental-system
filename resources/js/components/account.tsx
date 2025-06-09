import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import UserRentals from './UserRentals'

export default function Account() {
  const [ustawieniaKonta, setUstawieniaKonta] = useState(false)
  const [preferencje, setPreferencje] = useState(false)
  const [bezpieczenstwo, setBezpieczenstwo] = useState(false)
  const [passwordForm, setPasswordForm] = useState({
    current_password: '',
    password: '',
    password_confirmation: ''
  })
  const [isLoading, setIsLoading] = useState(false)

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      await axios.put('/password', passwordForm)
      toast.success('Hasło zostało zmienione pomyślnie')
      setPasswordForm({
        current_password: '',
        password: '',
        password_confirmation: ''
      })
    } catch (error: unknown) {
      if ((error as any).response?.data?.errors) {
        Object.values((error as any).response.data.errors).forEach((errorMsg: unknown) => {
          if (Array.isArray(errorMsg) && errorMsg.length > 0) {
            toast.error(errorMsg[0])
          }
        })
      } else {
        toast.error('Wystąpił błąd podczas zmiany hasła')
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="w-full py-12 px-4">
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="headline-1 font-bold">
            Twoje <span className="text-primary">Konto</span>
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Witaj w panelu twojego konta
          </p>
        </div>
        <UserRentals />
        <div className="mt-8 mb-8">
          <Card className="overflow-hidden">
            <Collapsible open={ustawieniaKonta} onOpenChange={setUstawieniaKonta}>
              <CollapsibleTrigger className="w-full">
                <CardHeader className="cursor-pointer">
                  <CardTitle className="flex items-center justify-between text-left">
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">⚙️</span>
                      <span className="text-xl">Ustawienia konta</span>
                    </div>
                    <div className={`transform transition-transform duration-200 ${
                      ustawieniaKonta ? 'rotate-180' : ''
                    }`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </CardTitle>
                </CardHeader>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent>
                  <div className="space-y-6 mt-4">
                    <Card className="border border-gray-200">
                      <Collapsible open={bezpieczenstwo} onOpenChange={setBezpieczenstwo}>
                        <CollapsibleTrigger className="w-full">
                          <CardHeader className="cursor-pointer">
                            <CardTitle className="flex items-center justify-between text-left">
                              <div className="flex items-center gap-4">
                                <span className="text-2xl">🔒</span>
                                <span>Bezpieczeństwo</span>
                              </div>
                              <div className={`transform transition-transform duration-200 ${
                                bezpieczenstwo ? 'rotate-180' : ''
                              }`}>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                              </div>
                            </CardTitle>
                          </CardHeader>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <CardContent>
                            <div className="space-y-4">
                              <div>
                                <h4 className="font-semibold mb-4 mt-4">Zmień hasło</h4>
                                <form onSubmit={handlePasswordChange} className="space-y-4">
                                  <input
                                    type="password"
                                    placeholder="Obecne hasło"
                                    className="w-full p-3 border rounded-lg"
                                    value={passwordForm.current_password}
                                    onChange={(e) => setPasswordForm({...passwordForm, current_password: e.target.value})}
                                  />
                                  <input
                                    type="password"
                                    placeholder="Nowe hasło"
                                    className="w-full p-3 border rounded-lg"
                                    value={passwordForm.password}
                                    onChange={(e) => setPasswordForm({...passwordForm, password: e.target.value})}
                                  />
                                  <input
                                    type="password"
                                    placeholder="Potwierdź nowe hasło"
                                    className="w-full p-3 border rounded-lg"
                                    value={passwordForm.password_confirmation}
                                    onChange={(e) => setPasswordForm({...passwordForm, password_confirmation: e.target.value})}
                                  />
                                  <button 
                                    type="submit" 
                                    className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/60 transition-colors cursor-pointer disabled:opacity-50"
                                    disabled={isLoading}
                                  >
                                    {isLoading ? 'Zmieniam hasło...' : 'Zmień hasło'}
                                  </button>
                                </form>
                              </div>
                              <div className="pt-4 border-t">
                                <h4 className="font-semibold mb-4">Weryfikacja dwuetapowa</h4>
                                <div className="flex items-center justify-between">
                                  <span>Włącz weryfikację dwuetapową</span>
                                  <input type="checkbox" className="w-5 h-5" />
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </CollapsibleContent>
                      </Collapsible>
                    </Card>

                    <Card className="border border-gray-200">
                      <Collapsible open={preferencje} onOpenChange={setPreferencje}>
                        <CollapsibleTrigger className="w-full">
                          <CardHeader className="cursor-pointer">
                            <CardTitle className="flex items-center justify-between text-left">
                              <div className="flex items-center gap-4">
                                <span className="text-2xl">🔔</span>
                                <span>Preferencje</span>
                              </div>
                              <div className={`transform transition-transform duration-200 ${
                                preferencje ? 'rotate-180' : ''
                              }`}>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                              </div>
                            </CardTitle>
                          </CardHeader>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <CardContent>
                            <div className="space-y-4">
                              <div>
                                <h4 className="font-semibold mb-4 mt-4">Powiadomienia</h4>
                                <div className="space-y-3">
                                  <div className="flex items-center justify-between">
                                    <span>Powiadomienia email</span>
                                    <input type="checkbox" className="w-5 h-5" defaultChecked />
                                  </div>
                                  <div className="flex items-center justify-between">
                                    <span>Powiadomienia SMS</span>
                                    <input type="checkbox" className="w-5 h-5" defaultChecked />
                                  </div>
                                  <div className="flex items-center justify-between">
                                    <span>Newsletter</span>
                                    <input type="checkbox" className="w-5 h-5" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </CollapsibleContent>
                      </Collapsible>
                    </Card>
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </Card>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <span className="text-2xl">🚗</span>
                <span className="text-xl">Wynajem samochodów</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="text-muted">
                  Wypożyczaj samochody szybko i wygodnie. Szeroki wybór pojazdów dostępny od ręki.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span className="font-medium">Szybka rezerwacja online</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span className="font-medium">Odbiór w dogodnej lokalizacji</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span className="font-medium">Pełne ubezpieczenie w cenie</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <span className="text-2xl">💎</span>
                <span className="text-xl">Korzyści</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-5">
                <p className="text-muted ">
                  Korzystaj z dodatkowych przywilejów jako nasz klient.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span className="font-medium">Rabaty na kolejne wynajmy</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span className="font-medium">Pierwszeństwo rezerwacji</span>
                  </li> 
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span className="font-medium">Dedykowana obsługa klienta</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <Card className="bg-white shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <span className="text-2xl">📞</span>
                <span className="text-xl">Kontakt</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-primary">☎</span>
                  <span className="font-medium">+48 539 239 222</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">✉</span>
                  <span className="font-medium">kontakt@rentcar.pl</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">🏢</span>
                  <span className="font-medium">Częstochowa, ul. Michałowskiego</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <span className="text-2xl">⚡</span>
                <span className="text-xl">Najważniejsze</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <a href="/currentoffer" className="block text-primary hover:underline font-medium">
                  → Zobacz dostępne samochody
                </a>
                <a href="/terms" className="block text-primary hover:underline font-medium">
                  → Sprawdź warunki wynajmu
                </a>
                <a href="/#jak-wynajac" className="block text-primary hover:underline font-medium">
                  → Jak wynająć auto?
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <span className="text-2xl">ℹ️</span>
                <span className="text-xl">Informacje</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="text-sm text-muted">
                  Godziny otwarcia biura stacjonarnego:
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-primary font-medium">→</span>
                  <span>Pon-Pt: 8:00 - 20:00</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary font-medium">→</span>
                  <span>Sob: 9:00 - 18:00</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary font-medium">→</span>
                  <span>Nd: 10:00 - 17:00</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-12 bg-primary text-white">
          <CardContent className="text-center py-6">
            <h3 className="text-2xl font-bold mb-4">Potrzebujesz pomocy?</h3>
            <p className="mb-6">
              Nasz zespół obsługi klienta jest dostępny 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2">
                <span className="text-xl">📞</span>
                <span className="font-semibold">+48 539 239 222</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">✉️</span>
                <span className="font-semibold">pomoc@rentcar.pl</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
