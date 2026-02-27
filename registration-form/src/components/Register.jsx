import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import { registerSchema } from "../validators/registerSchema";
import { useState } from "react";

export default function Register () {
    const [showPass, setShowPass] = useState(false);
    const [success, setSuccess] = useState(false)

    const {register, handleSubmit, reset, formState:{errors, isValid, isSubmitting}} = useForm(
        {
            resolver: yupResolver(registerSchema),
            mode: "onTouched" // validating starts as we get out of input field
        }
    )

    function onSubmit (data) {
        setSuccess("Successfully registered 🎉");
        console.log("user data:", data)
    } 

    function resetForm () {
        reset();
        setSuccess("")
        setShowPass(false);
    }

    return (
        <div>
            <form className="mt-6" onSubmit={handleSubmit(onSubmit)} noValidate>
                {success && <p className="text-green-400">{success}</p> }
                <div className="text-gray-600 text-sm grid grid-rows my-2">
                    <label htmlFor="fullName">Full Name</label>
                    <input 
                        name="fullName"
                        id="fullName"
                        type="text" 
                        className="w-1/2 py-1 px-2 my-1 border rounded-md text-gray-600"
                        placeholder="Enter your full name..."
                        {...register("fullName")}
                        autoComplete="name"
                    />
                    {errors.fullName && 
                        <div className="text-sm text-red-500">{errors.fullName.message}</div>
                    }
                </div>

                <div className="text-gray-600 text-sm grid grid-rows my-2">
                    <label htmlFor="email">Email</label>
                    <input 
                        name="email"
                        id="email"
                        type="email" 
                        className="w-1/2 py-1 px-2 my-1 border rounded-md text-gray-600"
                        placeholder="Enter your email..."
                        {...register("email")}
                        autoComplete="email"
                    />
                    {errors.email &&
                        <div className="text-sm text-red-500">{errors.email.message}</div>
                    }
                </div>

                <div className="text-gray-600 text-sm grid grid-rows my-2">
                    <label htmlFor="password">Password</label>
                    <input
                        name="password" 
                        id="password"
                        type={showPass ? "text" : "password"} 
                        className="w-1/2 py-1 px-2 my-1 border rounded-md text-gray-600"
                        placeholder="Enter your password..."
                        {...register("password")}
                        autoComplete="new-password"
                    />
                    <label className="flex items-center gap-3">
                        <input
                            className="py-1 px-2 my-1 border text-gray-600"
                            type="checkbox"
                            checked={showPass}
                            onChange={(e) => setShowPass(e.target.checked)}
                        />
                        <p className="text-gray-600 hover:cursor-pointer">Show password</p>
                    </label>
                    {errors.password && 
                        <div className="text-sm text-red-500">{errors.password.message}</div>
                    }
                </div>

                <div className="text-gray-600 text-sm grid grid-rows my-2">
                    <label htmlFor="confirmPass">Confirm your password</label>
                    <input 
                        name="confirmPass"
                        id="confirmPass"
                        type={showPass ? "text" : "password"}
                        className="w-1/2 py-1 px-2 my-1 border rounded-md text-gray-600"
                        placeholder="Enter your password..."
                        {...register("confirmPass")}
                        autoComplete="new-password"
                    />
                    {errors.confirmPass && 
                        <div className="text-sm text-red-500">{errors.confirmPass.message}</div>
                    }
                </div>

                <div className="text-gray-600 text-sm grid grid-rows my-2">
                    <label htmlFor="terms" className="flex items-center gap-2">
                    <input 
                        id="terms"
                        type="checkbox" 
                        className="py-1 px-2 my-1 border text-gray-600"
                        name="terms"
                        {...register("terms")}
                    /> <p className="text-gray-600 hover:cursor-pointer">Terms and condition</p>
                    </label>
                </div>

                <div className="flex items-start justify-center my-4 gap-3">
                    <button 
                        className="bg-black text-white rounded-md p-2 hover:bg-gray-700 "
                        type="submit"
                        disabled={!isValid || isSubmitting}
                    >
                        Register
                    </button>
                    <button 
                        type="button"
                        onClick={resetForm}
                        className="bg-black text-white rounded-md p-2 hover:bg-gray-700 "
                    >
                        Reset
                    </button>
                </div>
            </form>
      </div>
    )
}