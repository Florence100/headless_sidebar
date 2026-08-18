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

import { HeadlessMenuProvider } from "../components/headless-menu/HeadlessMenuProvider";
import { HeadlessMenu } from "../components/headless-menu/HeadlessMenu";
import { HeadlessMenuItem } from "../components/headless-menu/HeadlessMenuItem";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { menuStyles } from "../utils/menuStyles";

export function ExampleWithState() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const [activeIds, setActiveIds] = useState(["trends"]);
  const [collapsed, setCollapsed] = useState(isMobile);

  useEffect(() => {
    setCollapsed(isMobile);
  }, [isMobile]);

  return (
    <HeadlessMenuProvider
      collapsed={collapsed}
      onCollapsedChange={setCollapsed}
      activeIds={activeIds}
      onActiveChange={setActiveIds}
      styles={menuStyles}
    >
      <div className="flex h-screen w-full">

        <HeadlessMenu
          expandedWidth={"w-64"}
          collapsedWidth={"w-14"}
          expandedIcon={<ChevronFirst />}
          collapsedIcon={<ChevronLast />}
        >

          <HeadlessMenuItem
            id="trends"
            icon={<ChartColumnDecreasing size={24} />}
            label="Trends"
          />

          <HeadlessMenuItem
            id="tasks"
            icon={<Check size={24} />}
            label="Tasks"
          />

          <HeadlessMenuItem
            id="tickets"
            icon={<Tickets size={24} />}
            label="Tickets"
          />

          <HeadlessMenuItem
            id="payments"
            icon={<Wallet size={24} />}
            label="Payments"
          />

          <HeadlessMenuItem
            id="clients"
            icon={<Smile size={24} />}
            label="Clients"
          >
            <HeadlessMenuItem
              id="list"
              label="List"
            />

            <HeadlessMenuItem
              id="reviews"
              label="Reviews"
            />

            <HeadlessMenuItem
              id="notifications"
              label="Notifications"
            />
          </HeadlessMenuItem>

          <HeadlessMenuItem
            id="inventory"
            icon={<ScrollText size={24} />}
            label="Inventory"
          >
            <HeadlessMenuItem
              id="products"
              label="Products"
            />

            <HeadlessMenuItem
              id="orders"
              label="Orders"
            />

            <HeadlessMenuItem
              id="suppliers"
              label="Suppliers"
            />
          </HeadlessMenuItem>
        </HeadlessMenu>

        {/* Demo content showing the currently active IDs */}
        <main className="flex w-full justify-center gap-1">
          {activeIds.map((id) => (
            <div key={id}>{id}</div>
          ))}
        </main>

      </div>
    </HeadlessMenuProvider>
  );
}
