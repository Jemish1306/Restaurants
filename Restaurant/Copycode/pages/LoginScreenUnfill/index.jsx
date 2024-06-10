import { Helmet } from "react-helmet";
import { Text, Img, Button, CheckBox, Input, Heading } from "../../components";
import React from "react";

export default function LoginScreenUnfillPage() {
  return (
    <>
      <Helmet>
        <title>DhiWise web app resto</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex h-[1064px] w-full items-center justify-center bg-gradient1 bg-cover bg-no-repeat py-[70px] md:h-auto md:py-5">
        <div className="container-xs my-[209px] flex justify-center pr-[5px] md:p-5">
          <div className="flex w-full items-center justify-between gap-5 md:flex-col">
            <div className="flex w-[50%] flex-col items-start justify-center gap-[25px] rounded-[15px] border border-solid border-blue_gray-800 bg-blue_gray-900 py-[63px] pl-[63px] pr-14 md:w-full md:p-5">
              <a href="Login" target="_blank" rel="noreferrer" className="mt-1.5">
                <Heading as="h1">Login</Heading>
              </a>
              <div className="flex flex-col items-center self-stretch">
                <div className="flex flex-col items-start gap-1 self-stretch">
                  <Text as="p">
                    <span className="text-white-A700">Email or Phone&nbsp;</span>
                    <span className="text-red-500_01">*</span>
                  </Text>
                  <Input
                    shape="round"
                    type="email"
                    name="phone"
                    placeholder={`Enter your Email or Phone `}
                    className="mb-6 border-blue_gray-800 !text-blue_gray-200 sm:pr-5"
                  />
                </div>
                <div className="flex flex-col items-start gap-1 self-stretch">
                  <Text as="p">
                    <span className="text-white-A700">Password</span>
                    <span className="text-red-500_01">*</span>
                  </Text>
                  <Input
                    shape="round"
                    type="password"
                    name="password"
                    placeholder={`Enter Password`}
                    suffix={<Img src="images/img_eye.svg" alt="eye" className="h-[24px] w-[24px]" />}
                    className="mb-6 gap-[35px] border-blue_gray-800 !text-blue_gray-200"
                  />
                </div>
                <div className="flex items-center justify-between gap-5 self-stretch">
                  <CheckBox
                    name="rememberme"
                    label="Remember Me"
                    id="rememberme"
                    className="gap-2.5 p-px text-sm text-white-A700"
                  />
                  <Text as="p" className="self-end !font-normal !text-indigo-A200">
                    Forgot Password ?
                  </Text>
                </div>
                <Button shape="round" className="mt-5 w-full sm:px-5">
                  Login
                </Button>
                <Text as="p" className="mt-4 !font-normal">
                  <span className="text-white-A700">Don’t have an account?&nbsp;</span>
                  <span className="text-indigo-A200">Register</span>
                </Text>
              </div>
            </div>
            <div className="flex w-[42%] flex-col items-center gap-[9px] md:w-full">
              <div className="flex w-[30%] flex-col gap-5 md:w-full">
                <div className="flex items-center gap-[15px]">
                  <Img src="images/img_thumbs_up.svg" alt="thumbsup" className="h-[87px] w-[33%]" />
                  <div className="flex flex-1 flex-col items-start">
                    <Text size="3xl" as="p" className="!font-bayon !text-yellow-800">
                      Restaurants
                    </Text>
                    <Text size="xl" as="p">
                      Your Tagline
                    </Text>
                  </div>
                </div>
                <div className="h-px rotate-[-90deg] bg-blue_gray-900_01" />
              </div>
              <Text size="3xl" as="p" className="w-full text-center !font-medium leading-[31px]">
                <span className="text-white-A700">Aenean blandit id nisl et pretium. Sed efficitur&nbsp;</span>
                <span className="text-lime-700">lectus ipsum, ac dapibus turpis auctor</span>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
