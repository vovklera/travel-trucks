"use client";

import { Filter } from "@/types/filter";

interface SidebarProps {
  filters: Filter;
}

export default function Sidebar({ filters }: SidebarProps) {
  return (
    <div>
      <p>Sidebar</p>
    </div>
  );
}
