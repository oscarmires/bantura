import { P } from '@/components/typography'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { HandCoins } from 'lucide-react'

export default function Page() {
  const instructionLines = [
    'Preferentemente, avísanos sobre tu retiro con suficiente anticipación.',
    'Acércate con un representante de Bantura para recibir tu efectivo.',
    'Por último, revisa que hayas recibido to recibo en tu email.',
  ]

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min flex justify-center items-center flex-col">
        <Card className="w-[350px]">
          <CardHeader className="border-b">
            <CardTitle className="flex justify-between">
              Retiro de efectivo
              <HandCoins />
            </CardTitle>
            <CardDescription>
              Sigue estas indicaciones para retirar dinero de tu cuenta
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
