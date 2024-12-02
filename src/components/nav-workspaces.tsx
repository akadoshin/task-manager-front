"use client";

import {
  ArrowUpRight,
  Link,
  MoreHorizontal,
  Plus,
  StarOff,
  Trash2,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  useSidebar,
} from "@/components/ui/sidebar";
import { Badge } from "./ui/badge";

export function NavWorkspaces({
  workspaces,
}: {
  workspaces: {
    name: string;
    emoji: string;
    count: number;
  }[];
}) {
  const { isMobile } = useSidebar();

  //  className="group-data-[collapsible=icon]:hidden"

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Workspaces</SidebarGroupLabel>
      <SidebarMenu>
        {workspaces.map((item, index) => {
          return (
            <SidebarMenuItem key={item.name}>
              <SidebarMenuButton
                asChild
                isActive={index === 0}
                className={item.count < 99 ? "pr-10" : "pr-16"}
              >
                <a href="#" title={item.name}>
                  <span>{item.emoji}</span>
                  <span>{item.name}</span>
                </a>
              </SidebarMenuButton>
              {item.count > 0 && (
                <SidebarMenuBadge>
                  <Badge variant={index === 0 ? "default" : "secondary"}>
                    {item.count > 999 ? "999+" : item.count}
                  </Badge>
                </SidebarMenuBadge>
              )}
              {/* <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <SidebarMenuAction showOnHover>
            <MoreHorizontal />
            <span className="sr-only">More</span>
          </SidebarMenuAction>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-56 rounded-lg"
          side={isMobile ? "bottom" : "right"}
          align={isMobile ? "end" : "start"}
        >
          <DropdownMenuItem>
            <Link className="text-muted-foreground" />
            <span>Copy Link</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <ArrowUpRight className="text-muted-foreground" />
            <span>Open in New Tab</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Trash2 className="text-muted-foreground" />
            <span>Delete</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu> */}
            </SidebarMenuItem>
          );
        })}
        <SidebarMenuItem>
          <SidebarMenuButton className="text-sidebar-foreground/70">
            <Plus />
            <span>Add Workspace</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  );
}
