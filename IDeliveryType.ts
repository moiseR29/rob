import { DELIVERY_TYPE_TYPE } from './DeliveryTypeConst';

export interface IDeliveryType {
  name: DELIVERY_TYPE_TYPE;
  save(order_id: number, metadata: any): Promise<any>;
}
