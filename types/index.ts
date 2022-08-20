import { ReactNode } from 'react';
import { HeaderNavigationEnum } from "./enums";

export type HeaderNavigation = {
    id: number;
    title: string;
    href: string;
    icon?: string;
    className?: string;
    style?: React.CSSProperties;
    type: HeaderNavigationEnum;
    subNavigation?: HeaderNavigation[];
}

export type OakLaneUsers = {
    id: number,
    imageUrl: string,
    name: string,
}

export type Offer = {
    id: number,
    title: string,
    description: string,
    imageUrl?: string,
    href: string,
}

export type Integration = {
    id: number;
    title: string;
    description: string;
    className?: string;
    icon: React.ReactNode;
}