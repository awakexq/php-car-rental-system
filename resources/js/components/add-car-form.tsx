import React, { useState } from 'react'
import { CarFormData } from '../types/Car'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Checkbox } from './ui/checkbox'

export default function AddCarForm() {
  const [formData, setFormData] = useState<CarFormData>({
    marka: '',
    model: '',
    ilosc_koni: 0,
    rocznik: new Date().getFullYear(),
    kolor: '',
    cena_za_dzien: 0,
    dostepny: true,
    typ: '',
    rodzaj: '',
    drzwi: 4,
    pasazerowie: 5,
    zdjecia: [],
    ocena: 0,
    ilosc_ocen: 0
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{type: 'success' | 'error', text: string} | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage(null)

    try {
      const response = await fetch('/api/cars', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setMessage({ type: 'success', text: 'Auto zostało dodane pomyślnie!' })
        setFormData({
          marka: '',
          model: '',
          ilosc_koni: 0,
          rocznik: new Date().getFullYear(),
          kolor: '',
          cena_za_dzien: 0,
          dostepny: true,
          typ: '',
          rodzaj: '',
          drzwi: 4,
          pasazerowie: 5,
          zdjecia: [],
          ocena: 0,
          ilosc_ocen: 0
        })
      } else {
        const errorData = await response.json()
        setMessage({ type: 'error', text: errorData.message || 'Błąd podczas dodawania auta' })
      }
    } catch (error: unknown) {
      setMessage({ type: 'error', text: 'Błąd połączenia z serwerem' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof CarFormData, value: string | number | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleZdjeciaChange = (value: string) => {
    const urls = value.split(',').map(url => url.trim()).filter(url => url.length > 0)
    setFormData(prev => ({ ...prev, zdjecia: urls }))
  }

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-1">Dodaj nowy samochód</CardTitle>
      </CardHeader>
      <CardContent>
        {message && (
          <div className={`p-4 rounded-md mb-6 ${message.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {message.text}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="marka">Marka samochodu</Label>
              <Input
                id="marka"
                value={formData.marka}
                onChange={(e) => handleInputChange('marka', e.target.value)}
                required
                maxLength={64}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="model">Model</Label>
              <Input
                id="model"
                value={formData.model}
                onChange={(e) => handleInputChange('model', e.target.value)}
                required
                maxLength={64}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="ilosc_koni">Ilość koni mechanicznych</Label>
              <Input
                id="ilosc_koni"
                type="number"
                min="1"
                value={formData.ilosc_koni}
                onChange={(e) => handleInputChange('ilosc_koni', parseInt(e.target.value))}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="rocznik">Rocznik</Label>
              <Input
                id="rocznik"
                type="number"
                min="1900"
                max={new Date().getFullYear() + 1}
                value={formData.rocznik}
                onChange={(e) => handleInputChange('rocznik', parseInt(e.target.value))}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="kolor">Kolor</Label>
              <Input
                id="kolor"
                value={formData.kolor}
                onChange={(e) => handleInputChange('kolor', e.target.value)}
                required
                maxLength={64}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="cena_za_dzien">Cena za dzień</Label>
              <Input
                id="cena_za_dzien"
                type="number"
                min="100"
                step="50"
                value={formData.cena_za_dzien}
                onChange={(e) => handleInputChange('cena_za_dzien', parseFloat(e.target.value))}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="typ">Typ</Label>
              <Select value={formData.typ} onValueChange={(value) => handleInputChange('typ', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Wybierz typ" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Sedan">Sedan</SelectItem>
                  <SelectItem value="Hatchback">Hatchback</SelectItem>
                  <SelectItem value="Kombi">Kombi</SelectItem>
                  <SelectItem value="SUV">SUV</SelectItem>
                  <SelectItem value="Coupe">Coupe</SelectItem>
                  <SelectItem value="Cabrio">Cabrio</SelectItem>
                  <SelectItem value="Pickup">Pickup</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="rodzaj">Rodzaj</Label>
              <Select value={formData.rodzaj} onValueChange={(value) => handleInputChange('rodzaj', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Wybierz rodzaj" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Benzyna">Benzyna</SelectItem>
                  <SelectItem value="Diesel">Diesel</SelectItem>
                  <SelectItem value="Hybryda">Hybryda</SelectItem>
                  <SelectItem value="Elektryczny">Elektryczny</SelectItem>
                  <SelectItem value="LPG">LPG</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="drzwi">Liczba drzwi</Label>
              <Select value={formData.drzwi.toString()} onValueChange={(value) => handleInputChange('drzwi', parseInt(value))}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                  <SelectItem value="6">6</SelectItem>
                  <SelectItem value="7">7</SelectItem>
                  <SelectItem value="8">8</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="pasazerowie">Liczba pasażerów</Label>
              <Select value={formData.pasazerowie.toString()} onValueChange={(value) => handleInputChange('pasazerowie', parseInt(value))}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {[1,2,3,4,5,6,7,8,9].map(num => (
                    <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="ocena">Ocena (opcjonalnie)</Label>
              <Input
                id="ocena"
                type="number"
                min="1"
                max="5"
                step="1"
                value={formData.ocena}
                onChange={(e) => handleInputChange('ocena', parseInt(e.target.value))}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="ilosc_ocen">Ilość ocen (opcjonalnie)</Label>
              <Input
                id="ilosc_ocen"
                type="number"
                min="0"
                value={formData.ilosc_ocen}
                onChange={(e) => handleInputChange('ilosc_ocen', parseInt(e.target.value))}
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="zdjecia">Zdjęcia (URLe oddzielone przecinkami)</Label>
            <Input
              id="zdjecia"
              placeholder="https://example.com/photo1.jpg, https://example.com/photo2.jpg"
              value={formData.zdjecia?.join(', ') || ''}
              onChange={(e) => handleZdjeciaChange(e.target.value)}
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="dostepny"
              checked={formData.dostepny}
              onCheckedChange={(checked) => handleInputChange('dostepny', checked)}
            />
            <Label htmlFor="dostepny">Dostępny do wynajmu</Label>
          </div>
          
          <Button type="submit" disabled={isSubmitting} className="w-full hover:bg-primary/50 hover:text-white hover:cursor-pointer">
            {isSubmitting ? 'Dodawanie...' : 'Dodaj auto'}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
} 