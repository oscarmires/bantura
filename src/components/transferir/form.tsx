'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import Link from 'next/link'

const formSchema = z.object({
  originAccount: z
    .string()
    .min(4, { message: 'Formato de cuenta inválido' })
    .max(10, { message: 'Formato de cuenta inválido' }),
  destinationAccount: z
    .string()
    .min(4, { message: 'Formato de cuenta inválido' })
    .max(10, { message: 'Formato de cuenta inválido' }),
  amount: z.number().positive({ message: 'Ingrese un importe válido.' }),
  description: z.string(),
})

export function WireTransferForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      originAccount: '',
      destinationAccount: '',
      amount: 0.0,
      description: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
        <FormField
          control={form.control}
          name="originAccount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Origen</FormLabel>
              <FormControl>
                <Input placeholder="####" {...field} />
              </FormControl>
              <FormDescription>Selecciona la cuenta origen</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="destinationAccount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Destino
                <br />
                <span className="italic text-sm text-muted-foreground">
                  ¿No encuentras la cuenta que buscas? →{' '}
                  <Link className="underline" href="#">
                    Registrar nueva cuenta destino.
                  </Link>
                </span>
              </FormLabel>
              <FormControl>
                <Input placeholder="####" {...field} />
              </FormControl>
              <FormDescription>Selecciona la cuenta destino</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Importe</FormLabel>
              <FormControl>
                <Input placeholder="0.00" {...field} />
              </FormControl>
              <FormDescription>Ingresa el importe a transferir</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Concepto</FormLabel>
              <FormControl>
                <Input placeholder="Transferencia de Juan Pérez" {...field} />
              </FormControl>
              <FormDescription>
                Describe el motivo de la transferencia.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Confirmar</Button>
      </form>
    </Form>
  )
}
