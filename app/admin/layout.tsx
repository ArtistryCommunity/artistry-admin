'use client'

import { cn } from "@/utils/style";
import Link from "next/link";
import { useState } from "react";
import { MdMenu } from "react-icons/md";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setIsOpen] = useState(true)

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsOpen(event.target.checked);
  };

  return (
    <div className={cn({
      'drawer': true,
      'lg:drawer-open': isOpen,
    })}>
      <input 
        id="my-drawer-3"
        type="checkbox"
        checked={isOpen} onChange={handleCheckboxChange} 
        className="drawer-toggle" 
      />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar bg-base-300 w-full min-h-0">
          <div>
            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-sm btn-square btn-ghost">
              <MdMenu className="text-xl" />
            </label>
          </div>
        </div>
        <div className="px-2 py-1">
          { children }
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 min-h-full w-52 p-4">
          {/* Sidebar content here */}
          <li><Link href="/admin/users">User</Link></li>
          <li><Link href="/admin/">Sidebar Item 2</Link></li>
        </ul>
      </div>
    </div>
  );
}
