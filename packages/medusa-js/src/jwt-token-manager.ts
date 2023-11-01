/**
 * `JwtTokenManager` holds JWT tokens in state.
 */
class JwtTokenManager {
  private adminJwt: string | null = null;
  private storeJwt: string | null = null;

  /**
   * Set a store or admin jwt token to be sent with each request.
   */
  public registerJwt(token: string, domain: "admin" | "store") {
    if (domain === "admin") {
      if (typeof window !== undefined) {
      localStorage.setItem("medusa:admin:token", token);
      }
    } else if (domain === "store") {
      if (typeof window !== undefined) {
        localStorage.setItem("medusa:store:token", token);
      }
    } else {
      throw new Error(`'domain' must be wither 'admin' or 'store' received ${domain}`)
    }
  }

  /**
   * Retrieve the store or admin jwt token
   */
  public getJwt(domain: "admin" | "store") {
    if (domain === "admin") {
      if (typeof window !== undefined) {
        return localStorage.getItem("medusa:admin:token");
      }
    } else if (domain === "store") {
      if (typeof window !== undefined) {
        return localStorage.getItem("medusa:store:token");
      }
    } else {
      throw new Error(`'domain' must be wither 'admin' or 'store' received ${domain}`)
    }
  }
}

/**
 * Export singleton instance.
 */
export default new JwtTokenManager()
