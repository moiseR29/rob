import { DELIVERY_TYPE_TYPE } from './DeliveryTypeConst';
import { DeliveryTypeManager } from './DeliveryTypeManager';

export const guardarDeliverType = async (
  orderId: number,
  type: DELIVERY_TYPE_TYPE,
  metadata: any,
) => {
  await DeliveryTypeManager.run(type, orderId, metadata);
};
