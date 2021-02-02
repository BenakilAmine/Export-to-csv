import { gql } from "@apollo/client";
const GET_COUNTRIES = gql`
  {
    countries {
      code
      name
      native
    }
  }
`;