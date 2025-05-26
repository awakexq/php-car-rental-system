export interface Car {
  id_samochodu: number;
  zdjecia?: string[];
  marka: string;
  model: string;
  ilosc_koni: number;
  rocznik: number;
  kolor: string;
  cena_za_dzien: number;
  dostepny: boolean;
  typ: string;
  rodzaj: string;
  drzwi: number;
  pasazerowie: number;
  ocena?: number;
  ilosc_ocen?: number;
  created_at: string;
  updated_at: string;
}

export interface CarFormData {
  zdjecia?: string[];
  marka: string;
  model: string;
  ilosc_koni: number;
  rocznik: number;
  kolor: string;
  cena_za_dzien: number;
  dostepny?: boolean;
  typ: string;
  rodzaj: string;
  drzwi: number;
  pasazerowie: number;
  ocena?: number;
  ilosc_ocen?: number;
} 