"use client";

import { useState } from "react";

import Header from "@/components/layout/Header/Header";
import SidebarLeft from "@/components/layout/SidebarLeft/SidebarLeft";
import SidebarRight from "@/components/layout/SidebarRight/SidebarRight";
import MapView from "@/components/map/MapView/MapView";
import IncidentModal from "@/components/incident/IncidentModal/IncidentModal";

export default function Home() {

  const [open, setOpen] = useState(true);

  return (
    <>
      <MapView />

      <Header/>

      <SidebarLeft />

      <SidebarRight 
       onCreateIncident={() => setOpen(true)}
      />

      <IncidentModal
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
    
  );
}