'use client'

import { Button } from '@/components/ui/button'
import { logout } from '@/utils/supabase/actions'

import { LogOut } from 'lucide-react'
import { useState } from 'react'

export default function LogoutButton() {
  const [isLoading, setIsLoading] = useState(false)

  const handleLogout = async () => {
    setIsLoading(true)
    await logout()
  }

  return (
    <Button variant="secondary" onClick={handleLogout} disabled={isLoading}>
      Salir <LogOut />
    </Button>
  )
}
