(function(dust){dust.register("featured-card",body_0);function body_0(chk,ctx){return chk.w("<article><div class=\"featured-card\">").h("ne",ctx,{"else":body_1,"block":body_2},{"key":ctx.get(["primarySyndicatePosition"], false),"value":""},"h").w("</div></article>");}body_0.__dustBody=!0;function body_1(chk,ctx){return chk.w("<a href=\"").h("link",ctx,{},{"article":ctx.getPath(true, []),"channel":ctx.getPath(false, ["params","channel"])},"h").w("/\" class=\"featured-card__link\"></a>");}body_1.__dustBody=!0;function body_2(chk,ctx){return chk.w("<a href=\"").h("primarySyndicate",ctx,{},{"urls":ctx.get(["urls"], false),"channel":ctx.getPath(false, ["params","channel"])},"h").w("\" class=\"featured-card__link\">").p("featured-image",ctx,ctx,{}).w("\n</a>");}body_2.__dustBody=!0;return body_0}(dust));