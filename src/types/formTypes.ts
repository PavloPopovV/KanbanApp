import { UseFormRegister } from "react-hook-form";

export type FormProps = {
    url: string;
};

export type FormInputProps = {
    name: keyof FormProps;
    placeholder: string;
    pattern: RegExp;
    register: UseFormRegister<FormProps>;
};

export type FormButtonProps = {
    title: string;
    type: "button" | "submit";
    isLoading: boolean;
};

export type FormErrorProps = {
    error?: string;
};