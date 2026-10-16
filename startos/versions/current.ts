import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.2.1:3',
  releaseNotes: {
    en_US:
      'Updates the bundled relay to upstream main build sha-30873ba (2026-10-11). Notably fixes workflow deletion, which was previously accepted but silently never applied.',
    es_ES:
      'Actualiza el relé incluido a la compilación principal upstream sha-30873ba (2026-10-11). En particular, corrige la eliminación de flujos de trabajo, que antes se aceptaba pero nunca se aplicaba.',
    de_DE:
      'Aktualisiert das gebündelte Relay auf den Upstream-Hauptbuild sha-30873ba (2026-10-11). Behebt insbesondere das Löschen von Workflows, das zuvor akzeptiert, aber still nie angewendet wurde.',
    pl_PL:
      'Aktualizuje dołączony przekaźnik do głównej kompilacji upstream sha-30873ba (2026-10-11). W szczególności naprawia usuwanie przepływów pracy, które wcześniej było akceptowane, ale po cichu nigdy nie stosowane.',
    fr_FR:
      'Met à jour le relais intégré vers la compilation principale amont sha-30873ba (2026-10-11). Corrige notamment la suppression des flux de travail, auparavant acceptée mais jamais réellement appliquée.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
