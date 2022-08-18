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