import { ICoordinate } from 'models/IBoard';

export class AbstractDrawer {

  protected polarToCartesian(r: number, th: number, centeredOn?: ICoordinate): ICoordinate {
    const x = r * Math.cos(th);
    const y = r * Math.sin(th);
    if (centeredOn) {
      return {
        x: x + centeredOn.x,
        y: y + centeredOn.y,
      };
    } else {
      return { x, y };
    }
  }
}
