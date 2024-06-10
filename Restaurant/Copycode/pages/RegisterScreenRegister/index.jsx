import { Helmet } from "react-helmet";
import { Text, Img, Button, CheckBox, Input, SelectBox, Heading } from "../../components";
import React from "react";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function RegisterScreenRegisterPage() {
  return (
    <>
      <Helmet>
        <title>DhiWise web app resto</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex h-[1064px] w-full items-center justify-center bg-gradient bg-cover bg-no-repeat py-[70px] md:h-auto md:py-5">
        <div className="container-xs my-[27px] flex justify-center md:p-5">
          <div className="flex w-full items-center justify-between gap-5 md:flex-col">
            <div className="flex w-[50%] flex-col items-start justify-center gap-[25px] rounded-[15px] border border-solid border-blue_gray-800 bg-blue_gray-900 py-[63px] pl-[63px] pr-14 md:w-full md:p-5">
              <Heading as="h1" className="mt-1.5">
                Registration
              </Heading>
              <div className="flex flex-col items-center self-stretch">
                <div className="flex gap-5 self-stretch md:flex-col">
                  <div className="flex w-full flex-col items-start gap-1">
                    <Text as="p">
                      <span className="text-white-A700">&nbsp;First Name</span>
                      <span className="text-red-500_01">*</span>
                    </Text>
                    <Input
                      shape="round"
                      name="firstName"
                      placeholder={`Jenny Wilson`}
                      className="mb-6 border-blue_gray-200_3f sm:pr-5"
                    />
                  </div>
                  <div className="flex w-full flex-col items-start gap-1">
                    <Text as="p">
                      <span className="text-white-A700">&nbsp;Last Name</span>
                      <span className="text-red-500_01">*</span>
                    </Text>
                    <Input
                      shape="round"
                      name="lastName"
                      placeholder={` Wilson`}
                      className="mb-6 border-blue_gray-200_3f sm:pr-5"
                    />
                  </div>
                </div>
                <div className="flex gap-5 self-stretch md:flex-col">
                  <div className="flex w-full flex-col items-start gap-1">
                    <Text as="p">
                      <span className="text-white-A700">&nbsp;Email Address</span>
                      <span className="text-red-500_01">*</span>
                    </Text>
                    <Input
                      shape="round"
                      name="email"
                      placeholder={`1901 Thornridge Cir. Shiloh, Hawaii `}
                      className="mb-6 border-blue_gray-200_3f sm:pr-5"
                    />
                  </div>
                  <div className="flex w-full flex-col items-start gap-1">
                    <Text as="p">
                      <span className="text-white-A700">&nbsp;Phone Number</span>
                      <span className="text-red-500_01">*</span>
                    </Text>
                    <Input
                      shape="round"
                      name="phoneNumber"
                      placeholder={`91+ 93534 99872`}
                      className="mb-6 border-blue_gray-200_3f sm:pr-5"
                    />
                  </div>
                </div>
                <div className="flex gap-5 self-stretch md:flex-col">
                  <div className="flex w-full flex-col items-start gap-[3px]">
                    <Text as="p">
                      <span className="text-white-A700">&nbsp;Country</span>
                      <span className="text-red-500_01">*</span>
                    </Text>
                    <SelectBox
                      shape="round"
                      indicator={<Img src="images/img_arrowdown.svg" alt="arrow_down" className="h-[24px] w-[24px]" />}
                      name="country"
                      placeholder={`India`}
                      options={dropDownOptions}
                      className="mb-[23px] gap-px self-stretch border border-solid border-blue_gray-200_3f sm:pr-5"
                    />
                  </div>
                  <div className="flex w-full flex-col items-start gap-1">
                    <Text as="p">
                      <span className="text-white-A700">&nbsp;State</span>
                      <span className="text-red-500_01">*</span>
                    </Text>
                    <SelectBox
                      shape="round"
                      indicator={<Img src="images/img_arrowdown.svg" alt="arrow_down" className="h-[24px] w-[24px]" />}
                      name="enterfirst"
                      placeholder={`Gujarat`}
                      options={dropDownOptions}
                      className="mb-6 gap-px self-stretch border border-solid border-blue_gray-200_3f sm:pr-5"
                    />
                  </div>
                  <div className="flex w-full flex-col items-start gap-[3px]">
                    <Text as="p">
                      <span className="text-white-A700">&nbsp;City</span>
                      <span className="text-red-500_01">*</span>
                    </Text>
                    <SelectBox
                      shape="round"
                      indicator={<Img src="images/img_arrowdown.svg" alt="arrow_down" className="h-[24px] w-[24px]" />}
                      name="city"
                      placeholder={`Surat`}
                      options={dropDownOptions}
                      className="mb-[23px] gap-px self-stretch border border-solid border-blue_gray-200_3f sm:pr-5"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start gap-1 self-stretch">
                  <Text as="p">
                    <span className="text-white-A700">&nbsp;Select Restaurant</span>
                    <span className="text-red-500_01">*</span>
                  </Text>
                  <SelectBox
                    shape="round"
                    indicator={<Img src="images/img_arrowdown.svg" alt="arrow_down" className="h-[24px] w-[24px]" />}
                    name="enterfirst_one"
                    placeholder={` Statesman Restaurant`}
                    options={dropDownOptions}
                    className="mb-6 gap-px self-stretch border border-solid border-blue_gray-200_3f sm:pr-5"
                  />
                </div>
                <div className="flex flex-col items-start gap-1 self-stretch">
                  <Text as="p">
                    <span className="text-white-A700">Password&nbsp;</span>
                    <span className="text-red-500_01">*</span>
                  </Text>
                  <Input
                    shape="round"
                    type="password"
                    name="password"
                    placeholder={`........`}
                    suffix={<Img src="images/img_eye.svg" alt="eye" className="h-[24px] w-[24px]" />}
                    className="mb-6 gap-[35px] border-blue_gray-200_3f"
                  />
                </div>
                <div className="flex flex-col items-start gap-1 self-stretch">
                  <Text as="p" className="ml-[5px] md:ml-0">
                    <span className="text-white-A700">&nbsp; Confirm Password</span>
                    <span className="text-red-500_01">*</span>
                  </Text>
                  <Input
                    shape="round"
                    type="password"
                    name="confirmpassword"
                    placeholder={`........`}
                    suffix={<Img src="images/img_eye.svg" alt="eye" className="h-[24px] w-[24px]" />}
                    className="mb-6 gap-[35px] border-blue_gray-200_3f"
                  />
                </div>
                <CheckBox
                  name="iagreetoallthet"
                  label="I Agree  to all the T&C and Privacy Policies."
                  id="iagreetoallthet"
                  className="gap-3.5 self-start py-px pr-1 text-sm text-blue_gray-200"
                />
                <Button shape="round" className="mt-[19px] w-full">
                  Register
                </Button>
                <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                  <Text as="p" className="mt-4 !font-normal">
                    <span className="text-white-A700">Already have an account?&nbsp;</span>
                    <span className="text-indigo-A200">Login</span>
                  </Text>
                </a>
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
