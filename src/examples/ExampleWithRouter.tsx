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
import { useLocation, useNavigate } from "react-router-dom";
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

// Shared styles for submenu items.
const submenuItemStyles = `
  cursor-pointer
  data-[active=false]:text-[#6b6375]
  [&:has(.submenuItem)]:rounded
`;

// Shared styles for a SidebarItem that contains a submenu.
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

// Additional styles for an expanded submenu.
const expandedSubmenuStyles = `
  [&:not(:has(.submenu.collapsed))_.submenu]:pl-8
`;

// Maps application routes to sidebar IDs
const routeToMenuId: Record<string, string> = {
  "/trends": "trends",
  "/tasks": "tasks",
  "/tickets": "tickets",
  "/payments": "payments",

  "/clients/list": "list",
  "/clients/reviews": "reviews",
  "/clients/notifications": "notifications",

  "/inventory/products": "products",
  "/inventory/orders": "orders",
  "/inventory/suppliers": "suppliers",
};

export function ExampleWithRouter() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const location = useLocation();
  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(isMobile);

  /*
   * Derive the active sidebar item from the current route.
   * The router is the source of truth for the active state.
   */
  const activeMenuId = routeToMenuId[location.pathname];

  /*
   * SidebarProvider expects an array of active IDs.
   * The parent ID is added when a submenu item is active.
   */
  const activeIds = (() => {
    if (
      activeMenuId === "list" ||
      activeMenuId === "reviews" ||
      activeMenuId === "notifications"
    ) {
      return ["clients", activeMenuId];
    }

    if (
      activeMenuId === "products" ||
      activeMenuId === "orders" ||
      activeMenuId === "suppliers"
    ) {
      return ["inventory", activeMenuId];
    }

    return [activeMenuId];
  })();

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
            onSelect={() => navigate("/trends")}
          />

          <SidebarItem
            id="tasks"
            icon={<Check size={24} />}
            label="Tasks"
            className={sidebarItemStyles}
            onSelect={() => navigate("/tasks")}
          />

          <SidebarItem
            id="tickets"
            icon={<Tickets size={24} />}
            label="Tickets"
            className={sidebarItemStyles}
            onSelect={() => navigate("/tickets")}
          />

          <SidebarItem
            id="payments"
            icon={<Wallet size={24} />}
            label="Payments"
            className={sidebarItemStyles}
            onSelect={() => navigate("/payments")}
          />

          {/* Clients section */}
          <SidebarItem
            id="clients"
            icon={<Smile size={24} />}
            label="Clients"
            className={`
              ${submenuParentStyles}
              ${expandedSubmenuStyles}
            `}
            onSelect={() => navigate("/clients/list")}
          >
            <SidebarItem
              id="list"
              label="List"
              className={submenuItemStyles}
              onSelect={() => navigate("/clients/list")}
            />

            <SidebarItem
              id="reviews"
              label="Reviews"
              className={submenuItemStyles}
              onSelect={() => navigate("/clients/reviews")}
            />

            <SidebarItem
              id="notifications"
              label="Notifications"
              className={submenuItemStyles}
              onSelect={() => navigate("/clients/notifications")}
            />
          </SidebarItem>

          {/* Inventory section */}
          <SidebarItem
            id="inventory"
            icon={<ScrollText size={24} />}
            label="Inventory"
            className={`
              ${submenuParentStyles}
              ${expandedSubmenuStyles}
            `}
            onSelect={() => navigate("/inventory/products")}
          >
            <SidebarItem
              id="products"
              label="Products"
              className={submenuItemStyles}
              onSelect={() => navigate("/inventory/products")}
            />

            <SidebarItem
              id="orders"
              label="Orders"
              className={submenuItemStyles}
              onSelect={() => navigate("/inventory/orders")}
            />

            <SidebarItem
              id="suppliers"
              label="Suppliers"
              className={submenuItemStyles}
              onSelect={() => navigate("/inventory/suppliers")}
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

        {/* Router-controlled page content */}
        <main className="flex w-full justify-center gap-1">
          <div>{location.pathname}</div>
        </main>

      </div>
    </SidebarProvider>
  );
}
