import { OrderInfo, WorkStatus } from '@/server/utils/schemas'
import { Tariff } from '@/server/utils/enums'
import { z } from 'zod';

const OrderInfoSchema = z.object({
  id: z.number(),
  object: z.string(),
  type: z.string(),
  tariff: z.nativeEnum(Tariff),
  area: z.number(),
  location: z.string()
})
// TODO see tutorial about zod
// see why process doesn't work
export async function getOrderData(orderId: number): Promise<OrderInfo | null> {
  try {
    // const response = await fetch(`${process.env.BACKEND}/order_infos/5`)
    const response = await fetch(`http://127.0.0.1:8000/order_infos/5`)
    // console.log(response)
    if (!response.ok) {
      throw new Error("Error fetching order info")
    }
    const data = await response.json()
    return data;
    // const result = OrderInfoSchema.safeParse(data);
    // if (result.success) {
    //   return result.data
    // } else {
    //   console.error('Полученные данные не соответствуют типу OrderInfo', result.error)
    //   return null
    // }
  } catch (error) {
    console.error('Ошибка:', error)
    return null
  }
}


// TODO: tell kirill about 500 error while fetching http://127.0.0.1:8000/work_statuses/5
export async function getWorkStatus(orderId: number): Promise<WorkStatus | null> {
  try {
    const response = await fetch(`http://127.0.0.1:8000/work_states/1`)
    if (!response.ok) {
      throw new Error("Error fetching work status");
    }
    return await response.json()
  } catch (error) {
    console.error('Ошибка:', error)
    return null
  }
}