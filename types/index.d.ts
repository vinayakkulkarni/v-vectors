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
