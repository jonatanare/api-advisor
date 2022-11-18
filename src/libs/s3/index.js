import AWS from 'aws-sdk'
import config from './config.js'

export const s3 = new AWS.S3(config.s3)
