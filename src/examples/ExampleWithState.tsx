import { useState, useEffect } from "react";

import {
  ChartColumnDecreasing,
  Check,
  Tickets,
  Wallet,
  Smile,
  ScrollText,
} from "lucide-react";
import { SidebarProvider } from "../components/sidebar/SidebarContext";
import { Sidebar } from "../components/sidebar/Sidebar";
import { SidebarItem } from "../components/sidebar/SidebarItem";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { ChevronFirst, ChevronLast } from 'lucide-react';

export function ExampleWithState() {
  const isMobile = useMediaQuery(
    "(max-width: 768px)"
  );

  const [activeIds, setActiveIds] = useState(["trends"]);
  const [collapsed, setCollapsed] = useState(isMobile);

  useEffect(() => {
    setCollapsed(isMobile);
  }, [isMobile]);

  return (
    <SidebarProvider
      collapsed={collapsed}
      onCollapsedChange={setCollapsed}
      activeIds={activeIds}
      onActiveChange={setActiveIds}
    >
      <div className="flex h-screen w-full">

        <Sidebar
          className={`
            bg-gray-100
            p-2
            transition-all
            duration-300
            flex
            flex-col
            gap-2
            ${
              collapsed
                ? "w-14"
                : "w-64"
            }
          `}
        >

          <SidebarItem
            id="trends"
            icon={<ChartColumnDecreasing size={24}/>}
            label="Trends"
            className="
              cursor-pointer
              relative
              data-[active=true]:text-blue-500
              [&:has(.menu)_span]:flex
              [&:has(.menu)_span]:gap-1
              [&:has(.menu)_span]:p-1
              [&:has(.menu)_span]:rounded
              [&:has(.menu)_span]:min-h-8
              [&:has(.menu)_span]:hover:bg-gray-200
              [&_.tooltip]:absolute
              [&_.tooltip]:right-[-16px]
              [&_.tooltip]:top-2
              [&_.tooltip]:translate-x-[100%]
              [&_.tooltip]:pointer-events-none
            "
          />

          <SidebarItem
            id="tasks"
            icon={<Check size={24}/>}
            label="Tasks"
            className="
              cursor-pointer
              relative
              data-[active=true]:text-blue-500
              [&:has(.menu)_span]:flex
              [&:has(.menu)_span]:gap-1
              [&:has(.menu)_span]:p-1
              [&:has(.menu)_span]:rounded
              [&:has(.menu)_span]:min-h-8
              [&:has(.menu)_span]:hover:bg-gray-200
              [&_.tooltip]:absolute
              [&_.tooltip]:right-[-16px]
              [&_.tooltip]:top-2
              [&_.tooltip]:translate-x-[100%]
              [&_.tooltip]:pointer-events-none
            "
          />

          <SidebarItem
            id="tickets"
            icon={<Tickets size={24}/>}
            label="Tickets"
            className="
              cursor-pointer
              relative
              data-[active=true]:text-blue-500
              [&:has(.menu)_span]:flex
              [&:has(.menu)_span]:gap-1
              [&:has(.menu)_span]:p-1
              [&:has(.menu)_span]:rounded
              [&:has(.menu)_span]:min-h-8
              [&:has(.menu)_span]:hover:bg-gray-200
              [&_.tooltip]:absolute
              [&_.tooltip]:right-[-16px]
              [&_.tooltip]:top-2
              [&_.tooltip]:translate-x-[100%]
              [&_.tooltip]:pointer-events-none
            "
          />

          <SidebarItem
            id="payments"
            icon={<Wallet size={24}/>}
            label="Payments"
            className="
              cursor-pointer
              relative
              data-[active=true]:text-blue-500
              [&:has(.menu)_span]:flex
              [&:has(.menu)_span]:gap-1
              [&:has(.menu)_span]:p-1
              [&:has(.menu)_span]:rounded
              [&:has(.menu)_span]:min-h-8
              [&:has(.menu)_span]:hover:bg-gray-200
              [&_.tooltip]:absolute
              [&_.tooltip]:right-[-16px]
              [&_.tooltip]:top-2
              [&_.tooltip]:translate-x-[100%]
              [&_.tooltip]:pointer-events-none
            "
          />

          <SidebarItem
            id="clients"
            icon={<Smile size={24}/>}
            label="Clients"
            className="
              cursor-pointer
              data-[active=true]:text-blue-500
              relative
              [&:has(.menu)_span]:flex
              [&:has(.menu)_span]:gap-1
              [&:has(.menu)_span]:p-1
              [&:has(.menu)_span]:rounded
              [&:has(.menu)_span]:min-h-8
              [&:has(.menu)_span]:hover:bg-gray-200
              [&:not(.collapsed)_.submenu]:pl-8
              [&:has(.submenu.collapsed)_.submenu]:absolute
              [&:has(.submenu.collapsed)_.submenu]:top-0
              [&:has(.submenu.collapsed)_.submenu]:right-0
              [&:has(.submenu.collapsed)_.submenu]:translate-x-[100%]
              [&:has(.submenu.collapsed)_.submenu]:p-2
              [&:has(.submenu.collapsed)_.submenu]:rounded
              [&:has(.submenu.collapsed)_.submenu]:bg-gray-100
              [&:has(.submenu.collapsed)_.submenu]:border
              [&:has(.submenu.collapsed)_.submenu]:border-gray-300
              [&_div.submenuTitle]:font-semibold
              [&_div.submenuTitle]:flex
              [&_div.submenuTitle]:flex-start
              [&_div.submenuTitle]:p-2
            "
          >

            <SidebarItem
              id="list"
              label="List"
              className="
                cursor-pointer
                data-[active=false]:text-[#6b6375]
                [&:has(.submenuItem)]:rounded
              "
            />

            <SidebarItem
              id="reviews"
              label="Reviews"
              className="
                cursor-pointer
                data-[active=false]:text-[#6b6375]
                [&:has(.submenuItem)]:rounded
              "
            />

            <SidebarItem
              id="notifications"
              label="Notifications"
              className="
                cursor-pointer
                data-[active=false]:text-[#6b6375]
                [&:has(.submenuItem)]:rounded
              "
            />

          </SidebarItem>

          <SidebarItem
            id="inventory"
            icon={<ScrollText size={24}/>}
            label="Inventory"
            className="
              cursor-pointer
              data-[active=true]:text-blue-500
              relative
              [&:has(.menu)_span]:flex
              [&:has(.menu)_span]:gap-1
              [&:has(.menu)_span]:p-1
              [&:has(.menu)_span]:rounded
              [&:has(.menu)_span]:min-h-8
              [&:has(.menu)_span]:hover:bg-gray-200
              [&:has(.submenu):not(.collapsed)_.submenu]:pl-8
              [&:has(.submenu.collapsed)_.submenu]:absolute
              [&:has(.submenu.collapsed)_.submenu]:top-0
              [&:has(.submenu.collapsed)_.submenu]:right-0
              [&:has(.submenu.collapsed)_.submenu]:translate-x-[100%]
              [&:has(.submenu.collapsed)_.submenu]:p-2
              [&:has(.submenu.collapsed)_.submenu]:rounded
              [&:has(.submenu.collapsed)_.submenu]:bg-gray-100
              [&:has(.submenu.collapsed)_.submenu]:border
              [&:has(.submenu.collapsed)_.submenu]:border-gray-300
              [&.submenuTitle]:font-bold
              [&.submenuTitle]:text-[#6b6375]
            "
          >

            <SidebarItem
              id="products"
              label="Products"
              className="
                cursor-pointer
                data-[active=false]:text-[#6b6375]
                [&:has(.submenuItem)]:rounded
              "
            />

            <SidebarItem
              id="orders"
              label="Orders"
              className="
                cursor-pointer
                data-[active=false]:text-[#6b6375]
                [&:has(.submenuItem)]:rounded
              "
            />

            <SidebarItem
              id="suppliers"
              label="Suppliers"
              className="
                cursor-pointer
                data-[active=false]:text-[#6b6375]
                [&:has(.submenuItem)]:rounded
              "
            />

          </SidebarItem>

          <button
            type="button"
            onClick={() => { setCollapsed(!collapsed) }}
            className="rounded p-2 cursor-pointer absolute bottom-2 left-2 hover:bg-gray-200"
          >
            {
              collapsed
                ? <ChevronLast />
                : <ChevronFirst />
            }
          </button>
        </Sidebar>

        <main className="flex gap-1 w-full justify-center">
          {activeIds.map((id) => <div key={id}>{id}</div>)}
        </main>
      </div>

    </SidebarProvider>
  );
}