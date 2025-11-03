"use client";
import dynamic from "next/dynamic";
const MapContainer = dynamic(() => import("react-leaflet").then(m=>m.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then(m=>m.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then(m=>m.Marker), { ssr: false });
import "leaflet/dist/leaflet.css";


const photos = [
{ lat: 25.086, lng: 121.588, title: "Elephant Mountain", href: "#" },
{ lat: 64.047, lng: -16.179, title: "Skaftafell", href: "#" },
];


export default function WorldMap(){
return (
<div className="h-[60vh] rounded-2xl overflow-hidden ring-1 ring-white/10">
<MapContainer center={[20,0]} zoom={2} scrollWheelZoom className="h-full w-full">
<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
{photos.map((p,i)=> (<Marker key={i} position={[p.lat,p.lng]}></Marker>))}
</MapContainer>
</div>
);
}
