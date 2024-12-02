"use client";

import * as React from "react";
import {
  AudioWaveform,
  Blocks,
  Calendar,
  CalendarClock,
  CalendarMinus2,
  CalendarX2,
  Command,
  Home,
  Inbox,
  MessageCircleQuestion,
  Search,
  Settings2,
  Sparkles,
  Sunrise,
  Trash2,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { WorkspacesSwitcher } from "@/components/workspace-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { NavUser } from "./nav-user";
import { NavWorkspaces } from "./nav-workspaces";
import { DatePicker } from "./date-picker";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Tasks due today",
      url: "#",
      icon: CalendarClock,
      isActive: true,
    },
    {
      title: "Tasks for the week",
      url: "#",
      icon: CalendarMinus2,
    },
    {
      title: "Tasks you missed...",
      url: "#",
      icon: CalendarX2,
    },
    {
      title: "Celebrate your wins!",
      url: "#",
      icon: CalendarX2,
      badge: "10",
    },
  ],
  navSecondary: [
    {
      title: "Calendar",
      url: "#",
      icon: Calendar,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
    },
    {
      title: "Templates",
      url: "#",
      icon: Blocks,
    },
    {
      title: "Trash",
      url: "#",
      icon: Trash2,
    },
    {
      title: "Help",
      url: "#",
      icon: MessageCircleQuestion,
    },
  ],
  favorites: [
    {
      name: "Project Management & Task Tracking",
      url: "#",
      emoji: "📊",
    },
    {
      name: "Family Recipe Collection & Meal Planning",
      url: "#",
      emoji: "🍳",
    },
    {
      name: "Fitness Tracker & Workout Routines",
      url: "#",
      emoji: "💪",
    },
    {
      name: "Book Notes & Reading List",
      url: "#",
      emoji: "📚",
    },
    {
      name: "Sustainable Gardening Tips & Plant Care",
      url: "#",
      emoji: "🌱",
    },
    {
      name: "Language Learning Progress & Resources",
      url: "#",
      emoji: "🗣️",
    },
    {
      name: "Home Renovation Ideas & Budget Tracker",
      url: "#",
      emoji: "🏠",
    },
    {
      name: "Personal Finance & Investment Portfolio",
      url: "#",
      emoji: "💰",
    },
    {
      name: "Movie & TV Show Watchlist with Reviews",
      url: "#",
      emoji: "🎬",
    },
    {
      name: "Daily Habit Tracker & Goal Setting",
      url: "#",
      emoji: "✅",
    },
  ],
  workspaces: [
    {
      name: "To the moon",
      emoji: "🚀",
      count: 8,
    },
    {
      name: "Personal Life Management",
      emoji: "📅",
      count: 3,
      // pages: [
      //   {
      //     name: "Daily Journal & Reflection",
      //     url: "#",
      //     emoji: "📔",
      //   },
      //   {
      //     name: "Health & Wellness Tracker",
      //     url: "#",
      //     emoji: "🍏",
      //   },
      //   {
      //     name: "Personal Growth & Learning Goals",
      //     url: "#",
      //     emoji: "🌟",
      //   },
      // ],
    },
    {
      name: "Professional Development",
      emoji: "💼",
      count: 8,
      // pages: [
      //   {
      //     name: "Career Objectives & Milestones",
      //     url: "#",
      //     emoji: "🎯",
      //   },
      //   {
      //     name: "Skill Acquisition & Training Log",
      //     url: "#",
      //     emoji: "🧠",
      //   },
      //   {
      //     name: "Networking Contacts & Events",
      //     url: "#",
      //     emoji: "🤝",
      //   },
      // ],
    },
    {
      name: "Creative Projects",
      emoji: "🎨",
      count: 0,
      // pages: [
      //   {
      //     name: "Writing Ideas & Story Outlines",
      //     url: "#",
      //     emoji: "✍️",
      //   },
      //   {
      //     name: "Art & Design Portfolio",
      //     url: "#",
      //     emoji: "🖼️",
      //   },
      //   {
      //     name: "Music Composition & Practice Log",
      //     url: "#",
      //     emoji: "🎵",
      //   },
      // ],
    },
    {
      name: "Home Management",
      emoji: "🏡",
      count: 0,
      // pages: [
      //   {
      //     name: "Household Budget & Expense Tracking",
      //     url: "#",
      //     emoji: "💰",
      //   },
      //   {
      //     name: "Home Maintenance Schedule & Tasks",
      //     url: "#",
      //     emoji: "🔧",
      //   },
      //   {
      //     name: "Family Calendar & Event Planning",
      //     url: "#",
      //     emoji: "📅",
      //   },
      // ],
    },
    {
      name: "Travel & Adventure",
      emoji: "🧳",
      count: 12,
      // pages: [
      //   {
      //     name: "Trip Planning & Itineraries",
      //     url: "#",
      //     emoji: "🗺️",
      //   },
      //   {
      //     name: "Travel Bucket List & Inspiration",
      //     url: "#",
      //     emoji: "🌎",
      //   },
      //   {
      //     name: "Travel Journal & Photo Gallery",
      //     url: "#",
      //     emoji: "📸",
      //   },
      // ],
    },
  ],
};

export function SidebarLeft({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        {/* <WorkspacesSwitcher workspaces={data.workspaces} /> */}
        <NavUser
          user={{
            name: "akadoshin#6572",
            // avatar: "/avatar.jfif",
          }}
        />
        {/* <NavMain items={data.navMain} /> */}
        {/* <SidebarSeparator /> */}
      </SidebarHeader>
      <SidebarContent>
        <NavWorkspaces workspaces={data.workspaces} />
        {/* <NavFavorites favorites={data.favorites} /> */}
      </SidebarContent>
      {/* <SidebarFooter>
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarFooter> */}
      <SidebarRail />
    </Sidebar>
  );
}
