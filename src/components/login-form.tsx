'use client'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { login } from '@/utils/supabase/actions'

import { useActionState } from 'react'

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  const [state, loginAction, isPending] = useActionState(login, undefined)

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">¡Hola!</CardTitle>
          <CardDescription>
            Inicia sesión con tu cuenta de Bantura
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={loginAction}>
            <div className="grid gap-6">
              <div className="grid gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    name="email"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Contraseña</Label>
                    <a
                      href="#"
                      className="ml-auto text-sm underline-offset-4 hover:underline"
                    >
                      ¿Olvidaste la contraseña?
                    </a>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    name="password"
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isPending}>
                  Acceder
                </Button>{' '}
                {state?.errors?.auth && (
                  <p className="text-red-500 text-sm text-center">
                    El correo electrónico o la contraseña son incorrectos
                  </p>
                )}
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary  ">
        Este sitio no cuenta con política de privacidad, términos ni condiciones
        del servicio.
      </div>
    </div>
  )
}
