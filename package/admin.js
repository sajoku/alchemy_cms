import translate from "./src/i18n"
import translationData from "./src/translations"
import NodeTree from "./src/node_tree"
import Sitemap from "./src/sitemap"
import PagePublicationFields from "./src/page_publication_fields.js"

// Global Alchemy object
if (typeof window.Alchemy === "undefined") {
  window.Alchemy = {}
}

// Enhance the global Alchemy object with imported features
Object.assign(Alchemy, {
  // Global utility method for translating a given string
  t: translate,
  translations: Object.assign(Alchemy.translations || {}, translationData),
  NodeTree,
  Sitemap,
  PagePublicationFields
})
