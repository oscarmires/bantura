'use client'

import { ColumnDef } from '@tanstack/react-table'
import { Button } from '../ui/button'
import { ArrowUpDown } from 'lucide-react'

export type Transaction = {
  id: string
  credit: number
  debit: number
  description: string
  timestamp: Date
  account: string
}

export const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: 'timestamp',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Fecha
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const timestamp = row.getValue('timestamp') as Date
      return new Intl.DateTimeFormat('es-MX', {
        day: '2-digit',
        month: 'long',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      }).format(timestamp)
    },
    sortingFn: 'datetime',
  },
  {
    accessorKey: 'account',
    header: 'Cuenta',
  },
  {
    accessorKey: 'description',
    header: 'Descripción',
  },
  {
    accessorKey: 'debit',
    header: 'Entrante',
    cell: ({ row }) => {
      const debit = parseFloat(row.getValue('debit'))
      const formatted = new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN',
      }).format(debit)

      return <div className="text-right font-medium">{formatted}</div>
    },
  },
  {
    accessorKey: 'credit',
    header: 'Saliente',
    cell: ({ row }) => {
      const credit = parseFloat(row.getValue('credit'))
      const formatted = new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN',
      }).format(credit)

      return <div className="text-right font-medium">{formatted}</div>
    },
  },
]
