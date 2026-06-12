import Header from "@/components/layout/Header/Header";
import SidebarLeft from "@/components/layout/SidebarLeft/SidebarLeft";
import SidebarRight from "@/components/layout/SidebarRight/SidebarRight";
import MapView from "@/components/map/MapView/MapView";

export default function Home() {
  return (
    <>
      <MapView />

      <Header/>

      <SidebarLeft />

      <SidebarRight />
    </>
  );
}