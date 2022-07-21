import { StringOrElement } from "./types"

export interface TimelineEventObject {
  range: StringOrElement;
  title: StringOrElement;
  subtitle: StringOrElement;
  eventImg: any;
  points: string[];
  gallery?: any[]
}

export interface CircleColorProps {
  circleColor?: string;
}