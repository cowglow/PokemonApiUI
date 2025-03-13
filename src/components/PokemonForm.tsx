import {FieldName, FormProvider, useForm} from "react-hook-form";
import {Box, capitalize, Skeleton, styled, Typography} from "@mui/material";
import {StyledForm, StyledTextInput} from "./RHF/FormComponet.Styled.ts";
import createPokemon from "../lib/create-pokemon.ts";
import {Pokemon} from "../lib/PokemonType.ts";

const StyledPokemonForm = styled(StyledForm)`
    width: 100%;
    display: flex;
    padding: 0 ${({theme}) => theme.spacing(1.73)};
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
export default function PokemonForm({name: pokemonName, url}: PokemonFormProps) {
    const editableFields = ["name", "height", "weight", "base_experience"] as const
    const randomDelay = Math.floor(Math.random() * (1200 - 800 + 1)) + 800;
    const methods = useForm<PokemonFormSchema>({
        defaultValues: async () => {
            const pokemonData = await fetch(url)
            const json = await pokemonData.json()
            await new Promise(resolve => setTimeout(resolve, randomDelay))
            return createPokemon(json)
        }
    })

    return (
        <FormProvider {...methods}>
            <StyledPokemonForm>
                <Box display="flex" alignItems="center" justifyContent="space-between">
                    <Typography variant="h4" component="h1">
                        {capitalize(pokemonName)}
                    </Typography>
                    {methods.formState.isLoading
                        ? <Skeleton
                            width={96}
                            height={96}
                        />
                        : <Image src={`${methods.getValues("avatar")}`} alt=""/>
                    }
                </Box>
                {editableFields.map((key: FieldName<PokemonFormSchema>) => {
                    const fieldName = key as FieldName<PokemonFormSchema>
                    return methods.formState.isLoading
                        ? <Skeleton
                            width="100%"
                            height={56}
                        />
                        : <StyledTextInput
                            key={key}
                            label={capitalize(key)}
                            // @ts-ignore
                            {...methods.register(fieldName)}

                        />
                })}
            </StyledPokemonForm>
        </FormProvider>
    );
};
