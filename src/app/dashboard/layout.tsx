import Container from "@/components/layout/container";
import { NavActions } from "@/components/nav-actions";
import { NavUser } from "@/components/nav-user";

import { SidebarLeft } from "@/components/sidebar-left";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarTrigger,
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <SidebarLeft />
      <SidebarInset>
        <header className="flex h-14 shrink-0 items-center gap-2">
          <div className="flex flex-1 items-center gap-2 px-3">
            <SidebarTrigger />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage className="line-clamp-1">
                    <div className="font-medium text-muted-foreground">
                      <span
                        className="text-transparent"
                        style={{
                          textShadow: "0 0 0 #3434",
                        }}
                      >
                        🚀&nbsp;
                      </span>
                      To the moon
                    </div>
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="ml-auto px-3">
            <NavActions />
          </div>
        </header>
        <main>
          <Container className="p-4">{children}</Container>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
