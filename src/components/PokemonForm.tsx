import {FieldName, FormProvider, useForm} from "react-hook-form";
import {styled, Typography} from "@mui/material";
import {StyledForm, StyledTextInput} from "./RHF/FormComponet.Styled.ts";


const StyledPokemonForm = styled(StyledForm)`
  border: solid greenyellow;
`;

type PokemonFormSchema = {
    base_experience: number
    height: number
    id: number
    is_default: boolean
    name: string
    order: number
    weight: number
}

type PokemonFormProps = {
    name: string
    url: string
}
export default function PokemonForm({name: pokemon, url}: PokemonFormProps) {
    const methods = useForm<PokemonFormSchema>({
        defaultValues: async () => {
            const pokemonData = await fetch(url)
            const json = await pokemonData.json()
            const {base_experience, height, id, is_default, name, order, weight}: PokemonFormSchema = json
            return {base_experience, height, id, is_default, name, order, weight}
        }
    })

    return (
        <FormProvider {...methods}>
            <StyledPokemonForm>
            <Typography variant="h4" component="h1">Pokemon:{pokemon}</Typography>
            {Object.keys({...methods.formState.defaultValues}).map((key) => {
                const fieldName = key as FieldName<PokemonFormSchema>
                return <StyledTextInput key={key} {...methods.register(fieldName)}/>
            })}
            </StyledPokemonForm>
        </FormProvider>
    )

};
