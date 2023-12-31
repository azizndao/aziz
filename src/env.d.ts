/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly YOUTUBE_API_KEY: string
  readonly YOUTUBE_API_URL: string
  readonly YOUTUBE_CHANNEL_ID: string
  readonly EMAIL: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
