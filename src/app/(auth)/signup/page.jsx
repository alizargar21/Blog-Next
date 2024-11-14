"use client";
import Button from "@/ui/Button";
import RHFTextField from "@/ui/RHFTextField";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { resolver, yupResolver } from "@hookform/resolvers/yup";
import { signupApi } from "@/services/authService";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
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
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });
  const router = useRouter()

  const onSubmit = async (values) => {
try {
  const {user , message} =  await signupApi(values);
  toast.success(message)
  router.push("/")
  console.log(user , message);
} catch (error) {
  console.log(error?.response?.data?.message)
  toast.error(error?.response?.data?.message)

}
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

        <Button
          type="submit"
       
          variant="primary"
          className={"w-full"}
        >
          تایید
        </Button>
      </form>
    </div>
  );
}

export default SignUpPage;
