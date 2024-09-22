interface FormDataPayload {
    Color1: string;
    Color2: string;
    Color3: string;
    BackGroupColor: string;
}

export interface FormComponentProps {

    onSubmit: (data: FormDataPayload) => void;
}

export type Payload = FormDataPayload & { email: string };
