

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.Bm5RjRoJ.js","_app/immutable/chunks/scheduler.DHKgWpgq.js","_app/immutable/chunks/index.Bi7Fr22K.js","_app/immutable/chunks/store.BHf5JAqq.js","_app/immutable/chunks/index.YyEweObM.js"];
export const stylesheets = ["_app/immutable/assets/2.Jeum8845.css"];
export const fonts = [];
