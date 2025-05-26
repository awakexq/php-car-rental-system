import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible'

export default function TermsRent() {
  const [wymaganiaKierowcy, setWymaganiaKierowcy] = useState(true)
  const [wymaganeDokumenty, setWymaganeDokumenty] = useState(false)
  const [platnosciKaucja, setPlatnosciKaucja] = useState(false)
  const [zasadyZwrotu, setZasadyZwrotu] = useState(false)
  const [ograniczenia, setOgraniczenia] = useState(false)
  const [ubezpieczenieSkzody, setUbezpieczenieSkzody] = useState(false)

  return (
    <section className="w-full py-12 px-4">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-12">
          <h1 className="headline-1 font-bold pb-4">
            Warunki <span className="text-primary">Wynajmu</span>
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Przeczytaj dokładnie nasze warunki wynajmu, aby cieszyć się bezproblemową jazdą. 
            Wszystkie informacje są jasno określone dla Twojego bezpieczeństwa i komfortu.
          </p>
        </div>


        <div className="space-y-4">
          <Card className="overflow-hidden">
            <Collapsible open={wymaganiaKierowcy} onOpenChange={setWymaganiaKierowcy}>
              <CollapsibleTrigger className="w-full">
                <CardHeader className=" cursor-pointer">
                  <CardTitle className="flex items-center justify-between text-left">
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">👤</span>
                      <span className="text-xl">Wymagania dla kierowcy</span>
                    </div>
                    <div className={`transform transition-transform duration-200 ${
                      wymaganiaKierowcy ? 'rotate-180' : ''
                    }`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </CardTitle>
                </CardHeader>
              </CollapsibleTrigger>
              
              <CollapsibleContent>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span><strong className='text-4'>Wiek:</strong> minimum 20 lat (niektóre auta z większą mocą wymagają 23 lat)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span><strong className='text-4'>Prawo jazdy:</strong> minimum 1 rok (kategoria B)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span><strong className='text-4'>Dodatkowi kierowcy:</strong> każdy dodatkowy kierowca musi spełniać te same wymagania</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span><strong className='text-4'>Ograniczenia:</strong> bez punktów karnych za ostatnie 6 miesięcy</span>
                    </div>
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </Card>


          <Card className="overflow-hidden">
            <Collapsible open={wymaganeDokumenty} onOpenChange={setWymaganeDokumenty}>
              <CollapsibleTrigger className="w-full">
                <CardHeader className="cursor-pointer">
                  <CardTitle className="flex items-center justify-between text-left">
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">📋</span>
                      <span className="text-xl">Dokumenty potrzebne do wynajmu</span>
                    </div>
                    <div className={`transform transition-transform duration-200 ${
                      wymaganeDokumenty ? 'rotate-180' : ''
                    }`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </CardTitle>
                </CardHeader>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-primary">Dokumenty obowiązkowe:</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span>Dowód osobisty lub paszport (ważny)</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span>Prawo jazdy (ważne, plastikowe)</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span>Karta płatnicza (do blokady depozytu)</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-blue-700">Dodatkowe dokumenty (zalecane):</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span>Zaświadczenie o zatrudnieniu</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span>Potwierdzenie adresu zamieszkania</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </Card>

         
          <Card className="overflow-hidden">
            <Collapsible open={platnosciKaucja} onOpenChange={setPlatnosciKaucja}>
              <CollapsibleTrigger className="w-full">
                <CardHeader className="cursor-pointer">
                  <CardTitle className="flex items-center justify-between text-left">
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">💳</span>
                      <span className="text-xl">Płatności i kaucja</span>
                    </div>
                    <div className={`transform transition-transform duration-200 ${
                      platnosciKaucja ? 'rotate-180' : ''
                    }`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </CardTitle>
                </CardHeader>
              </CollapsibleTrigger>
              
              <CollapsibleContent>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2 text-green-700">Akceptowane płatności:</h4>
                        <div className="space-y-2">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                            <span>Karta płatnicza (Visa, Mastercard)</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                            <span>Przelew bankowy (z wyprzedzeniem)</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2 text-yellow-700">Wysokość kaucji:</h4>
                        <div className="space-y-2">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                            <span>0-300 zł/dzień: 2x cena dziennego wynajmu</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                            <span>300-600 zł/dzień: 2.5x cena dziennego wynajmu</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                            <span>600-1000 zł/dzień: 3x cena dziennego wynajmu</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                            <span>Powyżej 1000 zł/dzień: 3.5x cena dziennego wynajmu</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-sm text-blue-700">
                        <strong>Uwaga:</strong> Kaucja jest blokowana na karcie płatniczej i zwracana w ciągu 3-7 dni roboczych po bezproblemowym zwrocie pojazdu.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </Card>

          <Card className="overflow-hidden">
            <Collapsible open={zasadyZwrotu} onOpenChange={setZasadyZwrotu}>
              <CollapsibleTrigger className="w-full">
                <CardHeader className="cursor-pointer">
                  <CardTitle className="flex items-center justify-between text-left">   
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">🔄</span>
                      <span className="text-xl">Zasady zwrotu pojazdu</span>
                    </div>
                    <div className={`transform transition-transform duration-200 ${
                      zasadyZwrotu ? 'rotate-180' : ''
                    }`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </CardTitle>
                </CardHeader>
              </CollapsibleTrigger>
              
              <CollapsibleContent>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <div>
                          <strong>Zwrot z pełnym bakiem:</strong> 
                          <p className="text-sm text-muted mt-1">Pojazd musi być zwrócony z takim samym poziomem paliwa jak przy odbiorze. W przypadku braku paliwa naliczamy 8 zł/litr + opłata serwisowa 50 zł.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <div>
                          <strong>Punktualność:</strong>
                          <p className="text-sm text-muted mt-1">Tolerancja spóźnienia: 1 godzina. Każda rozpoczęta godzina spóźnienia = 10% stawki dobowej.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <div>
                          <strong>Stan pojazdu:</strong>
                          <p className="text-sm text-muted mt-1">Auto powinno być zwrócone w stanie czystym (zewnętrznie). Czyszczenie wnętrza 90 zł, mycie auta 40 zł.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <div>
                          <strong>Dokumenty i akcesoria:</strong>
                          <p className="text-sm text-muted mt-1">Wszystkie dokumenty, kluczyki, ładowarki i akcesoria muszą być zwrócone w komplecie.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </Card>

          <Card className="overflow-hidden">
            <Collapsible open={ograniczenia} onOpenChange={setOgraniczenia}>
              <CollapsibleTrigger className="w-full">
                <CardHeader className=" cursor-pointer">
                  <CardTitle className="flex items-center justify-between text-left">
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">⚠️</span>
                      <span className="text-xl">Ograniczenia i zakazy</span>
                    </div>
                    <div className={`transform transition-transform duration-200 ${
                      ograniczenia ? 'rotate-180' : ''
                    }`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </CardTitle>
                </CardHeader>
              </CollapsibleTrigger>
              
              <CollapsibleContent>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                      <h4 className="font-semibold mb-3 text-red-700 flex items-center gap-2">
                        <span>🚫</span> Bezwzględne zakazy:
                      </h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                          <span>Palenie papierosów/e-papierosów w pojeździe</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                          <span>Przewóz zwierząt bez specjalnego zezwolenia</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                          <span>Jazda w stanie nietrzeźwości lub pod wpływem środków odurzających</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                          <span>Uczestnictwo w rajdach, wyścigach lub szkoleniach na torze</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                      <h4 className="font-semibold mb-3 text-orange-700 flex items-center gap-2">
                        <span>🌍</span> Ograniczenia geograficzne:
                      </h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                          <span>Wyjazdy za granicę wymagają wcześniejszego zgłoszenia i dodatkowej opłaty</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                          <span>Kraje UE: dodatkowa opłata 50 zł/dobę</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                          <span>Kraje spoza UE: indywidualna wycena</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                          <span>Maksymalny zasięg dostawy: 500 km od Częstochowy</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </Card>

          <Card className="overflow-hidden">
            <Collapsible open={ubezpieczenieSkzody} onOpenChange={setUbezpieczenieSkzody}>
              <CollapsibleTrigger className="w-full">
                <CardHeader className=" cursor-pointer">
                  <CardTitle className="flex items-center justify-between text-left">
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">🛡️</span>
                      <span className="text-xl">Ubezpieczenie i szkody</span>
                    </div>
                    <div className={`transform transition-transform duration-200 ${
                      ubezpieczenieSkzody ? 'rotate-180' : ''
                    }`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </CardTitle>
                </CardHeader>
              </CollapsibleTrigger>
              
              <CollapsibleContent>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-blue-700">Ochrona ubezpieczeniowa:</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span>OC, AC, NNW - pełne ubezpieczenie</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span>Assistance 24/7 na terenie Polski</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span>Samochód zastępczy w przypadku awarii</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-gray-700">Odpowiedzialność najemcy:</h4>
                      <div className="space-y-2">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-gray-600 rounded-full mt-2"></div>
                          <span>Maksymalna odpowiedzialność: wysokość kaucji</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-gray-600 rounded-full mt-2"></div>
                          <span>Kradzież przez niedbalstwo: pełna wartość pojazdu</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-gray-600 rounded-full mt-2"></div>
                          <span>Szkody powstałe wbrew regulaminowi: pełne pokrycie kosztów</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </Card>
        </div>

      
        <Card className="mt-12 bg-primary text-white">
          <CardContent className="text-center py-8">
            <h3 className="text-2xl font-bold mb-4">Masz pytania?</h3>
            <p className="mb-6 text-white">
              Nasz zespół jest dostępny 24/7, aby pomóc Ci w każdej sytuacji.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2">
                <span className="text-xl">📞</span>
                <span className="font-semibold">+48 539 239 222</span>
              </div>
            </div>
          </CardContent>
        </Card>


        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Akceptuję warunki wynajmu i chcę sprawdzić dostępne samochody!
          </p>
          <a 
            href="/currentoffer" 
            className="inline-block px-8 py-3 bg-primary hover:bg-primary/80 text-white rounded-lg font-semibold text-lg transition-colors"
          >
            Sprawdź dostępne auta
          </a>
        </div>
      </div>
    </section>
  )
}
