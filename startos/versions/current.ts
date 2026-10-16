import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.2.1:4',
  releaseNotes: {
    en_US:
      'Fixes Set Relay Address offering no choices when the relay is fronted by the Cloudflare Tunnel package: tunnel-attached hostnames have kind "plugin", not "domain", and were filtered out of the address list.',
    es_ES:
      'Corrige que «Definir dirección del relay» no ofreciera opciones cuando el relay está detrás del paquete Cloudflare Tunnel: los nombres adjuntados por túnel tienen tipo «plugin», no «domain», y quedaban filtrados de la lista.',
    de_DE:
      'Behebt, dass „Relay-Adresse festlegen" keine Auswahl anbot, wenn das Relay über das Cloudflare-Tunnel-Paket erreichbar ist: Tunnel-Hostnamen tragen den Typ „plugin" statt „domain" und wurden aus der Adressliste herausgefiltert.',
    pl_PL:
      'Naprawia brak opcji w oknie „Ustaw adres relay", gdy relay jest wystawiony przez pakiet Cloudflare Tunnel: nazwy podpięte tunelem mają typ „plugin", a nie „domain", i były odfiltrowywane z listy adresów.',
    fr_FR:
      "Corrige l'absence de choix dans « Définir l'adresse du relais » quand le relais passe par le paquet Cloudflare Tunnel : les noms rattachés par tunnel portent le type « plugin » et non « domain », et étaient filtrés de la liste.",
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
