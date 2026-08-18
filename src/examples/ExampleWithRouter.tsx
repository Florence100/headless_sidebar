import { useEffect, useState } from "react";
import {
  ChartColumnDecreasing,
  Check,
  ScrollText,
  Smile,
  Tickets,
  Wallet,
} from "lucide-react";
import { RouterMenu } from "../components/router-menu/RouterMenu";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { ChevronFirst, ChevronLast } from "lucide-react";
import { menuStyles } from "../utils/menuStyles";

export function ExampleWithRouter() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [collapsed, setCollapsed] = useState(isMobile);

  useEffect(() => {
    setCollapsed(isMobile);
  }, [isMobile]);

  return (
    <RouterMenu
      expandedWidth={"w-64"}
      collapsedWidth={"w-14"}
      expandedIcon={<ChevronFirst />}
      collapsedIcon={<ChevronLast />}
      collapsed={collapsed}
      onCollapsedChange={setCollapsed}
      styles={menuStyles}
    >
      {/* Simple routes */}
      <RouterMenu.Item
        to="/trends"
        label="Trends"
        icon={<ChartColumnDecreasing size={24} />}
      />

      <RouterMenu.Item
        to="/tasks"
        label="Tasks"
        icon={<Check size={24} />}
      />

      <RouterMenu.Item
        to="/tickets"
        label="Tickets"
        icon={<Tickets size={24} />}
      />

      <RouterMenu.Item
        to="/payments"
        label="Payments"
        icon={<Wallet size={24} />}
      />

      <RouterMenu.Group
        to="/clients"
        label="Clients"
        icon={<Smile size={24} />}
      >
        <RouterMenu.Item
          to="/clients/list"
          label="List"
        />

        <RouterMenu.Item
          to="/clients/reviews"
          label="Reviews"
        />

        <RouterMenu.Item
          to="/clients/notifications"
          label="Notifications"
        />
      </RouterMenu.Group>

      <RouterMenu.Group
        to="/inventory"
        label="Inventory"
        icon={<ScrollText size={24} />}
      >
        <RouterMenu.Item
          to="/inventory/products"
          label="Products"
        />

        <RouterMenu.Item
          to="/inventory/orders"
          label="Orders"
        />

        <RouterMenu.Item
          to="/inventory/suppliers"
          label="Suppliers"
        />
      </RouterMenu.Group>

    </RouterMenu>
  );
}
