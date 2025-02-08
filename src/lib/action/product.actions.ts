'use server'

import { Car } from '@/types/car'
import { createClient } from '@/supabase/server'
import { revalidatePath } from 'next/cache'

export const addProduct = async (car: Car) => {
    const supabase = await createClient()

    try {
        const { data, error } = await supabase
            .from('cars')
            .insert({ ...car })
            .select()
            .single()

        if (error) throw error

        return { data, error: null }
    } catch (error) {
        console.error('Error listing:', error)

        return { data: null, error }
    } finally {
        revalidatePath('/products')
    }
}
