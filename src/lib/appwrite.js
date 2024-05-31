import { Client, Account, ID } from 'appwrite';

const client = new Client();
client
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_URL) // Your Appwrite endpoint
  .setProject(process.env.NEXT_PUBLIC_PROJECT_ID); // Your project ID

const account = new Account(client);

export { client, account, ID };
