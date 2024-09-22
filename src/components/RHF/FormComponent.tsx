import {FormComponentProps, Payload} from "./Types.ts";
import {FormProvider, useForm} from "react-hook-form";
import {StyledForm, StyledTextInput} from "./FormComponet.Styled.ts";
import {DevTool} from "@hookform/devtools";
import {useState} from "react";

export default function FormComponent({onSubmit}: FormComponentProps) {
    const [defaultValues, setDefaultValues] = useState<Payload>();
    const rhfMethods = useForm<Payload>({defaultValues});

    return (
        <FormProvider  {...rhfMethods}>
            <pre>{JSON.stringify(defaultValues)}</pre>
            {/*<StyledForm onSubmit={rhfMethods.handleSubmit(onSubmit)}>*/}

            {/*    <StyledTextInput*/}
            {/*        variant="outlined"*/}
            {/*        {...rhfMethods.register('email')}*/}
            {/*        label="What is your Email addres?"*/}
            {/*        fullWidth*/}
            {/*        error={!!rhfMethods.formState.errors.email}*/}
            {/*        helperText={rhfMethods.formState.errors.email?.message}*/}
            {/*    />*/}

            {/*    {import.meta.env.DEV && <DevTool/>}*/}
            {/*</StyledForm>*/}
        </FormProvider>
    )
}
