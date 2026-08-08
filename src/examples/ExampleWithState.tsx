import { useState } from "react";

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

  const [activeId, setActiveId] = useState("trends");

  const [collapsed, setCollapsed] = useState(isMobile);

  // useEffect(() => {
  //   setCollapsed(isMobile);
  // }, [isMobile]);

  return (
    <SidebarProvider
      collapsed={collapsed}
      onCollapsedChange={setCollapsed}
    >
      <div className="flex h-screen">

        <Sidebar
          activeId={activeId}
          onActiveChange={setActiveId}
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
            icon={<ChartColumnDecreasing size={20}/>}
            label="Trends"
            className="
              cursor-pointer
              data-[active=true]:font-bold
              [&:has(.menu)_span]:flex
              [&:has(.menu)_span]:gap-1
              [&:has(.menu)_span]:p-1
              [&:has(.menu)_span]:rounded
              [&:has(.menu)_span]:min-h-8
              [&:has(.menu)_span]:hover:bg-gray-200
            "
          />

          <SidebarItem
            id="tasks"
            icon={<Check size={20}/>}
            label="Tasks"
            className="
              cursor-pointer
              data-[active=true]:font-bold
              [&:has(.menu)_span]:flex
              [&:has(.menu)_span]:gap-1
              [&:has(.menu)_span]:p-1
              [&:has(.menu)_span]:rounded
              [&:has(.menu)_span]:min-h-8
              [&:has(.menu)_span]:hover:bg-gray-200
            "
          />

          <SidebarItem
            id="tickets"
            icon={<Tickets size={20}/>}
            label="Tickets"
            className="
              cursor-pointer
              data-[active=true]:font-bold
              [&:has(.menu)_span]:flex
              [&:has(.menu)_span]:gap-1
              [&:has(.menu)_span]:p-1
              [&:has(.menu)_span]:rounded
              [&:has(.menu)_span]:min-h-8
              [&:has(.menu)_span]:hover:bg-gray-200
            "
          />

          <SidebarItem
            id="payments"
            icon={<Wallet size={20}/>}
            label="Payments"
            className="
              cursor-pointer
              data-[active=true]:font-bold
              [&:has(.menu)_span]:flex
              [&:has(.menu)_span]:gap-1
              [&:has(.menu)_span]:p-1
              [&:has(.menu)_span]:rounded
              [&:has(.menu)_span]:min-h-8
              [&:has(.menu)_span]:hover:bg-gray-200
            "
          />

          <SidebarItem
            id="clients"
            icon={<Smile size={20}/>}
            label="Clients"
            className="
              cursor-pointer
              data-[active=true]:font-bold
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
            "
          >

            <SidebarItem
              id="clients-list"
              label="List"
              className="
                cursor-pointer
                data-[active=true]:font-bold
                [&:has(.submenuItem)]:rounded
              "
            />

            <SidebarItem
              id="clients-reviews"
              label="Reviews"
              className="
                cursor-pointer
                data-[active=true]:font-bold
                [&:has(.submenuItem)]:rounded
              "
            />

            <SidebarItem
              id="clients-notifications"
              label="Notifications"
              className="
                cursor-pointer
                data-[active=true]:font-bold
                [&:has(.submenuItem)]:rounded
              "
            />

          </SidebarItem>

          <SidebarItem
            id="inventory"
            icon={<ScrollText size={20}/>}
            label="Inventory"
            className="
              cursor-pointer
              data-[active=true]:font-bold
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
            "
          >

            <SidebarItem
              id="inventory-products"
              label="Products"
              className="
                cursor-pointer
                data-[active=true]:font-bold
                [&:has(.submenuItem)]:rounded
              "
            />

            <SidebarItem
              id="inventory-orders"
              label="Orders"
              className="
                cursor-pointer
                data-[active=true]:font-bold
                [&:has(.submenuItem)]:rounded
              "
            />

            <SidebarItem
              id="inventory-suppliers"
              label="Suppliers"
              className="
                cursor-pointer
                data-[active=true]:font-bold
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

        <main className="p-6">
          <h1 className="text-xl">
            Active:
            {" "}
            {activeId}
          </h1>
        </main>
      </div>

    </SidebarProvider>
  );
}