import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { ChevronDown, ChevronUp } from 'lucide-react'

export type FilterParams = {
  marka?: string
  model?: string
  min_cena?: number
  max_cena?: number
  min_rok?: number
  max_rok?: number
  typ?: string
  rodzaj?: string
  min_konie?: number
  max_konie?: number
}

type FiltersProps = {
  onFilterChange: (filters: FilterParams) => void
  onReset: () => void
}

export default function Filters({ onFilterChange, onReset }: FiltersProps) {
  const [filters, setFilters] = React.useState<FilterParams>({})
  const [isOpen, setIsOpen] = React.useState(false)

  const handleFilterChange = (field: keyof FilterParams, value: any) => {
    const newFilters = { ...filters, [field]: value }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  const handleReset = () => {
    const emptyFilters: FilterParams = {
      marka: undefined,
      model: undefined,
      min_cena: undefined,
      max_cena: undefined,
      min_rok: undefined,
      max_rok: undefined,
      typ: undefined,
      rodzaj: undefined,
      min_konie: undefined,
      max_konie: undefined
    }
    setFilters(emptyFilters)
    onReset()
  }

  const hasActiveFilters = Object.values(filters).some(value => value !== undefined && value !== '')

  return (
    <div className="mb-8">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        variant="outline"
        className={`w-full flex justify-between items-center py-6 ${hasActiveFilters ? 'border-primary text-primary' : ''}`}
      >
        <span className="flex items-center gap-2">
          <span className="font-semibold">Filtry</span>
          {hasActiveFilters && (
            <span className="bg-primary text-white text-sm px-2 py-1 rounded-full">
              Aktywne
            </span>
          )}
        </span>
        {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
      </Button>

      {isOpen && (
        <div className="bg-white rounded-md border-0.5 border-gray-200 shadow-sm p-6 mt-2 animate-in slide-in-from-top duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label>Marka</Label>
              <Input
                type="text"
                value={filters.marka || ''}
                onChange={(e) => handleFilterChange('marka', e.target.value)}
                placeholder="Wpisz markę"
              />
            </div>

            <div className="space-y-2">
              <Label>Model</Label>
              <Input
                type="text"
                value={filters.model || ''}
                onChange={(e) => handleFilterChange('model', e.target.value)}
                placeholder="Wpisz model"
              />
            </div>

            <div className="space-y-2">
              <Label>Typ</Label>
              <Select 
                value={filters.typ || ''} 
                onValueChange={(value) => handleFilterChange('typ', value)}
              >
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
              <Label>Rodzaj paliwa</Label>
              <Select 
                value={filters.rodzaj || ''} 
                onValueChange={(value) => handleFilterChange('rodzaj', value)}
              >
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
              <Label>Cena za dzień</Label>
              <div className="flex gap-2">
                <Input
                  type="number"
                  min="0"
                  value={filters.min_cena || ''}
                  onChange={(e) => handleFilterChange('min_cena', e.target.value ? Math.max(0, Number(e.target.value)) : undefined)}
                  placeholder="Od"
                />
                <Input
                  type="number"
                  min="0"
                  value={filters.max_cena || ''}
                  onChange={(e) => handleFilterChange('max_cena', e.target.value ? Math.max(0, Number(e.target.value)) : undefined)}
                  placeholder="Do"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Rok produkcji</Label>
              <div className="flex gap-2">
                <Input
                  type="number"
                  min="0"
                  value={filters.min_rok || ''}
                  onChange={(e) => handleFilterChange('min_rok', e.target.value ? Math.max(0, Number(e.target.value)) : undefined)}
                  placeholder="Od"
                />
                <Input
                  type="number"
                  min="0"
                  value={filters.max_rok || ''}
                  onChange={(e) => handleFilterChange('max_rok', e.target.value ? Math.max(0, Number(e.target.value)) : undefined)}
                  placeholder="Do"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Moc (KM)</Label>
              <div className="flex gap-2">
                <Input
                  type="number"
                  min="0"
                  value={filters.min_konie || ''}
                  onChange={(e) => handleFilterChange('min_konie', e.target.value ? Math.max(0, Number(e.target.value)) : undefined)}
                  placeholder="Od"
                />
                <Input
                  type="number"
                  min="0"
                  value={filters.max_konie || ''}
                  onChange={(e) => handleFilterChange('max_konie', e.target.value ? Math.max(0, Number(e.target.value)) : undefined)}
                  placeholder="Do"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <Button variant="outline" onClick={handleReset} className="mr-2">
              Resetuj filtry
            </Button>
          </div>
        </div>
      )}
    </div>
  )
} 