import config from "./config"
import TrueData from "./lib/trueData"


const TrueD = new TrueData(config.trueData.username, config.trueData.password)

TrueD.initializeAccessToken()