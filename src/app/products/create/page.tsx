'use client'

import { Button } from '@/components/ui/button'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { addProduct } from '@/lib/action/product.actions'
import { CarSchema } from '@/lib/zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const CreateProduct = () => {
    const form = useForm<z.infer<typeof CarSchema>>({
        resolver: zodResolver(CarSchema),
        defaultValues: {
            year: '',
            make: '',
            model: '',
            mileage: '',
            price: '',
            description: '',
        },
    })

    const onSubmit = async (values: z.infer<typeof CarSchema>) => {
        try {
            const { data, error } = await addProduct({
                ...values,
            })
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className='p-2'>
            <h1 className='text-2xl font-bold text-center'>Add Car</h1>
            {/* TODO: add mutiple image upload */}
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        control={form.control}
                        name='year'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Year Model</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='make'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Make</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='model'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Model</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='mileage'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Mileage</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='price'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Price</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='description'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Textarea {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <Button className='mt-5'>Submit</Button>
                </form>
            </Form>
        </div>
    )
}

export default CreateProduct
