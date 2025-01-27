import { P } from '@/components/typography'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export default function Page() {
  const accounts = [
    { number: '1000', balance: 10000.0, isBlocked: false, type: 'Estándar' },
    { number: '1001', balance: 10000.0, isBlocked: true, type: 'Inversión' },
  ]

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min flex justify-center items-center flex-col">
        <Card style={{ maxWidth: '480px' }} className="sm:w-full">
          <CardHeader>
            <CardTitle>Mis cuentas</CardTitle>
            <CardDescription>
              Información general y configuración de tus cuentas.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {accounts.map((account, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`}>
                  <AccordionTrigger className="flex justify-between hover:no-underline">
                    <div className="flex flex-row justify-between w-full pr-3">
                      <div className="inline flex gap-3">
                        <h2 className="">{account.number} </h2>

                        {account.isBlocked && (
                          <Badge variant="destructive">bloqueada</Badge>
                        )}
                      </div>
                      <span>${account.balance}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div>Tipo: {account.type}</div>
                    <div>Saldo: ${account.balance}</div>
                    <div>Bloqueo*: {account.isBlocked ? 'Sí' : 'Ninguno'}</div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground">
              *El bloqueo se activa según las condiciones de la cuenta y detiene
              todas las operaciones de la cuenta.
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
