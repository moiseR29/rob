import { guardarDeliverType } from './casoDeUso';
import { DeliveryTypeManager } from './DeliveryTypeManager';
import {
  AndreaniDeliveryType,
  MercadoLibreDeliveryType,
  CorreoArgentinoDeliveryType,
} from './Implementaciones';

const start = async () => {
  DeliveryTypeManager.register(new AndreaniDeliveryType());
  DeliveryTypeManager.register(new MercadoLibreDeliveryType());
  DeliveryTypeManager.register(new CorreoArgentinoDeliveryType());
  await guardarDeliverType();
};

start();
