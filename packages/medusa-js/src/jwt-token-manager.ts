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
      this.adminJwt = token;

      if (sessionStorage) {
        sessionStorage.setItem(`medusa:jwt:${domain}`, token);
      }
    } else if (domain === "store") {
      this.storeJwt = token;

      if (sessionStorage) {
        sessionStorage.setItem(`medusa:jwt:${domain}`, token);
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
      if (sessionStorage.getItem(`medusa:jwt:${domain}`) && !this.adminJwt) {
        this.adminJwt = sessionStorage.getItem(`medusa:jwt:${domain}`);
      }

      return this.adminJwt;
    } else if (domain === "store") {
      if (sessionStorage.getItem(`medusa:jwt:${domain}`) && !this.storeJwt) {
        this.storeJwt = sessionStorage.getItem(`medusa:jwt:${domain}`);
      }

      return this.storeJwt;
    } else {
      throw new Error(`'domain' must be wither 'admin' or 'store' received ${domain}`)
    }
  }
}

/**
 * Export singleton instance.
 */
export default new JwtTokenManager()
