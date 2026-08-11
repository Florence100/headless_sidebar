import { useEffect, useState } from "react";

import {
  ChartColumnDecreasing,
  Check,
  ChevronFirst,
  ChevronLast,
  ScrollText,
  Smile,
  Tickets,
  Wallet,
} from "lucide-react";

import { SidebarProvider } from "../components/sidebar/SidebarContext";
import { Sidebar } from "../components/sidebar/Sidebar";
import { SidebarItem } from "../components/sidebar/SidebarItem";
import { useMediaQuery } from "../hooks/useMediaQuery";

// Shared styles for top-level SidebarItem components.
const sidebarItemStyles = `
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
`;

// Shared styles for submenu items
const submenuItemStyles = `
  cursor-pointer
  data-[active=false]:text-[#6b6375]
  [&:has(.submenuItem)]:rounded
`;

// Shared styles for a SidebarItem that contains a submenu
const submenuParentStyles = `
  cursor-pointer
  relative
  data-[active=true]:text-blue-500

  [&:has(.menu)_span]:flex
  [&:has(.menu)_span]:gap-1
  [&:has(.menu)_span]:p-1
  [&:has(.menu)_span]:rounded
  [&:has(.menu)_span]:min-h-8
  [&:has(.menu)_span]:hover:bg-gray-200

  [&:has(.submenu.collapsed)_.submenu]:absolute
  [&:has(.submenu.collapsed)_.submenu]:top-0
  [&:has(.submenu.collapsed)_.submenu]:right-0
  [&:has(.submenu.collapsed)_.submenu]:translate-x-[100%]
  [&:has(.submenu.collapsed)_.submenu]:p-2
  [&:has(.submenu.collapsed)_.submenu]:rounded
  [&:has(.submenu.collapsed)_.submenu]:bg-gray-100
  [&:has(.submenu.collapsed)_.submenu]:border
  [&:has(.submenu.collapsed)_.submenu]:border-gray-300

  [&_div.submenuTitle]:flex
  [&_div.submenuTitle]:p-2
  [&_div.submenuTitle]:font-semibold
`;

// Additional styles for an expanded submenu
const expandedSubmenuStyles = `
  [&:not(:has(.submenu.collapsed))_.submenu]:pl-8
`;

export function ExampleWithState() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const [activeIds, setActiveIds] = useState(["trends"]);
  const [collapsed, setCollapsed] = useState(isMobile);

  useEffect(() => {
    setCollapsed(isMobile);
  }, [isMobile]);

  const handleCollapseToggle = () => {
    setCollapsed((current) => !current);
  };

  return (
    <SidebarProvider
      collapsed={collapsed}
      onCollapsedChange={setCollapsed}
      activeIds={activeIds}
      onActiveChange={setActiveIds}
    >
      <div className="flex h-screen w-full">

        {/* Sidebar layout and width styles */}
        <Sidebar
          className={`
            flex
            flex-col
            gap-2
            bg-gray-100
            p-2
            transition-all
            duration-300
            ${collapsed ? "w-14" : "w-64"}
          `}
        >

          {/* Simple top-level menu items */}
          <SidebarItem
            id="trends"
            icon={<ChartColumnDecreasing size={24} />}
            label="Trends"
            className={sidebarItemStyles}
          />

          <SidebarItem
            id="tasks"
            icon={<Check size={24} />}
            label="Tasks"
            className={sidebarItemStyles}
          />

          <SidebarItem
            id="tickets"
            icon={<Tickets size={24} />}
            label="Tickets"
            className={sidebarItemStyles}
          />

          <SidebarItem
            id="payments"
            icon={<Wallet size={24} />}
            label="Payments"
            className={sidebarItemStyles}
          />

          {/* Top-level item with nested submenu */}
          <SidebarItem
            id="clients"
            icon={<Smile size={24} />}
            label="Clients"
            className={`
              ${submenuParentStyles}
              ${expandedSubmenuStyles}
            `}
          >
            <SidebarItem
              id="list"
              label="List"
              className={submenuItemStyles}
            />

            <SidebarItem
              id="reviews"
              label="Reviews"
              className={submenuItemStyles}
            />

            <SidebarItem
              id="notifications"
              label="Notifications"
              className={submenuItemStyles}
            />
          </SidebarItem>

          {/* Top-level item with nested submenu */}
          <SidebarItem
            id="inventory"
            icon={<ScrollText size={24} />}
            label="Inventory"
            className={`
              ${submenuParentStyles}
              ${expandedSubmenuStyles}
            `}
          >
            <SidebarItem
              id="products"
              label="Products"
              className={submenuItemStyles}
            />

            <SidebarItem
              id="orders"
              label="Orders"
              className={submenuItemStyles}
            />

            <SidebarItem
              id="suppliers"
              label="Suppliers"
              className={submenuItemStyles}
            />
          </SidebarItem>

          {/* Sidebar collapse/expand control */}
          <button
            type="button"
            onClick={handleCollapseToggle}
            className="
              absolute
              bottom-2
              left-2
              cursor-pointer
              rounded
              p-2
              hover:bg-gray-200
            "
          >
            {collapsed ? <ChevronLast /> : <ChevronFirst />}
          </button>
        </Sidebar>

        {/* Demo content showing the currently active IDs */}
        <main className="flex w-full justify-center gap-1">
          {activeIds.map((id) => (
            <div key={id}>{id}</div>
          ))}
        </main>

      </div>
    </SidebarProvider>
  );
}
