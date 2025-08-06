import { supabase } from './supabase';
import { SendOrderModel } from '../models/supabase.model';

export const sendOrder = async ({ order }: SendOrderModel) => {
	const { error } = await supabase.from('orders').insert([
		{
			id: order.orderID,
			created_at: new Date().toISOString(),
			first_name: order.firstName,
			second_name: order.secondName,
			email: order.email,
			phone: order.phone,
			size: order.size,
			message: order.message,
		},
	]);

	if (error) {
		console.error('Błąd zapisu do Supabase:', error.message);
		return;
	}
};
