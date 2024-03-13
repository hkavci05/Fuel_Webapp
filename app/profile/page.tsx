
"use client";

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'; // You'll likely need a Select component


    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="max-w-md w-full">
                <h1 className="text-3xl font-bold mb-4">Edit Profile</h1>

                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(handleSubmit)}
                        className="flex flex-col gap-6"
                    >
                        <FormField control={form.control} //Full Name
                            name="fullName"
                            render={({ field }) => {
                                return <FormItem>
                                    <FormLabel>Full Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Full Name"
                                            type="name"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            }}
                        />
                        <FormField control={form.control} //Address1
                            name="address1"
                            render={({ field }) => {
                                return <FormItem>
                                    <FormLabel>Address</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Address 1"
                                            type="Address 1"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            }}
                        />
                        <FormField control={form.control} //Address2
                            name="address2"
                            render={({ field }) => {
                                return <FormItem>
                                    <FormLabel>Address 2</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Address 2"
                                            type="Address 2"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            }}
                        />
                        <FormField control={form.control} //City
                            name="city"
                            render={({ field }) => {
                                return <FormItem>
                                    <FormLabel>City</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="City"
                                            type="City"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            }}
                        />
    
                        <FormItem>  
                            <FormLabel>State</FormLabel>
                            <FormControl>
                                <Select {...form.register("state")} defaultValue="" >
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="Select a State" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>States</SelectLabel>
                                            {states.map((state) => (
                                                <SelectItem key={state.value} value={state.value}>
                                                    {state.label}
                                                </SelectItem>
                                            ))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>


                        <FormField control={form.control} //Zipcode
                            name="zipcode"
                            render={({ field }) => {
                                return <FormItem>
                                    <FormLabel>Zipcode</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Zipcode"
                                            type="Zipcode"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            }}
                        />

                        <Button type="submit" className="w-full">
                            Update Profile
                        </Button>
                    </form>
                </Form>
            </div>
        </main>
    );
}
