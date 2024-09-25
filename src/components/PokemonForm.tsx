import {FieldName, FormProvider, useForm} from "react-hook-form";
import {Box, capitalize, styled, Typography} from "@mui/material";
import {StyledForm, StyledTextInput} from "./RHF/FormComponet.Styled.ts";
import createPokemon from "../lib/create-pokemon.ts";
import {Pokemon} from "../lib/PokemonType.ts";


const StyledPokemonForm = styled(StyledForm)`
  border: solid greenyellow;
`;

const Image = styled('img')`
  padding: 0;
  margin: 0;
`

type PokemonFormSchema = Partial<Pokemon>

type PokemonFormProps = {
    name: string
    url: string
}
export default function PokemonForm({name: pokemon, url}: PokemonFormProps) {
    const methods = useForm<PokemonFormSchema>({
        defaultValues: async () => {
            const pokemonData = await fetch(url)
            const json = await pokemonData.json()
            return createPokemon(json)
        }
    })

    const editableFields = ["name", "height", "weight", "base_experience"]

    return (
        <FormProvider {...methods}>
            <StyledPokemonForm>
                <Box display="flex" alignItems="center" justifyContent="space-between">
                    <Typography variant="h4" component="h1">
                        {capitalize(pokemon)}
                    </Typography>
                    <Image src={`${methods.getValues("avatar")}`} alt=""/>
                </Box>
                {editableFields.map((key) => {
                    const fieldName = key as FieldName<PokemonFormSchema>
                    // @ts-ignore
                    return <StyledTextInput key={key} label={capitalize(key)} {...methods.register(fieldName)}/>
                })}
            </StyledPokemonForm>
        </FormProvider>


    );
};
