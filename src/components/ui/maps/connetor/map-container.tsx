'use client'
import * as React from 'react';
import {Europe} from "@/components/ui/maps/connetor/europe";
import {ArrowContainer} from "@/components/ui/arrow-connector";
type Props = {

};

export function MapContainer(props: Props) {
    return (
        <ArrowContainer>
            <Europe/>
        </ArrowContainer>
    );
};