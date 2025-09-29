'use client';

import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import L from 'leaflet';
import {cn} from "@/lib/utils";

const customIcon = L.divIcon({
    className: 'custom-div-icon',
    html: `<div class="marker-pin"> <<img src="/assets/images/static/svg-hotel.svg" alt="bed-icon-svg"/></div>`,
    iconSize: [30, 42],
    iconAnchor: [15, 42],
});

interface Props {
    className?: string
    position: [number, number]
}

export function HotelSingleMap(props: Props) {
    return (
        <MapContainer
            className={cn('w-full h-full max-h-[400px]', props.className)}
            center={props.position}
            zoom={13}
            scrollWheelZoom={false}
            style={{height: '400px', width: '100%'}}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker icon={customIcon} position={props.position}/>
        </MapContainer>
    );
}