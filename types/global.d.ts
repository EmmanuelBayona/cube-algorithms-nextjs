// as we add some custom props in out clerk session token, we need to type them

export { };

declare global {
    interface CustomJwtSessionClaims {
        membership: Record<string, string>;
    }
}
