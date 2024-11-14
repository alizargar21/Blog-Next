"use client"
import Button from "@/ui/Button";
import RHFTextField from "@/ui/RHFTextField";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import {  yupResolver } from "@hookform/resolvers/yup";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "context/AuthContext";
import SpinnerMini from "@/ui/SpinnerMini";

const schema = yup.object({

  email: yup.string().email("ایمیل نا معتبر است").required("ایمیل الزامی است"),
  password: yup.string().required("رمز عبور الزامی است"),
});
function SignInPage() {
const {signin} = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });
  const router = useRouter();

  const onSubmit = async (values) => {
    await signin(values)
  };

  return (
    <div>
      <h1>ورود</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
        <RHFTextField
          name={"email"}
          errors={errors}
          isRequired
          register={register}
          label={"ایمیل"}
        />
        <RHFTextField
          name={"password"}
          register={register}
          label={"رمز عبور"}
          isRequired
          errors={errors}
        />

<div className="flex items-center justify-center">
          {isLoading ? (
            <SpinnerMini />
          ) : (
            <Button type="submit" variant="primary" className={"w-full"}>
              تایید
            </Button>
          )}
        </div>
        
      </form>
      <Link href={"/signup"} >ثبت نام</Link>
    </div>
  );
}

export default SignInPage;
