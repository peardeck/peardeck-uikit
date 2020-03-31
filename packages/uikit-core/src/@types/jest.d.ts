// Necessary until https://github.com/styled-components/jest-styled-components/issues/298 is fixed

declare namespace jest {
  interface AsymmetricMatcher {
    $$typeof: symbol;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    sample?: string | RegExp | object | Array<any> | Function;
  }

  type Value = string | number | RegExp | AsymmetricMatcher | undefined;

  interface Options {
    media?: string;
    modifier?: string;
    supports?: string;
  }

  interface Matchers<R> {
    toHaveStyleRule(property: string, value?: Value, options?: Options): R;
  }
}
