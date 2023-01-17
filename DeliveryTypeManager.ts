import { IDeliveryType } from './IDeliveryType';
import { DELIVERY_TYPE_TYPE } from './DeliveryTypeConst';

class DeliveryTypeManager {
  private deliveryMapper: Map<DELIVERY_TYPE_TYPE, IDeliveryType>;

  register(implement: IDeliveryType): void {
    this.deliveryMapper.set(implement.name, implement);
  }

  async run(
    type: DELIVERY_TYPE_TYPE,
    orderId: number,
    metadata: any,
  ): Promise<any> {
    const delivery = this.deliveryMapper.get(type);
    await delivery?.save(orderId, metadata);
  }
}

const i: DeliveryTypeManager = new DeliveryTypeManager();
export { i as DeliveryTypeManager };
