const mixins = {
    breakpoint: (value: number) => `@media (max-width: ${value}px)`,
};

export const {breakpoint,} = mixins;
