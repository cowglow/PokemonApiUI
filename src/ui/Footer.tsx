import {Box, Divider, Link} from "@mui/material";
import GitHubLogo from "../assets/github-mark.svg?react"

export default function Footer() {
    return (
        <Box mx={1}>
            <Divider variant="fullWidth"/>
            <Box display="flex" p={1} gap={1} alignItems="flex-end">
                <GitHubLogo/>
                <Link href="https://github.com/cowglow/pokemon-api-ui" variant="caption" underline="hover">GitHub
                    Repo</Link>
            </Box>
        </Box>
    )
}
