import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Coins } from 'lucide-react'

export default function Page() {
  const instructionLines = [
    'Prepara la cantidad exacta en efectivo (normalmente Bantura no tiene cambio).',
    'Acércate con un representante de Bantura y entrégale el efectivo.',
    'Por último, revisa que hayas recibido tu recibo en tu email.',
  ]

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min flex justify-center items-center flex-col">
        <Card className="w-[350px]">
          <CardHeader className="border-b">
            <CardTitle className="flex justify-between">
              Depósito de efectivo
              <Coins />
            </CardTitle>
            <CardDescription>
              Sigue estas indicaciones para depositar a tu cuenta
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
              {instructionLines.map((line, idx) => (
                <li key={idx}>{line}</li>
              ))}
            </ol>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
