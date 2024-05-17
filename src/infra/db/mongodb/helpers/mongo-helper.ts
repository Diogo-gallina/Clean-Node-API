/* eslint-disable @typescript-eslint/no-unused-vars */
import { Collection, MongoClient } from 'mongodb'

export const MongoHelper = {
  client: null as MongoClient,

  async connect(uri: string): Promise<void> {
    if (this.client) await this.client.close()
    this.client = await MongoClient.connect(process.env.MONGO_URL)
  },

  async disconnect(): Promise<void> {
    if (this.client) await this.client.close()
  },

  async getCollection(name: string): Promise<Collection> {
    if (this.client) return this.client.db().collection(name)
  },
}
