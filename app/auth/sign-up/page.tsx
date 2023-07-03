"use client";

import { useState } from "react";

import SignUpForm from "@/app/components/SignUpForm";
import EmailConfirmationForm from "@/app/components/EmailConfirmationForm";
import AddPhotoForm from "@/app/components/AddPhotoForm";

export type SignUpSteps = "main-form" | "code-confirmation" | "photo";

const SignUp = () => {
  const [formStep, setFormStep] = useState<SignUpSteps>("main-form");

  return (
    <div>
      {formStep === "main-form" && (
        <SignUpForm onNextStep={() => setFormStep("code-confirmation")} />
      )}
      {formStep === "code-confirmation" && (
        <EmailConfirmationForm onNextStep={() => setFormStep("photo")} />
      )}
      {formStep === "photo" && <AddPhotoForm />}
    </div>
  );
};

export default SignUp;
