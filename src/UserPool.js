import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "us-east-1_7n03nO0oS",
    ClientId: "30foqqkb60ea6e1bd18gdfe1a0"
}

export default new CognitoUserPool(poolData);