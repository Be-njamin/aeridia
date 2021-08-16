const theme = require('../theme')

module.exports = [
  {
    "name": "Comment",
    "scope": ["comment", "punctuation.definition.comment"],
    "settings": { "fontStyle": "italic", "foreground": "#5E5E5A" }
  },
  {
    "name": "Variables",
    "scope": ["variable", "string constant.other.placeholder"],
    "settings": { "foreground": "#FFFFF0" }
  },
  {
    "name": "Colors",
    "scope": ["constant.other.color"],
    "settings": { "foreground": "#FFFFF0" }
  },
  {
    "name": "Invalid",
    "scope": ["invalid", "invalid.illegal"],
    "settings": { "foreground": "#FF5370" }
  },
  {
    "name": "Keyword, Storage",
    "scope": ["keyword", "storage.type", "storage.modifier"],
    "settings": { "foreground": '#66B7AB' }
  },
  {
    "name": "Operator, Misc",
    "scope": ["keyword.control", "constant.other.color", "punctuation", "meta.tag", "punctuation.definition.tag", "punctuation.separator.inheritance.php", "punctuation.definition.tag.html", "punctuation.definition.tag.begin.html", "punctuation.definition.tag.end.html", "punctuation.section.embedded", "keyword.other.template", "keyword.other.substitution"],
    "settings": { "foreground": "#D66BA0" }
  },
  {
    "name": "Tag",
    "scope": ["entity.name.tag", "meta.tag.sgml", "markup.deleted.git_gutter"],
    "settings": { "foreground": "#E5625E" }
  },
  {
    "name": "Function, Special Method",
    "scope": ["entity.name.function", "meta.function-call", "variable.function", "support.function", "keyword.other.special-method"],
    "settings": { "foreground": "#81A4CD" }
  },
  {
    "name": "Block Level Variables",
    "scope": ["meta.block variable.other"],
    "settings": { "foreground": "#ff00aa" } // TODO
  },
  {
    "name": "Other Variable, String Link",
    "scope": ["support.other.variable", "string.other.link"],
    "settings": { "foreground": "#f07178" } // TODO
  },
  {
    "name": "Number, Constant, Function Argument, Tag Attribute, Embedded",
    "scope": ["constant.numeric", "constant.language", "support.constant", "constant.character", "constant.escape", "variable.parameter", "keyword.other.unit", "keyword.other"],
    "settings": { "foreground": "#AE8E1C" }
  },
  {
    "name": "String, Symbols, Inherited Class, Markup Heading",
    "scope": ["string", "constant.other.symbol", "constant.other.key", "entity.other.inherited-class", "markup.heading", "markup.inserted.git_gutter", "meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js"],
    "settings": { "foreground": "#90be6d" }
  },
  {
    "name": "Class, Support",
    "scope": ["entity.name", "support.type", "support.class", "support.other.namespace.use.php", "meta.use.php", "support.other.namespace.php", "markup.changed.git_gutter", "support.type.sys-types"],
    "settings": { "foreground": "#ffc300" }
  },
  {
    "name": "Entity Types",
    "scope": ["support.type"],
    "settings": { "foreground": "#dbcdf0" }
  },
  {
    "name": "CSS Class and Support",
    "scope": ["source.css support.type.property-name", "source.sass support.type.property-name", "source.scss support.type.property-name", "source.less support.type.property-name", "source.stylus support.type.property-name", "source.postcss support.type.property-name"],
    "settings": { "foreground": "#9a8f97" }
  },
  {
    "name": "Sub-methods",
    "scope": ["entity.name.module.js", "variable.import.parameter.js", "variable.other.class.js"],
    "settings": { "foreground": "#acd7ec" }
  },
  {
    "name": "Language methods",
    "scope": ["variable.language"],
    "settings": { "fontStyle": "italic", "foreground": "#FF5370" }
  },
  {
    "name": "entity.name.method.js",
    "scope": ["entity.name.method.js"],
    "settings": { "fontStyle": "italic", "foreground": "#8b95c9" }
  },
  {
    "name": "meta.method.js",
    "scope": ["meta.class-method.js entity.name.function.js", "variable.function.constructor"],
    "settings": { "foreground": "#82AAFF" }
  },
  {
    "name": "Attributes",
    "scope": ["entity.other.attribute-name"],
    "settings": { "foreground": "#ffdac6" }
  },
  {
    "name": "HTML Attributes",
    "scope": ["text.html.basic entity.other.attribute-name.html", "text.html.basic entity.other.attribute-name"],
    "settings": { "fontStyle": "italic", "foreground": "#f5ad42" }
  },
  {
    "name": "CSS Classes",
    "scope": ["entity.other.attribute-name.class"],
    "settings": { "foreground": "#f5ad42" }
  },
  {
    "name": "CSS ID's",
    "scope": ["source.sass keyword.control"],
    "settings": { "foreground": "#82AAFF" }
  },
  {
    "name": "Inserted",
    "scope": ["markup.inserted"],
    "settings": { "foreground": "#C3E88D" }
  },
  {
    "name": "Deleted",
    "scope": ["markup.deleted"],
    "settings": { "foreground": "#FF5370" }
  },
  {
    "name": "Changed",
    "scope": ["markup.changed"],
    "settings": { "foreground": "#C792EA" }
  },
  {
    "name": "Regular Expressions",
    "scope": ["string.regexp"],
    "settings": { "foreground": "#87d7fa" }
  },
  {
    "name": "Escape Characters",
    "scope": ["constant.character.escape"],
    "settings": { "foreground": "#87d7fa" }
  },
  {
    "name": "URL",
    "scope": ["*url*", "*link*", "*uri*"],
    "settings": { "fontStyle": "underline" }
  },
  {
    "name": "Decorators",
    "scope": ["tag.decorator.js entity.name.tag.js", "tag.decorator.js punctuation.definition.tag.js"],
    "settings": { "fontStyle": "italic", "foreground": "#82AAFF" }
  },
  {
    "name": "ES7 Bind Operator",
    "scope": ["source.js constant.other.object.key.js string.unquoted.label.js"],
    "settings": { "fontStyle": "italic", "foreground": "#FF5370" }
  },
  {
    "name": "JSON Key - Level 0",
    "scope": ["source.json meta.structure.dictionary.json support.type.property-name.json"],
    "settings": { "foreground": "#C792EA" }
  },
  {
    "name": "JSON Key - Level 1",
    "scope": ["source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"],
    "settings": { "foreground": "#C79DDF" }
  },
  {
    "name": "JSON Key - Level 2",
    "scope": ["source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"],
    "settings": { "foreground": "#C6A8D3" }
  },
  {
    "name": "JSON Key - Level 3",
    "scope": ["source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"],
    "settings": { "foreground": "#C6B3C8" }
  },
  {
    "name": "JSON Key - Level 4",
    "scope": ["source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"],
    "settings": { "foreground": "#C5BDBC" }
  },
  {
    "name": "JSON Key - Level 5",
    "scope": ["source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"],
    "settings": { "foreground": "#C5C8B1" }
  },
  {
    "name": "JSON Key - Level 6",
    "scope": ["source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"],
    "settings": { "foreground": "#C4D3A5" }
  },
  {
    "name": "JSON Key - Level 7",
    "scope": ["source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"],
    "settings": { "foreground": "#C4DE99" }
  },
  {
    "name": "JSON Key - Level 8",
    "scope": ["source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"],
    "settings": { "foreground": "#C3E88D" }
  },
  {
    "name": "Markdown - Plain",
    "scope": ["text.html.markdown", "punctuation.definition.list_item.markdown"],
    "settings": { "foreground": "#FFFFF0" }
  },
  {
    "name": "Markdown - Markup Raw Inline",
    "scope": ["text.html.markdown markup.inline.raw.markdown"],
    "settings": { "foreground": "#C792EA" }
  },
  {
    "name": "Markdown - Markup Raw Inline Punctuation",
    "scope": ["text.html.markdown markup.inline.raw.markdown punctuation.definition.raw.markdown"],
    "settings": { "foreground": "#65737E" }
  },
  {
    "name": "Markdown - Heading",
    "scope": ["markdown.heading", "markup.heading | markup.heading entity.name", "markup.heading.markdown punctuation.definition.heading.markdown"],
    "settings": { "foreground": "#C3E88D" }
  },
  {
    "name": "Markup - Italic",
    "scope": ["markup.italic"],
    "settings": { "fontStyle": "italic", "foreground": "#D9DCD4" }
  },
  {
    "name": "Markup - Bold",
    "scope": ["markup.bold", "markup.bold string"],
    "settings": { "fontStyle": "bold", "foreground": "#C6CBC6" }
  },
  {
    "name": "Markup - Bold-Italic",
    "scope": ["markup.bold markup.italic", "markup.italic markup.bold", "markup.quote markup.bold", "markup.bold markup.italic string", "markup.italic markup.bold string", "markup.quote markup.bold string"],
    "settings": { "fontStyle": "bold", "foreground": "#B2B9B7" }
  },
  {
    "name": "Markup - Underline",
    "scope": ["markup.underline"],
    "settings": { "fontStyle": "underline", "foreground": "#8C969B" }
  },
  {
    "name": "Markdown - Blockquote",
    "scope": ["markup.quote punctuation.definition.blockquote.markdown"],
    "settings": { "foreground": "#65737E" }
  },
  {
    "name": "Markup - Quote",
    "scope": ["markup.quote"],
    "settings": { "fontStyle": "italic", "foreground": "#65737E" }
  },
  {
    "name": "Markdown - Link",
    "scope": ["string.other.link.title.markdown"],
    "settings": { "foreground": "#82AAFF" }
  },
  {
    "name": "Markdown - Link Description",
    "scope": ["string.other.link.description.title.markdown"],
    "settings": { "foreground": "#C792EA" }
  },
  {
    "name": "Markdown - Link Anchor",
    "scope": ["constant.other.reference.link.markdown"],
    "settings": { "foreground": "#FFCB6B" }
  },
  {
    "name": "Markup - Raw Block",
    "scope": ["markup.raw.block"],
    "settings": { "foreground": "#C792EA" }
  },
  {
    "name": "Markdown - Raw Block Fenced",
    "scope": ["markup.raw.block.fenced.markdown"],
    "settings": { "foreground": "#00000050" }
  },
  {
    "name": "Markdown - Fenced Bode Block",
    "scope": ["punctuation.definition.fenced.markdown"],
    "settings": { "foreground": "#00000050" }
  },
  {
    "name": "Markdown - Fenced Bode Block Variable",
    "scope": ["markup.raw.block.fenced.markdown", "variable.language.fenced.markdown", "punctuation.section.class.end"],
    "settings": { "foreground": "#EEFFFF" }
  },
  {
    "name": "Markdown - Fenced Language",
    "scope": ["variable.language.fenced.markdown"],
    "settings": { "foreground": "#65737E" }
  },
  {
    "name": "Markdown - Separator",
    "scope": ["meta.separator"],
    "settings": { "fontStyle": "bold", "foreground": "#65737E" }
  },
  {
    "name": "Markup - Table",
    "scope": ["markup.table"],
    "settings": { "foreground": "#3d405b" }
  }
]
