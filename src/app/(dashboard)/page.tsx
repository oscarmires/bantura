import { SelectFilter } from '@/components/select-filter'
import { Payment, columns } from '@/components/transactions/columns'
import { DataTable } from '@/components/transactions/data-table'
import { H1, H2 } from '@/components/typography'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { DollarSign, LineChart } from 'lucide-react'

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'm@example.com',
    },
    {
      id: '489e1d42',
      amount: 125,
      status: 'processing',
      email: 'example@gmail.com',
    },
    // ...
  ]
}

export default async function Page() {
  const data = await getData()

  return (
    <div className="flex flex-col gap-4 p-4 pt-0">
      <div className="flex rounded-xl bg-muted/50 p-5 md:p-10 justify-between">
        <div>
          <H1>Inicio</H1>
          <p className="leading-7 [&:not(:first-child)]:mt-6 text-xl">
            Este es el resumen <br /> de tu cuenta
          </p>
        </div>
        <div className="flex gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex flex-row justify-between">
                Invertido <LineChart className="h-4" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-semibold">10,000.00</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex flex-row justify-between">
                Balance <DollarSign className="h-4" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-semibold">10,000.00</p>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="rounded-xl bg-muted/50 md:min-h-min p-5 md:p-10">
        <div className="container mx-auto">
          <H2>Historial de movimientos</H2>
          <DataTable columns={columns} data={data} />
        </div>
      </div>
    </div>
  )
}
