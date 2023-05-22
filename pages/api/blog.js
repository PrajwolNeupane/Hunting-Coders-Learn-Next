import * as fs from 'fs';

export default async function handler(req, res) {

    try {
        let data = await fs.promises.readdir("blogdata");
        let myFile;
        let allBlogs = [];
        for (let index = 0; index < data.length; index++) {
            const element = data[index];
            myFile = await fs.promises.readFile(('blogdata/' + element), 'utf-8')
            allBlogs.push(JSON.parse(myFile));
        }
        res.status(200).json(allBlogs);
    }catch(e){
        res.status(500).json({error:e});
    }

}