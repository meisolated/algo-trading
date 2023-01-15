import axios from "axios"
import qs from "qs"
import logger from "../../logger"

class TrueData {
    username: string
    password: string
    accessToken: string
    baseUrl: string = "https://auth.truedata.in"
    constructor(username: string, password: string) {
        this.username = username
        this.password = password
    }

    async initializeAccessToken() {
        // get accessToken
        const data = qs.stringify({
            username: this.username,
            password: this.password,
            grant_type: "password",
        })
        const config = { method: "post", url: `${this.baseUrl}/token`, headers: { "Content-Type": "application/x-www-form-urlencoded" }, data: data }
        axios(config).then((response: any) => {
            const data = response.data
            this.accessToken = data.access_token
            return true
        }).catch((err: any) => {
            logger.error(err)
            return false
        })
    }

}
export default TrueData