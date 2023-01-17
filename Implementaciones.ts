import { DELIVERY_TYPE_ENUM } from './DeliveryTypeConst';
import { IDeliveryType } from './IDeliveryType';

export class MercadoLibreDeliveryType implements IDeliveryType {
  name = DELIVERY_TYPE_ENUM.MERCADO_LIBRE;

  async save(order_id: number, metadata: any): Promise<any> {
    console.log('ASD');
  }
}

export class AndreaniDeliveryType implements IDeliveryType {
  name = DELIVERY_TYPE_ENUM.ANDREANI;

  async save(order_id: number, metadata: any): Promise<any> {
    console.log('ASD');
  }
}

export class CorreoArgentinoDeliveryType implements IDeliveryType {
  name = DELIVERY_TYPE_ENUM.CORREO_ARGENTINO;

  async save(order_id: number, metadata: any): Promise<any> {
    console.log('ASD');
  }
}
