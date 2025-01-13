'use client'

import * as React from 'react'
import { Check, PlusCircle } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Checkbox } from '@/components/ui/checkbox'

interface SelectFilterItem {
  value: string
  label: string
}

interface SelectFilterProps {
  data: SelectFilterItem[]
  label?: string
}

type CheckedState = Record<string, boolean>

export function SelectFilter({ data, label }: SelectFilterProps) {
  const [open, setOpen] = React.useState(false)
  const [checked, setChecked] = React.useState<CheckedState>(() =>
    data.reduce(
      (acc, item) => ({
        ...acc,
        [item.value]: false,
      }),
      {}
    )
  )

  const toggleItem = React.useCallback((value: string) => {
    setChecked((prev) => ({ ...prev, [value]: !prev[value] }))
  }, [])

  const getSelectedItems = React.useCallback(
    () =>
      Object.entries(checked)
        .filter(([_, isChecked]) => isChecked)
        .map(([value]) => value),
    [checked]
  )

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          className="outline-dashed outline-1"
          role="combobox"
          aria-expanded={open}
        >
          <PlusCircle /> {label}{' '}
          {getSelectedItems().length > 0 && (
            <Separator orientation="vertical" className="h-4" />
          )}
          {getSelectedItems().length > 2 ? (
            <Badge>{getSelectedItems().length} cuentas</Badge>
          ) : (
            getSelectedItems().map((value) => (
              <Badge key={value}>{value}</Badge>
            ))
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0" align="start">
        <Command>
          <CommandInput placeholder="Buscar..." />
          <CommandList>
            <CommandEmpty>Sin resultados.</CommandEmpty>
            <CommandGroup>
              {data.map((item) => (
                <CommandItem key={item.value} value={item.value}>
                  <Checkbox
                    id={`account-${item.value}`}
                    checked={checked[item.value]}
                    onCheckedChange={() => toggleItem(item.value)}
                  />
                  <label
                    htmlFor={`account-${item.value}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {item.label}
                  </label>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
