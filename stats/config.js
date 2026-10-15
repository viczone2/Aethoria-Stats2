// Configuration du site de statistiques (cree par le plugin, jamais ecrase). Tu peux la modifier.
window.AETHORIA_CONFIG = {
  // Fichier de donnees publie par le plugin sur la branche "stats-data" de ton depot
  snapshot: "https://raw.githubusercontent.com/viczone2/Aethoria-Stats2/stats-data/snapshot.json",

  // OPTIONNEL - temps reel : URL HTTPS de l'API du plugin (reverse proxy / tunnel), ex : "https://stats.monsite.fr".
  // Si elle est injoignable, le site retombe tout seul sur le snapshot. Laisse null pour ne pas l'utiliser.
  api: null,

  // Frequence de relecture du fichier de donnees par le navigateur (secondes, min 15)
  refreshSec: 60
};
