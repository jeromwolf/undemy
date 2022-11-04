export function cls(...classnames: string[]) {
    return classnames.join(" ");
  }

  export const isMultiple = (value:any) => (value === 0 || value > 1 ? "s" : "");