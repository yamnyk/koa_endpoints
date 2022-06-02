import fs from 'fs/promises';

export default async path => {
    return JSON.parse(await fs.readFile(
        new URL(path, import.meta.url)
    ))
}