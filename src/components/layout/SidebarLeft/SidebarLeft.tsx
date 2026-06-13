"use client";

import Image from "next/image";

import {
  House,
  ChartColumn,
  MapPin,
  Info,
  Clock3,
  Calendar,
  ImageIcon,
  Folder,
  Settings,
  Share2,
} from "lucide-react";

import SidebarItem from "./SidebarItem";
import styles from "./SidebarLeft.module.scss";

const menuItems = [
  { icon: <House size={20} /> },
  { icon: <ChartColumn size={20} /> },
  { icon: <MapPin size={20} />, active: true },
  { icon: <Info size={20} /> },
  { icon: <Clock3 size={20} /> },
  { icon: <Calendar size={20} /> },
  { icon: <ImageIcon size={20} /> },
  { icon: <Folder size={20} /> },
];

const bottomItems = [
  { icon: <Settings size={20} /> },
  { icon: <Share2 size={20} /> },
];

export default function SidebarLeft() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.avatar}>
        <Image
          src="/avatar.png"
          alt="Avatar"
          width={48}
          height={48}
          priority
        />
      </div>

      <div className={styles.menu}>
        {menuItems.map((item, index) => (
          <SidebarItem
            key={index}
            icon={item.icon}
            active={item.active}
          />
        ))}
      </div>

      <div className={styles.bottom}>
        {bottomItems.map((item, index) => (
          <SidebarItem
            key={index}
            icon={item.icon}
          />
        ))}
      </div>
    </aside>
  );
}