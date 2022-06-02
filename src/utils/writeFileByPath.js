import fs from 'fs/promises'
import path from 'path'

export default async (relativePath, payload) => {
    const pathDB = path.join(import.meta.url, relativePath)
    await fs.writeFile(pathDB.split('file:')[1], JSON.stringify(payload))
}