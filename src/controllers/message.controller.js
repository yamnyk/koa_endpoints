import readFileToJSON from "../utils/readFileToJSON.js";
import writeFileByPath from "../utils/writeFileByPath.js";

const pathToFakeDB = '../../fake-db.json';

const receiveMessage = async (ctx) => {
    const fakeDB = await readFileToJSON(pathToFakeDB)

    fakeDB.calls++
    fakeDB.lastMessage = ctx.request.body

    await writeFileByPath(pathToFakeDB, fakeDB)

    ctx.body = fakeDB.lastMessage
}

export default {
    receiveMessage
}