"use client";

import {
  Plus,
  ScanSearch,
  SquarePen,
  MapPin,
  Layers3,
  ImageIcon,
  Hand,
  Share2,
} from "lucide-react";

import RightItem from "./RightItem";
import styles from "./SidebarRight.module.scss";

interface SidebarRightProps {
  onCreateIncident: () => void;
}

const items = [
  {
    type: "primary",
    icon: <Plus size={24} />,
    action: "createIncident",
  },
  {
    type: "menu",
    icon: <ScanSearch size={20} />,
  },
  {
    type: "menu",
    icon: <SquarePen size={20} />,
  },
  {
    type: "menu",
    icon: <MapPin size={20} />,
  },
  {
    type: "divider",
  },
  {
    type: "bottom",
    icon: <Layers3 size={20} />,
  },
  {
    type: "bottom",
    icon: <ImageIcon size={20} />,
  },
  {
    type: "bottom",
    icon: <Hand size={20} />,
  },
  {
    type: "bottom",
    icon: <Share2 size={20} />,
  },
];

export default function SidebarRight({
  onCreateIncident,
}: SidebarRightProps)  {
  return (
    <aside className={styles.sidebar}>
      {items.map((item, index) => {
        if (item.type === "divider") {
          return (
            <div
              key={index}
              className={styles.divider}
            />
          );
        }

        return (
        <RightItem
            key={index}
            icon={item.icon}
            primary={item.type === "primary"}
            onClick={
                "action" in item && item.action === "createIncident"
                ? onCreateIncident
                : undefined
            }
        />  
        );
      })}
    </aside>
  );
}