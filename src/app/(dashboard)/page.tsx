import { Payment, columns } from '@/components/transactions/columns'
import { DataTable } from '@/components/transactions/data-table'
import { H1, H2 } from '@/components/typography'

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
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min p-5 md:p-10">
        <div className="container mx-auto">
          <H1>Inicio</H1>
          <H2>Historial de transacciones</H2>
          <DataTable columns={columns} data={data} />
        </div>
      </div>
    </div>
  )
}
