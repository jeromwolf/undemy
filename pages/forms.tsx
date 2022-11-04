import { useState } from "react";
import { useForm } from "react-hook-form";
import  Button  from "../components/button";
import Input from "../components/input";
import useMutation from "../libs/client/useMutation";
 

interface LoginForm {
    username: string;
    email: string; 
    password: string;
}

interface MutationResult { 
    ok:boolean;
}
 

export default function Forms() {
    const [enter, {loading, data, error}] =  useMutation<MutationResult>("/api/users/enter"); 
    const { 
        register, 
        handleSubmit, 
        formState: { errors },
        setValue,
        reset,
        resetField, 
    } 
        = useForm<LoginForm>({
            mode: "onChange",
    });
    
    const onValid = (data:LoginForm) => {
        enter(data);
    }

    const onInvalid = (errors: any) => {
        console.log(errors);
    }

    setValue("username","blockmeta");
    setValue("email","blockmeta@gmil.com");
    setValue("password","nextjslike");

    console.log(loading, data, error);

    return (
        




        
        <div className="w-full max-w-xl mx-auto">
            

<section className="text-gray-50 bg-gray-800 py-14 px-8">
    <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold w-11/12 md:w-8/12 mb-2">
        2021 Complete Python Bootcamp With OtchereDev</h1>
        <h3 className="text-sm md:text-lg md:w-9/12 lg:w-6/12 mb-2">
            Become a Python Programmer and learn one of employers most...</h3>
            <div className="mb-2"><button className="text-xs md:text-sm py-1 px-2 cursor-auto bg-yellow-500 text-yellow-700 rounded-md">
                Bestseller</button><span className=" text-xs md:text-base font-semibold m-3  text-yellow-500">
                    0 rating</span><span className="text-xs md:text-base">(0 ratings) 27 students</span></div>
                    <p className="mb-2 md:text-base text-xs">Created by <span className="text-blue-400 underline">otcheredev</span></p>
                    <h2 className="text-xl md:text-2xl font-semibold mb-2">$15.00</h2>
                    <button className="py-2 rounded-md px-5 bg-blue-500 font-semibold  text-white">Add to cart</button></section>


                    <div className="border p-3 md:p-6 rounded md:w-10/12 w-11/12 lg:w-8/12">
                        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold my-4">What youll learn</h2>
                        <div className=" flex flex-col md:flex-row">
                            <div><div className="flex my-2 md:my-0">
                                <div className="mr-2 text-xl">
                                    
                                </div>
                                <p>Learn to use Python professionally, learning both Python 2 and Python 3!</p>
                            </div>
                            <div className="flex my-2 md:my-0">
                                <div className="mr-2 text-xl">
                                     </div>
                                <p>Create games with Python, like Tic Tac Toe and Blackjack!</p>
                            </div>
                        </div>
                        <div>
                            <div className="flex my-2 md:my-0">
                                <div className="mr-2 text-xl">
                                     
                                </div><p> Learn advanced Python features, like the collections module and how to work with timestamps!</p>
                            </div>
                            <div className="flex my-2 md:my-0">
                                <div className="mr-2 text-xl">
                                     </div><p>Learn to use Object Oriented Programming with classes!</p>
                                </div>
                            </div></div></div>



        <h3 className="text-3xl font-bold text-center">Log In and Start Learning!</h3>
       
        <form onSubmit={handleSubmit(onValid, onInvalid)} className="flex flex-col mt-8 space-y-4">
            <Input
                register={register("username", {
                    required: true,
                })} 
                name="username" label="UserName" type="text" required
            />
            <Input
                register={register("email", {
                    required: true,
                })}   
                name="email" label="Email" type="email" required  
            />
                { errors.email?.message }
            <Input
                register={register("password", {
                    required: true,
                })}
                name="password" label="Password" type="password" required  
            />
            <Button  text={loading? "Loading" : "Get one-time password"}  />

        </form>
        
        </div>
       
    )
}