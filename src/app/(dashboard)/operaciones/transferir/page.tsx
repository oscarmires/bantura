import { WireTransferForm } from '@/components/transferir/form'
import { H1 } from '@/components/typography'

export default function Page() {
  return (
    <div className="flex flex-col gap-4 p-4 pt-0">
      <div className="flex rounded-xl bg-muted/50 p-5 md:p-10 justify-between">
        <div className="container mx-auto flex flex-col lg:max-w-[700px] py-10 justify-center">
          <H1>Nueva transferencia</H1>
          <WireTransferForm />
        </div>
      </div>
    </div>
  )
}
