export const config = {
  apiKey: process.env.NEXT_PUBLIC_LIVE_API_KEY as string,
  baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL as string,
  DISCORD_SERVER_ID: process.env.NEXT_PUBLIC_DISCORD_SERVER_ID as string,
  DISCORD_CHANNEL_ID: process.env.NEXT_PUBLIC_DISCORD_CHANNEL_ID as string,
};
