import { columns } from '@/components/transactions/columns'
import { DataTable } from '@/components/transactions/data-table'
import { Transaction, transactions } from '@/components/transactions/mock-data'
import { H2 } from '@/components/typography'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { DollarSign } from 'lucide-react'
import Link from 'next/link'

async function getData(): Promise<Transaction[]> {
  // Fetch data from your API here.
  return transactions
}

export default async function Page() {
  const data: Transaction[] = await getData()

  return (
    <div className="flex flex-col gap-4 p-4 pt-0">
      <div className="flex rounded-xl bg-muted/50 p-5 md:p-10 justify-between">
        <div className="container mx-auto flex justify-between md:flex-row flex-col">
          <div className="mb-4">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight md:text-5xl mb-4">
              Inicio
            </h1>
            <p className="text-xl text-muted-foreground">
              Oscar Miranda Escalante
              <br />
              (oscarme)
            </p>
          </div>
          <Link href="/cuentas/mis-cuentas">
            <Card className="w-full md:w-52 md:ml-4">
              <CardHeader>
                <CardTitle className="flex flex-row justify-between">
                  Balance <DollarSign className="h-4" />
                </CardTitle>
                <CardDescription>Todas las cuentas</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-semibold">10,000.00</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
      <div className="rounded-xl bg-muted/50 md:min-h-min p-5 md:p-10">
        <div className="container mx-auto">
          <H2>Historial de movimientos</H2>
          <DataTable data={data} columns={columns} />
        </div>
      </div>
    </div>
  )
}
