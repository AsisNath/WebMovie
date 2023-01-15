import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Button from 'react-bootstrap/Button';
import css from './CreateLogin.module.css';

const schema = yup.object().shape({
    email: yup.string().email("Please enter a valid email address").required("Please enter a valid email address"),
    password: yup.string().required("Password is required").min(6, "Password must be at least 6 characters").max(15, "Password can only be 15 characters max"),
});

export function LogInForm() {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: "onBlur",
    });

    const submitLoginForm = (data) => {
        console.log(data);
        alert(JSON.stringify(data));
    };

    return (
        <div>

            <h1 className={css.h1}>Welcome</h1>
            <h3 className={css.h3}>LogIn Your Account!</h3>

            <form className={css.error} onSubmit={handleSubmit(submitLoginForm)}>
                <div>
                    <input className={css.input} type="email" name="email" placeholder="Email" {...register("email")} />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>
                <div>
                    <input className={css.input} type="password" name="password" placeholder="Password" {...register("password")} />
                    {errors.password && <p>{errors.password.message}</p>}
                </div>

                <div>
                    <Button variant="primary" type="submit" className={css.click}>Log In!</Button>{' '}
                </div>
            </form>
        </div>
    );
}
