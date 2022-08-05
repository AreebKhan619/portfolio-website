import { StringOrElement } from "./types"

export interface TimelineEventObject {
  range: StringOrElement;
  title: StringOrElement;
  subtitle: StringOrElement;
  eventImg: any;
  points: string[];
  gallery?: any[];
  isCollapsible?: boolean;
  bgColor?: string;
}

export interface CircleColorProps {
  circleColor?: string;
}