import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    text: string;
    background: string;
    tint: string;
    tabIconDefault: string;
    tabIconSelected: string;
    color: {
      mainColor: string;
      subColor: string;
    };
  }
}
