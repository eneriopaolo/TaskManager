

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dashboard/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.Btqf7OVU.js","_app/immutable/chunks/scheduler.DHKgWpgq.js","_app/immutable/chunks/index.Bi7Fr22K.js","_app/immutable/chunks/store.BHf5JAqq.js","_app/immutable/chunks/index.YyEweObM.js"];
export const stylesheets = ["_app/immutable/assets/3.C-BLDBjN.css"];
export const fonts = [];
