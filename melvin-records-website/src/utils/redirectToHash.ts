// src/utils/redirectToHash.ts
export function redirectToHash() {
  const path = window.location.pathname;
  const hash = window.location.hash;

  // Solo redirige si no hay hash y no es la raíz
  if (!hash && path !== "/") {
    window.location.replace(`/#${path}`);
  }
}
