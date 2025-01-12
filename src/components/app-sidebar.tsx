import { GalleryVerticalEnd, LogOut } from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from '@/components/ui/sidebar'
import { Button } from '@/components/ui/button'

import Link from 'next/link'

import * as React from 'react'

// This is sample data.
const data = {
  navMain: [
    {
      title: 'Inicio',
      url: '#',
      isActive: true,
    },
    {
      title: 'Operaciones',
      url: '#',
      items: [
        {
          title: 'Depositar efectivo',
          url: '#',
        },
        {
          title: 'Transferir',
          url: '#',
        },
        {
          title: 'Retirar efectivo',
          url: '#',
        },
      ],
    },
    {
      title: 'Cuentas',
      url: '#',
      items: [
        {
          title: 'Mis cuentas',
          url: '#',
        },
        {
          title: 'Directorio',
          url: '#',
        },
      ],
    },
    {
      title: 'Preferencias',
      url: '#',
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">Bantura</span>
                  <span className="">La aventura</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  {item.items ? (
                    <button className="font-medium" disabled>
                      {item.title}
                    </button>
                  ) : (
                    <a href={item.url} className="font-medium">
                      {item.title}
                    </a>
                  )}
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub>
                    {item.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton asChild isActive={item.isActive}>
                          <a href={item.url}>{item.title}</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Button variant="secondary">
          Salir <LogOut />
        </Button>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
