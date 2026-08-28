export type VideoItem = {
  id: number;
  title: string;
  type: "youtube" | "mp4";
  youtubeId?: string;
  src?: string;
  poster?: string;
};

export type EmbedItem = {
  id: number;
  title: string;
  type: string;
  url: string;
};

export const VIDEOS_DATA: VideoItem[] = [
  { id: 1, title: 'Copacabana Hall Venue Tour', type: 'mp4', src: '/videos/video-01.mp4', poster: '/videos/video-01-poster.webp' },
  { id: 2, title: 'Events Highlight Reel', type: 'mp4', src: '/videos/video-02.mp4', poster: '/videos/video-02-poster.webp' },
];

export const EMBEDS_DATA: EmbedItem[] = [
];