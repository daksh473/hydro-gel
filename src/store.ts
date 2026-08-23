import * as Y from 'yjs';
import { WebrtcProvider } from 'y-webrtc';
import { IndexeddbPersistence } from 'y-indexeddb';
import type { Sample } from './data';
import { INITIAL_DATA } from './data';
import { DEFAULT_AUTH } from './auth';

export const doc = new Y.Doc();
// We define a unique room name for this specific tracker
const roomName = 'hydrogel-tracker-48-samples-room';

// Connect to peers with WebRTC
export const provider = new WebrtcProvider(roomName, doc, {
  signaling: ['wss://signaling.yjs.dev', 'wss://y-webrtc-signaling-eu.herokuapp.com', 'wss://y-webrtc-signaling-us.herokuapp.com']
});

// Persist data locally
export const persistence = new IndexeddbPersistence(roomName, doc);

// The shared map containing all samples by ID
export const samplesMap = doc.getMap<Sample>('samples');

// The shared map containing authentication hashes
export const authMap = doc.getMap<string>('auth');

persistence.on('synced', () => {
  doc.transact(() => {
    // If the map is empty after syncing with indexeddb, initialize it with the 48 rows
    if (samplesMap.size === 0) {
      INITIAL_DATA.forEach(sample => {
        samplesMap.set(sample.id, sample);
      });
    }

    // Initialize auth map if empty
    if (authMap.size === 0) {
      Object.entries(DEFAULT_AUTH).forEach(([username, hash]) => {
        authMap.set(username, hash);
      });
    }
  });
});
