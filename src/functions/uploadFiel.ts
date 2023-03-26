export const uploadFile = (file:any, bucket )=>{
    const nameFile = Date.now() + '.' + file.originalname.split('.').pop();
  const fileFef = bucket.file(nameFile);
  const streamFile = fileFef.createWriteStream({
    metadata: {
      contentType: file.mimetype,
    },
  });
  streamFile.on('error', (e) => {
    console.error(e);
  });
  streamFile.on('finish', async (e) => {
    await fileFef.makePublic();
  });
  streamFile.end(file.buffer);
  const url = `https://storage.googleapis.com/${process.env.FIREBASE_DATABASE_URL}/${nameFile}`
  return url;
}