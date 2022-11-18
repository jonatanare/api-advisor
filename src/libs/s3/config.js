import * as dotenv from 'dotenv'
dotenv.config()

export default {
  s3: {
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    },
    region: process.env.AWS_REGION,
    httpOptions: {
      timeout: 90000
    },
    params: {
      ACL: 'public-read',
      Bucket: process.env.AWS_BUCKET_NAME
    }
  }
}
