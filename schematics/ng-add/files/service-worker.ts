/// <reference lib="webworker" />

import { skipWaiting, clientsClaim } from 'workbox-core';
import { precacheAndRoute, cleanupOutdatedCaches } from 'workbox-precaching';

declare const self: ServiceWorkerGlobalScope;

skipWaiting();
clientsClaim();
cleanupOutdatedCaches();
/**
 * From the official Workbox docs:
 *
 * This method will add entries to the precache list and add a route to respond to fetch events.
 * This is a convenience method that will call precache() and addRoute() in a single call.
 * See https://developers.google.com/web/tools/workbox/modules/workbox-precaching
 */
precacheAndRoute(self.__WB_MANIFEST);
