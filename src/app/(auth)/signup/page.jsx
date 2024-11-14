"use client";
import Button from "@/ui/Button";
import RHFTextField from "@/ui/RHFTextField";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useAuth } from "context/AuthContext";
import SpinnerMini from "@/ui/SpinnerMini";
const schema = yup.object({
  name: yup
    .string()
    .min(5, "نام و نام خانوادگی نا معتبر است")
    .max(30)
    .required("نام و نام خانوادگی الزامی است"),
  email: yup.string().email("ایمیل نا معتبر است").required("ایمیل الزامی است"),
  password: yup.string().required("رمز عبور الزامی است"),
});
function SignUpPage() {
  const { signup } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const onSubmit = async (values) => {
    await signup(values);
  };

  return (
    <div>
      <h1>ثبت نام</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
        <RHFTextField
          name={"name"}
          register={register}
          label={"نام و نام خانوادگی"}
          isRequired
          errors={errors}
        />
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

        <div>
          {isLoading ? (
            <SpinnerMini />
          ) : (
            <Button type="submit" variant="primary" className={"w-full"}>
              تایید
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}

export default SignUpPage;
