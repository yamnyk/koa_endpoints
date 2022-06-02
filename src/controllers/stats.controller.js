import readFileToJSON from "../utils/readFileToJSON.js";

const getAllStats = async (ctx) => {
    const file = await readFileToJSON('../../fake-db.json')

    ctx.body = JSON.stringify(file)
}

export default {
    getAllStats
}