'use server'

import { createClient } from '@/utils/supabase/server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { z } from 'zod'

const LoginSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(1, 'La contraseña es requerida'),
})

type LoginResponse = {
  errors?: {
    auth?: Error
    validation?: z.ZodError
  }
}

export async function login(
  prevState: any,
  formData: FormData
): Promise<LoginResponse> {
  const rawData = {
    email: formData.get('email'),
    password: formData.get('password'),
  }

  const result = LoginSchema.safeParse(rawData)

  if (!result.success) {
    return {
      errors: {
        validation: result.error,
      },
    }
  }

  const supabase = await createClient()
  const { error } = await supabase.auth.signInWithPassword(result.data)

  if (error) {
    return {
      errors: {
        auth: error,
      },
    }
  }

  revalidatePath('/', 'layout')
  redirect('/')
}

export async function logout(): Promise<void> {
  const supabase = await createClient()
  const { error } = await supabase.auth.signOut()

  if (error) {
    throw error
  }

  redirect('/login')
}
