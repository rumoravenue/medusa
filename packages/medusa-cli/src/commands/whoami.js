const axios = require("axios").default
const resolveCwd = require(`resolve-cwd`)
const Netrc = require("netrc-parser").default

module.exports = {
  whoami: async argv => {
    const apiHost =
      process.env.MEDUSA_API_HOST || "https://api.medusa-commerce.com"
    const hostMachine =
      process.env.MEDUSA_HOST_MACHINE || "api.medusa-commerce.com"

    await Netrc.load()

    if (!Netrc.machines[hostMachine]) {
      console.log(
        "You are not logged into Medusa Cloud. Please run medusa login."
      )
      process.exit(0)
    }

    const { login, password } = Netrc.machines[hostMachine]

    const { data: auth } = await axios
      .get(`${apiHost}/auth`, {
        auth: {
          username: login,
          password: password,
        },
      })
      .catch(err => {
        console.log(err)
        process.exit(1)
      })

    if (auth.user) {
      console.log(`Hi, ${auth.user.first_name}! Here are your details:`)
      console.log(`id: ${auth.user.id}`)
      console.log(`email: ${auth.user.email}`)
      console.log(`first_name: ${auth.user.first_name}`)
      console.log(`last_name: ${auth.user.last_name}`)
    }
  },
}
