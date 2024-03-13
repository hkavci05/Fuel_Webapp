"use client";

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';



  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4">Login</h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="flex flex-col gap-6"
          >
            <FormField control={form.control} //Username
              name="username"
              render={({ field }) => {
                return <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Username"
                      type="text"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              }}
            />
            <FormField control={form.control} //Password
              name="password"
              render={({ field }) => {
                return <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Password"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              }}
            />
            <p className="text-center">
              Don't have an account?{' '}
              <Link legacyBehavior href="/registration">
                <a className="text-blue-500 hover:underline">Create an account</a>
              </Link>
            </p>
            <Button type="submit" className="w-full">
              Log In
            </Button>
          </form>
        </Form>
      </div>
    </main>
  );
}
