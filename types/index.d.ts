import {
  AllowedComponentProps,
  ComponentCustomProps,
  DefineComponent,
  VNodeProps,
} from 'vue';

interface Circle {
  cx: string;
  cy: string;
  fillColor: string;
  fillOpacity: number | 'none';
  r: string;
}
interface Path {
  d: string;
  fillColor: string;
  fillOpacity: number | 'none';
  strokeColor: string;
  strokeOpacity: number | 'none';
}
export interface Marker {
  viewBox: string;
  circles?: Circle[];
  paths?: Path[];
}

type VSvgComponentProps = Marker &
  AllowedComponentProps &
  ComponentCustomProps &
  VNodeProps;

export const VSvg: DefineComponent<VSvgComponentProps>;
