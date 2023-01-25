import { Grid, GridItem, Box } from "@chakra-ui/react";
import { MDXRemote } from "next-mdx-remote";
import Nav from "./navbar";

export const BlogPostBody = ({source, components} : {source: any, components: any}) => {
    return (
    <Box height="100vh">
      <Nav />
      <Box padding="50px">
        <Grid templateColumns="repeat(5, 1fr)" gap={4}>
          <GridItem colStart={2} colEnd={5}>
            <MDXRemote {...source} components={components} />
          </GridItem>
        </Grid>
      </Box>
    </Box>
    )
}